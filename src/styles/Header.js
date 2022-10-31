import styled from "styled-components";

const ProfileStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4%;
  gap: 2.1%;
  isolation: isolate;

  width: 94%;
  height: 142px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  #profileImage {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin-left: 1%;

    width: 6%;
    height: 45%;
    margin-bottom: 1%;

    background: url(.jpg);
    border-radius: 50%;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;
    transition: 0.5s all ease-in-out;
    cursor: pointer;
  }
  #profileBackground {
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 2%;
    height: 20%;
    margin-bottom: 1%;
    margin-top: 3.7%;
    left: 53%;

    background: url(.jpg);
    border-radius: 50%;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 10000;
    transition: 0.5s all ease-in-out;
    visibility: hidden;
  }
  .Details {
    position: absolute;
    margin-top: 11%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 8px;
    margin-bottom: 2%;
    margin-left: 3%;

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
    margin-bottom: 4%;

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
    cursor: pointer;

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

  @media only screen and (max-width: 850px) {
    .Details {
      margin-top: 18%;
    }
    #profileImage {
      width: 15%;
      height: 57%;
      left: 45%;
    }
  }
  @media only screen and (max-width: 738px) {
    #profileImage {
      width: 15%;
      height: 57%;
    }
    .Details {
      margin-top: 20%;
    }
  }
  @media only screen and (max-width: 520px) {
    #profileImage {
      width: 20%;
      height: 60%;
    }
    .Details {
      margin-top: 24%;
    }
  }
  @media only screen and (max-width: 450px) {
    .Details {
      margin-top: 28%;
    }
  }
  @media only screen and (max-width: 400px) {
    .Details {
      margin-top: 29%;
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
    .Details {
      margin-top: 30%;
    }

    #profileImage {
      left: 43%;
      width: 15%;
      height: 47%;
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

export const ProfileImageStyle = styled.div`
  background-color: 2px solid red;

  cursor: pointer;
  &:hover {
    #profileImage {
      opacity: 0.8;
      background: linear-gradient(
          0deg,
          rgba(52, 64, 84, 0.75),
          rgba(52, 64, 84, 0.75)
        ),
        url(.jpg);
    }

    #profileBackground {
      visibility: visible;
      z-index: 1000;
    }
  }
`;
export default ProfileStyle;
