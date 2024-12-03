import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

interface HeaderProps {
  //
}
const Header = ({}: HeaderProps) => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/" aria-label="홈화면으로 이동">
            <img src="/Logo.png" alt="핸드펫 로고" />
          </Link>
        </div>

        <nav className="categories" aria-label="메인 메뉴">
          <ul>
            <li>
              <Link to="/community">커뮤니티</Link>
            </li>
            <li>
              <Link to="/petshop">애완수제샵</Link>
            </li>
            <li>
              <Link to="/vet">동물센터</Link>
            </li>
          </ul>
        </nav>

        <nav className="user" aria-label="사용자 메뉴">
          <ul>
            <li>
              <Link to="/profile">프로필</Link>
            </li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
