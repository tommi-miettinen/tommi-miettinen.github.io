import { site } from "../site";
import { useState, Fragment } from "react";
import Overlay from "./Overlay";

const Extra = ({ id }: { id: string }) => {
  const [showItem, setShowItem] = useState(false);
  return (
    <Fragment>
      <div id={id} className="p-4">
        <h3 className="text-xl mb-2">Lisätiedot</h3>
        <div className="flex items-center border border-green-500 bg-green-400 bg-opacity-5 border-opacity-30 p-4 rounded-md">
          Olen oikeutettu palkkatukeen 7 kuukauden ajalta.{" "}
          <button
            onClick={() => setShowItem(true)}
            type="button"
            className="ml-auto text-white bg-gray-700 hover:bg-opacity-80 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Palkkatuki
          </button>
        </div>
      </div>
      {showItem && (
        <Overlay dismiss={() => setShowItem(false)}>
          <img className="object-contain" src={site.wageSubsidy} />
        </Overlay>
      )}
    </Fragment>
  );
};

export default Extra;
