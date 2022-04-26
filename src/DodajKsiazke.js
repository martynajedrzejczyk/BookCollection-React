import "./DodajKsiazke.css"
import React, {useState} from "react";


export default function Ksiazka(props) {

    const [author, setAuthor] = useState("")
    const [title, setTitle] = useState("")
    const [rate, setRate] = useState(1)

    function handleAuthorChange(e) {
        setAuthor(e.target.value)
    }

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }

    function handleRateChange(e) {
        let value = Math.max(1, Math.min(10, e.target.value))
        setRate(value)
    }

    const dodaj = (e) => {
        e.preventDefault()

        const book = {
            id: props.ilosc + 1,
            author: author,
            title: title,
            rate: rate,
            photo: URL.createObjectURL(e.target[3].files[0]),
            src: ''
        }

        setAuthor("")
        setRate("")
        setTitle("")
        e.target[3].value = ""

        props.dodajKsiazke(book)
    }
    
    return (
        <form className="nowaKsiazka" onSubmit={dodaj}>
            <h3>Dodaj książkę</h3>
            <p>Autor: </p>
            <input name="autor" required="required" type="text" value={author} onChange={handleAuthorChange} />
            <p>Tytuł: </p>
            <input name="tytul" required="required" type="text" value={title} onChange={handleTitleChange}/>
            <p>Ocena: </p>
            <input name="ocena" required="required" type="number" value={rate} onChange={handleRateChange}/>
            <p>Zdjęcie: </p>
            <input name="plik" type="file" />
            <button>Dodaj</button>
        </form>
    )
}