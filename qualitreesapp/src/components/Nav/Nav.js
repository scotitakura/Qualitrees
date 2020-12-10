import React from "react";
import aboutIcon from "../../assets/images/about-icon.png";
import productsIcon from "../../assets/images/products-icon.png";
import shineLogo from "../../assets/images/shine-logo.png";
import wisdomIcon from "../../assets/images/wisdom-icon.png";
import faqIcon from "../../assets/images/faq-icon.png";

// import styled from "styled-components";

// const StyledIcons = styled.img`
  // position: absolute;
  // height: 50vh;
  // width: 33vh;
  // padding: 10vh;
// `

function Nav() {
  return (
<div class="icon-container">
      <div class="row valign-wrapper">
        <div class="icon menu-icon outer-icon left-icon about-icon col s2 center-align">
          <img class="menu-icon-image center-align" src={aboutIcon} alt="QualiTrees Logo" />
        </div>

        <div class="icon menu-icon left-icon products-icon col s2">
          <img class="menu-icon-image center-aligned" src={productsIcon} alt="Products Icon" />
        </div>

        <div class="icon primary-icon col s4">
          <img class="background-icon" src={shineLogo} alt="QualiTrees Logo" />
        </div>

        <div class="icon menu-icon right-icon wisdom-icon col s2">
          <img class="menu-icon-image center-aligned" src={wisdomIcon} alt="QualiTrees Logo" />
        </div>

        <div class="icon menu-icon outer-icon right-icon faq-icon col s2" >
          <img class="menu-icon-image center-aligned" src={faqIcon} alt="QualiTrees Logo" />
        </div>
      </div>
    </div>

  );
}

export default Nav;