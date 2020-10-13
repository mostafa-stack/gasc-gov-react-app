import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavWrapper } from '../styled-components/StyledNavbar'
import logo from '../page-logo/download.jpg'
import  BsList from "../styled-components/styledNavIcon";
export default class Navbar extends Component {
    state={
        toggle:false,
    }
    handleToggle=()=>{
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render() {
        return (
            <>
            <NavWrapper toggle={this.state.toggle}>
                <Link to='/'><img src={logo} alt="" /></Link>
                <ul>
                    <li><Link to='/'>الصفحة الرئيسية</Link></li>
                    <li><Link to='/about'>عن الهيئة</Link></li>
                    <li><Link to='/tenders'>مناقصات</Link></li>
                    <li><Link to='/vacancies'>وظائف خالية</Link></li>
                </ul>
                
            </NavWrapper>
            <BsList onClick={this.handleToggle} toggle={this.state.toggle}/>
            </>
        )
    }
}
