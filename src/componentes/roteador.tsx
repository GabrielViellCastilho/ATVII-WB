import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import Consulta from "./consulta";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioCadastroProduto from "./formularioCadastroProduto";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Consulta'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple darken-4" botoes={['Consulta', 'Cadastro Cliente','Cadastro Serviço','Cadastro Produto']} />
        if (this.state.tela === 'Consulta') {
            return (
                <>
                    {barraNavegacao}
                    <Consulta tema="purple darken-4" />
                </>
            )
        } else if (this.state.tela === 'Cadastro Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple darken-4" />
                </>
            )
        } else if (this.state.tela === 'Cadastro Serviço'){
            return(
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="purple darken-4"/>
                </>
            )
        }  else if (this.state.tela === 'Cadastro Produto'){
            return(
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="purple darken-4"/>
                </>
            )
        }

    }
}