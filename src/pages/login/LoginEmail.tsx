import React from "react";
import { Link } from "react-router-dom";
// import "./LoginEmail.scss";

interface LoginEmailProps {
  //
}

const LoginEmail = ({}: LoginEmailProps) => {
  return (
    <section className="SignUp">
      <h1>로그인</h1>
      <form action="#" className="signUpEmail">
        <div id="emailSection">
          <input
            className="emailInput"
            type="email"
            placeholder="이메일 주소를 입력해주세요."
          />
          <div className="wrongType">* 이메일 형식이 올바르지 않습니다.</div>
          <div className="wrongType">* 이미 가입된 이메일 주소입니다.</div>
        </div>
        <div className="pwSection">
          <input
            className="pwInput"
            type="password"
            placeholder="비밀번호를 설정해 주세요."
          />
          <div className="wrongType">
            * 이메일 또는 비밀번호가 일치하지 않습니다.
          </div>
        </div>
        <button
          className="nextBtn"
          style={{
            backgroundColor: "var(--primary)",
            color: "var(--white)",
          }}
        //   임시 스타일
        >
          로그인
        </button>
      </form>
      <Link to='/SignUpEmail' className="moveToSignUpEmail">이메일로 회원가입</Link>
      {/* 이메일로 회원 가입 이 부분 flexbox에 같이 묶여서 회원가입 폼이랑 위치가 좀 변형되는데 어칼지 토의 */}
    </section>
  );
};

export default LoginEmail;
