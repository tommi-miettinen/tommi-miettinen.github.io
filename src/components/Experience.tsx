import { Fragment } from "react";
import { site } from "../site";
import Overlay from "./Overlay";
import ImageGallery from "./ImageGallery";
import { useNavigate, useLocation } from "react-router-dom";

const Experience = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const toUrl = (s: string) => encodeURIComponent(s.toLowerCase().replace(/ /g, "-"));

  return (
    <Fragment>
      <div id={id} className="py-4 px-8 relative flex flex-col h-full">
        <h2 className="text-xl mb-4 -ml-4">Kokemus</h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700 flex flex-col h-full">
          {site.experience.map((job) => (
            <li key={job.company} className="ml-6 flex flex-col mb-8">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-300 rounded-full -left-3"></span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{job.company}</h3>
              <p>{job.role}</p>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{job.timePeriod}</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">{job.description}</p>

              {job.projects?.map((project) => (
                <div>
                  <h4 className="text-xl">{project.projectName}</h4>
                  {project.features.map((feature) => {
                    return (
                      <Fragment key={feature.featureId}>
                        <div className="flex flex-col">
                          <div>
                            <div>{feature.featureName}</div>
                            <h4>{feature.description}</h4>
                          </div>

                          <button
                            onClick={() => navigate(`${toUrl(feature.featureName)}/kuvat`)}
                            type="button"
                            className="ml-auto text-white bg-gray-700 hover:bg-opacity-80 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
                          >
                            Kuvat
                          </button>
                        </div>
                        {pathname.includes(toUrl(feature.featureName)) && (
                          <Overlay dismiss={() => navigate(-1)}>
                            <ImageGallery className="bg-transparent" images={feature.screenshots} />
                          </Overlay>
                        )}
                      </Fragment>
                    );
                  })}
                </div>
              ))}
              {job.technologies && (
                <Fragment>
                  <h4 className="font-semibold">Teknologiat</h4>
                  <p className="text-sm font-semibold">{job.technologies}</p>
                </Fragment>
              )}
            </li>
          ))}
        </ol>
      </div>
    </Fragment>
  );
};

export default Experience;
