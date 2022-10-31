import ContentsLinks from "../../styles/Contents";
import ReactTooltip from "react-tooltip";

function Contents() {
  const myLinks = [
    {
      label: "Twitter Link",
      href: `https://twitter.com/sirobedjames`,
      id: "obedjames",
      title: "Click on the link to connect to my twitter page",
    },
    {
      label: "Zuri Team",
      href: `https://training.zuri.team/`,
      id: "btn__zuri",
      title: "Click on the link to connect with zuri team",
    },
    {
      label: "Zuri Books",
      href: " http://books.zuri.team",
      id: "books",
      title: "Click on the link to view zuri books",
    },
    {
      label: "Python Books",
      href: "https://books.zuri.team/python-for-beginners?ref_id=sirObed",
      id: "book__python",
      title:
        "Click on the link to cview zuri books on python and other programming language",
    },
    {
      label: "Background Check for Coders",
      href: "https://background.zuri.team",
      id: "pitch",
      title: "Click on the link to view zuri software developers team",
    },
    {
      label: "Design Books",
      href: "https://books.zuri.team/design-rules ",
      id: "book__design",
      title: "Click on the link to view zuri design book rules",
    },
  ];
  return (
    <ContentsLinks>
      {myLinks.map((link) => (
        <>
          <li
            id="myLink"
            key={link.label}
            title={link.title}
            // data-tip={link.title}
          >
            <a href={link.href} target="blank">
              {link.label}
            </a>
          </li>
          <ReactTooltip />
        </>
      ))}
    </ContentsLinks>
  );
}

export default Contents;
