import React from 'react';

export default class Partida extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.estadio}</h2>
                <div>
                    <label>{this.props.data}</label>    
                    <label> - </label>   
                    <label>{this.props.horario}</label>   
                </div>  
            </div>
        );
    }
}
