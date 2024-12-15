function Navbar(){
    return(
      <div className="navbar">
          <div className="navbar__s1">
              <h1 className="navbar__s1__title">Udemy</h1>
          </div>
          <div class="navbar__s2">
              <i class="fa-solid fa-magnifying-glass" style={{color:" #141316;"}}></i>
              <input placeholder="Search for anything here. Tech, Bussiness, art..."></input>
  
          </div>
          <div class="navbar__s3">
              <p>Courses</p>
              <p>My learning</p>
              <i className="fa-solid fa-cart-shopping" style={{color:" #0c0c0d;"}}></i>
              <i className="fa-solid fa-bell" style={{color:" #010813;"}}></i>
              <i className="fa-solid fa-user" style={{color:" #02060d;;"}}></i>
          </div>
          <div className="navbar__s4">
          <i className="fa-solid fa-bars"></i>
         </div>
  
      </div>
    )
  }

  export default Navbar;