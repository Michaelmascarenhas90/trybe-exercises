import React, { Component } from 'react';
import "./style.css";

class FormCadastro extends Component {
    constructor(props) {
        super(props);
        this.titulo = "";
        this.text = "";
    }

    handleChangeTitle = (event) => {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    handleChangeText = (event) => {
        event.stopPropagation();
        this.text = event.target.value;
    }

    createCard = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.createCard(this.titulo, this.text);
    }

    render() { 

        const categorias = this.props.categorias

        return (
            <section>
                <form className="form-cadastro"
                    onSubmit={ this.createCard }
                >
                    <select className="form-cadastro-input">
                        { categorias.map((categoria) => {
                            return (
                                <option>{categoria}</option>
                            );
                        }) }
                    </select>
                    <input 
                        type="text" 
                        placeholder="Título"
                        className="form-cadastro_input"
                        onChange={ this.handleChangeTitle }
                    />
                    <textarea 
                        placeholder="Digite sua nota aqui..."
                        className="form-cadastro_input"
                        onChange={ this.handleChangeText }
                    />
                    <button 
                        className="form-cadastro_input form-cadastro_submit"
                    >
                        Criar Nota
                    </button>
                </form>
            </section>
        );
    }
}
 
export default FormCadastro;