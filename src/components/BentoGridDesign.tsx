// import React from "react";

export const BentoGridDesign = () => {
   return (
      <div className=''>
         <h1>BentoGridDesign</h1>

         <div className='grid grid-cols-8 grid-rows-6 h-screen w-full p-10 gap-4'>
            <div className='col-span-3 row-span-4 bg-stone-600 rounded-md'></div>
            <div className='col-span-2 row-span-2 bg-stone-600 rounded-md'></div>
            <div className='col-span-3 row-span-2 bg-stone-600 rounded-md'></div>
            <div className='col-start-4 col-end-7 row-start-3 row-end-5 bg-stone-600 rounded-md'></div>
            <div className='col-span-2 row-span-4 bg-stone-600 rounded-md'></div>
            <div className='col-span-2 row-span-2 bg-stone-600 rounded-md'></div>
            <div className='col-span-4 row-span-2 bg-stone-600 rounded-md'></div>
            {/* <div className='col-span-2 row-span-2 bg-stone-600 rounded-md'></div> */}
            <div className=''></div>
            <div className=''></div>
         </div>
      </div>
   );
};
