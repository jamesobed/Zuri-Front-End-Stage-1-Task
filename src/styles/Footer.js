import styled from "styled-components";
const FooterStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 48px 0px; */
  gap: 4%;
  margin-top: 3%;
  position: absolute;
  width: 100%;
  height: 160px;
  left: 0px;
  top: 998px;

  /* Base/White */

  background: #ffffff;

  .FooterContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 2%;
    gap: 2%;

    width: 94%;
    height: 64px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .FooterLogo {
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 4% 0px 0px;
    gap: 2%;

    width: 100%;
    height: 64px;

    /* Gray/200 */

    border-top: 1px solid #eaecf0;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  p {
    width: 58%;
    height: 24px;

    /* Text md/Normal */

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    text-align: center;

    /* Gray/500 */

    color: #667085;

    /* Inside auto layout */

    flex: none;
    /* order: 1; */
    flex-grow: 1;
  }
  img {
    width: 13%;
    height: 32px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  #4g {
    width: 8.5%;
    height: 32px;

    background: url(I4G);

    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
  }

  @media only screen and (max-width: 450px) {
    p {
      font-weight: 250;
      font-size: 10px;
      line-height: 14px;
    }
  }
  @media only screen and (max-width: 376px) {
    margin-top: -2%;
    .FooterLogo {
      display: block;
      align-items: flex-start;
    }
    p {
      font-weight: 250;
      font-size: 10px;
      line-height: 0;
      margin-left: -6%;
    }
  }
`;

export default FooterStyle;
