import React from "react";
import './Login.scss';

interface LoginProps {
  //
}

const Login = ({}: LoginProps) => {
  return (
    <section className="loginPage">
      <h1>핸드펫이 오신 것을 환영합니다 :)</h1>
      <section className="convinientLogin">
        <ul>
          <li className="kakaoLogin">
            <a href="#">카카오톡 계정으로 로그인</a>
          </li>
          <li className="googleLogin">
            <a href="#">구글 계정으로 로그인</a>
          </li>
          <li className="naverLogin">
            <a href="#">네이버 계정으로 로그인</a>
          </li>
        </ul>
      </section>
      <section className="emailLoginAndSignUp">
        <ul>
            <li><a href="#">이메일로 로그인</a></li>
            <li><a href="#">회원가입</a></li>
        </ul>
      </section>
    </section>
  );
};

export default Login;
