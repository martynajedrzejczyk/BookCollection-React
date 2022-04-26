import "./Sortowanie.css"
import React from "react";


export default function Ksiazka(props) {

    function sortujOcena1(e) {
        e.preventDefault()
        props.sortujOcena()
    }

    function sortujAutor1(e) {
        e.preventDefault()
        props.sortujAutor()
    }

    function sortujTytul1(e) {
        e.preventDefault()
        props.sortujTytul()
    }

    return (
        <div className="sortowanie">
            <p>Sortuj książki po:</p>
            <button onClick={sortujOcena1}>Ocena</button>
            <button onClick={sortujTytul1}>Tytuł</button>
            <button onClick={sortujAutor1}>Autor</button>
        </div>
    )
}