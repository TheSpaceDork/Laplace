
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Overview from "../pages/Overview"

import Portfolio from "../pages/Portfolio"
import Wishlist from "../pages/Wishlist"
import Orders from "../pages/Orders"
import Reports from "../pages/Reports"
import Taxes from "../pages/Taxes"
const AnimateRoutes = () => {
    const location = useLocation()
  return (
      <AnimatePresence mode="wait" initial={false}>

         
          <Routes location={location} key={location.pathname}>
              <Route exact path="/" element={<Overview/>}  />
              <Route exact path="/portfolio" element={<Portfolio/>}  />
              <Route exact path="/wishlist" element={<Wishlist/>}  />
              <Route exact path="/orders" element={<Orders/>}  />
              <Route exact path="/reports" element={<Reports/>}  />
              <Route exact path="/taxes" element={<Taxes/>}  />
          </Routes>
         
      </AnimatePresence>
  )
}

export default AnimateRoutes