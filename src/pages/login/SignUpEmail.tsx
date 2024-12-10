import React from "react";
import "./SignUpEmail.scss";

interface SignUpEmailProps {
  //
}

const Login = ({}: SignUpEmailProps) => {
  return (
    <section className="SignUp">
      <h1>이메일로 회원가입</h1>
      <form action="#" className="signUpEmail">
        <input className="emailInput" type="email" placeholder="이메일 주소를 입력해주세요." />
        <input className="pwInput" type="password" placeholder="비밀번호를 설정해 주세요." />
        <button className="nextBtn">다음</button>
      </form>
    </section>
  );
};

export default Login;