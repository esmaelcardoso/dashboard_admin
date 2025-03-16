import "./Sidebar.css";
import logo from "../../img/logo.jpg";

const SideBar = ({ sideBarOpenHandler, sideBarCloseHandler }) => {
    return (
        <div className={sideBarOpenHandler ? "sidebar-responsive" : ""} id="sidebar">

            <div className="sidebar-title">

                <div className="sidebar-img">
                    <img src={logo} alt="Logo" />
                    <h1>EC - Dashboard</h1>
                </div>

                <i onClick={() => sideBarCloseHandler()}
                    className="fa fa-times"
                    id="sidebarIcon"
                    aria-hidden="true"></i>
            </div>

            <div className="sidebar-menu">

                <div className="sidebar-link active-menu-link">
                    <i className="fa fa-minus-square"></i>
                    <a href="#">Home</a>
                </div>

                <h2>ADMIN</h2>

                <div className="sidebar-link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#">Área administrativa</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa fa-building"></i>
                    <a href="#">Lojas</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Produtos</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa fa-bars"></i>
                    <a href="#">Categorias</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa fa-cutlery"></i>
                    <a href="#">Pedidos</a>
                </div>

                <h2>PESSOAS</h2>

                <div className="sidebar-link">
                    <i className="fa fa-male"></i>
                    <a href="#">Administradores</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa fa-user-circle"></i>
                    <a href="#">Utilizadores</a>
                </div>

                <div className="sidebar-link">
                    <i class="fa-regular fa-money-bill-1"></i>
                    <a href="#">Pagamentos e custos</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa fa-tasks"></i>
                    <a href="#">Plataforma</a>
                </div>

                <div className="sidebar-link">
                    <i className="fa fa-file-text"></i>
                    <a href="#">Politica de privacidade</a>
                </div>

                <div className="sidebar-logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Sair</a>
                </div>

            </div>

        </div>
    );
}

export default SideBar;