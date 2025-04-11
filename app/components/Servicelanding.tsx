
const Servicelanding = () => {
  return (
    <>
      <div className="justify-center p-30 gap-10 flex">
        <div>
          <img className="h-80 w-50" src ="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"></img>
        </div>
        <div>
          <div className="relative flex flex-col my-6 bg-white border border-black-200 rounded-lg w-96">
            <div className="p-4">
              <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                Tailored Website
              </h5>
              <p className="text-slate-600 leading-normal font-light">
                A thoughtful website that is designed to showcase your <br></br>brand and aligned the way you want it
              </p>
            </div>
          </div>
          <div className="relative flex flex-col my-6 bg-white border border-black-200 rounded-lg w-96">
            <div className="p-4">
              <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                Rebranding
              </h5>
              <p className="text-slate-600 leading-normal font-light">
              Your business has grown, but you are still stuck with the same website? <br></br> Let's breathe new life into your website.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col my-6 bg-white border border-black-200 rounded-lg w-96">
            <div className="p-4">
              <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                Ecommerce
              </h5>
              <p className="text-slate-600 leading-normal font-light">
                Need to keep things fresh? For brands that grow fast, it will need an ongoing updates and support to keep everything running smoothly.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col my-6 bg-white border border-black-200 rounded-lg w-96">
            <div className="p-4">
              <h5 className="mb-2 text-slate-800 text-xl font-semibold">
              Site Maintenance & Support
              </h5>
              <p className="text-slate-600 leading-normal font-light">
                Need to keep things fresh? For brands that grow fast, it will need an ongoing updates and support to keep everything running smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center text-center">
        <button className="bg-[#4f7445] text-white flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Check Out The Package
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="bg-[#fbb031]" className="w-4 h-4 ml-1.5">
            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </>
  )
}

export default Servicelanding
