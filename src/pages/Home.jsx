import { Fragment } from "react"
import Landing from "../componets/Landing"
import Features from "../componets/Features"
import StayProductive from "../componets/StayProductive"
import Testemonials from "../componets/Testemonials"
import GetStarted from "../componets/GetStarted"

function Home() {
  
    return <Fragment>
      <Landing />
      <Features/>
      <StayProductive/>
      <Testemonials/>
      <GetStarted />
    </Fragment>
    
 
}

export default Home