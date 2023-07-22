import { site } from "../site";
import ImageGallery from "./ImageGallery";
import Overlay from "./Overlay";
import { useNavigate, useLocation } from "react-router-dom";
import { GithubSVG } from "./GithubButton";

const Portfolio = ({ id }: { id: string }) => {
  const toUrl = (s: string) => encodeURIComponent(s.toLowerCase().replace(/ /g, "-"));
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="p-4" id={id}>
      <h2 className="text-xl mb-2">Portfolio</h2>
      {site.portfolio.map((project) => (
        <div className="flex flex-col p-4 rounded-lg">
          <h4 className="text-lg">{project.name}</h4>
          <p>{project.description}</p>
          <p>{project.technologies}</p>
          <div className="flex ml-auto gap-2">
            {project.links.map((link) => (
              <a href={link.url}>
                <button
                  type="button"
                  className="flex items-center justify-evenly text-white bg-gray-700 hover:bg-opacity-80 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  <span className="mr-2">{link.text}</span>
                  <GithubSVG />
                </button>
              </a>
            ))}
            {project.screenshots && (
              <button
                onClick={() => navigate(`/${toUrl(project.name)}`)}
                type="button"
                className="ml-auto text-white bg-gray-700 hover:bg-opacity-80 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Kuvat
              </button>
            )}
          </div>
          {pathname.includes(toUrl(project.name)) && (
            <Overlay dismiss={() => navigate(-1)}>
              <ImageGallery images={project.screenshots || []} />
            </Overlay>
          )}
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
