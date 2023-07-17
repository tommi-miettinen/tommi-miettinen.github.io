import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import ContactInfo from "./components/ContactInfo";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { useSectionOrderStore } from "./store/sectionOrderStore";
import Certifications from "./components/Certifications";
import Extra from "./components/Extra";
import Hobbies from "./components/Hobbies";

const componentsMap: Record<string, JSX.Element> = {
  Esittely: <Introduction />,
  Sertifikaatit: <Certifications />,
  Kokemus: <Experience />,
  Taidot: <Skills />,
  Yhteystiedot: <ContactInfo />,
  Harrastukset: <Hobbies />,
};

const App = () => {
  const navItems = useSectionOrderStore((state) => state.navItems);
  const currentlyHoveredItem = useSectionOrderStore((state) => state.currentlyHoveredItem);

  return (
    <div onContextMenu={(e) => e.preventDefault()} className="h-screen w-screen flex bg-gray-900 text-white">
      <div className="flex w-full h-full">
        <Navigation />
        <div className="flex flex-col w-full h-full overflow-auto py-8 gap-8 sm:p-8">
          {navItems.map((item) => (
            <div className={`${currentlyHoveredItem === item && "bg-gray-800"} rounded-md`}>{componentsMap[item]}</div>
          ))}
          <Extra />
        </div>
      </div>
    </div>
  );
};

export default App;
