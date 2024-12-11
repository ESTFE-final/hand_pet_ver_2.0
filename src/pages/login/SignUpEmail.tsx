import React from "react";
import { Link } from "react-router-dom";
import "./SignUpEmail.scss";

interface SignUpEmailProps {
  //
}

const SignUpEmail = ({}: SignUpEmailProps) => {
  return (
    <section className="SignUp">
      <h1>이메일로 회원가입</h1>
      <form action="#" className="signUpEmail">
        <div id="emailSection">
        <input className="emailInput" type="email" placeholder="이메일 주소를 입력해주세요." />
        <div className="wrongType">* 이메일 형식이 올바르지 않습니다.</div>
        <div className="wrongType">* 이미 가입된 이메일 주소입니다.</div>
        </div>
        <div className="pwSection">
        <input className="pwInput" type="password" placeholder="비밀번호를 설정해 주세요." />
        <div className="wrongType">* 비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.</div>
        </div>
        {/* <Link to="/signUpEmail" id="signUp">회원가입</Link> */}
        <button className="nextBtn">다음</button>
      </form>
    </section>
  );
};

export default SignUpEmail;
