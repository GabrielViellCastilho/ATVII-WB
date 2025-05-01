import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import Produto from "../../../modelo/Produto";

type props = {
    tema: string
}

const produtos: Produto[] = [
    new Produto("Shampoo", 20),
    new Produto("Pomada", 35),
    new Produto("Gel", 15),
    new Produto("Condicionador", 25),
    new Produto("Spray Fixador", 30),
    new Produto("Creme para Pentear", 22),
    new Produto("Máscara Capilar", 40),
    new Produto("Óleo Capilar", 28),
    new Produto("Leave-in", 26),
    new Produto("Tônico Capilar", 33),
];

export default class ListagemTodosProdutos extends Component<props> {
    componentDidMount() {
        const elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems, {});
    }

    render() {
        return (
            <div className="row">
                <div className="col s10 offset-s1">
                    <ul className="collapsible">
                        {produtos.map((produto, index) => (
                            <li key={index}>
                                <div className={`collapsible-header ${this.props.tema} white-text`}>
                                    <i className="material-icons">shopping_cart</i>
                                    {produto.nome}
                                </div>
                                <div className="collapsible-body">
                                    <p><strong>Nome:</strong> {produto.nome}</p>
                                    <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="center-align">
                        <a className={`btn-floating btn-large waves-effect waves-light left-align ${this.props.tema}`}>
                            <i className="material-icons">arrow_back</i>
                        </a>
                        <a className={`btn-floating btn-large waves-effect waves-light left-align ${this.props.tema}`}>
                            <i className="material-icons">arrow_forward</i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
