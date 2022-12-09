import React from 'react'
import TimelineImg from '../assets/images/timeline-img.png'
import TimelineCard from '../components/TimelineCard'

const timelineContent = [
    {
        title:'Survey your team',
        desc:'Powerful questions that get to the heart of how team members really feel.',
        border:true
    },
    {
        title:'Resolve issues quickly',
        desc:'Anonymous messaging that connects managers and employees.',
        border:false
    },
    {
        title:'Plan your 1-on-1s',
        desc:'Plan meetings together and give a stake employees and teams.',
        border:false
    },
    {
        title:'Track your progress',
        desc:'Easy-to-read reports and sharable results help managers and teams.',
        border:false
    },
]


const Timeline = () => {
  return (
    <section className='section mx-auto px-4 flex w-full space-y-4 flex-col md:flex-row'>
        <div className='w-full'>
            <img src={TimelineImg} alt="" />
        </div>
        <div>
           {timelineContent.map((tc, i) => (
                <TimelineCard key={i} borderStatus={tc.border} title={tc.title} desc={tc.desc}/>
            ))}
            
        </div>
    </section>
  )
}

export default Timeline