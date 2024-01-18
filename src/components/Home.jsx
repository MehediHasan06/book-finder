import Filter from "src/components/Filter"
import Navbar from "src/components/Navbar"
import SearchBar from "src/components/SearchBar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="my-10 lg:my-14">
        <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
          <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
            <div>
              <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
              <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
                Trending Books of the Year
              </h2>

              {/* search bar */}
              <SearchBar />
            </div>

            {/* filter */}
            <div className="flex items-stretch space-x-3">
              <Filter />
            </div>
          </div>
        </header>
      </main>
    </>
  )
}
