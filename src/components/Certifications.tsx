import { site } from "../site";
import Overlay from "./Overlay";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Certifications = ({ id }: { id: string }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const filenameFromSrc = (path: string) => encodeURIComponent(path.split("/").pop()!);

  return (
    <div id={id} className="p-4">
      <h2 className="text-xl mb-2">{t("certificates")}</h2>
      {site.certificates.map((v) => (
        <article>
          <img onClick={() => navigate(filenameFromSrc(v))} className="w-[250px] cursor-pointer hover:opacity-90" src={v} />
          {pathname.includes(filenameFromSrc(v)) && (
            <Overlay dismiss={() => navigate(-1)}>
              <img className="object-contain max-h-full max-w-full overflow-auto" src={v} alt="zoomed certificate" />
            </Overlay>
          )}
        </article>
      ))}
    </div>
  );
};

export default Certifications;
