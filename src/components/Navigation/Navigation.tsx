import { NavLink } from "react-router-dom";

const Navigation: React.FC<> = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/teachers">Teachers</NavLink>
    </>
  );
};

export default Navigation;
