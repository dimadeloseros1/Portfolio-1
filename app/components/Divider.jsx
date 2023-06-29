import React from 'react'

const Divider = () => {
  return (
    <div className="diver w-full bg-black">
        <div className="divider-container gap-8 items-center text-center flex-col bg-inherit flex md:flex-row w-[89%] md:m-auto bg-blue-600 md:justify-between py-12 max-w-[1500px] ">
            <div>
                <h1 className=' text-2xl'>Projects Done</h1>
                <span className='text-5xl text-slate-50'>15+</span>
            </div>
            <div>
                <h1>Experience</h1>
                <span className='text-5xl text-slate-50'>1+</span>
            </div>
            <div>
                <h1>Clients Satisfaction</h1>
                <span className='text-5xl text-slate-50'>100%</span>
            </div>
        </div>
    </div>
  )
}

export default Divider