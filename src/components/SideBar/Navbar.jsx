import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import hostData from "../../host.json";

export default function Navbar() {
  const [onSubMenu, setOnSubMenu] = useState(false);
  const [currentNameServer, setCurrentNameServer] = useState("");
  const onClick = (e) => {
    // e.preventDefault();
    setOnSubMenu(!onSubMenu);
  };

  return (
    <div className="sidebar">
      <nav>
        <ul className="navList">
          <li className="navItem">
            <NavLink
              exact
              to="/"
              className="navLink"
              activeClassName="activeNavLink"
            >
              Главная
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              to="/hosts"
              className="navLink"
              activeClassName="activeNavLink"
              onClick={onClick}
            >
              Хосты
            </NavLink>
            {onSubMenu && (
              <ul>
                {hostData.map(({ nameServer }) => {
                  const id = uuidv4();
                  return (
                    <li key={id}>
                      <NavLink
                        className="navLink"
                        activeClassName="activeNavLink"
                        to={`/hosts/${nameServer}`}
                        onClick={(e) => {
                          setCurrentNameServer(e.target.textContent);
                          setOnSubMenu(false);
                        }}
                      >
                        {nameServer}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            )}
            <p>{currentNameServer}</p>
          </li>
          <li className="navItem">
            <NavLink
              to="/offers"
              className="navLink"
              activeClassName="activeNavLink"
            >
              Офферы
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              to="/addhost"
              className="navLink"
              activeClassName="activeNavLink"
            >
              Добавить хост
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              to="/addoffer"
              className="navLink"
              activeClassName="activeNavLink"
            >
              Добавить оффер
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              to="/addsite"
              className="navLink"
              activeClassName="activeNavLink"
            >
              Добавить сайт
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
