import "./EdytujKsiazke.css"
import React, {useState} from "react";


export default function EdytujKsiazke(props) {

    const ksiazka = {
        id: props.id,
        author: props.author,
        title: props.title,
        rate: props.rate,
        photo: props.photo,
        src: "/"+props.photo
    }

    const [rate, setRate] = useState(ksiazka.rate)

    function handleRateChange(e) {
        let value = Math.max(1, Math.min(10, e.target.value))
        setRate(value)
    }

    const zapiszKsiazke = (e) => {
        e.preventDefault()
        ksiazka.rate = rate
        props.zapiszKsiazke(ksiazka)
    }
    
    return (
        <form className="edycjaKsiazka" onSubmit={zapiszKsiazke}>
            <p className="name">Autor: </p>
            <p>{ksiazka.author}</p>
            <p className="name">Tytuł:</p>
            <p>{ksiazka.title}</p>
            <p className="name">Ocena:</p>
            <input name="ocena"  required="required" type="number" value={rate} onChange={handleRateChange}/>
            <p>{ksiazka.zdjecie}</p>
            <img src={ksiazka.photo} alt="Tu powinien być obraz książki" />
            <button type="submit">Zapisz</button>
        </form>
    )
}
