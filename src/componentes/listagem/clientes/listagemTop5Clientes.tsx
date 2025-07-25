import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import Cliente from "../../../modelo/Cliente";
import CPF from "../../../modelo/CPF";
import RG from "../../../modelo/RG";
import Telefone from "../../../modelo/Telefone";
import Produto from "../../../modelo/Produto";
import Servico from "../../../modelo/Servico";

type props = {
    tema: string
}

let clientes: Array<Cliente> = [
    new Cliente("João da Silva", "Joãozinho", "Masculino", new CPF("123.456.789-00", new Date("2000-01-15"))),
    new Cliente("Maria Oliveira", "Maria", "Feminino", new CPF("987.654.321-00", new Date("1995-05-22"))),
    new Cliente("Carlos Souza", "Carlito", "Masculino", new CPF("111.222.333-44", new Date("1988-10-30"))),
    new Cliente("Ana Pereira", "Aninha", "Feminino", new CPF("555.666.777-88", new Date("1992-03-10"))),
    new Cliente("Lucas Almeida", "Lu", "Masculino", new CPF("999.888.777-66", new Date("2001-07-19"))),
]

// cria produtos e serviços
const produtos = [
    new Produto("Shampoo", 20),
    new Produto("Pomada", 35),
    new Produto("Gel", 15),
];

const servicos = [
    new Servico("Corte de cabelo", 50),
    new Servico("Barba", 30),
    new Servico("Sobrancelha", 25),
];

// adiciona a cada cliente
clientes.forEach((cliente, i) => {
    cliente.adicionarProdutoConsumido(produtos[i % produtos.length]);
    cliente.adicionarServicoConsumido(servicos[i % servicos.length]);
});

// Adiciona RGs e Telefones
clientes.forEach((cliente, index) => {
    cliente.adicionarRG(`RG000${index}`, new Date(`201${index}-01-01`))
    cliente.adicionarTelefone(`1${index}`, `98765-432${index}`)
})

export default class ListagemTop5Clientes extends Component<props> {
    componentDidMount() {
        const elems1 = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems1, {});
    }

    render() {
        return (
            <div className="row">
                <div className="col s10 offset-s1">
                    <ul className="collapsible">
                        {clientes.map((cliente, index) => (
                            <li key={index}>
                                <div className={`collapsible-header ${this.props.tema} white-text`}>
                                    <i className="material-icons">account_circle</i>
                                    {cliente.nome}
                                </div>
                                <div className="collapsible-body">
                                    <div className="section">
                                        <h6 className="blue-text text-darken-2">Informações Pessoais</h6>
                                        <p><strong>Nome Social:</strong> {cliente.nomeSocial}</p>
                                        <p><strong>Gênero:</strong> {cliente.genero}</p>
                                        <p><strong>CPF:</strong> {cliente.getCpf.getValor}</p>
                                        <p><strong>Data de Emissão do CPF:</strong> {cliente.getCpf.getDataEmissao.toLocaleDateString()}</p>
                                    </div>

                                    <div className="divider"></div>

                                    <div className="section">
                                        <h6 className="blue-text text-darken-2">Documentos</h6>
                                        <p><strong>RG(s):</strong></p>
                                        <ul>
                                            {cliente['rgs'].map((rg: RG, idx: number) => (
                                                <li key={idx}>
                                                    {rg['valor']} - {rg['dataEmissao'].toLocaleDateString()}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="divider"></div>

                                    <div className="section">
                                        <h6 className="blue-text text-darken-2">Telefones</h6>
                                        <ul>
                                            {cliente['telefones'].map((tel: Telefone, idx: number) => (
                                                <li key={idx}>
                                                    ({tel['ddd']}) {tel['numero']}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="divider"></div>

                                    <div className="section">
                                        <h6 className="blue-text text-darken-2">Produtos Consumidos</h6>
                                        <ul>
                                            {cliente['produtosConsumidos'].map((prod: Produto, idx: number) => (
                                                <li key={idx}>
                                                    {prod.nome} - R$ {prod.preco.toFixed(2)}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="divider"></div>

                                    <div className="section">
                                        <h6 className="blue-text text-darken-2">Serviços Consumidos</h6>
                                        <ul>
                                            {cliente['servicosConsumidos'].map((serv: Servico, idx: number) => (
                                                <li key={idx}>
                                                    {serv.nome} - R$ {serv.preco.toFixed(2)}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );

    }
}
