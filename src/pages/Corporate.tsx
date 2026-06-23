import corp1 from "../assets/corp1.jpg";
import corp2 from "../assets/corp2.jpg";
import corp3 from "../assets/corp3.jpg";
import corp4 from "../assets/corp4.jpg";
import corp5 from "../assets/corp5.jpg";
import corp6 from "../assets/corp6.jpg";
import corp7 from "../assets/corp7.jpg";

const Corporate = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Corporate Gifts
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <img src={corp1} alt="Award 1" className="w-full rounded-xl" />
        <img src={corp2} alt="Award 2" className="w-full rounded-xl" />
        <img src={corp3} alt="Award 3" className="w-full rounded-xl" />
        <img src={corp4} alt="Award 4" className="w-full rounded-xl" />
        <img src={corp5} alt="Award 5" className="w-full rounded-xl" />
        <img src={corp6} alt="Award 6" className="w-full rounded-xl" />
        <img src={corp7} alt="Award 6" className="w-full rounded-xl" />

      </div>
    </div>
  );
};

export default Corporate;