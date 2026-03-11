// src/components/ui/MenuBlock.jsx
const MenuBlock = ({ title, color, clipClass, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`absolute inset-0 ${color} cursor-pointer transition-all duration-500 
                  hover:brightness-125 hover:scale-[1.015] z-10 ${clipClass}
                  flex items-center justify-center group`}
    >
      {/* Le texte qui s'anime au survol */}
      <h2
        className="text-6xl font-black text-shadow-lg text-white tracking-normal 
                     opacity-80  group-hover:opacity-100 group-hover:scale-110 
                     transition-all duration-300 select-none"
      >
        {title}
      </h2>
    </div>
  );
};

export default MenuBlock;
