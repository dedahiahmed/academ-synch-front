import { Link } from "react-router-dom";

const NavLink: React.FC<NavLinkProps> = ({ to, currentPath, children }) => {
  const isActive = currentPath === to;
  return (
    <a
      href={to}
      className={`py-2 px-4 relative ${
        isActive ? "text-blue-500" : "text-gray-500"
      }`}
    >
      {children}
      {isActive && (
        <div className="w-[100%] h-[0.2rem] absolute bottom-[-1.2rem] left-0 bg-[#0a5bcf]" />
      )}
    </a>
  );
};
export default NavLink;
