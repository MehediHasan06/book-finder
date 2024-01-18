import { useState } from "react"
import Book from "src/components/Book"
import Filter from "src/components/Filter"
import Navbar from "src/components/Navbar"
import SearchBar from "src/components/SearchBar"
import booksData from "/src/assets/books.json"

export default function Home() {
  const [searchedBooks, setSearchedBooks] = useState(booksData)

  return (
    <>
      <Navbar />
      <main className="my-10 lg:my-14">
        {/* Header */}
        <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
          <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
            <div>
              <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
              <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
                Trending Books of the Year
              </h2>
              {/* search bar */}
              <SearchBar
                setSearchedBooks={setSearchedBooks}
                booksData={booksData}
              />
            </div>

            {/* filter */}
            <div className="flex items-stretch space-x-3">
              <Filter />
            </div>
          </div>
        </header>

        {/* Books Grids */}
        <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchedBooks.map((book) => {
            return <Book key={book.id} book={book} />
          })}
        </div>
      </main>
    </>
  )
}
