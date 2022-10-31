import BodyStyle from "../styles/Body";
import Header from "./body_component/Header";
import Contents from "./body_component/Contents";
import Social from "./body_component/Social";
function Body() {
  return (
    <>
      <BodyStyle>
        <Header />
        {/* <br/> */}
        <Contents />
        <Social />
      </BodyStyle>
    </>
  );
}

export default Body;
