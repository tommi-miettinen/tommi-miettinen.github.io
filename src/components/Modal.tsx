import { Fragment } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  toggle: () => void;
  children: JSX.Element | JSX.Element[];
}

const Modal = ({ children, toggle }: ModalProps) => {
  const handleBgClick = (e: any) => {
    if (e.target.id === "modal") toggle();
  };

  return createPortal(
    <Fragment>
      <div style={{ zIndex: 10 }} className="fixed top-0 left-0 w-screen min-h-screen bg-black bg-opacity-25" />
      <div
        id="modal"
        style={{ zIndex: 20 }}
        onClick={handleBgClick}
        className="flex flex-col items-center fixed top-0 left-0 w-full h-full overflow-x-hidden outline-none"
      >
        <div style={{ zIndex: 30 }} className="relative m-auto bg-white mx-auto max-w-full flex items-center justify-center rounded-xl">
          {children}
        </div>
      </div>
    </Fragment>,
    document.body
  );
};

export default Modal;
