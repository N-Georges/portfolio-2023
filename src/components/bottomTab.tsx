import { useRouter } from "next/router";
import { useState } from "react";
import { TbHome, TbFileInfo, TbLayout2, TbBolt } from "react-icons/tb";

const dataTabs = [
  {
    id: 1,
    tabTitle: "Acceuil",
    tabIcon: TbHome,
    href: "/",
  },
  {
    id: 2,
    tabTitle: "A propos",
    tabIcon: TbFileInfo,
    href: "/a-propos",
  },
  {
    id: 3,
    tabTitle: "Services",
    tabIcon: TbBolt,
    href: "/services",
  },
  {
    id: 4,
    tabTitle: "Projets",
    tabIcon: TbLayout2,
    href: "/projets",
  },
];

const BottomTab = () => {
  const [isActive, setIsActive] = useState(0);
  const router = useRouter();

  const navigate = (index: number) => {
    setIsActive(index);
    router.push(dataTabs[index].href);
  };

  return (
    <div className="btm-nav md:hidden pt-100">
      {dataTabs.map((item, index) => (
        <button
          key={item.id}
          onClick={() => navigate(index)}
          className={`${isActive === index ? "active" : ""}`}
        >
          <item.tabIcon className={`w-6 h-6 ${isActive === index ? "text-primary" : ""}`} />
          <span
            className={`text-xs ${
              isActive === index &&
              "bg-primary rounded-xl transition-all delay-150 ease-in-out text-white px-2 py-1 "
            } `}
          >
            {item.tabTitle}
          </span>
        </button>
      ))}
    </div>
  );
};

export default BottomTab;
