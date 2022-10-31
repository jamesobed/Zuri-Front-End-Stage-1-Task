import styled from "styled-components";

const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4%;
  gap: 2.1%;
  isolation: isolate;

  width: 100%;
  height: 142px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  #profileImage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 7%;
    height: 60%;

    background: url(.jpg);
    border-radius: 50%;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;
  }
  .Details {
    margin-top: 2%;

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
    width: 86%;
    height: 30px;

    /* Text xl/Bold */

    font-family: "Inter";
    font-style: normal;
    font-weight: 750;
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
  #slack {
    display: none;
  }

  #topCircle {
    position: absolute;
    padding-top: 4%;

    width: 3%;
    height: 3%;
    right: 14%;
    top: -20px;

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

  @media only screen and (max-width: 730px) {
    #profileImage {
      width: 15%;
      height: 57%;
    }
  }
  @media only screen and (max-width: 500px) {
    #profileImage {
      width: 20%;
      height: 60%;
    }
  }
  @media only screen and (max-width: 280px) {
    #profileImage {
      width: 20%;
      height: 50%;
    }
  }
  @media only screen and (max-width: 376px) {
    .mobileView {
      visibility: visible;
    }
    #profileImage {
      width: 20%;
      height: 60%;
    }
  }
  @media only screen and (max-width: 376px) {
    .webView {
      display: none;
      visibility: hidden;
    }
    margin-top: 3%;

    #topCircle {
      margin-top: 6%;
    }
  }
  @media only screen and (max-width: 850px) {
    #topCircle {
      margin-top: 2%;
    }
  }
  @media only screen and (max-width: 520px) {
    #topCircle {
      margin-top: 4%;
    }
  }
  @media only screen and (max-width: 353px) {
    #topCircle {
      margin-top: 6%;
    }
  }
`;

export default ProfileStyle;
