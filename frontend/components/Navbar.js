export default function Navbar(){

  return(

    <nav style={{
      padding:"20px",
      background:"#111",
      color:"white",
      display:"flex",
      justifyContent:"space-between"
    }}>

      <h2>LifeOS</h2>

      <div>

        <a href="/" style={{marginRight:20}}>Home</a>

        <a href="/dashboard">Dashboard</a>

      </div>

    </nav>

  )

}
