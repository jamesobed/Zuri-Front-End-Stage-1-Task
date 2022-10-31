import ContentsLinks from "../../styles/Contents";

function Contents() {
  const myLinks = [
    {
      label: "Twitter Link",
      href: `“https://training.zuri.team/`,
      id: "btn__zuri",
    },
    { label: "Zuri Team", href: "/about" },
    { label: "Zuri Books", href: " http://books.zuri.team", id: "books" },
    { label: "Python Books", href: "/about", id: "book__python" },
    {
      label: "Background Check for Coders",
      href: "https://background.zuri.team",
      id: "pitch",
    },
    {
      label: "Design Books",
      href: "https://books.zuri.team/design-rules ",
      id: "book__design",
    },
  ];
  return (
    <ContentsLinks>
      {myLinks.map((link) => (
        <li id="myLink" key={link.label}>
          <a href={link.href} target="blank">{link.label}</a>
        </li>
      ))}
    </ContentsLinks>
  );
}

export default Contents;
