const AvatarBlackCircle = ({color, clipClass}) => {
    return (
        <div className={`absolute inset-0 ${color} transition-all duration-500 
                  hover:brightness-125 z-35 ${clipClass}
                  flex items-center justify-center group`}>

        </div>
    )
}

export default AvatarBlackCircle;