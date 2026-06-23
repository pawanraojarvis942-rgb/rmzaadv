import vip1 from "../assets/vip1.jpg";
import vip2 from "../assets/vip2.jpg";
import vip3 from "../assets/vip3.jpg";
import vip4 from "../assets/vip4.jpg";
import vip5 from "../assets/vip5.jpg";
import vip6 from "../assets/vip6.jpg";
import vip7 from "../assets/vip7.jpg";
import vip8 from "../assets/vip8.jpg";
import vip9 from "../assets/vip9.jpg";
import vip10 from "../assets/vip10.jpg";

const Executive = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Executive
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <img src={vip1} alt="Award 1" className="w-full rounded-xl" />
        <img src={vip2} alt="Award 2" className="w-full rounded-xl" />
        <img src={vip3} alt="Award 3" className="w-full rounded-xl" />
        <img src={vip4} alt="Award 4" className="w-full rounded-xl" />
        <img src={vip5} alt="Award 5" className="w-full rounded-xl" />
        <img src={vip6} alt="Award 6" className="w-full rounded-xl" />
        <img src={vip7} alt="Award 6" className="w-full rounded-xl" />
        <img src={vip8} alt="Award 6" className="w-full rounded-xl" />
        <img src={vip9} alt="Award 6" className="w-full rounded-xl" />
        <img src={vip10}alt="Award 6" className="w-full rounded-xl" />

      </div>
    </div>
  );
};

export default Executive;