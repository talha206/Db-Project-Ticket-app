import React from 'react'
import TicketTimeTracker from '../tickets/Ticket';
import { tickets } from '../../lib/tickets';

const Ticket = () => {
  return (
    <div className=' w-[100%] h-auto font-mono'>
      <h1 className='w-[87%] sm:w-[100%] 2xl:text-3xl sm:text-2xl text-lg py-6 sm:pl-16  pl-8  text-[#9B9BC3] d-flex flex-1 font-mono font-medium bg-[#424247] tracking-widest'>Ticket Time Tracker</h1>
      <div className='2xl:px-40 lg:px-12 xl:px-14 md:px-12 sm:px-8 py-10 '>
         
          <div className='flex flex-col-reverse font-mono lg:flex-row  sm:items-center lg:items-start justify-between '>
          
          <div className='inline-block xl:ml-10'>
          <h2 className=' 2xl:text-2xl lg:text-xl  md:text-lg text-sm font-medium sm:mb-50 mt-6 ml-10 sm:ml-0'>Existing tickets</h2>
          <div className='pt-7 sm:pt-12  ml-4 sm:ml-0 '>
          
          <div > {/* This enables horizontal scrolling */}
                <TicketTimeTracker tickets={tickets} />
              </div>
          </div>
          </div>
            <div className='bg-[#EFEFF0]  rounded-xl lg:w-[40%]  2xl:w-[35%] w-[70%]  2xl:h-[44rem] sm:h-[340px] h-64 md:text-center lg:h-[25rem] lg:mt-16 xl:h-[30rem] sm:ml-0 ml-10 pb-10   '>
              <h1 className=' md:text-md  sm:text-[16px] text-[11px] text-center font-medium 2xl:text-3xl sm:pr-[50px] sm:pl-[49px] sm:pt-9 pr-9 pl-10 pt-7 '> Select an existing ticket to log time <br /> or <br /><span className='underline underline-offset-2'>Create a new one</span> </h1> 
              <div className='lg:pt-[72px] md:pt-8 sm:pt-6 sm:pl-12 sm:pr-9 pl-10 pr-8 pt-5'>
                     <span className='mr-2 bg-[#D9D9D9]  lg:h-[33px] md:h-7 h-5 w-[100%]  inline-block'></span>
                     <span className='mr-2 bg-[#D9D9D9]  lg:h-[33px]  md:h-7 h-5 w-[100%]  inline-block  md:mt-[26px] sm:mt-5 mt-3'></span> 
                     <span className='grid grid-cols-2 gap-x-4 items-center'>
                       <span className='mr-2 bg-[#D9D9D9] 2xl:h-16 lg:h-[33px]  md:h-7 h-5 w-[100%]  inline-block  md:mt-[26px] sm:mt-5 mt-3'></span> 
                       <span className='mr-2 bg-[#D9D9D9] 2xl:h-16 lg:h-[33px] md:h-7 h-5 w-[100%]  inline-block  md:mt-[26px] sm:mt-5 mt-3'></span>
                    </span>
             </div>
           </div>
         </div>
      </div>

    </div>
  )

}
 
export default Ticket