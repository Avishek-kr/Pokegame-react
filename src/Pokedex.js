import React, { Component } from "react";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
    render() {
        return (
            <div className="Pokedex">
            <div className="flex flex-wrap justify-center mt-4 gap-4 xl:gap-6 mb-8">
                {this.props.hand.map((indiPoke) => (
                    <Pokecard  key={indiPoke.id} id={indiPoke.id} exp={indiPoke.base_experience} type={indiPoke.type} name={indiPoke.name} />
                ))}
            </div>
            </div>
        );
   }
}

export default Pokedex;