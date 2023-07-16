const Frontend = () => {
  return (
    <div className="flex items-center">
      <div className="bg-pink-300 w-[30px] h-[30px] p-1 flex items-center justify-center rounded-md mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="main-grid-item-icon"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <rect height="14" rx="2" ry="2" width="20" x="2" y="3" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      </div>
      React, Angular, Vue, Svelte
    </div>
  );
};

const Backend = () => {
  return (
    <div className="flex items-center">
      <div className="bg-pink-300 w-[30px] h-[30px] p-1 flex items-center justify-center rounded-md mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="main-grid-item-icon"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <rect height="8" rx="2" ry="2" width="20" x="2" y="2" />
          <rect height="8" rx="2" ry="2" width="20" x="2" y="14" />
          <line x1="6" x2="6.01" y1="6" y2="6" />
          <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
      </div>
      Node.js, express, ASP.net, spring boot
    </div>
  );
};

const Skills = () => {
  return (
    <div className="p-4">
      <p>Kielet: TypeScript, JavaScript, Python, C#, Java</p>
      <Frontend />
      <p>Tilanhallintakirjastot: Redux, Zustand, Pinia </p>
      <p> UI kirjastot: ChakraUI, tailwindcss, MaterialUI</p>
      <Backend />
      <p> Mobiili: React native</p>
      <p>Pilvi: Azure, AWS</p>
      <p> Tietokannat: PostegreSQL, MongoDB</p>
      <p>CI/CD: docker, Github Actions</p>
    </div>
  );
};

export default Skills;
