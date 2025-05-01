import { Component, ChangeEvent } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import Cliente from "../../../modelo/Cliente";
import CPF from "../../../modelo/CPF";

// Clientes fictícios para simulação
const clientesFicticios: Cliente[] = [
    new Cliente("João Silva", "João", "Masculino", new CPF("123.456.789-00", new Date("2015-06-20"))),
    new Cliente("Maria Souza", "Maria", "Feminino", new CPF("987.654.321-00", new Date("2018-03-15"))),
    new Cliente("Carlos Oliveira", "Carlos", "Masculino", new CPF("456.789.123-00", new Date("2020-11-05"))),
];

type props = {
    tema: string;
};

type state = {
    cpfBusca: string;
    resultado: Cliente | null;
};

export default class BuscarClientePorCPF extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            cpfBusca: "",
            resultado: null
        };
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ cpfBusca: event.target.value });
    };

    buscarCliente = () => {
        const resultado = clientesFicticios.find(c =>
            c.getCpf.getValor === this.state.cpfBusca
        );
        this.setState({ resultado: resultado || null });
    };

    render() {
        const { tema } = this.props;
        const { cpfBusca, resultado } = this.state;

        return (
            <div className="container" style={{ marginTop: "40px" }}>
                <div
                    className="z-depth-2"
                    style={{
                        backgroundColor: "#f5f5f5",
                        borderRadius: "10px",
                        padding: "30px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                    }}
                >
                    <h5 className={`${tema} white-text center-align`}>Buscar Cliente por CPF</h5>

                    <div className="input-field">
                        <input
                            type="text"
                            value={cpfBusca}
                            onChange={this.handleChange}
                            placeholder="Digite o CPF do cliente"
                            className="validate"
                        />
                    </div>

                    <div className="center-align">
                        <button className={`btn ${tema}`} onClick={this.buscarCliente}>
                            Buscar
                        </button>
                    </div>

                    {resultado ? (
                        <div className="card" style={{ marginTop: '1.5rem' }}>
                            <div className={`card-content ${tema} white-text`}>
                                <span className="card-title">{resultado.nome}</span>
                                <p><strong>Nome Social:</strong> {resultado.nomeSocial}</p>
                                <p><strong>Gênero:</strong> {resultado.genero}</p>
                                <p><strong>CPF:</strong> {resultado.getCpf.getValor}</p>
                                <p><strong>Data de Emissão:</strong> {resultado.getCpf.getDataEmissao.toLocaleDateString()}</p>
                            </div>
                        </div>
                    ) : cpfBusca ? (
                        <p className="center-align red-text" style={{ marginTop: '1.5rem' }}>
                            Cliente não encontrado.
                        </p>
                    ) : null}
                </div>
            </div>
        );
    }
}
