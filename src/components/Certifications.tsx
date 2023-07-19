import { useState, Fragment } from "react";
import { site } from "../site";
import Overlay from "./Overlay";

const Certifications = ({ id }: { id: string }) => {
  const [selectedCertificate, setSelectedCertificate] = useState("");

  return (
    <Fragment>
      <div id={id} className="p-4">
        <h2 className="text-xl mb-2">Sertifikaatit</h2>
        {site.certificates.map((v) => (
          <img onClick={() => setSelectedCertificate(v)} className="w-[250px] cursor-pointer hover:opacity-90" src={v} />
        ))}
      </div>
      {selectedCertificate && (
        <Overlay dismiss={() => setSelectedCertificate("")}>
          <img className="object-contain" src={selectedCertificate} />
        </Overlay>
      )}
    </Fragment>
  );
};

export default Certifications;
