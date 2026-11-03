import { Link, useParams } from "react-router-dom"
import { bookService } from "@/services/BookService"


function BookDetail() {
  const { title } = useParams()

  const book = bookService.getByTitle(String(title))

  if (!book) {
    return <p>Libro no encontrado</p>
  }

  return (
    <main >
      <Link to="/">
        Volver a la biblioteca
      </Link>

      <article>
        <img
          src={book.coverImage}
        />

        <h1>{book.title}</h1>

        <p><strong>Autor:</strong> {book.author}</p>
        <p><strong>Género:</strong> {book.genre}</p>
        <p><strong>Año:</strong> {book.publishedYear}</p>
        <p><strong>ISBN:</strong> {book.isbn}</p>

        <p>{book.description}</p>
      </article>
    </main>
  )
}

export default BookDetail