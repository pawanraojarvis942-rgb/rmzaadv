import { motion } from "framer-motion";
import ceo from "../assets/ceo.jpg";
import marketing from "../assets/marketing.jpg";
import designer from "../assets/designer.jpg";
import salesexecutive from "../assets/salesexecutive.jpg";

const team = [
  {
    name: "Nuhad Ibrahim",
    role: "CEO",
    image: ceo,
  },
  {
    name: "Angel Lyn Giangan Gomez",
    role: "Secretary",
    image: marketing,
  },
  {
    name: "Pawan Vishwanath Rao",
    role: "Social Media Executive & Graphic Designer",
    image: designer,
  },
  {
    name: "Samy Daowd",
    role: "sales executive",
    image: salesexecutive,
  },
];

const TeamSection = () => {
  return (
    <section id="our-team" className="py-20 bg-background text-center">
      
      <p className="text-sm tracking-widest text-primary uppercase mb-2">
        Our Team
      </p>

      <h2 className="text-4xl font-bold text-white mb-12">
        Meet The <span className="text-gradient-primary">Experts</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-6">
        {team.map((member, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full aspect-square object-cover rounded-x1"
            />
            <h3 className="text-xl text-white font-semibold">
              {member.name}
            </h3>
            <p className="text-gray-400">{member.role}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default TeamSection;