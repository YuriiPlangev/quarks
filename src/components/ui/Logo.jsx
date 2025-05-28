import logo from "/logo.svg";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to={"/"} className="flex gap-2 ">
      <img src={logo} alt="logo" />
      <h1 className="text-[2.5rem] text-secondary font-semibold">Affemity</h1>
    </Link>
  );
};

export default Logo;
