
import grey from "../assets/grey.jpg";
import hoodie from "../assets/hoodie.jpg"
import joejuice from "../assets/joejuice.jpg";
import chicken from "../assets/chicken.jpg";
import single from "../assets/single.jpg";

const Apparel = () => {
  return (

  <div className="p-10">
    <h1 className="text-4xl font-bold mb-8">
      Apparel & Wearables
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div>
        <img src={grey} alt="Product" className="rounded-xl w-full h-80 object-cover" />
        <h3 className="mt-3 text-xl font-semibold"></h3>
      </div>

      <div>
        <img src={hoodie} alt="Product" className="rounded-xl w-full h-80 object-cover" />
        <h3 className="mt-3 text-xl font-semibold"></h3>
      </div>

      <div>
        <img src={joejuice} alt="Product" className="rounded-xl w-full h-80 object-cover" />
        <h3 className="mt-3 text-xl font-semibold"></h3>
      </div>

      <div>
        <img src={chicken} alt="Product" className="rounded-xl w-full h-80 object-cover" />
        <h3 className="mt-3 text-xl font-semibold"></h3>
      </div>

      <div>
        <img src={single} alt="Product" className="rounded-xl w-full h-80 object-cover" />
        <h3 className="mt-3 text-xl font-semibold"></h3>
      </div>

    </div>
  </div>
);
};

export default Apparel;