import React, { Component } from 'react';
import "./style.css";

class FormCadastro extends Component {
    render() { 
        return (
            <section>
                <form className="form-cadastro">
                    <input 
                        type="text" 
                        placeholder="Título"
                        className="form-cadastro_input"
                    />
                    <textarea 
                        placeholder="Digite sua nota aqui..."
                        className="form-cadastro_input"
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