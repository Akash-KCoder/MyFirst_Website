import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
          <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Domestic Hotels</a></li>
                            <li><a href="#">International Hotels</a></li>
                            
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Company Name</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div class="col item social"><a href="#"><i class="fab fa-facebook"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-snapchat"></i></a><a href="#"><i class="fab fa-instagram"></i></a></div>
                </div>
                <p class="copyright">Company Name © 2023</p>
            </div>
        </footer>
    </div>
    </div>
  )
}

export default Footer
