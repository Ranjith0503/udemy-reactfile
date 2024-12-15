import Footer from './assets/components/Footer'
import Popular from './assets/components/Popular'
import Topic from './assets/components/Topic'
import Navbar from './assets/components/Navbar'
import Catagorie from './assets/components/Catagories'
import Saleimage from './assets/components/Saleimage'
import Recommended from './assets/components/Recommended'

function App(){
  return(
  <div>
     <Navbar></Navbar>
     <Catagorie></Catagorie>
     <Saleimage></Saleimage>
     <Recommended></Recommended>
     <Topic></Topic>
     <Popular></Popular>
     <Footer></Footer>
</div>
  )
}

export default App;