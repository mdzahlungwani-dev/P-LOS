import Navbar from "../components/Navbar"
import EventForm from "../components/EventForm"

export default function Dashboard(){

  return(

    <div>

      <Navbar/>

      <div style={{padding:"60px"}}>

        <h1>Dashboard</h1>

        <EventForm/>

      </div>

    </div>

  )
}
