import { useState, Fragment } from "react";
import { site } from "../site";
import Modal from "./Modal";

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
        <Modal toggle={() => setSelectedCertificate("")} isVisible={Boolean(selectedCertificate)}>
          <img className="w-[60vw] max-h-[80vh]" src={selectedCertificate} />
        </Modal>
      )}
    </Fragment>
  );
};

export default Certifications;
