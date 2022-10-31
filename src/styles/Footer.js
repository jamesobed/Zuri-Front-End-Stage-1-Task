import styled from "styled-components";
const FooterStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 48px 0px; */
  gap: 64px;

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
    padding: 0px 32px;
    gap: 32px;

    width: 94%;
    height: 3%;

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
    gap: 3%;

    width: 100%;
    height: 5%;

    /* Gray/200 */

    border-top: 1px solid #eaecf0;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  p {
  }
`;

export default FooterStyle;
