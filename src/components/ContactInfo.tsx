import GithubButton from "./GithubButton";
import LinkedInButton from "./LinkedInButton";
import { site } from "../site";
import { useTranslation } from "react-i18next";

const ContactInfo = ({ id }: { id: string }) => {
  const { t } = useTranslation();
  return (
    <div id={id} className="p-4">
      <h2 className="text-xl mb-2">{t("contactInfo")}</h2>
      <a href={`mailto:${site.email}`}>{site.email}</a>
      <p>{site.phone}</p>
      <div className="flex py-2 -ml-2 gap-1">
        <LinkedInButton className="w-[40px] h-[40px] flex items-center justify-center" />
        <GithubButton className="w-[40px] h-[40px] flex items-center justify-center" />
      </div>
    </div>
  );
};

export default ContactInfo;
