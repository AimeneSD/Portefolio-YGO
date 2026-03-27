// src/components/ui/MenuBlock.jsx
const MenuBlock = ({ title, color, clipClass, onClick }) => {
  return (
    <div className="absolute inset-0 group cursor-pointer" onClick={onClick}>
      <div className={`absolute inset-0 bg-white ${clipClass}`}>

      </div>

      <div
        className={`absolute inset-3 ${color} ${clipClass} 
                  flex items-center justify-center transition-all duration-500 
                  group-hover:brightness-125 z-20`}>
        {/* Le texte qui s'anime au survol */}
        <h2
          className="text-6xl font-black text-shadow-lg text-white tracking-normal 
                      opacity-80  group-hover:opacity-100 group-hover:scale-110 
                      transition-all duration-300 select-none"
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default MenuBlock;
