import { Component, ChangeEvent } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import Produto from "../../../modelo/Produto";

type props = {
    tema: string;
};

type state = {
    nomeBusca: string;
    resultado: Produto | null;
};

const servicosFicticios: Produto[] = [
    new Produto("Corte Masculino", 25),
    new Produto("Corte Feminino", 35),
    new Produto("Barba", 20),
    new Produto("Sobrancelha", 15),
    new Produto("Hidratação", 40),
];

export default class BuscarServicoPorNome extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            nomeBusca: "",
            resultado: null
        };
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ nomeBusca: event.target.value });
    };

    buscarServico = () => {
        const resultado = servicosFicticios.find(s =>
            s.nome.toLowerCase().includes(this.state.nomeBusca.toLowerCase())
        );
        this.setState({ resultado: resultado || null });
    };

    render() {
        const { tema } = this.props;
        const { nomeBusca, resultado } = this.state;

        return (
            <div className="container" style={{ marginTop: "40px" }}>
                <div
                    className="z-depth-2"
                    style={{
                        backgroundColor: "#f5f5f5", // cor de fundo diferente
                        borderRadius: "10px",
                        padding: "30px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                    }}
                >
                    <h5 className={`${tema} white-text center-align`}>Buscar Serviço por Nome</h5>

                    <div className="input-field">
                        <input
                            type="text"
                            value={nomeBusca}
                            onChange={this.handleChange}
                            placeholder="Digite o nome do serviço"
                            className="validate"
                        />
                    </div>

                    <div className="center-align">
                        <button className={`btn ${tema}`} onClick={this.buscarServico}>
                            Buscar
                        </button>
                    </div>

                    {resultado ? (
                        <div className="card" style={{ marginTop: '1.5rem' }}>
                            <div className={`card-content ${tema} white-text`}>
                                <span className="card-title">{resultado.nome}</span>
                                <p><strong>Preço:</strong> R$ {resultado.preco.toFixed(2)}</p>
                            </div>
                        </div>
                    ) : nomeBusca ? (
                        <p className="center-align red-text" style={{ marginTop: '1.5rem' }}>
                            Serviço não encontrado.
                        </p>
                    ) : null}
                </div>
            </div>
        );
    }
}
