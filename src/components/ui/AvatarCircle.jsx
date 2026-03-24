const AvatarCircle = ({color, clipClass}) => {
    return (
        <div className={`absolute inset-0 ${color} transition-all duration-500 z-100 ${clipClass}
                  flex items-center justify-center`}>
            <img src="/src/assets/portfolio_icon.webp" alt="" className="w-[80%] h-[80%] object-contain"/>
        </div>
    )
}

export default AvatarCircle;