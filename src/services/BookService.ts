import { books } from "@/data/books"
import type { Book } from "@/types/book"

function getAll(): Book[] {
  return books
}

function getById(id: number): Book | undefined {
  return books.find((book) => book.id === id)
}

export const bookService = {
  getAll,
  getById,
}