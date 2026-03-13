import Navbar from "../components/Navbar"

export default function Home(){

  return(

    <div>

      <Navbar/>

      <section style={{padding:"80px", textAlign:"center"}}>

        <h1>Personal Adaptive Life OS</h1>

        <p>Your life. Modeled, understood, improved.</p>

        <a href="/dashboard">Enter Dashboard</a>

      </section>

    </div>

  )
}
