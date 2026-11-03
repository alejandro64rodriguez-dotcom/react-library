import type { Book } from "@/types/book"

interface Props {
  book: Book
  onClick: (id: number) => void
}

function BookCard({ book, onClick }: Props) {
  return (
    <article
      onClick={() => onClick(book.id)}
    >
      <img
        src={book.coverImage}
        alt={`Portada de ${book.title}`}
      />

      <h2>{book.title}</h2>

      <p>{book.author}</p>

      <p>{book.genre}</p>

      <p>{book.publishedYear}</p>
    </article>
  )
}

export default BookCard