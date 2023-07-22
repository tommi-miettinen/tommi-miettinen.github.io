import skhkollaasi from "./assets/skhkollaasi.png";
import chadbet from "./assets/chadbetkuva.png";
import fsopen from "./assets/fsopen.jpg";
import palkkatuki from "./assets/palkkatuki.png";
import skhasiakkaat from "./assets/skhasiakkaat.png";
import skhmerkkaus from "./assets/skhtarjousmerkkaus.png";
import skhtyömaat from "./assets/skhtyömaat.png";
import skhtyömaamerkkaus from "./assets/skhtyömaamerkkaus.png";
import chadbet1 from "./assets/chadbet1.png";
import chadbet2 from "./assets/chadbet2.png";
import chadbet3 from "./assets/chadbet3.png";
import chadbet4 from "./assets/chadbet4.png";
import chadbet5 from "./assets/chadbet5.png";

import onedrive1 from "./assets/onedrive1.png";
import onedrive2 from "./assets/onedrive2.png";
import onedrive3 from "./assets/onedrive3.png";
import onedrive4 from "./assets/onedrive4.png";

import trivore from "./assets/trivore.png";

export const site = {
  email: "tommi.a.miettinen@gmail.com",
  phone: "0443250495",
  linkedIn: "https://www.linkedin.com/in/tommi-miettinen-66815b206/",
  github: "https://github.com/tommi-miettinen",
  projectImage: skhkollaasi,
  chadbet: chadbet,
  certificates: [fsopen],
  wageSubsidy: palkkatuki,
  skills: [
    {
      name: "Languages",
      description: "TypeScript, JavaScript, Python, C#, Java",
      icon: (
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
            <path
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
    },
    {
      name: "Frontend",
      description: "React, Angular, Vue, Svelte",
      icon: (
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
      ),
    },
    {
      name: "UI",
      description: "ChakraUI, tailwindcss, MaterialUI",
      icon: (
        <div className="bg-indigo-300 w-[30px] h-[30px] p-1 flex items-center justify-center rounded-md mr-2">
          <svg
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
    },
    {
      name: "Backend",
      description: "Node.js, express, ASP.net, spring boot",
      icon: (
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
      ),
    },
    {
      name: "Mobile",
      description: "React native",
      icon: (
        <div className="bg-indigo-300 w-[30px] h-[30px] p-1 flex items-center justify-center rounded-md mr-2">
          <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
    },
    {
      name: "Cloud",
      description: "Azure, AWS",
      icon: (
        <div className="bg-pink-300 w-[30px] h-[30px] p-1 flex items-center justify-center rounded-md mr-2">
          <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
    },
    {
      name: "CI/CD",
      description: "Docker, Github Actions",
      icon: (
        <div className="bg-indigo-300 w-[30px] h-[30px] p-1 flex items-center justify-center rounded-md mr-2">
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
      ),
    },
    {
      name: "Testing",
      description: "Jest, React Testing Library, Cypress",
      icon: (
        <div className="bg-pink-300 w-[30px] h-[30px] p-1 flex items-center justify-center rounded-md mr-2">
          <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      ),
    },
    {
      name: "Databases",
      description: "PostegreSQL, MongoDB",
      icon: (
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
      ),
    },
  ],
  experience: [
    {
      company: "Suomen katuhuolto OY",
      role: "Fullstack kehittäjä",
      timePeriod: "2022 - 2023",
      image: "path-to-your-image",
      projects: [
        {
          projectName: "Sovellus toiminnan digitalisointiin",
          description: `
          Kehitin sovelluksen yrityksen toiminnan digitalisointiin. Ominaisuuksia ovat mm. asiakasrekisteri karttanäkymällä, tarjousten luominen ja lähettäminen sähköpostiin, työkohteiden seuranta ja hallinta, sekä loppuraporttien tuottaminen. Sovelluksella voi myös päivittää yrityksen hinnastoa ja tuotteita, sekä tarkastella ja hallinnoida laskutustietoja valmiista töistä.`,
          technologies: "React, Zustand, TypeScript, Node.js, MongoDB, Mapbox, Express, tailwindcss",
          screenshots: [skhasiakkaat, skhmerkkaus, skhtyömaamerkkaus, skhtyömaat],
        },
      ],
    },
    {
      company: "Freelance",
      role: "Fullstack kehittäjä",
      timePeriod: "2021 - 2022",
      projects: [
        {
          projectName: "Kryptokasino MVP/demoversio",
          description: `Suosittujen CSGO skinisivustojen inspiroima kryptokasinon mvp/demoversio. Peleinä Crash, Jackpot sekä Ruletti.
          Sivuston ominaisuuksina WalletConnect-autentikaatio, pelit, chatti sekä Provably fair systeemi.
          `,
          screenshots: [chadbet, chadbet1, chadbet2, chadbet3, chadbet4, chadbet5],
          technologies: "React, Zustand, TypeScript, Node.js, MongoDB, SocketIO, Express, tailwindcss",
        },
      ],
    },
    {
      company: "Collapick",
      role: "Harjoittelija",
      timePeriod: "2019 - 2020",
      projects: [
        {
          projectName: "Kehitystä ja testausta",
          description: "Manuaalista testausta sekä React-kehitystä sisäiseen työkaluun",
          technologies: "",
          screenshots: [],
        },
      ],
    },
  ],
  portfolio: [
    {
      name: "OneDrive",
      description:
        "Microsoft OneDriven API:a käyttävä websovellus jossa otettu huomioon saavutettavuus (semanttinen html, aria-labelit, tab-navigaatio), responsiivisuus",
      technologies: "TypeScript, React, Zustand, C#, ASP.net, Playwright",
      screenshots: [onedrive1, onedrive2, onedrive3, onedrive4],
      links: [
        { text: "Frontend", url: "https://github.com/tommi-miettinen/onedrive" },
        { text: "Backend", url: "https://github.com/tommi-miettinen/ASP.net" },
      ],
    },
    {
      name: "Tämä sivu",
      description: "CV / Hakemus",
      technologies: "TypeScript, React, Zustand, tailwindcss, Playwright",
      links: [{ text: "Tämä sivu", url: "https://github.com/tommi-miettinen/tommi-miettinen.github.io" }],
    },
    {
      name: "Rekrytehtävä",
      description: "Rekrytehtävä jossa piti pystyä kirjautumaan OpenID connectilla sekä muokkaamaan käyttäjän tietoja.",
      links: [{ text: "Github", url: "https://github.com/tommi-miettinen/duunitori" }],
      screenshots: [trivore],
      technologies: "React, NextJS",
    },
    {
      name: "Paytrail testi mobiilisovellus",
      description: "Käyttäjä voi lisätä tuotteita ostoskoriin ja maksaa ne paytraililla.",
      links: [{ text: "Github", url: "https://github.com/tommi-miettinen/paytrail-demo" }],
      technologies: "TypeScript, Zustand, React Native, tailwindcss",
    },
    {
      name: "Duunitorin rekrytehtävä",
      description:
        "Duunitorin rekrytehtävä jossa vaatimuksina listanäkymä ja sivutus 1000 työpaikalle ja tarkka näkymä yksittäiselle työpaikalle.",
      links: [{ text: "Github", url: "https://github.com/tommi-miettinen/duunitori" }],
    },
  ],
};
