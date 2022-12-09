import React from 'react'

const TimelineCard = ({borderStatus,title,desc}) => {
  return (
    <div className={`w-full py-3 px-3 space-y-2 bg-[#F6F3FC] text-center md:text-justify  ${borderStatus ? 'border-b-8 md:border-b-0 border-purple-button  md:border-l-8' : 'border-b-2 bg-white'}`} >
        <h2 className='font-bold text-lg'>{title}</h2>
        <p className='text-sm'>{desc}</p>
    </div>
  )
}

export default TimelineCard