import firstimage from "../image/bc1.jpg"
import firstimage2 from "../image/bc2.jpg"
import firstimage3 from "../image/bc3.jpg"
import firstimage4 from "../image/bc4.jpg"
import firstimage5 from "../image/bc5.jpg"
import firstimage6 from "../image/bc6.jpg"
import firstimage7 from "../image/bc7.jpg"
import firstimage8 from "../image/bc8.jpg"
function Popular(){
    return(
      <div class="popular">
      <h1 class="popular__title">Most Popular</h1>
      <p class="popular__substitle">Pick the best fit</p>
      <div class="popular__container">
          <div class="course-card">
          <img src={ firstimage} alt='firstImage'/>
              <div class="recommended__container--title">
                  <h3>100 days of code: The complete python bootcamp</h3>
                  <p>Stephen Grider</p>
                  <div class="stars"> 4.8 <span>★ ★ ★ ★ ★</span></div>
                  <p>$499 <del>1999</del></p>
              </div>
          </div>
          <div class="course-card">
          <img src={ firstimage2} alt='firstImage'/>
              <div class="recommended__container--title">
                  <h3>The complete 2024 web development Bootcamp</h3>
                  <p>Col Steele</p>
                  <div class="stars">
                      4.3 <span>★ ★ ★ ★ </span>
                  </div>
                  <p>$499 <del>1999</del></p>
              </div>
          </div>
          <div class="course-card">
          <img src={ firstimage3} alt='firstImage'/>
              <div class="recommended__container--title">
                  <h3>Ultimate AWS certified cloud practitioner CLF-C02</h3>
                  <p>Dr.Angela Yu</p>
                  <div class="stars"> 4.7 <span>★ ★ ★ ★ ★</span></div>
                  <p>$449 <del>1999</del></p>
              </div>
          </div>
          <div class="course-card">
          <img src={ firstimage4} alt='firstImage'/>
              <div class="recommended__container--title">
                  <h3> Ultime AWS Certified Solutions Architect Associate</h3>
                  <p>Jose Portilla</p>
                  <div class="stars"> 3.7 <span>★ ★ ★ ★</span></div>
                  <p>$499 <del>1999</del></p>
              </div>
          </div>
          <div class="course-card">
          <img src={ firstimage5} alt='firstImage'/>
              <div class="recommended__container--title">
              <h3>Modern react with Redux[2024 Updated] version for 2024</h3>
                  <p>Kyle Pew</p>
                  <div class="stars"> 4.8 <span>★ ★ ★ ★ ★</span></div>
                  <p>$499 <del>1999</del></p>
              </div>
          </div>
          <div class="course-card">
          <img src={ firstimage6} alt='firstImage'/>
              <div class="recommended__container--title">
              <h3>Complete Javascript &JQuery course with bonus Vue js intro</h3>
                  <p>Hitesh Choudhary</p>
                  <div class="stars"> 4.7 <span>★ ★ ★ ★ ★</span></div>
                  <p>$449 <del>1999</del></p>
              </div>
          </div>
          <div class="course-card">
          <img src={ firstimage7} alt='firstImage'/>
              <div class="recommended__container--title">
              <h3>The Complete JS course 2024 from to Ecpert</h3>
                  <p>Maven Analytics</p>
                  <div class="stars"> 4.7 <span>★ ★ ★ ★ ★</span></div>
                  <p>$449 <del>1999</del></p>
              </div>
          </div>
           <div class="course-card">
          <img src={ firstimage8} alt='firstImage'/>
              <div class="recommended__container--title">
              <h3> Practical Webdevelopment:22 courses in 1 class</h3>
                  <p>Jonas Ra</p>
                  <div class="stars"> 3.7 <span>★ ★ ★ ★</span></div>
                  <p>$499 <del>1999</del></p>
              </div>
          </div>
          </div>
        </div>
  
    )
  }

  export default Popular;