import { books } from "@/data/books"
import type { Book } from "@/types/book"

function getAll(): Book[] {
  return books
}

function getById(id: number): Book | undefined {
  return books.find((book) => book.id === id)
}

function getByTitle(title: string): Book | undefined {
  return books.find(
    (book) => book.title.toLowerCase() === title.trim().toLowerCase()
  )
}

export const bookService = {
  getAll,
  getById,
  getByTitle
}