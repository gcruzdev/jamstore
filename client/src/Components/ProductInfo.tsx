import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import IProduct from "../Interfaces/IProduct"
import maca from '../Assets/images/maca.jpg' 
import '../Assets/styles/productinfo.css'

const ProductInitialValue: IProduct = {
  'name': '',
  'value': 0,
  'description': '',
  'stock': 0,
  'code': '',
}

export default function ProductInfo() {
  const { code } = useParams()
  const [isLoaded, setIsLoaded] = useState(false)
  const [productInfo, setProductInfo] = useState<IProduct>(ProductInitialValue)

  useEffect(() => {
    fetch("http://localhost:8000/product/" + code)
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true)
          setProductInfo(data[0])
        }
      )
  })

  if (isLoaded) {
    return(
      <div className="product-info">
        <div className="product-img">
          <img src={maca}/>
        </div>
        <div className="product-details">
          <h1>{productInfo.name}</h1>
          <p id="value">R$ {productInfo.value}</p>
          <label htmlFor="quantity">
            Quantidade: 
          </label>
          <input name="quantity" id="quantity" type="number"/>
          <p id="description">{productInfo.description}</p>
          <button id="add-to-cart">Adicionar ao carrinho</button>
        </div>
      </div>
    )
  }
  else {
    return(
      <div>
        <p>Loading...</p>
      </div>
    )
  }
}