import { useNavigate } from "react-router-dom"
import BookCard from "@/components/BookCard"
import { bookService } from "@/services/BookService"

function BookList() {
  const books = bookService.getAll()
  const navigate = useNavigate()

  function handleBookClick(id: number) {
    navigate(`/books/${id}`)
  }

  return (
    <main>
      <h1 >Biblioteca</h1>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onClick={handleBookClick}
          />
        ))}
      </section>
    </main>
  )
}

export default BookList