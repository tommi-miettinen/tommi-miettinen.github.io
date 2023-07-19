import { site } from "../site";

const Skill = ({ skills, icon }: { skills: string; icon: JSX.Element }) => {
  return (
    <div className="flex items-center">
      {icon}
      {skills}
    </div>
  );
};

const Skills = ({ id }: { id: string }) => {
  return (
    <div id={id} className="p-4 flex flex-col gap-2 font-semibold">
      <h2 className="text-xl mb-2">Taidot</h2>

      {site.skills.map((skill) => (
        <Skill key={skill.name} skills={skill.description} icon={skill.icon!} />
      ))}
    </div>
  );
};

export default Skills;
