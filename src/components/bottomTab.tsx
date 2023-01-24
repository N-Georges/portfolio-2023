import { useState } from "react";
import { FcHome, FcAbout, FcAcceptDatabase, FcFolder } from "react-icons/fc";

const BottomTab = () => {
  const [isActive, setIsActive] = useState(1);

  const [dataTabs] = useState([
    {
      id: 1,
      tabTitle: "Acceuil",
      tabIcon: <FcHome className="h-5 w-5" />,
    },
    {
      id: 2,
      tabTitle: "A propos",
      tabIcon: <FcAbout className="h-5 w-5" />,
    },
    {
      id: 3,
      tabTitle: "Services",
      tabIcon: <FcAcceptDatabase className="h-5 w-5" />,
    },
    {
      id: 4,
      tabTitle: "Projets",
      tabIcon: <FcFolder className="h-5 w-5" />,
    },
  ]);

  const NavLink = ({
    id,
    tabTitle,
    tabIcon,
    isActive,
    onClick,
  }: {
    id: number;
    tabTitle: string;
    tabIcon: JSX.Element;
    isActive: boolean;
    onClick: () => void;
  }) => {
    return (
      <button
        onClick={() => navigate(id)}
        className={`${isActive ? "active" : ""}`}
      >
        {tabIcon}
        <span className="text-xs">{tabTitle}</span>
      </button>
    );
  };

  const navigate = (id: number) => {
    setIsActive(id);
  };

  return (
    <div className="btm-nav md:hidden">
      {dataTabs.map((item) => (
        <NavLink
          key={item.id}
          {...item}
          isActive={isActive === item.id}
          onClick={() => navigate(item.id)}
        />
      ))}
    </div>
  );
};

export default BottomTab;
