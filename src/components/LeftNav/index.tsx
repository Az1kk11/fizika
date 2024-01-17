import React from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons';

import './style.css'

type collapsed = {
    collapsed: boolean
    setCollapsed: any
}

export const LeftNavbar: React.FC<collapsed> = ({ collapsed, setCollapsed }) => {
    const location = useLocation();
    console.log(location)

    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                width: '300px',
            }}
            className={collapsed ? '' : 'navbar'}
            width={300}
        >
            <span
                onClick={() => setCollapsed(!collapsed)}
                style={collapsed ? {} : { display: 'none' }}
                className='bars-left'
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </span>
            <h1 className='logo'>FIZIKA <span>I</span></h1>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ height: '100vh' }}>

                <Menu.Item key="1">
                    <Link to="/">Bas bet</Link>
                </Menu.Item>

                <Menu.Item key="2323">
                    <Link to="/annotaciya">Annotaciya</Link>
                </Menu.Item>

                <Menu.Item key="2243">
                    <Link to="/pánler-bazası">Pánler bazası</Link>
                </Menu.Item>

                <Menu.SubMenu key="sub-1" title={<span>7-klass</span>}>

                    <Menu.SubMenu key="prezentaciyalar-7" title={<span>Prezentaciyalar</span>} >
                        <Menu.Item key="prezentaciyalar-tekst-7">
                            <Link to="/7-klass/prezentaciya/tekst">Prezentaciyalar teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="prezentaciyalar-video-7">
                            <Link to="/7-klass/prezentaciya/video">Video prezentaciya</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="máseleler-7" title={<span>Máseleler</span>} >
                        <Menu.Item key="máseleler-tekst-7">
                            <Link to="/7-klass/máseleler/tekst">Máseleler teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="máseleler-video-7">
                            <Link to="/7-klass/máseleler/video">Video máseleler</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="ameliy-shınığıwlar-7" title={<span>Ámeliy shınığıwlar</span>} >
                        <Menu.Item key="ameliyler-tekst-7">
                            <Link to="/7-klass/ameliyler/tekst">Ameliyler teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="ameliyler-video-7">
                            <Link to="/7-klass/ameliyler/video">Video ameliyler</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="laboratoriya-shınıgıwları-7" title={<span>Ámeliy shınığıwlar</span>} >
                        <Menu.Item key="laboratoriya-tekst-7">
                            <Link to="/7-klass/laboratoriyalar/tekst">Laboratoriyalar teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="laboratoriya-video-7">
                            <Link to="/7-klass/laboratoriyalar/video">Video laboratoriya</Link>
                        </Menu.Item>
                        <Menu.Item key="laboratoriya-vertual-7">
                            <Link to="/7-klass/laboratoriyalar/video-cifrlı-virtual">Video cifrlı virtual laboratoriyalar</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="oz-betinshe-7" title={<span>Óz betinshe talim shınığıwları</span>} >
                        <Menu.Item key="oz-betinshe-tekst-7">
                            <Link to="/7-klass/oz-betinshe/tekst">Óz betinshe teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="oz-betinshe-video-7">
                            <Link to="/7-klass/oz-betinshe/video">Video óz betinsheler</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="joybar-jumışları-7" title={<span>Joybar jumışları</span>} >
                        <Menu.Item key="joybar-jumışları-tekst-7">
                            <Link to="/7-klass/joybar-jumışları/tekst">Joybar jumislar teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="joybar-jumışları-video-7">
                            <Link to="/7-klass/joybar-jumışları/video">Video joybar jumislar</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                </Menu.SubMenu>


                <Menu.SubMenu key="sub-2" title={<span>8-klass</span>}>

                    <Menu.SubMenu key="prezentaciyalar-8" title={<span>Prezentaciyalar</span>} >
                        <Menu.Item key="prezentaciyalar-tekst-8">
                            <Link to="/8-klass/prezentaciya/tekst">Prezentaciyalar teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="prezentaciyalar-video-8">
                            <Link to="/8-klass/prezentaciya/video">Video prezentaciya</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="máseleler-8" title={<span>Máseleler</span>} >
                        <Menu.Item key="máseleler-tekst-8">
                            <Link to="/8-klass/máseleler/tekst">Máseleler teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="máseleler-video-8">
                            <Link to="/8-klass/máseleler/video">Video máseleler</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="ameliy-shınığıwlar-8" title={<span>Ámeliy shınığıwlar</span>} >
                        <Menu.Item key="ameliyler-tekst-8">
                            <Link to="/8-klass/ameliyler/tekst">Ameliyler teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="ameliyler-video-8">
                            <Link to="/8-klass/ameliyler/video">Video ameliyler</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="laboratoriya-shınıgıwları-8" title={<span>Ámeliy shınığıwlar</span>} >
                        <Menu.Item key="laboratoriya-tekst-8">
                            <Link to="/8-klass/laboratoriyalar/tekst">Laboratoriyalar teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="laboratoriya-video-8">
                            <Link to="/8-klass/laboratoriyalar/video">Video laboratoriya</Link>
                        </Menu.Item>
                        <Menu.Item key="laboratoriya-vertual-8">
                            <Link to="/8-klass/laboratoriyalar/video-cifrlı-virtual">Video cifrlı virtual laboratoriyalar</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="oz-betinshe-8" title={<span>Óz betinshe talim shınığıwları</span>} >
                        <Menu.Item key="oz-betinshe-tekst-8">
                            <Link to="/8-klass/oz-betinshe/tekst">Óz betinshe teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="oz-betinshe-video-8">
                            <Link to="/8-klass/oz-betinshe/video">Video óz betinsheler</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="joybar-jumışları-8" title={<span>Joybar jumışları</span>} >
                        <Menu.Item key="joybar-jumışları-tekst-8">
                            <Link to="/8-klass/joybar-jumışları/tekst">Joybar jumislar teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="joybar-jumışları-video-8">
                            <Link to="/8-klass/joybar-jumışları/video">Video joybar jumislar</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                </Menu.SubMenu>

                <Menu.SubMenu key="sub-3" title={<span>9-klass</span>}>

                    <Menu.SubMenu key="prezentaciyalar-9" title={<span>Prezentaciyalar</span>} >
                        <Menu.Item key="prezentaciyalar-tekst-9">
                            <Link to="/9-klass/prezentaciya/tekst">Prezentaciyalar teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="prezentaciyalar-video-9">
                            <Link to="/9-klass/prezentaciya/video">Video prezentaciya</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="máseleler-9" title={<span>Máseleler</span>} >
                        <Menu.Item key="máseleler-tekst-9">
                            <Link to="/9-klass/máseleler/tekst">Máseleler teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="máseleler-video-9">
                            <Link to="/9-klass/máseleler/video">Video máseleler</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="ameliy-shınığıwlar-9" title={<span>Ámeliy shınığıwlar</span>} >
                        <Menu.Item key="ameliyler-tekst-9">
                            <Link to="/9-klass/ameliyler/tekst">Ameliyler teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="ameliyler-video-9">
                            <Link to="/9-klass/ameliyler/video">Video ameliyler</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="laboratoriya-shınıgıwları-9" title={<span>Ámeliy shınığıwlar</span>} >
                        <Menu.Item key="laboratoriya-tekst-9">
                            <Link to="/9-klass/laboratoriyalar/tekst">Laboratoriyalar teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="laboratoriya-video-9">
                            <Link to="/9-klass/laboratoriyalar/video">Video laboratoriya</Link>
                        </Menu.Item>
                        <Menu.Item key="laboratoriya-vertual-9">
                            <Link to="/9-klass/laboratoriyalar/video-cifrlı-virtual">Video cifrlı virtual laboratoriyalar</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="oz-betinshe-9" title={<span>Óz betinshe talim shınığıwları</span>} >
                        <Menu.Item key="oz-betinshe-tekst-9">
                            <Link to="/9-klass/oz-betinshe/tekst">Óz betinshe teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="oz-betinshe-video-9">
                            <Link to="/9-klass/oz-betinshe/video">Video óz betinsheler</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="joybar-jumışları-9" title={<span>Joybar jumışları</span>} >
                        <Menu.Item key="joybar-jumışları-tekst-9">
                            <Link to="/9-klass/joybar-jumışları/tekst">Joybar jumislar teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="joybar-jumışları-video-9">
                            <Link to="/9-klass/joybar-jumışları/video">Video joybar jumislar</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                </Menu.SubMenu>

                <Menu.SubMenu key="sub-4" title={<span>10-klass</span>}>

                    <Menu.SubMenu key="prezentaciyalar-10" title={<span>Prezentaciyalar</span>} >
                        <Menu.Item key="prezentaciyalar-tekst-10">
                            <Link to="/10-klass/prezentaciya/tekst">Prezentaciyalar teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="prezentaciyalar-video-10">
                            <Link to="/10-klass/prezentaciya/video">Video prezentaciya</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="máseleler-10" title={<span>Máseleler</span>} >
                        <Menu.Item key="máseleler-tekst-10">
                            <Link to="/10-klass/máseleler/tekst">Máseleler teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="máseleler-video-10">
                            <Link to="/10-klass/máseleler/video">Video máseleler</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="ameliy-shınığıwlar-10" title={<span>Ámeliy shınığıwlar</span>} >
                        <Menu.Item key="ameliyler-tekst-10">
                            <Link to="/10-klass/ameliyler/tekst">Ameliyler teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="ameliyler-video-10">
                            <Link to="/10-klass/ameliyler/video">Video ameliyler</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="laboratoriya-shınıgıwları-10" title={<span>Ámeliy shınığıwlar</span>} >
                        <Menu.Item key="laboratoriya-tekst-10">
                            <Link to="/10-klass/laboratoriyalar/tekst">Laboratoriyalar teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="laboratoriya-video-10">
                            <Link to="/10-klass/laboratoriyalar/video">Video laboratoriya</Link>
                        </Menu.Item>
                        <Menu.Item key="laboratoriya-vertual-10">
                            <Link to="/10-klass/laboratoriyalar/video-cifrlı-virtual">Video cifrlı virtual laboratoriyalar</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="oz-betinshe-10" title={<span>Óz betinshe talim shınığıwları</span>} >
                        <Menu.Item key="oz-betinshe-tekst-10">
                            <Link to="/10-klass/oz-betinshe/tekst">Óz betinshe teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="oz-betinshe-video-10">
                            <Link to="/10-klass/oz-betinshe/video">Video óz betinsheler</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="joybar-jumışları-10" title={<span>Joybar jumışları</span>} >
                        <Menu.Item key="joybar-jumışları-tekst-10">
                            <Link to="/10-klass/joybar-jumışları/tekst">Joybar jumislar teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="joybar-jumışları-video-10">
                            <Link to="/10-klass/joybar-jumışları/video">Video joybar jumislar</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                </Menu.SubMenu>

                <Menu.SubMenu key="sub-5" title={<span>11-klass</span>}>

                    <Menu.SubMenu key="prezentaciyalar-11" title={<span>Prezentaciyalar</span>} >
                        <Menu.Item key="prezentaciyalar-tekst-11">
                            <Link to="/11-klass/prezentaciya/tekst">Prezentaciyalar teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="prezentaciyalar-video-11">
                            <Link to="/11-klass/prezentaciya/video">Video prezentaciya</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="máseleler-11" title={<span>Máseleler</span>} >
                        <Menu.Item key="máseleler-tekst-11">
                            <Link to="/11-klass/máseleler/tekst">Máseleler teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="máseleler-video-11">
                            <Link to="/11-klass/máseleler/video">Video máseleler</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="ameliy-shınığıwlar-11" title={<span>Ámeliy shınığıwlar</span>} >
                        <Menu.Item key="ameliyler-tekst-11">
                            <Link to="/11-klass/ameliyler/tekst">Ameliyler teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="ameliyler-video-11">
                            <Link to="/11-klass/ameliyler/video">Video ameliyler</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="laboratoriya-shınıgıwları-11" title={<span>Ámeliy shınığıwlar</span>} >
                        <Menu.Item key="laboratoriya-tekst-11">
                            <Link to="/11-klass/laboratoriyalar/tekst">Laboratoriyalar teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="laboratoriya-video-11">
                            <Link to="/11-klass/laboratoriyalar/video">Video laboratoriya</Link>
                        </Menu.Item>
                        <Menu.Item key="laboratoriya-vertual-11">
                            <Link to="/11-klass/laboratoriyalar/video-cifrlı-virtual">Video cifrlı virtual laboratoriyalar</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="oz-betinshe-11" title={<span>Óz betinshe talim shınığıwları</span>} >
                        <Menu.Item key="oz-betinshe-tekst-11">
                            <Link to="/11-klass/oz-betinshe/tekst">Óz betinshe teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="oz-betinshe-video-11">
                            <Link to="/11-klass/oz-betinshe/video">Video óz betinsheler</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="joybar-jumışları-11" title={<span>Joybar jumışları</span>} >
                        <Menu.Item key="joybar-jumışları-tekst-11">
                            <Link to="/11-klass/joybar-jumışları/tekst">Joybar jumislar teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="joybar-jumışları-video-11">
                            <Link to="/11-klass/joybar-jumışları/video">Video joybar jumislar</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                </Menu.SubMenu>

                <Menu.SubMenu key="glossariy" title={<span>Glossariy</span>}>
                    <Menu.Item key="glossariy-tekst">
                        <Link to="/glossariy/tekst">Glossariy teksti</Link>
                    </Menu.Item>
                    <Menu.Item key="cifrlı-elektron-glossariy">
                        <Link to="/glossariy/elektron">Cifrlı elektron glossariy</Link>
                    </Menu.Item>
                </Menu.SubMenu>

                <Menu.SubMenu key="qosımshalar" title={'Qosımshalar'} >

                    <Menu.Item key="qosımshalar-1">
                        <Link to="/mámleketlik-tálim-dástúri">Mámleketlik tálim dástúri </Link>
                    </Menu.Item>

                    <Menu.Item key="qosımshalar-2">
                        <Link to="/kalendar-tematikalıq-reje">Kalendar-tematikalıq reje</Link>
                    </Menu.Item>

                    <Menu.SubMenu key="test-sorawları" title={'Test sorawları'}>
                        <Menu.Item key="test-sorawları-tekst">
                            <Link to="/sorawları-teksti">Sorawlar teksti</Link>
                        </Menu.Item>
                        <Menu.Item key="test-elektron">
                            <Link to="/elektron-testler">Elektron testler</Link>
                        </Menu.Item>
                    </Menu.SubMenu>

                    <Menu.Item key="mobil-qosımshalar">
                        <Link to="/mobil-qosımshalar">Mobil qosımshalar</Link>
                    </Menu.Item>

                </Menu.SubMenu>

                <Menu.Item key="bahalaw_kriteriyalari">
                    <Link to="/bahalaw_kriteriyalari">Bahalaw kriteriyaları</Link>
                </Menu.Item>

                <Menu.Item key="70">
                    <Link to="/gúwalıqlar">Gúwalıqlar</Link>
                </Menu.Item>

                <Menu.Item key="771">
                    <Link to="/avtor">Avtor haqqında maǵlıwmat</Link>
                </Menu.Item>

            </Menu>
        </Sider>
    )
}