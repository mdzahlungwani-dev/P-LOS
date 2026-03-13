import { useState } from "react"
import axios from "axios"

export default function EventForm(){

  const [eventType,setEventType] = useState("")
  const [weight,setWeight] = useState("")

  const submitEvent = async () => {

    await axios.post("http://localhost:8000/events/",{

      user_id:"123",

      event_type:eventType,

      metadata:{},

      emotional_weight:parseFloat(weight)

    })

    alert("Event logged")

  }

  return(

    <div>

      <h2>Log Life Event</h2>

      <input
      placeholder="Event type"
      value={eventType}
      onChange={(e)=>setEventType(e.target.value)}
      />

      <input
      placeholder="Emotional weight"
      value={weight}
      onChange={(e)=>setWeight(e.target.value)}
      />

      <button onClick={submitEvent}>Submit</button>

    </div>

  )

}
