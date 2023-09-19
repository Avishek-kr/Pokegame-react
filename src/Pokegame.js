import React, { Component } from "react";
import Pokedex from "./Pokedex";
import gif from './assets/6ob.gif'

class Pokegame extends Component {
    static defaultProps = {
        pokemon:  [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    }
    render() {
        // let hand1 = [];
        // let hand2 = [...this.props.pokemon];
        // while(hand1 < hand2) {
        //     let randIdx = Math.floor(Math.random() * hand2.length);
        //     let randPokemon = hand2.splice(randIdx, 1)[0];
        //     hand1.push(randPokemon); 
        // }
        // console.log(hand1, hand2);

        let hand1 = [];
        for (let index = 0; index < 4; index++) {
            hand1.push(...this.props.pokemon.splice(Math.floor(Math.random() * this.props.pokemon.length), 1))
        }
        let hand2 = [...this.props.pokemon];


        const reduceMethod = (arr) => arr.reduce((acc, cumm) =>  acc + cumm.base_experience, 0);
        const isWin = reduceMethod(hand1) < reduceMethod(hand2);
        return (
            <div>
                <div className="mb-1 text-center relative">
                {isWin ? '' : <img src={gif} alt="" className="absolute -translate-x-1/2 left-2/4" />}
                <h3 style={{color : isWin ? 'red' : 'green'}} className="game-heading text-sm font-bold text-gray-500">{isWin ? 'Losing Hand' : 'Winning Hand'}</h3>
                <p className="text-sm font-bold text-gray-500">Total experience: {reduceMethod(hand1)}</p>
                    <Pokedex hand={hand1} />
                </div>
                <hr className="h-1 bg-slate-950" />
                <div className="mt-5 text-center relative">
                {!isWin ? '' : <img src={gif} alt="" className="absolute -translate-x-1/2 left-2/4" />}
                <h3 style={{color : !isWin ? 'red' : 'green'}} className="game-heading text-sm font-bold text-gray-500">{!isWin ? 'Losing Hand' : 'Winning Hand'}</h3>
                <p className="text-sm font-bold text-gray-500">Total experience: {reduceMethod(hand2)}</p>
                    <Pokedex hand={hand2} />
                </div>
            </div>
        )
    }
}

export default Pokegame;