import React, { Component } from 'react';

class ListaDeCategorias extends Component {

    handleEventInput = (event) => {
        if(event.key === "Enter") {
            const nameCategoria = event.target.value;
            this.props.adicionarCategoria(nameCategoria);
        }
    }

    render() {
        const categorias = this.props.categorias;
        return (
            <section>
                <ul>
                    {
                        categorias.map((categoria, index) => {
                            return (
                                <li 
                                    className="lista-categorias-item"
                                    key={index}>{categoria}
                                </li>
                            )
                        })
                    }
                </ul>
                <input
                    className="lista-categorias-input"
                    onKeyUp={ this.handleEventInput }
                    placeholder="adicione uma categoria"
                    type="text"
                />
            </section>
        );
    }
}
 
export default ListaDeCategorias;