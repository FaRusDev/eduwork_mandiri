import { useState, useEffect } from 'react'

import FeatureCard from '../components/FeatureCard'
import Icon1 from '../assets/images/icon1.png'
import Icon2 from '../assets/images/icon2.png'
import Icon3 from '../assets/images/icon3.png'
import Icon4 from '../assets/images/icon4.png'
import Icon5 from '../assets/images/icon5.png'
import Icon6 from '../assets/images/icon6.png'


const featureItem = [
  {
    ic : Icon1,
    title : 'Team Surveys & Reports',
    desc : 'Short, anonymous surveys track your team’s needs weekly so you can focus.'
  },
  {
    ic : Icon2,
    title : 'Learning Center',
    desc : 'Build relationships by planning 1-on-1s and start meetings.'
  },
  {
    ic : Icon3,
    title : 'Collaborative 1:1 ',
    desc : 'Quickly get solutions tailored to your personal challenges from the manager.'
  },
  {
    ic : Icon4,
    title : 'Anonymous Messaging',
    desc : 'Develop trust in a safe channel for important conversations.'
  },
  {
    ic : Icon5,
    title : 'Conversation Engine',
    desc : 'Communicate confidently with recommended talking points.'
  },
  {
    ic : Icon6,
    title : 'Exclusives Manager',
    desc : 'Access manager tips, activities and best practices from our team of experts.'
  }
]

const Features = () => {
  // const [featureCount,setFeatureCount] = useState(3)
  // const [cl,setCl] = useState('block')
  const [features, setFeatures] = useState([])

  useEffect(() => {
    // setFeatureCount(3)

      let x = []
      featureItem.map((f,i)=>{
        console.log(i)
        return x.push(<FeatureCard cl='block' title={f.title} desc={f.desc} ic={f.ic} key={i}/>)
        
      })
      
      setFeatures(x)
        
  }, [])

    


  const showMoreFeature = () => {
    // setFeatureCount(featureItem.length)

  }

  // const showFeature = () =>{

  //   // for (let index = 0; index < featureCount; index++) {
  //   //   <FeatureCard cl='block' title={item.title} desc={item.desc} ic={item.ic}/>
  //   // }
  // }

  return (
    <section className='text-center px-4'>
      <h2 className='font-bold text-xl my-12'>Make your work easier</h2>
      <div className="flex flex-col space-y-5">
        {features}
        {/* {featureCount} */}
        <button onClick={showMoreFeature} className='w-full p-2 bg-purple-second rounded-md text-purple-button hover:bg-purple-button hover:text-white md:hidden'>View more benefits</button>
      </div>
    </section>
  )
}

export default Features