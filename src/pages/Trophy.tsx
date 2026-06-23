import trophy1 from "../assets/trophy1.jpg";
import trophy2 from "../assets/trophy2.jpg";
import trophy3 from "../assets/trophy3.jpg";
import trophy4 from "../assets/trophy4.jpg";
import trophy5 from "../assets/trophy5.jpg";
import trophy6 from "../assets/trophy6.jpg";
import trophy7 from "../assets/trophy7.jpg";
import trophy8 from "../assets/trophy8.jpg";
import trophy9 from "../assets/trophy9.jpg";
import trophy10 from "../assets/trophy10.jpg";
import trophy11 from "../assets/trophy11.jpg";
import trophy12 from "../assets/trophy12.jpg";
import trophy13 from "../assets/trophy13.jpg";

const Trophy = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Medals&Trophy
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <img src={trophy1} alt="Award 1" className="w-full rounded-xl" />
        <img src={trophy2} alt="Award 2" className="w-full rounded-xl" />
        <img src={trophy3} alt="Award 3" className="w-full rounded-xl" />
        <img src={trophy4} alt="Award 4" className="w-full rounded-xl" />
        <img src={trophy5} alt="Award 5" className="w-full rounded-xl" />
        <img src={trophy6} alt="Award 6" className="w-full rounded-xl" />
        <img src={trophy7} alt="Award 6" className="w-full rounded-xl" />
        <img src={trophy8} alt="Award 6" className="w-full rounded-xl" />
        <img src={trophy9} alt="Award 6" className="w-full rounded-xl" />
        <img src={trophy10} alt="Award 6" className="w-full rounded-xl" />
        <img src={trophy11} alt="Award 6" className="w-full rounded-xl" />
        <img src={trophy12} alt="Award 6" className="w-full rounded-xl" />
        <img src={trophy13} alt="Award 6" className="w-full rounded-xl" />

      </div>
    </div>
  );
};

export default Trophy;