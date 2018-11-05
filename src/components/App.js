import React from 'react';

import Placar from './Placar';

const dados = {
    partida: {
        estadio: 'Beira-rio',
        data: '04/11/18',
        horario: '19h'
    },
    casa: {
        nome: 'Internacional'
    },
    visitante: {
        nome: 'Gremio'
    }
}

export default class App extends React.Component {
    render() {
        return (
            <Placar {...dados} clima={'Chuva'} tempo={98}/>
        )
        
    }
}