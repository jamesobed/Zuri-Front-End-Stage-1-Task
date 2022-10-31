import styled from "styled-components";

const ContentsLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding-left: 3%;
  padding-right: 3%; */
  margin-left: 7%;
  margin-right: 7%;
  margin-top: 6%;
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

    width: 86%;
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
    padding: 3% 3%;
    gap: 8px;

    width: 86%;
    height: 1%;

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
    height: 100%;

    /* Text lg/Medium */

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 90%;
    line-height: 100%;
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
    background-color: #d0d5dd;
  }
`;

export default ContentsLinks;
