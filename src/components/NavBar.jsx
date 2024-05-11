import NavItem from "./NavItem";

function NavBar() {
  return (
    <nav id="menu-panel-black" className="navbar navbar-expand-lg w-100">
      <div className="container-fluid mx-5">
        <a
          className="text-decoration-none text-danger h5 p-t-10-px"
          href="/dashboard"
        >
          CURD-DEMO-REACT
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-font-size">
            <NavItem itemName="Dashboard" url="dashboard"></NavItem>
            <NavItem itemName="Show Contacts" url="showContacts"></NavItem>
            <NavItem itemName="Create Contact" url="creatContact"></NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
