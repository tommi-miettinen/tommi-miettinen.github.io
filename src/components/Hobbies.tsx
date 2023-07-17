import wow from "../assets/wow.png";
import csgo from "../assets/csgo.png";
import overwatch from "../assets/overwatch.png";

const Hobbies = ({ id }: { id: string }) => {
  return (
    <div id={id} className="p-4">
      <h3 className="text-xl">Harrastukset (Flexbox)</h3>
      <div className="h-[32px] flex items-center sm:w-[300px] justify-between">
        CSGO <img className="h-full" src={csgo} />
      </div>
      <div className="h-[32px] flex items-center sm:w-[300px] justify-between">
        Overwatch <img className="h-full" src={overwatch} />
      </div>
      <div className="h-[32px] flex items-center sm:w-[300px] justify-between">
        Wow <img className="h-full" src={wow} />
      </div>
      <div className="h-[32px] flex items-center sm:w-[300px] justify-between">
        Kuntosali
        <div className="flex items-center">
          100kg penkki
          <input checked id="purple-checkbox" type="checkbox" value="" className="ml-2 w-5 h-5 text-purple-600 bg-gray-100 rounded" />
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
