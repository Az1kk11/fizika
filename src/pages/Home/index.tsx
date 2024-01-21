import React from 'react'
import './style.css'
import logo from '../../assets/tuit.jpg'

export const Home = () => {
  return (
    <div>
      <div className="home-container">
        <br />
        <h1>ÓZBEKISTAN RESPUBLIKASÍ XALÍQ BILIMLENDIRIW MINISTRLIGI</h1>
        <br />
        {/* <div className='logo-wrap'>
          <img src={logo} alt="" />
        </div> */}
        <br />
        <h4>"Fizika páni boyınsha prezentaciyalıq multimedialı shınıǵıwlar toplamı" cifrlı tálim ortalıǵı</h4>
        <span><b>Dúziwshi</b>: <span className='underline'>S.G. Kaypnazarov</span></span>
        <br /><br />
        <br /><br /> 
        <span style={{ fontWeight: 'bold' }}>Nókis - 2023</span>
      </div>
    </div>
  )
}

export default Home