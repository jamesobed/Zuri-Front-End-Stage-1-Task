import styled from "styled-components";

const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
  gap: 24px;
  isolation: isolate;

  width: 94%;
  height: 142px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 88px;
    height: 88px;

    background: url(.jpg);
    border-radius: 275px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;
  }
  .Details {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 100%;
    height: 30px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    z-index: 1;
  }

  #name {
    width: 94%;
    height: 30px;

    /* Text xl/Bold */

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height, or 150% */

    text-align: center;

    /* Gray/900 */

    color: #101828;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 1;
  }

  #topCircle {
    position: absolute;
    width: 40px;
    height: 40px;
    right: 208px;
    top: -20px;
    padding-top: 3%;

    /* Base/White */

    /* background: #ffffff; */
    /* Gray/300 */

    /* border: 1px dashed #d0d5dd; */
    border-radius: 20px;

    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
    z-index: 2;
  }

  .mobileView {
    visibility: hidden;
  }

  @media only screen and (max-width: 376px) {
    .mobileView {
      visibility: visible;
    }
  }
  @media only screen and (max-width: 376px) {
    .webView {
      display: none;
      visibility: hidden;
    }
  }
`;

export default ProfileStyle;
