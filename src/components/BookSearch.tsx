import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { bookService } from "@/services/BookService"

function BookSearch() {
  const [searchTitle, setSearchTitle] = useState("")
  const navigate = useNavigate()

 function handleSearch() {
    const book = bookService.getByTitle(searchTitle)

    if (!book) {
      return
    }

    navigate(`/books/${book.id}`)  }

  return (
    <div>
      <input
        type="text"
        value={searchTitle}
        onChange={(event) => setSearchTitle(event.target.value)}
        placeholder="Buscar libro por título"
      />

      <button
        onClick={handleSearch}
       >
        Buscar
      </button>
    </div>
  )
}

export default BookSearch