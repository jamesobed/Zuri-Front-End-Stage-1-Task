import styled from "styled-components";

const ContentsLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3%;
  margin-top: 3%;
  margin-bottom: 2%;
  gap: 24px;

  width: 94%;
  height: 576px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 12px;

    width: 94%;
    height: 76px;

    /* Shadow/xs */

    filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }

  #myLink {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px 32px;
    gap: 8px;

    width: 94%;
    height: 5%;

    /* Gray/200 */

    background: #eaecf0;
    /* Gray/200 */

    border: 1px solid #eaecf0;
    border-radius: 8px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 1;
  }
  a {
    text-decoration: none;

    /* width: 101px; */
    height: 28px;

    /* Text lg/Medium */

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    /* identical to box height, or 156% */

    display: flex;
    align-items: center;
    text-align: center;

    /* Gray/900 */

    color: #101828;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  #myLink:hover {
    background-color: aqua;
  }
`;

export default ContentsLinks;
