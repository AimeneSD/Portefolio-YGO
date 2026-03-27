// src/components/ui/WhiteAngle.jsx
const WhiteAngle = ({clipClass, onClick }) => {
  return (
    <div className={`absolute inset-0 group cursor-pointer bg-white ${clipClass} z-41`} onClick={onClick}>
    </div>
  );
};

export default WhiteAngle;
