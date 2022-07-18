import IProduct from "../Interfaces/IProduct" 
interface ProductProps {
  ProductData: IProduct
}

export default function Product({ProductData}: ProductProps) {
  return(
    <div className="product">
      <img src="../Assets/images/maca.jpg"/>
      <span>{ProductData.name}</span>
      <p id="product-value">R${ProductData.value}</p>
    </div>
  )
}