import React, { useState } from "react";
import "../index.css";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between px-4 bg-[#06101f] bg-opacity-80 text-gray-300 ">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>

      {/*Menu*/}
      <ul className="hidden sm:flex top-0 right-0 justify-center items-center px-6">
        <li className="hover:bg-pink-600 py-2 px-5">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:bg-pink-600 py-2 px-5">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:bg-pink-600 py-2 px-5">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="border-2 border-pink-600 hover:bg-pink-600 py-1.5 px-5">
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:bg-pink-600 py-2 px-5">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*Hamburger*/}
      <div onClick={handleClick} className="sm:hidden right-0 absolute p-8">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile Menu*/}
      <div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute right-0 top-[80px] w-60 h-60 bg-[#06101f] bg-opacity-80 fex flex-col justify-center items-center"
          }
        >
          <li className="py-4 text-xl hover:bg-pink-600">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-4 text-xl hover:bg-pink-600">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-4 text-xl hover:bg-pink-600">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-4 text-xl hover:bg-pink-600">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="py-4 text-xl hover:bg-pink-600 bg-[#071222] opacity-80">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/*Social icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/akshita-semwal-517b55206/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/akshitasemwal"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#df6262]">
            <a
              href="mailto:akshitasemwal@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email
            </a>
            <HiOutlineMail size={30} />
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href="https://drive.google.com/file/d/1es1IosGWEA5uLeCAJ9UR3o_o8EzCaCKo/view?usp=sharing"
              className="flex justify-between items-center w-full text-gray-300"
              target="new"
            >
              Resume
            </a>
            <BsFillPersonLinesFill size={30} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
