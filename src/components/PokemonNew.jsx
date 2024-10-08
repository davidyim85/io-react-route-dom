import { useState } from "react";
import { useNavigate } from "react-router-dom";



const PokemonNew = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        weight: 0,
        height: 0,
    })
    const navigate = useNavigate();

    console.log(props)
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent the submit default behavior to reload the page
        //it add to the pokemon array
        props.setPokemon([
            ...props.pokemon, 
            {
                _id: props.pokemon.length + 1, //add an _id property to the formData where the value is the length of the pokemon array plus 1
                ...formData //this is the formData's data
            }
        ]);
        //navigate back to the /pokemon route
        navigate('/pokemon')
    }

    const handleChange = e => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }


    return (
        <main>
            <h2>New Pokemon</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="name">Weight:</label>
                <input
                    type='number'
                    id='weight'
                    name='weight'
                    value={formData.weight}
                    onChange={handleChange}
                />


                <label htmlFor="name">Height:</label>
                <input
                    type='number'
                    id='height'
                    name='height'
                    value={formData.height}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default PokemonNew;
