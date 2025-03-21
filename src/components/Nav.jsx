import React, { useEffect, useState } from "react";
import "../styles/Nav.css";
import { useNavigate } from "react-router";

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    nav(`/search?q=${e.target.value}`);
  };

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
        className="nav__logo"
        onClick={() => nav("/")}
      />
      <input
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        placeholder="영화를 검색해주세요"
        type="text"
      />
      <img
        src="https://cdn.hddfs.com/files/dm/20231121/087b2fc6_202311211116319630.jpg?sf=webp&RS=750X902"
        alt="User logged"
        className="nav__avatar"
      />
    </nav>
  );
}
