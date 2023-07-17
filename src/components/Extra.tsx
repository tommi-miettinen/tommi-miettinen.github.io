import { site } from "../site";
import { useState, Fragment } from "react";
import Modal from "./Modal";

const Extra = () => {
  const [showItem, setShowItem] = useState(false);
  return (
    <Fragment>
      <div className="p-4">
        <h3 className="text-xl">Lisätiedot</h3>
        <div className="flex items-center border border-green-500 bg-green-400 bg-opacity-5 border-opacity-30 p-4 rounded-md">
          Olen oikeutettu palkkatukeen 7 kuukauden ajalta.{" "}
          <button
            onClick={() => setShowItem(true)}
            type="button"
            className="ml-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Katso kuva
          </button>
        </div>
      </div>
      {showItem && (
        <Modal isVisible={showItem} toggle={() => setShowItem(false)}>
          <img src={site.wageSubsidy} />
        </Modal>
      )}
    </Fragment>
  );
};

export default Extra;
