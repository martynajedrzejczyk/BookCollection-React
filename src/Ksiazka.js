import "./Ksiazka.css"

export default function Ksiazka(props) {
    const ksiazka = {
        id: props.id,
        autor: props.author,
        tytul: props.title,
        ocena: props.rate,
        zdjecie: props.photo,
        src: "/"+props.photo
    }

    const edytujKsiazke = (e) => {
        e.preventDefault()
        props.edytujKsiazke(props.id)
    }

    const usun = (e) => {
        e.preventDefault()
        props.usunKsiazke(ksiazka)
        console.log(ksiazka)
    }
    
    return (
        <div className="ksiazka">
            <p className="name">Autor: </p>
            <p>{ksiazka.autor}</p>
            <p className="name">Tytuł:</p>
            <p>{ksiazka.tytul}</p>
            <p className="name">Ocena: </p>
            <p>{ksiazka.ocena}</p>
            <img src={ksiazka.zdjecie} alt="Tu powinien być obraz książki" />
            <button onClick={edytujKsiazke}>Edytuj</button>
            <button onClick={usun}>Usuń</button>
        </div>
    )
}