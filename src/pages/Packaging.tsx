import pack1 from "../assets/pack1.jpg";
import pack2 from "../assets/pack2.jpg";
import pack3 from "../assets/pack3.jpg";
import pack4 from "../assets/pack4.jpg";
import pack5 from "../assets/pack5.jpg";

const Packaging = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Packaging
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <img src={pack1} alt="Award 1" className="w-full rounded-xl" />
        <img src={pack2} alt="Award 2" className="w-full rounded-xl" />
        <img src={pack3} alt="Award 3" className="w-full rounded-xl" />
        <img src={pack4} alt="Award 4" className="w-full rounded-xl" />
        <img src={pack5} alt="Award 5" className="w-full rounded-xl" />
        
      </div>
    </div>
  );
};

export default Packaging;