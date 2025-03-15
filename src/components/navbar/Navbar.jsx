import "./Navbar.css";
import avatar from "../../img/avatar.jpg";

const Navbar = ({ sideBarOpen, sideBarOpenHandler }) => {
    return (
        <nav className="navbar">

            <div className="nav-icon" onClick={() => sideBarOpenHandler()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar-left">
                <a href="#">Produtos</a>
                <a href="#">Utilizadores</a>
                <a href="#" className="active-link">Admin</a>
            </div>

            <div className="navbar-right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>

                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>

                <img width="30" src={avatar} alt="Avatar" />
            </div>

        </nav>
    );
};

export default Navbar;