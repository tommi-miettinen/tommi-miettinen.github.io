import GithubButton from "./GithubButton";
import LinkedInButton from "./LinkedInButton";
import { site } from "../site";

const ContactInfo = () => {
  return (
    <div className="p-4">
      <p>{site.email}</p>
      <p>{site.phone}</p>
      <div className="flex py-2">
        <LinkedInButton className="border w-[40px] h-[40px] flex items-center justify-center" />
        <GithubButton className="border w-[40px] h-[40px] flex items-center justify-center" />
      </div>
    </div>
  );
};

export default ContactInfo;
