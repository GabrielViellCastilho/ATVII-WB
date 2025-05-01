import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

import ListagemTodosClientes from "./listagem/clientes/listagemTodosClientes";
import ListagemTop10Clientes from "./listagem/clientes/listagemTop10Clientes";
import ListagemTop5Clientes from "./listagem/clientes/listagemTop5Clientes";
import ListagemClientesMasculinos from "./listagem/clientes/listagemClientesMasculinos";
import ListagemClientesFemininos from "./listagem/clientes/listagemClientesFemininos";
import ListagemTodosProdutos from "./listagem/produtos/listagemTodosProdutos";
import ListagemTodosServicos from "./listagem/servicos/listagemTodosServicos";
import BuscarServicoPorNome from "./listagem/servicos/buscarServicoPorNome";
import BuscarProdutoPorNome from "./listagem/produtos/buscarProdutoPorNome";
import BuscarClientePorCPF from "./listagem/clientes/buscarClientePorCPF";

type props = {
    tema: string;
};

type state = {
    componenteVisivel: string;
};

export default class Consulta extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            componenteVisivel: ""
        };
    }

    componentDidMount() {
        const elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {
            coverTrigger: false,
            closeOnClick: true,
            alignment: 'left'
        });
    }

    renderComponente() {
        const { componenteVisivel } = this.state;
        const { tema } = this.props;

        switch (componenteVisivel) {
            case "todosClientes":
                return <ListagemTodosClientes tema={tema} />;
            case "top10Clientes":
                return <ListagemTop10Clientes tema={tema} />;
            case "top5Clientes":
                return <ListagemTop5Clientes tema={tema} />;
            case "clientesMasculinos":
                return <ListagemClientesMasculinos tema={tema} />;
            case "clientesFemininos":
                return <ListagemClientesFemininos tema={tema} />;
            case "produtos":
                return <ListagemTodosProdutos tema={tema} />;
            case "servicos":
                return <ListagemTodosServicos tema={tema} />;
            case "buscarCliente":
                return <BuscarClientePorCPF tema={tema} />;
            case "buscarServico":
                return <BuscarServicoPorNome tema={tema} />;
            case "buscarProduto":
                return <BuscarProdutoPorNome tema={tema} />;
            default:
                return null;
        }
    }

    render() {
        return (
            <div className="container" style={{ marginTop: '1rem' }}>
                <div className="row center-align">
                    {/* Menu Clientes */}
                    <div className="col s12 m4" style={{ marginTop: '1rem' }}>
                        <a className={`dropdown-trigger btn ${this.props.tema} white-text`} href='#' data-target='dropdown-clientes'>
                            Menu Clientes
                        </a>
                        <ul id='dropdown-clientes' className='dropdown-content'>
                            <li><a onClick={() => this.setState({ componenteVisivel: "todosClientes" })}>Listar todos os clientes</a></li>
                            <li><a onClick={() => this.setState({ componenteVisivel: "top10Clientes" })}>Top 10 clientes (mais consumiram)</a></li>
                            <li><a onClick={() => this.setState({ componenteVisivel: "top10Clientes" })}>Top 10 clientes (menos consumiram)</a></li>
                            <li><a onClick={() => this.setState({ componenteVisivel: "top5Clientes" })}>Top 5 clientes (maior valor)</a></li>
                            <li><a onClick={() => this.setState({ componenteVisivel: "clientesMasculinos" })}>Filtrar por gênero (Masculino)</a></li>
                            <li><a onClick={() => this.setState({ componenteVisivel: "clientesFemininos" })}>Filtrar por gênero (Feminino)</a></li>
                            <li><a onClick={() => this.setState({ componenteVisivel: "buscarCliente" })}>Buscar cliente por CPF</a></li>
                        </ul>
                    </div>

                    {/* Menu Produtos */}
                    <div className="col s12 m4" style={{ marginTop: '1rem' }}>
                        <a className={`dropdown-trigger btn ${this.props.tema} white-text`} href='#' data-target='dropdown-produtos'>
                            Menu Produtos
                        </a>
                        <ul id='dropdown-produtos' className='dropdown-content'>
                            <li><a onClick={() => this.setState({ componenteVisivel: "produtos" })}>Listar todos os produtos</a></li>
                            <li><a onClick={() => this.setState({ componenteVisivel: "produtos" })}>Listar produtos mais vendidos</a></li>
                            <li><a onClick={() => this.setState({ componenteVisivel: "produtos" })}>Listar produtos mais vendidos por gênero (Masculino)</a></li>
                            <li><a onClick={() => this.setState({ componenteVisivel: "produtos" })}>Listar produtos mais vendidos por gênero (Feminino)</a></li>
                            <li><a onClick={() => this.setState({ componenteVisivel: "buscarProduto" })}>Buscar produto por nome</a></li>
                        </ul>
                    </div>

                    {/* Menu Serviços */}
                    <div className="col s12 m4" style={{ marginTop: '1rem' }}>
                        <a className={`dropdown-trigger btn ${this.props.tema} white-text`} href='#' data-target='dropdown-servicos'>
                            Menu Serviços
                        </a>
                        <ul id='dropdown-servicos' className='dropdown-content'>
                            <li><a onClick={() => this.setState({ componenteVisivel: "servicos" })}>Listar todos os serviços</a></li>
                            <li><a onClick={() => this.setState({ componenteVisivel: "servicos" })}>Listar serviços mais consumidos</a></li>
                            <li><a onClick={() => this.setState({ componenteVisivel: "servicos" })}>Listar serviços mais consumidos por gênero (Masculino)</a></li>
                            <li><a onClick={() => this.setState({ componenteVisivel: "servicos" })}>Listar serviços mais consumidos por gênero (Feminino)</a></li>
                            <li><a onClick={() => this.setState({ componenteVisivel: "buscarServico" })}>Buscar serviço por nome</a></li>
                        </ul>
                    </div>
                </div>

                {/* Componente exibido dinamicamente */}
                {this.renderComponente()}
            </div>
        );
    }
}
