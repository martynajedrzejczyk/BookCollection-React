import './App.css';
import React, {useState} from 'react';
import Ksiazka from './Ksiazka';
import data from "./data.json";
import Sortowanie from "./Sortowanie"
import DodajKsiazke from "./DodajKsiazke"
import Filtruj from './Filtruj';
import EdytujKsiazke from './EdytujKsiazke'

function App() {

  const [books, setBooks] = useState(data); 
  
  const [przedFiltrowaniem, setPrzedFiltrowaniem] = useState(books)

  const [edytowalna, setEdytowalna] = useState(null)

  function handleDodaj(book, file) {
    console.log(book)
    let newBooks = books.map((e) => e)
    newBooks.push(book)
    setBooks(newBooks)
  }

  function handleUsun(book) {
    const id = book.id
    let prevBooks = books.map((e) => e)

    let i=0
    while(i < prevBooks.length) {
      if(prevBooks[i].id === id) {
        prevBooks.splice(i,1)
        break
      } else {
        i++
      }
    }

    console.log(prevBooks)
    setBooks(prevBooks)
  }

  function compare_rate(a, b) {
    if(a.rate > b.rate) {
      return -1
    }
    if(a.rate < b.rate) {
      return 1
    }
    return 0
  }

  function compare_title(a,b) {
    if(a.title < b.title) {
      return -1
    }
    if(a.title > b.title) {
      return 1
    }
    return 0
  }

  function compare_author(a,b) {
    if(a.author < b.author) {
      return -1
    }
    if(a.author > b.author) {
      return 1
    }
    return 0
  }

  function sortujOcena() {
    let prevBooks = books.map((e) => e)
    prevBooks.sort(compare_rate)
    setBooks(prevBooks)
  }

  function sortujTytul() {
    let prevBooks = books.map((e) => e)
    prevBooks.sort(compare_title)
    setBooks(prevBooks)
  }

  function sortujAutor() {
    let prevBooks = books.map((e) => e)
    prevBooks.sort(compare_author)
    setBooks(prevBooks)
  }

  function cofnijFiltrowanie() {
    setBooks(przedFiltrowaniem)
}


  function filtruj(wartosc) {
    cofnijFiltrowanie()
    console.log(books)

    let prevBooks = przedFiltrowaniem.map((e) => e)
    let show = []
    prevBooks.forEach((b) => {
      if (b.author.includes(wartosc) || b.title.includes(wartosc)) {
        show.push(b)
      }
      if(!isNaN(wartosc) && b.rate == wartosc) {
        show.push(b)
      }
    })
    
    setPrzedFiltrowaniem(przedFiltrowaniem)
    setBooks(show)
  }

  function zapiszKsiazke(book) {
    let newBooks = books
    books.forEach((b, index) => {
      if(b.id === book.id) {
        newBooks[index] = book
      }
    })
    setEdytowalna(null)
    setBooks(newBooks)
  }

  function edytujKsiazke(id) {
    setEdytowalna(id)
  }

  return (
    <div className="container">
      <div className='ksiazki'>
        {books.map((b, index) => (

          edytowalna === b.id 
          ? 
          <EdytujKsiazke  zapiszKsiazke={zapiszKsiazke} key={b.id} id={b.id} author={b.author} title={b.title} rate={b.rate} photo={b.photo} /> 
          : 
          <Ksiazka edytujKsiazke={edytujKsiazke} usunKsiazke={handleUsun} key={b.id} id={b.id} author={b.author} title={b.title} rate={b.rate} photo={b.photo} />
  ))}
      </div>
      <div className='rightPage'>
        <div className='dodajKsiazke'>
          <DodajKsiazke dodajKsiazke={handleDodaj} ilosc={books.length}/>
        </div>
        <div className='sortuj'>
          <Sortowanie sortujOcena={sortujOcena} sortujTytul={sortujTytul} sortujAutor={sortujAutor} />
        </div>
        <div className='filtruj'>
          <Filtruj filtrowanie={filtruj} cofnij={cofnijFiltrowanie} />
        </div>
      </div>
    </div>
  );
}

export default App;