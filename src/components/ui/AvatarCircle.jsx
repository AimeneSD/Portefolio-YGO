const AvatarCircle = ({color, clipClass}) => {
    return (
        <div className={`absolute inset-0 ${color} cursor-pointer transition-all duration-500 
                  hover:brightness-125 hover:scale-[1.015] z-35 ${clipClass}
                  flex items-center justify-center group`}>

        </div>
    )
}

export default AvatarCircle;