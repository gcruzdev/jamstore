import { useEffect, useState } from "react"
import Product from "./Product"
import IProduct from "../Interfaces/IProduct"
import '../Assets/styles/productsdisplay.css'

export default function ProductsDispaly() {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  })


  return(
    <div className="products-display">
      {
        products.map((el: IProduct, index: number) => {
          return <Product
            ProductData={el}
            key={index}
          />
        })
      }
    </div>
  )
}