import { Fragment } from "react";
import { site } from "../site";
import Overlay from "./Overlay";
import ImageGallery from "./ImageGallery";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Experience = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { t, i18n } = useTranslation();

  const toUrl = (s: string) => encodeURIComponent(s.toLowerCase().replace(/ /g, "-"));

  return (
    <Fragment>
      <div id={id} className="py-4 px-8 relative flex flex-col h-full">
        <h2 className="text-xl mb-4 -ml-4">{t("experience")}</h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700 flex flex-col h-full gap-4">
          {site.experience.map((job) => (
            <li key={job.company.fi} className="ml-6 flex flex-col">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-300 rounded-full -left-3"></span>
              <h3 className="flex items-center -mt-1 mb-1 text-lg text-white">{job.company.fi}</h3>
              <p className="text-sm my-1">{job.role.fi}</p>
              <time className="block mb-2 text-sm leading-none text-gray-400">{job.timePeriod}</time>
              {job.projects?.map((project) => (
                <Fragment>
                  <div className="flex flex-col">
                    {/*@ts-ignore*/}
                    <h4 className="font-medium">{project.projectName[i18n.language]}</h4>
                    {/*@ts-ignore*/}
                    <p className="my-2 text-sm">{project.description[i18n.language]}</p>
                    <p className="text-sm">{project.technologies}</p>
                    {project.screenshots.length > 0 && (
                      <button
                        //@ts-ignore
                        onClick={() => navigate(`/${toUrl(project.projectName[i18n.language])}`)}
                        type="button"
                        className="ml-auto text-white bg-gray-700 hover:bg-opacity-80 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
                      >
                        {t("images")}
                      </button>
                    )}
                  </div>
                  {/*@ts-ignore*/}
                  {project.screenshots.length > 0 && pathname.includes(toUrl(project.projectName[i18n.language])) && (
                    <Overlay dismiss={() => navigate(-1)}>
                      <ImageGallery className="bg-transparent" images={project.screenshots} />
                    </Overlay>
                  )}
                </Fragment>
              ))}
            </li>
          ))}
        </ol>
      </div>
    </Fragment>
  );
};

export default Experience;
