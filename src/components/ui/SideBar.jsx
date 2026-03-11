const SideBar = ({color, clipClass})=>{
    return(
        <>
        <div className={`h-full w-full ${color} ${clipClass}  flex flex-col z-40 relative shadow-2xl pointer-events-auto`}>
            {/* Contenu de ta barre ici */}
            
        </div>
        </>
    );
}

export default SideBar