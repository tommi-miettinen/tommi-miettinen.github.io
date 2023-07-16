import { TreeView } from "@primer/react";
import { FileIcon } from "@primer/octicons-react";
import { handleDrop, setCurrentlyDraggedItem, setCurrentlyHoveredItem, useSectionOrderStore } from "../store/sectionOrderStore";

const CustomTreeViewItem = ({ item }: { item: string }) => {
  return (
    <div
      onMouseEnter={() => setCurrentlyHoveredItem(item)}
      onMouseLeave={() => setCurrentlyHoveredItem(null)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => handleDrop(item)}
      onDrag={() => setCurrentlyDraggedItem(item)}
      draggable={true}
      className="hover:bg-gray-800 rounded"
    >
      <TreeView.Item id="src/Avatar.tsx">
        <TreeView.LeadingVisual>
          <FileIcon />
        </TreeView.LeadingVisual>
        {item}
      </TreeView.Item>
    </div>
  );
};

const Navigation = () => {
  const navItems = useSectionOrderStore((state) => state.navItems);

  return (
    <div className="text-white border-r p-4 h-full w-[250px]">
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
    </div>
  );
};

export default Navigation;
