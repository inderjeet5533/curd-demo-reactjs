function NavItem({ itemName, url }) {
  return (
    <li className="nav-menu">
      <a
        className="text-decoration-none text-white"
        aria-current="page"
        href={url}
      >
        {itemName}
      </a>
    </li>
  );
}

export default NavItem;
