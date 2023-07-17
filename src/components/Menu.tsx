import { useFloating, useClick, useDismiss, useRole, useInteractions, FloatingFocusManager, useClientPoint } from "@floating-ui/react";

const Menu = ({
  children,
  isOpen,
  setIsOpen,
  x,
  y,
}: {
  children: JSX.Element | JSX.Element[];
  isOpen: boolean;
  setIsOpen: () => void;
  x?: number;
  y?: number;
}) => {
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "bottom-start",
  });

  const clientPoint = useClientPoint(context, { x, y });
  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([clientPoint, click, dismiss, role]);

  return (
    <div ref={refs.setReference} {...getReferenceProps()} onClick={(e) => e.stopPropagation()}>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div className="z-10" ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
            {children}
          </div>
        </FloatingFocusManager>
      )}
    </div>
  );
};

export default Menu;
