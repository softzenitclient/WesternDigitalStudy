import React from 'react';
import { Compass, GraduationCap, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function CountryStats() {
  const items = [
    {
      id: 1,
      icon: <Globe className="text-[#f15b24]" size={20} />,
      value: "5 Countries",
      label: "Study Destinations",
      bgColor: "bg-orange-50"
    },
    {
      id: 2,
      icon: <GraduationCap className="text-[#2c3164]" size={20} />,
      value: "350+ Programs",
      label: "Direct Affiliations",
      bgColor: "bg-indigo-50"
    },
    {
      id: 3,
      icon: <Compass className="text-emerald-600" size={20} />,
      value: "99.2%",
      label: "Visa Success Rate",
      bgColor: "bg-emerald-50"
    },
    {
      id: 4,
      icon: <ShieldCheck className="text-cyan-600" size={20} />,
      value: "RL-1950",
      label: "Govt. Direct License",
      bgColor: "bg-cyan-50"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#2c3164]/5 rounded-3xl border border-gray-100 mb-10">
      {items.map((stat, i) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.08 }}
          className="flex flex-col sm:flex-row items-center gap-3.5 p-4 rounded-2xl bg-white shadow-sm border border-gray-50 text-center sm:text-left"
        >
          <div className={`${stat.bgColor} p-3 rounded-xl shrink-0`}>
            {stat.icon}
          </div>
          <div>
            <div className="text-sm md:text-base font-extrabold text-[#2c3164] tracking-tight">{stat.value}</div>
            <div className="text-[11px] text-gray-500 font-medium">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
