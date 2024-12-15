//saleimage
import SaleImage from "../image/saleimage.jpg"

function Saleimage(){
  return(
    <div className="sale-image">
    <div className="text-box">
        <h1>Learning that gets you</h1>
        <p>Skills for your present (and your future). Get started with us.</p>
    </div>
    <img src={SaleImage} alt="Sale Image" className='sale-image__one'/>
</div>
  )
}

export default Saleimage;