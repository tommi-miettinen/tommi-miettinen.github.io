import { create } from "zustand";

interface SectionOrderStore {
  navItems: string[];
  currentlyDraggedItem: null | string;
  currentlyHoveredItem: null | string;
  currentlyCopiedItem: null | string;
}

export const useSectionOrderStore = create<SectionOrderStore>(() => ({
  navItems: ["Esittely", "Taidot", "Kokemus", "Portfolio", "Sertifikaatit", "Harrastukset", "Yhteystiedot", "Lisätiedot"],
  currentlyDraggedItem: null,
  currentlyHoveredItem: null,
  currentlyCopiedItem: null,
}));

export const setCurrentlyDraggedItem = (item: string) => {
  useSectionOrderStore.setState({ currentlyDraggedItem: item });
};

export const handleDrop = (droppedOnItem: string) => {
  const state = useSectionOrderStore.getState();
  const draggedItem = state.currentlyDraggedItem;

  if (draggedItem) {
    const navItemsCopy = [...state.navItems];
    const draggedItemIndex = navItemsCopy.indexOf(draggedItem);
    const droppedOnItemIndex = navItemsCopy.indexOf(droppedOnItem);

    navItemsCopy.splice(draggedItemIndex, 1);
    navItemsCopy.splice(droppedOnItemIndex, 0, draggedItem);

    useSectionOrderStore.setState({
      navItems: navItemsCopy,
      currentlyDraggedItem: null,
    });
  }
};

export const setCurrentlyHoveredItem = (item: string | null) => {
  useSectionOrderStore.setState({ currentlyHoveredItem: item });
};

export const deleteNavItem = (item: string) =>
  useSectionOrderStore.setState({ navItems: useSectionOrderStore.getState().navItems.filter((navItem) => navItem !== item) });

export const copyNavItem = (item: string) => {
  useSectionOrderStore.setState({ currentlyCopiedItem: item });
};

export const pasteNavItem = () => {
  const { currentlyCopiedItem, navItems } = useSectionOrderStore.getState();
  if (!currentlyCopiedItem) return;

  const sameNameCount = navItems.filter((item) => item.startsWith(currentlyCopiedItem)).length;
  const newItem = sameNameCount > 0 ? `${currentlyCopiedItem}(${sameNameCount})` : currentlyCopiedItem;

  useSectionOrderStore.setState({ navItems: [...navItems, newItem] });
};
