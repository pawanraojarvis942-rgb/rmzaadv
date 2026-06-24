import aster from "../assets/aster.png";
import emaar from "../assets/emaar.png";
import damac from "../assets/damac.png";
import adnoc from "../assets/adnoc.png";
import aldhaid from "../assets/aldhaid.png";
import athiqah from "../assets/athiqah.png";
import qalex from "../assets/qalex.png";
import emirates from "../assets/emirates.png";
import etisalat from "../assets/etisalat.png";
import lavoya from "../assets/lavoya.png";



const logos = [
  aster,
  emaar,
  damac,
  adnoc,
  aldhaid,
  athiqah,
  qalex,
  lavoya,
  emirates,
  etisalat,
];

const ClientLogos = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
  Serving Businesses <span className="text-[#2596be]">Across The UAE</span>
</h2>
      </div>

      <div className="slider">
        <div className="slide-track">
          {[...logos, ...logos].map((logo, index) => (
            <img
  key={index}
  src={logo}
  alt="Client Logo"
  className="h-20 object-contain opacity-90 hover:opacity-100 transition-all duration-300"
/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;