import { useState } from "react"
import FeatureBox from "./FeatureBox"

function Features() {
    const [items] = useState([
        {    icon:"icon-access-anywhere.svg" ,
             title:"Acces your files, anywhere" ,
             desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do."
        },
         {    icon:"icon-collaboration.svg" ,
             title:"Acces your files, anywhere" ,
             desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do."
        },
        {    icon:"icon-any-file.svg" ,
             title:"Acces your files, anywhere" ,
             desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do."
        },
         {    icon:"icon-security.svg" ,
             title:"Acces your files, anywhere" ,
             desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do."
        }
        
     ])
  return (
     <section className="pb-[150px]">
   <div className="container" >
     <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865] mx-auto max-w-full">
        {items.map((item, index) => (
              <FeatureBox key={index} title={item.title} icon={item.icon} desc={item.desc}/>
        ))}
       
     </div>
   </div>
   </section>
  )
}

export default Features