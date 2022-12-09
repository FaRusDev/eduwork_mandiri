import React from 'react'

const FeatureCard = ({ic,title,desc,cl}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center space-y-4 px-5 ${cl}`}>
        <img src={ic} alt="" className='w-12' />
        <h3 className='font-bold text-l'>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default FeatureCard