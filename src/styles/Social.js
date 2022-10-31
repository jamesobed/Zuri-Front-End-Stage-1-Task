import styled from "styled-components";

const SocialStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  margin-left: 3%;

  width: 93%;
  height: 72px;

  /* Base/White */

  background: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2% 3%;
    gap: 32px;

    width: 94%;
    height: 24px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  .socialIcon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 24px;

    width: 94%;
    height: 24px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 1;
  }
`;
export default SocialStyled;
