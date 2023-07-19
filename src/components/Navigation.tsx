import { useState } from "react";
import { TreeView } from "@primer/react";
import { FileIcon } from "@primer/octicons-react";
import {
  deleteNavItem,
  handleDrop,
  setCurrentlyDraggedItem,
  setCurrentlyHoveredItem,
  useSectionOrderStore,
  copyNavItem,
  pasteNavItem,
} from "../store/sectionOrderStore";
import Menu from "./Menu";

const CustomTreeViewItem = ({ item }: { item: string }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{ x?: number; y?: number }>({});

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setMenuOpen(true);
  };

  const handleDeleteNavItem = (item: string) => {
    deleteNavItem(item);
    setMenuOpen(false);
  };

  const handleCopyNavItem = (item: string) => {
    copyNavItem(item);
    setMenuOpen(false);
  };

  return (
    <div
      onMouseEnter={() => setCurrentlyHoveredItem(item)}
      onMouseLeave={() => setCurrentlyHoveredItem(null)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => handleDrop(item)}
      onDrag={() => setCurrentlyDraggedItem(item)}
      draggable={true}
      className="hover:bg-gray-800 rounded"
      onContextMenu={handleRightClick}
    >
      <a href={`#${item}`}>
        <TreeView.Item id="src/Avatar.tsx">
          <TreeView.LeadingVisual>
            <FileIcon />
          </TreeView.LeadingVisual>
          {item}
        </TreeView.Item>
        {isMenuOpen && (
          <Menu isOpen={isMenuOpen} setIsOpen={() => setMenuOpen((v) => !v)} {...menuPosition}>
            <div className="bg-gray-900 overflow-clip border border-gray-700 rounded w-[150px]">
              <div className="text-sm hover:bg-gray-800 w-full px-5 py-1 cursor-pointer" onClick={() => handleDeleteNavItem(item)}>
                Poista
              </div>
              <div className="text-sm hover:bg-gray-800 w-full px-5 py-1 cursor-pointer" onClick={() => handleCopyNavItem(item)}>
                Kopioi
              </div>
            </div>
          </Menu>
        )}
      </a>
    </div>
  );
};

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{ x?: number; y?: number }>({});
  const navItems = useSectionOrderStore((state) => state.navItems);

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setMenuOpen(true);
  };

  const handlePaste = () => {
    pasteNavItem();
    setMenuOpen(false);
  };

  return (
    <div onContextMenu={handleRightClick} className="text-white border-r p-4 h-full hidden sm:block sm:w-[250px]">
      <TreeView aria-label="Files">
        <TreeView.Item defaultExpanded={true} id="src">
          <TreeView.LeadingVisual>
            <TreeView.DirectoryIcon />
          </TreeView.LeadingVisual>
          Sivu
          <TreeView.SubTree>
            {navItems.map((item) => (
              <CustomTreeViewItem item={item} />
            ))}
          </TreeView.SubTree>
        </TreeView.Item>
      </TreeView>
      {isMenuOpen && (
        <Menu isOpen={isMenuOpen} setIsOpen={() => setMenuOpen((v) => !v)} {...menuPosition}>
          <div className="bg-gray-900 overflow-clip border border-gray-700 rounded w-[150px]">
            <div onClick={handlePaste} className="text-sm hover:bg-gray-800 w-full px-5 py-1 cursor-pointer">
              Liitä
            </div>
          </div>
        </Menu>
      )}
    </div>
  );
};

export default Navigation;
