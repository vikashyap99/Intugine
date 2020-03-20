import React, {Component} from 'react'
import { Navbar, NavbarBrand,Nav,Collapse,NavbarToggler,NavItem,Jumbotron } from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Header extends Component {

    

    render(){ 

        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light  "> 
    <img src = 'assets/logo.svg' height='40' width='51'/>
  

    <div class='col-md-4 ml-auto' >
    <ul class="nav navbar-nav navbar-right  ">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Brands</a>
      </li>
      
      <li class="nav-item" >
        <a class="nav-link disabled" href="#">Transporters</a>
      </li>
      <li class = "nav-item">
      <a className="fa fa-profile-in fa-lg"  href="#"> Login</a>
      </li>
    </ul>
    </div>
    </nav>
            </div>
        )
    }
}

export default Header