import React, { Component } from 'react';

class FormCadastro extends Component {
    render() { 
        return (
            <section>
                <form>
                    <input type="text" placeholder="Título" />
                    <textarea placeholder="Digite sua nota aqui..." />
                </form>
            </section>
        );
    }
}
 
export default FormCadastro;