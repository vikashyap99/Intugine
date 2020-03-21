import React, {Component} from 'react'
import { Navbar, NavbarBrand,Nav,Collapse,NavbarToggler,NavItem,Jumbotron } from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Header extends Component {

    

    render(){ 

        return(
            <div>
                <nav className="navbar navbar-expand-lg  bg-dark   "> 
    <img src = 'assets/logo.svg' height='70' width='81'/>
  

    <div className='col-md-4 ml-auto ' >
    <ul class="nav navbar-nav navbar-right  ">
      <li className="nav-item active ">
        <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Brands</a>
      </li>
      
      <li class="nav-item" >
        <a class="nav-link text-white " href="#">Transporters</a>
      </li>
      <li></li>
      <li class = "nav-item">
      <a className="fa fa-user "  href="#"> Login</a>
      </li>
    </ul>
    </div>
    </nav>
            </div>
        )
    }
}

export default Header