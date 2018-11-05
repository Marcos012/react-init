import React from 'react';

import Time from './Time';

import Partida from './Partida';



export default class Placar extends React.Component {

    constructor() {
        super()
        this.state = {
            gol_casa: 0,
            gol_fora: 0
        }
    }

    marcarGolCasa() {
        this.setState({
            gol_casa: this.state.gol_casa + 1
        })
    }

    marcarGolFora() {
        this.setState({
            gol_fora: this.state.gol_fora + 1
        })
    }

    render() {
        const { partida, casa, visitante } = this.props;
        const gambiCSS = {float: 'left', 'marginRight': '35px', 'textAlign': 'center'}
        return (
            <div>
                <div style={gambiCSS}>
                    <h3>Casa</h3>
                    <Time nome={casa.nome} gols={this.state.gol_casa} marcarGol={this.marcarGolCasa.bind(this)}/>
                </div>
                <div style={gambiCSS}>
                    <Partida {...partida} />
                </div>
                <div style={gambiCSS}>
                    <h3>Visitante</h3>
                    <Time nome={visitante.nome} gols={this.state.gol_fora} marcarGol={this.marcarGolFora.bind(this)}/>
                </div>
            </div>
        )
    }
}