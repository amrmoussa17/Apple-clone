import { appleImg, searchImg, bagImg } from "../utils"
import { navLists } from "../constants"

const Navbar = () => {
  return (
    <header className="w-full py-5 px-5 sm:px-10">
      <nav className="flex w-full screen-max-width items-center">
        <img src={appleImg} width={14} height={18} alt="Apple" />
        <div className="flex-1 flex justify-center max-sm:hidden">
          {navLists.map((nav, i) => (
            <div
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition"
              key={i}
            >
              {nav}{" "}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
