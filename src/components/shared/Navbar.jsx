import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "./Navbar.css";

const RouterLink = ({ to, title }) => {
  return (
    <li key={title} className="text-white/70 hover:text-white mx-2">
      <Link to={to}>{title}</Link>
    </li>
  );
};

const SocialLink = ({ url }) => {
  return (
    <li key={url} className="text-white/70 hover:text-white mx-2">
      <SocialIcon url={url} fgColor="#ffffff" bgColor="#0ea5e9" />
    </li>
  );
};

const MobileMenu = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="w-full flex md:hidden justify-around items-center"></div>
  );
};

const DesktopMenu = () => {
  return (
    <div className="w-full md:flex hidden justify-between items-center">
      <ul className="flex flex-row justify-between items-center text-xl">
        {[
          { to: "/#", title: "Home" },
          { to: "/#about", title: "About" },
          { to: "/#team", title: "Team" },
          { to: "/#contact", title: "Contact" },
        ].map((item) => (
          <RouterLink to={item.to} title={item.title} />
        ))}
      </ul>
      <a href="#" className="">
        <img src="../../../images/logo.png" alt="Logo" />
      </a>
      <ul className="flex flex-row justify-between items-center text-white text-xl">
        {[
          "https://github.com/BuiltByFrancis",
          "https://discord.gg/nqMmsZJW",
          "https://twitter.com/BuiltByFrancis",
        ].map((item) => (
          <SocialLink url={item} />
        ))}
        <li className="text-white/70 hover:text-white mx-2 bg-[#0ea5e9] py-2 px-7 mx-2 rounded-full cursor-pointer ">
          Connect Wallet
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="w-full bg-sky-500/70 shadow shadow-sky-500/40 p-4">
      <DesktopMenu />
      <MobileMenu />
    </div>
  );
};

export default Navbar;
