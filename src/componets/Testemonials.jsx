import { useState } from "react"
import TestemonialBox from "./TestemonialBox"

function Testemonials() {
    const[testData, setTestData] =useState([
        { id:1,
         desec:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          image:"profile-1.jpg",
           position:"Founder & CEO, Huddle" ,
            name:"Ahmed"
        },
        { id:2,
         desec:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          image:"profile-2.jpg",
           position:"Founder & CEO, Huddle" ,
            name:"Ahmed"
        },
        { id:3,
         desec:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          image:"profile-3.jpg",
           position:"Founder & CEO, Huddle" ,
            name:"Ahmed"
        }
    ])
  return (
    <section className="pb-[350px]">
        <div className="container relative">
          <div className="absolute left-[20px] top-[-35px]">
            <img src="/src/assets/images/bg-quotes.png"/>
          </div>
          <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10">
            {testData.map((item) => (
                <TestemonialBox key={item.id} desc={item.desec} image={item.image} position={item.position} name={item.name}/>
            ) )}
          </div>
        </div>
    </section>
  )
}

export default Testemonials