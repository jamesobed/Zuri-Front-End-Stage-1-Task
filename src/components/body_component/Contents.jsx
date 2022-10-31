import ContentsLinks from "../../styles/Contents";

function Contents() {
  const myLinks = [
    { label: "Twitter Link", href: "/" },
    { label: "Zuri Team", href: "/about" },
    { label: "Zuri Books", href: "/about" },
    { label: "Python Books", href: "/about" },
    { label: "Background Check for Coders", href: "/about" },
    { label: "Design Books", href: "/about" },
  ];
  return (
    <ContentsLinks>
      {myLinks.map((link) => (
        <li id="myLink" key={link.label}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ContentsLinks>
  );
}

export default Contents;
