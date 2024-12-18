import React from "react";
import { Link } from "react-router-dom";
import "./FirstProfileSetting.scss";
import IconImage from '../../assets/icons/icon-profile.svg'
import IconImageSetting from '../../assets/icons/icon-profileSetting.svg'

interface FirstProfileSettingProps {
  //
}

const FirstProfileSetting = ({}: FirstProfileSettingProps) => {
  return (
    <section className="profileContainer">
      <h1>프로필 설정</h1>
      <span>나중에 언제든 변경할 수 있습니다.</span>
      <div className="profileImg Cont">
        <img src={IconImage} alt="기본 강아지 이모지" />
        {/* <img src={IconImageSetting} alt="이미지 변경 아이콘" /> */}
      </div>
      <div className="userInfo Cont">
        <div className="userName">
          <div className="userName Title">사용자 이름</div>
          <input type="text" className="userName Input" placeholder="2~10자 이내여야 합니다." />
        </div>
        <div className="accountId Cont">
          <div className="accountId Title">계정 ID</div>
          <input type="text" className="accountId Input" placeholder="영문, 숫자, 특수문자(.)/(_)만 사용 가능합니다." />
          <div className="wrongType">* 이미 사용 중인 ID입니다.</div>
        </div>
        <div className="intro Cont">
        <div className="intro Title">소개</div>
        <input type="text" className="intro Input" placeholder="자신과 판매할 상품에 대해 소개해 주세요." />
        </div>
        <Link to="/home" className="nextBtn">시작하기</Link>
        {/* <div className="nextBtn">시작하기</div> */}
      </div>

    </section>
  );
};

export default FirstProfileSetting;
