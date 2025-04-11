import Navbar from "~/components/Navbar";
import Notification from "~/components/Notification";
import Projects from "~/components/Projects";
import Servicelanding from "~/components/Servicelanding";
import fernright from "../assets/fern right.png";
import fernleft from "../assets/fern left.png"


export function Welcome() {
  return (
    <>
    <main className="min-h-screen bg-[#fff7ea] text-[#2a2a2a]">
      {/* notification bar */}
      <section className="bg-[#000000] text-center">
      <Notification />
      </section>

      {/* navigation bar */}
      <section className="bg-[#fff7ea] pt-10">
        <Navbar />
      </section>

      {/* hero */}
      <section className="bg-[#fff7ea] py-20 px-40 pt-[15em] pb-[15em] text-left">
        <h1 className="text-6xl font-semibold mb-4">Let's Make Your <span className="text-6xl font-bold text-[#2c6e49] ">WEBSITE</span>
        <br></br>as <span className="font-bold text-6xl text-[#2c6e49]">WILDLY UNIQUE</span><br></br>
        as an Orangutan in Sunglasses
        </h1>
        <a className="bg-[#4f7445] text-white text-semibold p-3 rounded-full border border-black py-2 px-6 mt-20 text-center text-sm transition-all shadow-sm hover:shadow-lg disabled:pointer-events">Homepage</a>

        {/* <button className="bg-[#fbb031] text-black text-semibold flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Homepage
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1.5">
            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
          </svg>
        </button> */}
      </section>

      {/* this the area for the framer motion or css pure  */}
      <section className="bg-[#788b5c] text-center pt-3 pb-3">
        <p className="text-white">React   *    Typescript    * </p>
      </section>

      {/* call to action */}
      <section className="text-center mt-40 mb-50 relative">
        <h2 className="font-bold text-5xl font-heading">Custom Website with <span className="text-[#788b5c] font-heading-two text-6xl">Wild Flair</span></h2>
        <p className="pt-10 text-xl">Want a website that actually uniquely feels like your brand?</p>
        <p className="pt-4 text-xl">Your website is your brand's personality in a digital form. Whether you're booking clients, <br></br>
        selling products, or building a community, your online presence should <span className="font-bold italic">speak</span> your language
        </p>
        <img className="absolute w-80 right-0 top-3 hidden sm:block" src={fernright}></img>
      </section>

      {/* the previous work */}

      <section className="bg-[#bfd9c3] text-center pt-40 pb-10 skew-section">
        <h2 className="font-bold text-5xl font-heading">Welcome to the</h2>
        <h2 className="text-[#00000] font-heading-two text-6xl">Canopy</h2>
        <p className="pt-10 text-xl">I create website with character, strategy and a little sprinkle of a jungle magic</p>
        <p className="pt-4 text-xl">Things that I've been playing around with lately</p>
      </section>

      {/* the work */}
      <section className="bg-[#bfd9c3] pb-30">
       <Projects />
      </section>

      {/* services why?  */}
      <section className="text-center pt-40 relative">
        <div>
          <h2 className="font-bold text-5xl font-heading">Your Website Deserves</h2>
          <h2 className="font-heading-two text-6xl text-[#788b5c] pt-3"> Personality </h2>
          <p className="pt-10 text-xl">This is going to be a two way communication. That's mean we will have <br></br>
          a discussion to clear all requirement before creating a design that you <br></br> will love</p>
        </div>
        < Servicelanding />
        <img className="absolute w-80 left-[-3%] top-3 hidden sm:block" src={fernleft}></img>
      </section>
    </main>
    <footer>

    </footer>

    </>
  )
}
