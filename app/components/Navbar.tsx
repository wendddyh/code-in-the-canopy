import logoblack from "../assets/logo black crop.png"

const Navbar = () => {
  return (
    <nav className="w-full mx-auto text-white px-40 lg:py-3">
    <div className="flex flex-wrap items-center justify-between mx-auto text-slate-800">

        <img src={logoblack} alt="code in canopy logo" className="w-45"></img>


      <div className="hidden lg:block">
        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <li
            className="flex items-center p-1 text-m gap-x-2 text-slate-600">
            <a href="#" className="flex items-center">
              Services
            </a>
          </li>
          <li
            className="flex items-center p-1 text-m gap-x-2 text-slate-600">


            <a href="#" className="flex items-center">
              Work
            </a>
          </li>
          <li
            className="flex items-center p-1 text-m gap-x-2 text-slate-600">


            <a href="#" className="flex items-center">
              About
            </a>
          </li>
          <li
            className="flex items-center p-1 text-m gap-x-2 text-slate-600">


            <a href="#" className="flex items-center">
              Contact
            </a>
          </li>
        </ul>
      </div>
  </div>
</nav>
  )
}

export default Navbar
