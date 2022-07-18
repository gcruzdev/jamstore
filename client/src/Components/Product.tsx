import IProduct from "../Interfaces/IProduct" 
import maca from '../Assets/images/maca.jpg' 
import { Link } from "react-router-dom"
interface ProductProps {
  ProductData: IProduct
}

export default function Product({ProductData}: ProductProps) {
  return(
    <div className="product">
      <Link to={`produto/${ProductData.code}`}>
        <img src={maca} alt="Geléia de maçã"/>
        <span id="product-name">{ProductData.name}</span>
      </Link>
      <p id="product-value">R${ProductData.value}</p>
    </div>
  )
}