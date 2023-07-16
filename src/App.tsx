import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import ContactInfo from "./components/ContactInfo";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { useSectionOrderStore } from "./store/sectionOrderStore";

import "react-calendar-heatmap/dist/styles.css";

const componentsMap: Record<string, JSX.Element> = {
  Esittely: <Introduction />,
  Kokemus: <Experience />,
  Taidot: <Skills />,
  Yhteystiedot: <ContactInfo />,
};

const App = () => {
  const navItems = useSectionOrderStore((state) => state.navItems);

  return (
    <div className="w-screen h-screen flex bg-gray-900 text-white">
      <Navigation />
      <div className="flex flex-col w-full h-full justify-evenly">{navItems.map((item) => componentsMap[item])}</div>
    </div>
  );
};

export default App;
