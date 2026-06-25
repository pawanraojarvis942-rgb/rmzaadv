import pin1 from "../assets/pin1.jpg";
import pin2 from "../assets/pin2.jpg";
import pin3 from "../assets/pin3.jpg";
import pin4 from "../assets/pin4.jpg";
import pin5 from "../assets/pin5.jpg";
import pin6 from "../assets/pin6.jpg";
import pin7 from "../assets/pin7.jpg";
import pin8 from "../assets/pin8.jpg";
import pin9 from "../assets/pin9.jpg";
import pin10 from "../assets/pin10.jpg";
import pin11 from "../assets/pin11.jpg";

const Pins = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Pin & Badges
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <img src={pin1} alt="Award 1" className="w-full rounded-xl" />
        <img src={pin2} alt="Award 2" className="w-full rounded-xl" />
        <img src={pin3} alt="Award 3" className="w-full rounded-xl" />
        <img src={pin4} alt="Award 4" className="w-full rounded-xl" />
        <img src={pin5} alt="Award 5" className="w-full rounded-xl" />
        <img src={pin6} alt="Award 6" className="w-full rounded-xl" />
        <img src={pin7} alt="Award 6" className="w-full rounded-xl" />
        <img src={pin8} alt="Award 6" className="w-full rounded-xl" />
        <img src={pin9} alt="Award 6" className="w-full rounded-xl" />
        <img src={pin10} alt="Award 6" className="w-full rounded-xl" />
        <img src={pin11} alt="Award 6" className="w-full rounded-xl" />

        


      </div>
    </div>
  );
};

export default Pins;