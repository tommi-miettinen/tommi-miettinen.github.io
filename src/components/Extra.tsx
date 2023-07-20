import { site } from "../site";
import { Fragment } from "react";
import Overlay from "./Overlay";
import { useLocation, useNavigate } from "react-router-dom";

const Extra = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Fragment>
      <div id={id} className="p-4">
        <h3 className="text-xl mb-2">Lisätiedot</h3>
        <div className="flex items-center border border-indigo-500 bg-indigo-400 bg-opacity-5 border-opacity-30 p-4 rounded-md">
          Olen oikeutettu palkkatukeen 7 kuukauden ajalta.
          <button
            onClick={() => navigate("/palkkatuki")}
            type="button"
            className="ml-auto text-white bg-gray-700 hover:bg-opacity-80 focus:outline-none rounded-lg text-sm px-5 py-2.5"
          >
            Palkkatuki
          </button>
        </div>
      </div>
      {pathname.includes("palkkatuki") && (
        <Overlay dismiss={() => navigate(-1)}>
          <img className="object-contain max-h-full max-w-full overflow-auto" src={site.wageSubsidy} />
        </Overlay>
      )}
    </Fragment>
  );
};

export default Extra;
