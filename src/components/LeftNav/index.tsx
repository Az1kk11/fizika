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
                style={collapsed ? { } : {display: 'none'}}
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

                <Menu.SubMenu key="sub1" title={<span>7-klass</span>}>
                    <Menu.Item key="teoriya7">
                        <Link to="/7-klass/teoriya">Teoriya</Link>
                    </Menu.Item>

                    <Menu.Item key="máseleler7">
                        <Link to="/7-klass/máseleler-sheshiw">Máseleler sheshiw</Link>
                    </Menu.Item>

                    <Menu.Item key="laboratoriya7">
                        <Link to="/7-klass/laboratoriya-shınıǵıwları">Laboratoriya shınıǵıwları</Link>
                    </Menu.Item>

                    <Menu.Item key="shınıǵıwları7">
                        <Link to="/7-klass/oz-betinshe-tálim-shınıǵıwları">Óz betinshe tálim shınıǵıwları</Link>
                    </Menu.Item>

                    <Menu.Item key="joybar7">
                        <Link to="/7-klass/joybar-jumısları">Joybar jumısları</Link>
                    </Menu.Item>
                </Menu.SubMenu>

                <Menu.SubMenu key="sub2" title={<span>8-klass</span>}>
                    <Menu.Item key="teoriya8">
                        <Link to="/8-klass/teoriya">Teoriya</Link>
                    </Menu.Item>

                    <Menu.Item key="máseleler8">
                        <Link to="/8-klass/máseleler-sheshiw">Máseleler sheshiw</Link>
                    </Menu.Item>

                    <Menu.Item key="laboratoriya8">
                        <Link to="/8-klass/laboratoriya-shınıǵıwları">Laboratoriya shınıǵıwları</Link>
                    </Menu.Item>

                    <Menu.Item key="shınıǵıwları8">
                        <Link to="/8-klass/oz-betinshe-tálim-shınıǵıwları">Óz betinshe tálim shınıǵıwları</Link>
                    </Menu.Item>

                    <Menu.Item key="joybar8">
                        <Link to="/8-klass/joybar-jumısları">Joybar jumısları</Link>
                    </Menu.Item>
                </Menu.SubMenu>

                <Menu.SubMenu key="sub3" title={<span>9-klass</span>}>
                    <Menu.Item key="teoriya9">
                        <Link to="/9-klass/teoriya">Teoriya</Link>
                    </Menu.Item>

                    <Menu.Item key="laboratoriya9">
                        <Link to="/9-klass/laboratoriya-shınıǵıwları">Laboratoriya shınıǵıwları</Link>
                    </Menu.Item>

                    <Menu.Item key="shınıǵıwları9">
                        <Link to="/9-klass/oz-betinshe-tálim-shınıǵıwları">Óz betinshe tálim shınıǵıwları</Link>
                    </Menu.Item>

                    <Menu.Item key="joybar9">
                        <Link to="/9-klass/joybar-jumısları">Joybar jumısları</Link>
                    </Menu.Item>
                </Menu.SubMenu>

                <Menu.SubMenu key="sub4" title={<span>10-klass</span>}>
                    <Menu.Item key="teoriya10">
                        <Link to="/10-klass/teoriya">Teoriya</Link>
                    </Menu.Item>

                    <Menu.Item key="laboratoriya10">
                        <Link to="/10-klass/laboratoriya-shınıǵıwları">Laboratoriya shınıǵıwları</Link>
                    </Menu.Item>

                    <Menu.Item key="shınıǵıwları10">
                        <Link to="/10-klass/oz-betinshe-tálim-shınıǵıwları">Óz betinshe tálim shınıǵıwları</Link>
                    </Menu.Item>

                    <Menu.Item key="joybar10">
                        <Link to="/10-klass/joybar-jumısları">Joybar jumısları</Link>
                    </Menu.Item>
                </Menu.SubMenu>

                <Menu.SubMenu key="sub5" title={<span>11-klass</span>}>
                    <Menu.Item key="teoriya11">
                        <Link to="/11-klass/teoriya">Teoriya</Link>
                    </Menu.Item>

                    <Menu.Item key="laboratoriya11">
                        <Link to="/11-klass/laboratoriya-shınıǵıwları">Laboratoriya shınıǵıwları</Link>
                    </Menu.Item>

                    <Menu.Item key="shınıǵıwları11">
                        <Link to="/11-klass/oz-betinshe-tálim-shınıǵıwları">Óz betinshe tálim shınıǵıwları</Link>
                    </Menu.Item>

                    <Menu.Item key="joybar11">
                        <Link to="/11-klass/joybar-jumısları">Joybar jumısları</Link>
                    </Menu.Item>
                </Menu.SubMenu>

                <Menu.Item key="glassary">
                    <Link to="/glassary">Glossariy</Link>
                </Menu.Item>

                <Menu.SubMenu key={'extra1'} title={'Qosımshalar'} >

                    <Menu.Item key="extra1">
                        <Link to="/mámleketlik-tálim-dástúri">Mámleketlik tálim dástúri </Link>
                    </Menu.Item>

                    <Menu.Item key="extra2">
                        <Link to="/kalendar-tematikalıq-reje">Kalendar-tematikalıq reje</Link>
                    </Menu.Item>

                    <Menu.Item key="extra3">
                        <Link to="/tests">Test sorawları</Link>
                    </Menu.Item>

                    <Menu.Item key="extra4">
                        <Link to="/mobil-qosımshalar">Mobil qosımshalar</Link>
                    </Menu.Item>

                    <Menu.Item key="extra5">
                        <Link to="/bahalaw_kriteriyalari">Bahalaw kriteriyaları</Link>
                    </Menu.Item>

                </Menu.SubMenu>

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