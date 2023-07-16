import { create } from "zustand";

interface SectionOrderStore {
  navItems: string[];
  currentlyDraggedItem: null | string;
}

export const useSectionOrderStore = create<SectionOrderStore>(() => ({
  navItems: ["Esittely", "Kokemus", "Taidot", "Yhteystiedot"],
  currentlyDraggedItem: null,
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
    // Remove the dragged item
    navItemsCopy.splice(draggedItemIndex, 1);
    // Add the dragged item into its new position
    navItemsCopy.splice(droppedOnItemIndex, 0, draggedItem);
    useSectionOrderStore.setState({
      navItems: navItemsCopy,
      currentlyDraggedItem: null, // Reset currentlyDraggedItem
    });
  }
};
