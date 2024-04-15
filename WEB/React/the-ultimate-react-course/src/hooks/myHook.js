import { useState } from "react";

export function useMyHook(items){

    const [isOpen, setIsOpen] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(false);
    
    const displayItems = isCollapsed ? items.slice(0, 3) : items;

  function toggleOpen() {
    setIsOpen((isOpen) => !isOpen);
    setIsCollapsed(false);
  }
return {isOpen, setIsOpen,isCollapsed, setIsCollapsed,displayItems,toggleOpen}
}