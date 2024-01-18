/* eslint-disable react/prop-types */
export default function SearchBar({ setSearchedBooks, booksData }) {
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const input = e.target.searchInput.value

    if (input === "") return setSearchedBooks(booksData)
    const newBooks = booksData.filter((book) => {
      return book.title.toLowerCase().includes(input.toLowerCase())
    })
    setSearchedBooks(newBooks)
  }

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="flex">
        <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]">
          <input
            type="search"
            id="search-dropdown"
            name="searchInput"
            className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
            placeholder="Search Book"
          />
          <div className="absolute right-0 top-0 flex h-full items-center">
            <button
              type="submit"
              className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
            >
              <svg
                className="h-[14px] w-[14px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
