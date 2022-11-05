import styled from "styled-components";

export const ContactStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 0px 96px;
  gap: 64px;

  position: absolute;
  width: 100%;
  height: 960px;
  left: 0px;
  top: 0px;

  /* Base/White */

  background: #ffffff;

  /* border: 3px solid red; */

  .bigContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 32px;
    gap: 64px;
    /* padding-left: 1%; */

    /* width: 1280px; */
    width: 100%;
    height: 800px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 1;
  }

  .smallContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    /* width: 1216px; */
    width: 100%;
    height: 800px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
  }
  .contentContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 48px;

    /* width: 720px; */
    width: 80%;
    height: 616px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    /* border: 3px solid red; */
  }
  #header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;

    /* width: 720px; */
    width: 100%;
    height: 94px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin-bottom: 6rem;
  }
  .contactForm {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;

    /* width: 720px; */
    width: 100%;
    height: 474px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
  .title {
    /* width: 448px; */
    /* width: 80%; */
    height: 20px;

    /* Display md/Semibold */

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    /* identical to box height, or 122% */

    letter-spacing: -0.02em;

    /* Gray/900 */

    color: #101828;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;

    @media screen and (max-width: 400) {
      font-size: 24px;
    }
  }
  .sentence {
    /* width: 720px; */
    width: 100%;
    height: 30px;

    /* Text xl/Normal */

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height, or 150% */

    /* Gray/600 */

    color: #475467;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

    @media screen and (max-width: 400) {
      font-weight: 300;
      font-size: 12px;
      line-height: 20px;
    }
  }
  .inputField {
    /* Auto layout */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;

    /* width: 720px; */
    width: 100%;
    height: 394px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }

  .formButton {
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    gap: 8px;

    /* width: 720px; */
    width: 100%;
    height: 48px;

    /* Primary/600 */

    background: #1570ef;
    /* Primary/600 */

    border: 1px solid #1570ef;
    /* Shadow/xs */

    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    cursor: pointer;
  }
  .name {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;

    /* width: 720px; */
    width: 100%;
    height: 70px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    input {
      box-sizing: border-box;

      /* Auto layout */

      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px 14px;
      gap: 8px;

      /* width: 348px; */
      width: 100%;
      height: 44px;

      /* Base/White */

      background: #ffffff;
      /* Gray/300 */

      border: 1px solid #d0d5dd;
      /* Shadow/xs */

      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;

      /* Inside auto layout */

      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
    }
  }
  .emailContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 6px;

    width: 100%;
    height: 70px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

    @media screen and (max-width: 375px) {
      display: block;
      margin-top: 4rem;
    }
  }
  .email {
    /* display: flex; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 6px;

    /* width: 720px; */
    width: 100%;
    height: 70px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }

  .message {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 6px;

    /* width: 720px; */
    width: 104%;
    height: 158px;

    /* Inside auto layout */

    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
  }
  .agreement {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;

    /* width: 720px; */
    width: 100%;
    height: 24px;

    /* Inside auto layout */

    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
  }
  .firstName {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 6px;

    width: 50%;
    height: 70px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 1;
  }
  #email {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 14px;
    gap: 8px;

    width: 100%;
    height: 44px;

    /* Base/White */

    background: #ffffff;
    /* Gray/300 */

    border: 1px solid #d0d5dd;
    /* Shadow/xs */

    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }

  #message {
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px 14px;
    gap: 8px;

    width: 100%;
    height: 132px;

    /* Base/White */

    background: #ffffff;
    /* Gray/300 */

    border: 1px solid #d0d5dd;
    /* Shadow/xs */

    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
  }

  /* make all display block @ media screen 375px max */
  @media screen and (max-width: 375px) {
    padding: 0;

    .bigContainer {
      width: 100%;
    }

    /* gap: 50px; */

    .form {
      display: block;
    }
    .name {
      display: block;
      margin-top: 2rem;
      input {
        width: 200%;
      }
    }
    .email {
      display: block;
      width: 93%;
    }
    .agreement {
      display: block;
    }
    .formButton {
      margin-top: 7rem;
    }

    .contentContainer {
      width: 96%;
    }
    #message {
      width: 100%;
    }
  }
`;
