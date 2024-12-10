import React from "react";
import "./SignUpEmail.scss";

interface SignUpEmailProps {
  //
}

const Login = ({}: SignUpEmailProps) => {
  return (
    <div className="App" style={ { fontSize: '120px'}}>
    <h1>이메일로 회원가입</h1>
    <form action="#">
        <input type="email" placeholder="이메일 주소를 입력해주세요."/>
        <input type="password" placeholder="비밀번호를 설정해 주세요."/>
        <button style={ {border: '1px solid black'}}>
            다음
        </button>
    </form>
    </div>
  );
};

export default Login;
