type HeaderProps = {
  children: string;
};
function Header(props: HeaderProps) {
  return <div>{props.children}</div>;
}

export default Header;
