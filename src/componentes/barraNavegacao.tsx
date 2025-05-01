import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

type props = {
    tema: string,
    botoes: string[],
    seletorView: Function
}

export default class BarraNavegacao extends Component<props> {
    constructor(props: props | Readonly<props>) {
        super(props)
        this.gerarListaBotoes = this.gerarListaBotoes.bind(this)
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems)
        });
    }

    gerarListaBotoes() {
        if (this.props.botoes.length <= 0) {
            return <></>
        } else {
            let lista = this.props.botoes.map(valor =>
                <li key={valor}><a onClick={(e) => this.props.seletorView(valor, e)}>{valor}</a></li>
            )
            return lista
        }
    }

    render() {
        let estilo = `${this.props.tema}`;
        return (
            <>
                <nav className={`${estilo} z-depth-2`}>
                    <div className="nav-wrapper container">
                        <a href="/" className="brand-logo" style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src="/images/logo.png"
                                alt="Logo WB"
                                style={{ height: '60px', marginRight: '10px' }}
                            />
                        </a>
                        <a href="#" data-target="mobile-menu" className="sidenav-trigger" style={{ cursor: 'pointer' }}>
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            {this.gerarListaBotoes()}
                        </ul>
                    </div>
                </nav>
    
                <ul className="sidenav" id="mobile-menu" style={{ paddingTop: '1rem' }}>
                    {this.gerarListaBotoes()}
                </ul>
            </>
        );
    }
    
}