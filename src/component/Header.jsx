import React from 'react'
import { NavLink } from 'react-router-dom'





const Header = () => {
  
  



  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <h3 class="navbar-brand" >Hilton</h3>
        <i class="fa-duotone fa-pot-food"></i>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li>

              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>


            </li>


            <li>
              <h6 class="nav-link" style={{cursor : 'pointer' }}>Contuct Us </h6>
            </li>
            <li>
              <h6 class="nav-link" style={{cursor : 'pointer' }}>About Us </h6>
            </li>



          </ul>

          <form class="form-inline my-2 my-lg-0">


            <div class="button-grow">
            <NavLink to='/Login'  >Login</NavLink>
            </div>
          </form>

        </div>
      </nav>
    </>
  )
}

export default Header

