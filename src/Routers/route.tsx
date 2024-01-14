import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
    Annotaciya, Home, PanlerBazasi,
    Joybar7, Joybar8, Joybar9, Joybar10, Joybar11,
    Laboratoriya7, Laboratoriya8, Laboratoriya9, Laboratoriya10, Laboratoriya11,
    Maseleler7, Maseleler8, Maseleler9, Maseleler10, Maseleler11,
    Shinigiwlar7, Shinigiwlar8, Shinigiwlar9, Shinigiwlar10, Shinigiwlar11,
    Teoriya7, Teoriya8, Teoriya9, Teoriya10, Teoriya11,
} from '../pages'

const Routers: React.FC = () => {
    return (
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/annotaciya' element={<Annotaciya />} />
            <Route path='/panler-bazasi' element={<PanlerBazasi />} />

            <Route path='/7-klass/teoriya' element={<Teoriya7 />} />
            <Route path='/7-klass/máseleler-sheshiw' element={<Maseleler7 />} />
            <Route path='/7-klass/laboratoriya-shınıǵıwları' element={<Laboratoriya7 />} />
            <Route path='/7-klass/oz-betinshe-tálim-shınıǵıwları' element={<Shinigiwlar7 />} />
            <Route path='/7-klass/joybar-jumısları' element={<Joybar7 />} />

            <Route path='/8-klass/teoriya' element={<Teoriya8 />} />
            <Route path='/8-klass/máseleler-sheshiw' element={<Maseleler8 />} />
            <Route path='/8-klass/laboratoriya-shınıǵıwları' element={<Laboratoriya8 />} />
            <Route path='/8-klass/oz-betinshe-tálim-shınıǵıwları' element={<Shinigiwlar8 />} />
            <Route path='/8-klass/joybar-jumısları' element={<Joybar8 />} />

            <Route path='/9-klass/teoriya' element={<Teoriya9 />} />
            <Route path='/9-klass/máseleler-sheshiw' element={<Maseleler9 />} />
            <Route path='/9-klass/laboratoriya-shınıǵıwları' element={<Laboratoriya9 />} />
            <Route path='/9-klass/oz-betinshe-tálim-shınıǵıwları' element={<Shinigiwlar9 />} />
            <Route path='/9-klass/joybar-jumısları' element={<Joybar9 />} />

            <Route path='/10-klass/teoriya' element={<Teoriya10 />} />
            <Route path='/10-klass/máseleler-sheshiw' element={<Maseleler10 />} />
            <Route path='/10-klass/laboratoriya-shınıǵıwları' element={<Laboratoriya10 />} />
            <Route path='/10-klass/oz-betinshe-tálim-shınıǵıwları' element={<Shinigiwlar10 />} />
            <Route path='/10-klass/joybar-jumısları' element={<Joybar10 />} />

            <Route path='/11-klass/teoriya' element={<Teoriya11 />} />
            <Route path='/11-klass/máseleler-sheshiw' element={<Maseleler11 />} />
            <Route path='/11-klass/laboratoriya-shınıǵıwları' element={<Laboratoriya11 />} />
            <Route path='/11-klass/oz-betinshe-tálim-shınıǵıwları' element={<Shinigiwlar11 />} />
            <Route path='/11-klass/joybar-jumısları' element={<Joybar11 />} />

        </Routes>
    )
}

export default Routers