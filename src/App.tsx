import { Fragment } from "react";
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import ContactInfo from "./components/ContactInfo";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { useSectionOrderStore } from "./store/sectionOrderStore";
import Certifications from "./components/Certifications";
import Extra from "./components/Extra";
import Hobbies from "./components/Hobbies";
import Portfolio from "./components/Portfolio";
import LanguageSwitcher from "./components/LanguageSwitcher";

const componentsMap: Record<string, (id: string) => JSX.Element> = {
  Introduction: (id: string) => <Introduction id={id} />,
  Skills: (id: string) => <Skills id={id} />,
  Experience: (id: string) => <Experience id={id} />,
  Certificates: (id: string) => <Certifications id={id} />,
  Portfolio: (id: string) => <Portfolio id={id} />,
  ContactInfo: (id: string) => <ContactInfo id={id} />,
  Hobbies: (id: string) => <Hobbies id={id} />,
  AdditionalInfo: (id: string) => <Extra id={id} />,
};

const App = () => {
  const navItems = useSectionOrderStore((state) => state.navItems);
  const currentlyHoveredItem = useSectionOrderStore((state) => state.currentlyHoveredItem);

  return (
    <Fragment>
      <div className="h-screen w-screen flex bg-gray-900 text-white text-sm">
        <div className="flex w-full h-full">
          <Navigation />

          <div className="flex flex-col w-full h-full overflow-auto py-8 gap-12 sm:p-8">
            <LanguageSwitcher className="w-[100px] ml-auto" />
            {navItems.map((item) => {
              const baseName = item.split("(")[0];
              return (
                <div key={item} className={`${currentlyHoveredItem === item && "bg-gray-800"} rounded-md`}>
                  {componentsMap[baseName](item)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
