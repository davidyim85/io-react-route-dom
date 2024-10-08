import { useParams } from 'react-router-dom';

const PokemonDetails = (props) => {
    // useParams is an object where the keys are all the things defined 
    // for example go to the App.jsx and look for the slash colon keys. 
    // They will be the property name in the useParams()
    // console.log(
    //     props, 
    //     useParams()  //req.params  in express
    // )


    // use the array of pokemon (so that all the pokemon)
    // use the useParams() which is the id of a pokemon
    // find the element where the pokemon id in the array matches the id in useParams()
    const singlePokemon = props.pokemon.find(poke => {
        return poke._id === Number(useParams().pokemonid)
    })

    console.log(singlePokemon)


    return (
        <>
            <h2>{singlePokemon.name}</h2>
            <dl>
            <dt>Weight:</dt>
            <dd>{singlePokemon.weight}</dd>
            <dt>Height:</dt>
            <dd>{singlePokemon.height}</dd>
            </dl>
        </>
    )
}

export default PokemonDetails;