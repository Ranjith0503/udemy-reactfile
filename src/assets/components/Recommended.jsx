
//recommended images
import firstimage from "../image/c1.jpg"
import secondimage from "../image/c2.jpg"
import thirdimage from "../image/c3.jpg"
import fourthimage from "../image/c4.jpg"

function Recommended(){
    return(
      <div>
      <h1 className="recommended__title">Recommended for you</h1>
          <p>Pick the best fit</p>
          <div className="recommended__container">
              <div class="course-card">
                  <img src={ firstimage} alt='firstImage'/>
                  <div className="recommended__container--title">
                      <h3>2024 Python Data Visualization Materclass</h3>
                      <p>Ranjith R</p>
                      <div className="stars"> 4.8 <span>★ ★ ★ ★ ★</span></div>
                      <p>$499 <del>1999</del></p>
                  </div>
              </div>
              <div class="course-card">
              <img src={ secondimage} alt='firstImage'/>
                  <div className="recommended__container--title">
                      <h3> Web Development Bootcamp online course 2024 </h3>
                      <p>Colt Steele</p>
                      <div className="stars">
                          4.3 <span>★ ★ ★ ★ </span>
                      </div>
                      <p>$499 <del>1999</del></p>
                  </div>
              </div>
              <div class="course-card">
              <img src={thirdimage} alt='firstImage'/>
                  <div className="recommended__container--title">
                      <h3>Master UI/UX designing with figma 2024</h3>
                      <p>Rob Percival</p>
                      <div class="stars"> 4.7 <span>★ ★ ★ ★ ★</span></div>
                      <p>$499 <del>1999</del></p>
                  </div>
              </div>
              <div class="course-card">
              <img src={fourthimage} alt='firstImage'/>
                  <div className="recommended__container--title">
                      <h3> Data analytics and Data Science Bootcamp 2024</h3>
                      <p>Srini Vanamala</p>
                      <div className="stars"> 3.7 <span>★ ★ ★ ★</span></div>
                      <p>$499 <del>1999</del></p>
                  </div>
              </div>
          </div>
      </div>
    )
  }

  export default Recommended;