import { site } from "../site";
import { useTranslation } from "react-i18next";

const Skill = ({ skills, icon }: { skills: string; icon: JSX.Element }) => {
  return (
    <div className="flex items-center">
      {icon}
      {skills}
    </div>
  );
};

const Skills = ({ id }: { id: string }) => {
  const { t } = useTranslation();
  return (
    <div id={id} className="p-4 flex flex-col gap-2">
      <h2 className="text-xl mb-2">{t("skills")}</h2>
      {site.skills.map((skill) => (
        <Skill key={skill.name} skills={skill.description} icon={skill.icon!} />
      ))}
    </div>
  );
};

export default Skills;
