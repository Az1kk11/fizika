import React from 'react'
import './style.css'
import logo from '../../assets/tuit.jpg'

export const Home = () => {
  return (
    <div>
      <div className="home-container">
        <br />
        <h1>Ózbekistan Respublikası informaciyalıq texnologiyaları hám kommunikaciyaların rawajlandırıw ministrligi</h1>
        <h1>Muhammed al-Xorezmiy atındaǵı  Tashkent informaciyalıq texnologiyaları universiteti Nókis filialı</h1>
        <br />
        <div className='logo-wrap'>
          <img src={logo} alt="" />
        </div>
        <br />
        <h4>"Fizika páni boyınsha prezentaciyalıq multimedialı shınıǵıwlar toplamı" cifrlı tálim ortalıǵı</h4>
        <span style={{ marginTop: '10px' }} >Tábiyiy hám anıq pánler kafedrası</span>
        <span><b>Dúziwshi</b>: <span className='underline'>ass. S.G. Kaypnazarov</span></span>
        <br /><br />
        <br /><br /> 
        <span style={{ fontWeight: 'bold' }}>Nókis - 2023</span>
      </div>
    </div>
  )
}

export default Home