import { Route, Routes } from "react-router-dom";
import MainPage from "../MainPage";
import ProductInfo from "./ProductInfo";

export default function PageRoutes() {
  return(
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/produto/:code" element={<ProductInfo />} />
    </Routes>
  )
}