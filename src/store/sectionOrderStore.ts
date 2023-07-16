import { create } from "zustand";

interface SectionOrderStore {
  navItems: string[];
  currentlyDraggedItem: null | string;
  currentlyHoveredItem: null | string;
}

export const useSectionOrderStore = create<SectionOrderStore>(() => ({
  navItems: ["Esittely", "Taidot", "Kokemus", "Sertifikaatit", "Yhteystiedot"],
  currentlyDraggedItem: null,
  currentlyHoveredItem: null,
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
