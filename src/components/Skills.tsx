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

const Cicd = () => {
  return (
    <div className="flex items-center">
      <div className="bg-pink-300 w-[30px] h-[30px] p-1 flex items-center justify-center rounded-md mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="main-grid-item-icon scale-75"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        >
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
      </div>
      Docker, Github Actions
    </div>
  );
};

const Languages = () => {
  return (
    <div className="flex items-center">
      <div className="bg-indigo-300 w-[30px] h-[30px] p-1 flex items-center justify-center rounded-md mr-2">
        <svg
          className="scale-90"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      TypeScript, JavaScript, Python, C#, Java
    </div>
  );
};

const Databases = () => {
  return (
    <div className="flex items-center">
      <div className="bg-indigo-300 w-[30px] h-[30px] p-1 flex items-center justify-center rounded-md mr-2">
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
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      </div>
      PostegreSQL, MongoDB
    </div>
  );
};

const Cloud = () => {
  return (
    <div className="flex items-center">
      <div className="bg-pink-300 w-[30px] h-[30px] p-1 flex items-center justify-center rounded-md mr-2">
        <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      Azure, AWS
    </div>
  );
};

const Mobile = () => {
  return (
    <div className="flex items-center">
      <div className="bg-indigo-300 w-[30px] h-[30px] p-1 flex items-center justify-center rounded-md mr-2">
        <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      React native
    </div>
  );
};

const UI = () => {
  return (
    <div className="flex items-center">
      <div className="bg-indigo-300 w-[30px] h-[30px] p-1 flex items-center justify-center rounded-md mr-2">
        <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      ChakraUI, tailwindcss, MaterialUI
    </div>
  );
};

const Skills = () => {
  return (
    <div className="p-4 flex flex-col gap-2 font-semibold">
      <h2 className="text-xl mb-2">Taidot</h2>
      <Languages />
      <Frontend />
      <UI />
      <Backend />
      <Mobile />
      <Cloud />
      <Databases />
      <Cicd />
    </div>
  );
};

export default Skills;
