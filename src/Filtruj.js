import "./Filtruj.css"
import React, {useState} from "react";

export default function Filtruj(props) {

    const [fValue, setFValue] = useState("")

    function handleValueChange(e) {
        setFValue(e.target.value)
    }

    const filtruj = (e) => {
        e.preventDefault()
        props.filtrowanie(fValue)
    }

    const cofnijF = (e) => {
        e.preventDefault()
        props.cofnij()
    }
    
    return ( 
        <div className="filtrowanie">
            <form className="filtrowanieForm" onSubmit={filtruj}>
                <p>Wpisz wartość:</p>
                <input type="text" value={fValue} onChange={handleValueChange}/>
                <button type="submit">Filtruj</button>
            </form>
            <button type="submit" onClick={cofnijF}>Cofnij</button>
        </div>
    )
}