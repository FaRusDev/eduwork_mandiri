import React from 'react'
import Google from '../assets/images/google.png'
import Airbnb from '../assets/images/airbnb.png'
import Fb from '../assets/images/facebook.png'
import Hubspot from '../assets/images/hubspot.png'
import Slack from '../assets/images/slack.png'

const trustedCompany = [
  Google,Airbnb,Fb,Hubspot,Slack
]


const Trusted = () => {
  return (
    <section className='w-full flex flex-col text-center items-center space-y-2 px-4 py-4'>
        <p className='text-[10px]'>TRUSTED BY OVER <span className='font-bold'>10.000+</span> WORLD’S BEST TEAMS</p>
        <div className='w-full flex items-center justify-center'>
            {trustedCompany.map((company,index) => (
              <div key={index} className={index>3 ? `hidden md:block w-full align-center justify-center` : 'w-full align-center flex justify-center'}>
                <img  src={company} alt='img' />
              </div>
            ))}
        </div>
    </section>
  )
}

export default Trusted