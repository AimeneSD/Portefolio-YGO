// src/screens/SmashMenu.jsx
import MenuBlock from "../components/ui/MenuBlock";
import SideBar from "../components/ui/SideBar";
import AvatarBlackCircle from "../components/ui/AvatarBlackCircle";
import AvatarCircle from "../components/ui/AvatarCircle";
import WhiteAngle from "../components/ui/WhiteAngle";
//import AvatarPortal from "../components/ui/AvatarPortal";

const SmashMenu = ({ onSelectProject }) => {
  return (
    <div className="relative h-screen w-full bg-black  grid grid-cols-50 grid-rows-50 gap-x-7 gap-y-3 overflow-hidden">
      
      {/* 2. COLONNE GAUCHE (Subgrid 2 lignes) */}
      
        <div className="relative col-start-1 col-span-25 row-start-3 row-span-28">
          <MenuBlock 
          title="PROJETS" 
          color="bg-red-700" 
          clipClass="clip-path:polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"
          onClick={onSelectProject}
          />
        </div>
        <div className="relative col-start-16 col-span-10 row-start-9 row-span-22 ">
          <WhiteAngle clipClass="[clip-path:url(#ProjetsWhiteAngle)]"/>
        </div>
        
        <div className="relative col-start-1 col-span-23 row-start-31 row-span-20 ">
          <MenuBlock 
          title="PARCOURS" 
          color="bg-green-600" 
          clipClass="clip-path:polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"
          />
        </div>

      {/* 3. COLONNE DROITE (Subgrid 3 lignes) */}
      
        <div className="relative col-start-26 col-span-25 row-start-1 row-span-18">
          <MenuBlock 
          title="COMPÉTENCES" 
          color="bg-blue-700" 
          clipClass="clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)"
          />
        </div>
        <div className="relative col-start-26 col-span-25 row-start-19 row-span-12">
          <MenuBlock 
          title="STAGE" 
          color="bg-pink-700" 
          clipClass="clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)"
          />
        </div>
        <div className="relative col-start-24 col-span-22 row-start-31 row-span-20">
          <MenuBlock 
          title="CONTACT" 
          color="bg-yellow-600" 
          clipClass="[clip-path:url(#yellowCurve)]"
          />
        </div>

        {/*Cercle contour noir d'avatar*/}

        <div className="relative col-start-19 col-span-15 row-start-11 row-span-28">
          <AvatarBlackCircle color="bg-black" clipClass="[clip-path:url(#AvatarBlackCircleArc)]"
          />
        </div>

        <div className="relative col-start-20 col-span-13 row-start-13 row-span-24">
          <AvatarCircle color="bg-white" clipClass="[clip-path:url(#AvatarCircleArc)]"/>
        </div>

        {/*BARRE LATÉRALE*/}

        <div className=" relative col-start-46 col-span-5 row-start-1 pointer-events-none row-span-50 filter z-40">
          <SideBar
          color="bg-black"
          clipClass="[clip-path:url(#sidebarCurve)]"
          />
        </div>
        
        <div className=" relative col-start-46 col-span-5 row-start-1 pointer-events-none row-span-50 filter z-39">
          <SideBar
          color="bg-gray-400"
          clipClass="[clip-path:url(#BorderSidebarCurve)]"
          />
        </div>

        



      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="yellowCurve" clipPathUnits="objectBoundingBox">
            {/* Cette ligne magique dessine : une ligne droite, puis une courbe de Bézier lisse */}
            <path d="M 0,0 L 1,0 Q 0.975,0.5 0.88,1 L 0,1 Z" />
          </clipPath>
          <clipPath id="sidebarCurve" clipPathUnits="objectBoundingBox">
            <path d="M 1,0.005 
            L 1,0.995 
            L 0.16,0.995 
            Q 0.05,0.995 0.08,0.965 
            Q 0.3,0.5 0.075,0.025 
            Q 0.055,0.005 0.15,0.005 
           Z" />
          </clipPath>
          <clipPath id="BorderSidebarCurve" clipPathUnits="objectBoundingBox">
            <path d="M 1,0 L 1,1 L 0.15,1 
           Q 0.02,1 0.05,0.97 
           Q 0.25,0.5 0.05,0.03  Q 0.02,0 0.15,0 
           Z" />
          </clipPath>
          <clipPath id="AvatarBlackCircleArc" clipPathUnits="objectBoundingBox">
            <path d="M 0.5,0
            A 0.5,0.5 0 1,1 0.5,1
            A 0.5,0.5 0 1,1 0.5,0
            Z" />
          </clipPath>
          <clipPath id="AvatarCircleArc" clipPathUnits="objectBoundingBox">
            <path d="M 0.5,0
            A 0.5,0.5 0 1,1 0.5,1
            A 0.5,0.5 0 1,1 0.5,0
            Z" />
          </clipPath>
          <clipPath id="ProjetsWhiteAngle" clipPathUnits="objectBoundingBox">
            <path d="M 1,0
            L 1,1
            L 0.38,1
            Q 0.1,0.2  1,0.08
            Z" 
            
            
            />
          </clipPath>
        </defs>
      </svg>

      {/* LE PORTAIL CENTRAL (Ton Avatar) 
          z-20 pour être au dessus des blocs découpés 
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <AvatarPortal />
      </div>*/}
    </div>
  );
};

export default SmashMenu;
