import React from 'react'

function TabsL() {
  return (
    <div>

      <section id='tabs'>
        <div className="container relative mx-auto my-6 mb-24 mt-12 px-6 tab">
          {/* Tabs Panel Container*/}
          <div className='flex flex-col justify-center max-w-xl mx-auto 
           mb-6 p-5 border-b md:space-x-10 md:flex-row'>
            {/* Tabs 1*/}
            <div className='flex justify-center text-center 
            border-b md:border-b-0 '>
              <button role="tab" type="button" onClick={() => openCity(event, 'Paris')} className='flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset text-yellow-600 shadow bg-white dark:text-white dark:bg-yellow-600 py-5 border-b-4 btn btn-xs btn-danger duration-500' aria-selected="">
                React
              </button>
            </div>
            {/* Tabs 2*/}
            <div className='flex justify-center text-center 
            border-b md:border-b-0 '>
              <button role="tab" type="button" onClick={() => openCity(event, 'Tokyo')} className='flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset hover:text-gray-800 focus:text-yellow-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400 py-5 border-b-4 btn btn-xs btn-danger duration-500' aria-selected="">
                Dev
              </button>
            </div>
          </div>


        </div>
      </section>

      {/* Tab Panels */}
      <section className='container mx-auto'>
        {/* Panel 1*/}
        <div className='flex flex-col  md:flex-row md:space-x-7'>
          {/* Panel Image */}
          <div id="Paris" className='flex justify-center mx-auto transition duration-700 tabcontent'>
            <img src="./public/img/react.png" alt="dd" className='h-14' />
            <div className='flex flex-col py-3 space-y-8 w-1/2'>
              <h3 className='mt-32 text-1xl font-semibold text-center md:mt-0 md:text-left'>
                React
              </h3>
            </div>
          </div>
          {/* Panel Content */}

        </div>
        {/* Panel 2*/}
        <div className='flex flex-col  md:flex-row md:space-x-7'>
          {/* Panel Image */}
          <div id="Tokyo" className=' justify-center mx-auto hidden transition duration-700 tabcontent'>
           <img src="./public/img/tailwind.png" alt="dd" className='h-14' />
            <div className='flex flex-col py-3 space-y-8 w-1/2'>
              <h3 className='mt-32 text-1xl font-semibold text-center md:mt-0 md:text-left'>
                Tailwind
              </h3>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}

export default TabsL
