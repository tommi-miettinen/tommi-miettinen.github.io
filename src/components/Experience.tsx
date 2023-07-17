import { useState, Fragment } from "react";
import Modal from "./Modal";
import { site } from "../site";

const Experience = ({ id }: { id: string }) => {
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <Fragment>
      <div id={id} className="py-4 px-8 relative flex flex-col h-full">
        <h2 className="text-xl mb-4 -ml-4">Kokemus</h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700 flex flex-col h-full">
          <li className="ml-6 flex flex-col">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-300 rounded-full -left-3"></span>{" "}
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Suomen katuhuolto OY</h3>
            <p>Fullstack kehittäjä</p>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022 - 2023</time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Tehtävänäni oli luoda kattava sovellus, jolla digitalisoitiin yrityksen toiminnot. Sovellus sisältää seuraavat ominaisuudet:
              Asiakaslista: Näyttää yksityiskohtaiset asiakastiedot, mukaan lukien paikkatiedot karttanäkymässä. Tarjouksen Luonti:
              Mahdollistaa työkohteiden merkitsemisen ajamalla tietyllä reitillä tai manuaalisen valinnan kartalla. Lisäsin ominaisuuden,
              jossa työkohteisiin voidaan lisätä töitä, kuvia (mukaan lukien piirtomahdollisuus) sekä lisätietoja. Sovellus mahdollistaa
              tarjouksen lähettämisen asiakkaalle sähköpostitse. Työlista: Näyttää työkohteet kartalla helposti tunnistettavassa ja
              seurattavassa muodossa. Tarkka Työnäkymä: Mahdollistaa työkohteiden, tehtävien ja loppuraporttien visualisoinnin, joka siirtää
              automaattisesti valmiit tehtävät "Valmiit Työt" -välilehdelle. Palvelut-välilehti: Mahdollistaa yrityksen hinnaston
              päivittämisen tai tuotteiden muokkaamisen. Valmiit Työt -välilehti: Tarjoaa laskutustiedot valmiista töistä.
              <p>Teknologiat: React, TypeScript, Node.js, MongoDB, Mapbox, Express, TailwindCSS.</p>
            </p>
            <button
              onClick={() => setSelectedImage(site.projectImage)}
              type="button"
              className="ml-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Katso kuva
            </button>
          </li>
          <li className="ml-6 flex flex-col">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-300 rounded-full -left-3"></span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Freelance</h3>
            <p>Fullstack kehittäjä</p>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022 - 2023</time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Kryptokasinon demoversio
              <p>Teknologiat: React, TypeScript, Node.js, MongoDB, SocketIO, Express, TailwindCSS.</p>
            </p>
            <button
              onClick={() => setSelectedImage(site.chadbet)}
              type="button"
              className="ml-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Katso kuva
            </button>
          </li>
          <li className="ml-6 flex flex-col">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-300 rounded-full -left-3"></span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Collapick</h3>
            <p>Harjoittelija</p>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2019 - 2020</time>

            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Manuaalista testausta sekä React-kehitystä sisäiseen työkaluun.
            </p>
            <button
              onClick={() => setSelectedImage(site.chadbet)}
              type="button"
              className="ml-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Katso kuva
            </button>
          </li>
        </ol>
      </div>
      {selectedImage && (
        <Modal isVisible={Boolean(selectedImage)} toggle={() => setSelectedImage("")}>
          <div className="w-[60vw]">
            <img width="100%" height="100%" src={selectedImage} />
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

export default Experience;
