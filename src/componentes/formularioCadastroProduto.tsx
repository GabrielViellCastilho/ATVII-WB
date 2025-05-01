import { Component } from "react";
import M from "materialize-css"; // Importa o JS do Materialize

type props = {
    tema: string
}

export default class FormularioCadastroProduto extends Component<props> {

    componentDidMount() {
        const elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
    }

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`;
        return (
            <div className="row">
                <form className="col s10 offset-s1">
                    <h4 className="deep-purple-text text-lighten-2">Criar Produto</h4>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome_completo" type="text" className="validate" required />
                            <label htmlFor="nome_completo" className="deep-purple-text text-lighten-2">Nome*</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="nome_social" type="number" className="validate" required />
                            <label htmlFor="nome_social" className="deep-purple-text text-lighten-2">Preço*</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Enviar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>

                {/* Remover Produto */}
                <form className="col s10 offset-s1">
                    <h4 className="deep-purple-text text-lighten-2">Remover Produto</h4>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome_completo" type="text" className="validate" required />
                            <label htmlFor="nome_completo" className="deep-purple-text text-lighten-2">Nome*</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Remover
                                <i className="material-icons right">highlight_off</i>
                            </button>
                        </div>
                    </div>
                </form>


                {/* Atualizar Produto */}
                <form className="col s10 offset-s1">
                    <h4 className="deep-purple-text text-lighten-2">Atualizar Produto</h4>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome_completo" type="text" className="validate" required />
                            <label htmlFor="nome_completo" className="deep-purple-text text-lighten-2">Nome*</label>
                        </div>
                    </div>
                    <button className={estiloBotao} type="button" onClick={() => {
                        const modal = document.getElementById('modal1');
                        if (modal) {
                            const instance = M.Modal.getInstance(modal);
                            instance.open();
                        }
                    }}>
                        Buscar
                        <i className="material-icons right">send</i>
                    </button>

                </form>

                {/* <!-- Modal Structure --> */}
                <div id="modal1" className="modal">
                    <div className="modal-content">

                        <form className="col s12">
                            <h4 className="deep-purple-text text-lighten-2">Atualizar Produto</h4>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="nome_completo" type="text" className="validate" required />
                                    <label htmlFor="nome_completo" className="deep-purple-text text-lighten-2">Nome*</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="nome_social" type="number" className="validate" required />
                                    <label htmlFor="nome_social" className="deep-purple-text text-lighten-2">Preço*</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <button className={estiloBotao} type="submit" name="action">Enviar
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-close waves-effect waves-green btn-flat deep-purple-text text-lighten-2">Sair</a>
                    </div>
                </div>
            </div>
        )
    }
}
