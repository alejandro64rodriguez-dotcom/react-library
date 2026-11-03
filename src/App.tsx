import { BrowserRouter, Routes, Route } from "react-router-dom"
import BookList from "@/components/BookList"
import BookDetail from "@/components/BookDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App