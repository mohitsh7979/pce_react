import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import DataFetching from './Components/DataFetching/DataFetching'
import { Routes,Route} from 'react-router-dom'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Description from './Components/Description/Description'
import Cart from './Components/Cart/Cart'
import Signup from './Components/Signup/Signup'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<DataFetching/>}></Route>
      <Route path='about/' element={<About/>}></Route>
      <Route path='prod/' element={<DataFetching/>}></Route>
      <Route path='desc/:id/' element={<Description />}></Route>
      <Route path='cart/' element={<Cart />}></Route>
      <Route path='contact/' element={<Contact/>}></Route>
      <Route path='signup/' element={<Signup/>}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App