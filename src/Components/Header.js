import React, {Component} from 'react'


class Header extends Component {

    

    render(){ 

        return(
            <div>
                <nav className="navbar navbar-expand-lg  bg-dark   "> 
                <div class="text-white">
                <h1>Supply Chain Tracker</h1>
                </div>
    
  

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