import { NavLink } from "react-router-dom";

export default function Navbar() {
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
              to="/offers"
              className="navLink"
              activeClassName="activeNavLink"
            >
              Хосты
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              to="/sites"
              className="navLink"
              activeClassName="activeNavLink"
            >
              Офферы
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
