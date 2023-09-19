import React, { Component } from "react";
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
class Pokecard extends Component {
    render() {
        let imageNumber = (num) => num < 100 ? `00${num}`.slice(-3) : num; 
        let imgSrc = `${POKE_API}${imageNumber(this.props.id)}.png`;
        return (            
        <div key={this.props.id} className="w-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-5 pt-5">
                <img className="w-24 h-24 hover:scale-110 transition duration-100 cursor-pointer" src={imgSrc} alt={this.props.name} />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{this.props.name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">Type: <b>{this.props.type}</b></span>
                <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">Exp: <b>{this.props.exp}</b></span>
            </div>
        </div>
        )
    }
}

export default Pokecard;