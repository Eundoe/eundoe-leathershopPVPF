
import App from "./Component/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";


// Data
import BaseData from "./data/product.json"
import OrderData from "./data/ordermade.json"
import MagaData from "./data/magazine.json"
import store from "./store";


// Pages
import Home from "./Pages/Home";
import ErrorCode from "./Pages/ErrorPage";
import Aboutus from "./Pages/Aboutus";
import Shop from "./Pages/Shop";
import Order from "./Pages/Order";
import Magazine from "./Pages/Magazine";
import Event from "./Pages/Event";
import Contact from "./Pages/Contact";





function Main(){


  const TrendData = BaseData.filter((item,index) => {
    return item.trend === "trend"
  })

  return(
    <Provider store={store}>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home TrendData ={TrendData}/>}/>
          <Route path="/about" element={<Aboutus/>} />
          <Route path="/event" element={<Event/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/magazine" element={<Magazine MData = {MagaData}/>} />
          <Route path="/order" element={<Order OrderData = {OrderData}/>} />
          <Route path="/store" element={<Shop InitData = {BaseData}/>} />
          <Route path="*" element={<ErrorCode/>}/>
        </Routes>
      </App>
    </BrowserRouter>
    </Provider>
  )
}

export default Main