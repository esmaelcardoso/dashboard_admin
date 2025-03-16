// import hello from "../../img/hello.svg";
// import Chart from "../charts/Chart";
import "./Main.css";

const Main = () => {
    return (
        <main>
            <div className="main-container">
                <div className="main-title">
                    {/* <img src={hello} alt="Hello" /> */}
                    <div className="main-greeting">
                        <h1>Olá Esmael Cardoso</h1>
                        <p>Bem-vindo ao seu painel!</p>
                    </div>
                </div>
                <div className="main-cards">
                    <div className="card">
                        <i className="fa fa-file-text fa-2x text-lightblue"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Pedidos</p>
                            <span className="font-bold text-title">650</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa-regular fa-money-bill-1 fa-2x text-red"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Pagamentos</p>
                            <span className="font-bold text-title">50.000,00 CVE</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-archive fa-2x text-yellow"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Produtos</p>
                            <span className="font-bold text-title">800</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-bars fa-2x text-green"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Categorias</p>
                            <span className="font-bold text-title">30</span>
                        </div>
                    </div>

                </div>

                <div className="charts">

                    <div className="charts-left">
                        <div className="charts-left-title">
                            <div>
                                <h1>Relatórios de Vendas</h1>
                                <p>Mês de Janeiro</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts-right">
                        <div className="charts-right-title">
                            <div>
                                <h1>Relatórios de Vendas</h1>
                                <p>Mês de Janeiro</p>
                            </div>
                            <i className="fa fa-area-chart"></i>
                        </div>
                        <div className="charts-right-cards">

                            <div className="card1">
                                <h1>Lucro</h1>
                                <p>200.000,00 CVE</p>
                            </div>

                            <div className="card2">
                                <h1>Pagamentos</h1>
                                <p>25.000,00 CVE</p>
                            </div>

                            <div className="card3">
                                <h1>Custos de Hospedagem</h1>
                                <p>10.000,00 CVE</p>
                            </div>

                            <div className="card4">
                                <h1>Base de Dados</h1>
                                <p>7.000,00 CVE</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </main>
    )
}

export default Main