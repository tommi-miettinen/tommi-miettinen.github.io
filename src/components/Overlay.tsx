const Overlay = ({ dismiss, children }: { dismiss?: () => any; children?: JSX.Element }) => {
  return (
    <div className="z-10 w-screen h-screen bg-gray-900 fixed left-0 top-0 p-4 flex flex-col">
      <button
        onClick={dismiss}
        type="button"
        className="ml-auto bg-gray-800 rounded-lg p-2 mb-2 hover:bg-gray-700 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#toast-default"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
      {children}
    </div>
  );
};

export default Overlay;
