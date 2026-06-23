import award1 from "../assets/award1.jpg";
import award2 from "../assets/award2.jpg";
import award3 from "../assets/award3.jpg";
import award4 from "../assets/award4.jpg";
import award5 from "../assets/award5.jpg";
import award6 from "../assets/award6.jpg";

const Awards = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Awards & Plaques
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <img src={award1} alt="Award 1" className="w-full rounded-xl" />
        <img src={award2} alt="Award 2" className="w-full rounded-xl" />
        <img src={award3} alt="Award 3" className="w-full rounded-xl" />
        <img src={award4} alt="Award 4" className="w-full rounded-xl" />
        <img src={award5} alt="Award 5" className="w-full rounded-xl" />
        <img src={award6} alt="Award 6" className="w-full rounded-xl" />

      </div>
    </div>
  );
};

export default Awards;