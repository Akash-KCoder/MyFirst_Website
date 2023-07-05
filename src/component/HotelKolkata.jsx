import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'

import Header from './Header'
import './HotelKolkata.css'
class HotelKolkata extends React.Component {

  render() {
    return (
      <div>
        <Header />


        <img src='/Hotels/HotelKolkata1.jpg' alt='Hotel1' className='img-fuild im'  ></img>





        <div class="card " style={{ width: '100%' }}>
          <div class="card-header">

            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <h5 class=" button-grow" >Overview</h5>
              </li>
              <li class="nav-item">
                <h5 class=" button-grow" >Amenities</h5>
              </li>
              <li class="nav-item">
                <h5 class="button-grow" >Location</h5>
              </li>
              <li class="nav-item">
                <h5 class="button-grow " >Review</h5>
              </li>
            </ul>
          </div>
          <div class="card-body" >
            <div>
              <h3 class="card-title">Hotel Galaxy</h3>
              <div>
                <i class="fas fa-star Rating"></i>
                <i class="fas fa-star Rating"></i>
                <i class="fas fa-star Rating"></i>
                <i class="fas fa-star Rating"></i>
                <i class="fas fa-star Rating"></i>
                <h6 style={{ display: 'inline-block' }}>Awesome</h6>
              </div>
              <p class="card-text" >In South Williamsburg only a few blocks inland from the East River, Marlo &Sons is a rustic respite with nice wine, good cocktails, and excellent snacking fare such as oysters, local cheese, and potato tortilla. But thereâ€™s more: seasonal salads and soups, the famous brick chicken, a dimly lit space outfitted in various types of wood</p>
            </div>
            <div style={{backgroundColor:'rgb(244, 115, 115)',    position: 'sticky',top: '50px',width:'400px'}}>
            <div className='bookroom ' >
            <div style={{display:'inline-block'}}>
              <h5>Check-in Date</h5>
              <input type='date' className='button-grow'></input>
            </div>
            <div style={{display:'inline-block'}}>
              <h5>Check-Out Date</h5>
              <input type='date' className='button-grow'></input>
            </div>
            <div>
              <h5 style={{display:'inline-block'}}>No of Rooms</h5>
              <input type="number" className='button-grow' style={{width:'220px'}}></input>
            </div>
            <div>
              <h5 style={{display:'inline-block'}}>No of People</h5>
              <input type="number" className='button-grow' style={{width:'220px'}}></input>
            </div>
            <div className='button-grow'>
            <NavLink to='/Registration'><h3>Book</h3></NavLink>
            </div>

            </div>
            </div>
            <div>
              <h3 class="card-title">Amenities</h3>
              <p>Our Free Survices for You--<u>Free Wifi </u>,<u>Free Parking</u>, <u>Free Coffee</u></p>
              <i class="fas fa-wifi Amenities"></i>
              <i class="fas fa-car Amenities"></i>
              <i class="fas fa-coffee Amenities"></i>
            </div>

            <div>
              <h3 class="card-title">Location</h3>
              <img className='immloc' src='/Hotels/kolkatalocation.jpeg' alt='location'></img>
            </div>
            <div>
              <h3 class="card-title">Reviews</h3>
              <i class="fas fa-star Rating"></i>
              <i class="fas fa-star Rating"></i>
              <i class="fas fa-star Rating"></i>
              <i class="fas fa-star Rating"></i>
              <i class="fas fa-star Rating"></i>
            </div>
            <div >
              <img className='reviewimg' src='/Hotels/Review1.jpg' alt='review'></img>
              <div style={{ display: 'inline-block' }}>
                <h6 style={{ padding: '10px', }}>Siddharth Mishra</h6>

              </div>
              <div>
                <p>Distinctio at aut perspiciatis dolores. Sed sit ut labore nostrum. Est amet repellat dolore maiores id eligendi eveniet autem praesentium. Porro illo perspiciatis repellat atque laborum voluptatem tempore nobis odio. Fugiat et molestias ab id temporibus dignissimos culpa fugit. Nulla magni iusto dolores at.</p>
                <div>
                  <img className='castomerreview' src='/HotelsRooms/bathroom.jpg' alt='bathroom'></img>
                  <img className='castomerreview' src='/HotelsRooms/reception.jpg' alt='reception'></img>
                  <img className='castomerreview' src='/HotelsRooms/room.jpg' alt='room'></img>
                  <img className='castomerreview' src='/HotelsRooms/Dinning.jpg' alt='Dinning'></img>
                </div>
                <div style={{display:'inline-block'}}>
                  <h6 style={{ display: 'inline-block'}} className="castomerrating">Service</h6>
                  <div style={{display:'inline-block'}}>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  </div>
                </div>
                <div style={{display:'inline-block'}}>
                  <h6 style={{ display: 'inline-block'}} className="castomerrating">Room</h6>
                  <div style={{display:'inline-block'}}>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  </div>
                </div>
                <div style={{display:'inline-block'}}>
                  <h6 style={{ display: 'inline-block'}} className="castomerrating">Cleanness</h6>
                  <div style={{display:'inline-block'}}>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  </div>
                </div>
                <div style={{display:'inline-block'}}>
                  <h6 style={{ display: 'inline-block'}} className="castomerrating">Food</h6>
                  <div style={{display:'inline-block'}}>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  </div>
                </div>

              </div>
            </div>
            <div >
              <img className='reviewimg' src='/Hotels/Review2.jpeg' alt='review'></img>
              <div style={{ display: 'inline-block' }}>
                <h6 style={{ padding: '10px', }}>Subhashis Pal</h6>

              </div>
              <div>
                <p>Distinctio at aut perspiciatis dolores. Sed sit ut labore nostrum. Est amet repellat dolore maiores id eligendi eveniet autem praesentium. Porro illo perspiciatis repellat atque laborum voluptatem tempore nobis odio. Fugiat et molestias ab id temporibus dignissimos culpa fugit. Nulla magni iusto dolores at.</p>
                <div>
                  <img className='castomerreview' src='/HotelsRooms/room1.jpeg' alt='bathroom'></img>
                  <img className='castomerreview' src='/HotelsRooms/reception.jpg' alt='reception'></img>
                  <img className='castomerreview' src='/HotelsRooms/room.jpg' alt='room'></img>
                  <img className='castomerreview' src='/HotelsRooms/front.jpg' alt='Dinning'></img>
                </div>
                <div style={{display:'inline-block'}}>
                  <h6 style={{ display: 'inline-block'}} className="castomerrating">Service</h6>
                  <div style={{display:'inline-block'}}>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star rating"></i>
                  <i class="fas fa-star rating"></i>
                  </div>
                </div>
                <div style={{display:'inline-block'}}>
                  <h6 style={{ display: 'inline-block'}} className="castomerrating">Room</h6>
                  <div style={{display:'inline-block'}}>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star rating"></i>
                  </div>
                </div>
                <div style={{display:'inline-block'}}>
                  <h6 style={{ display: 'inline-block'}} className="castomerrating">Cleanness</h6>
                  <div style={{display:'inline-block'}}>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star rating"></i>
                  <i class="fas fa-star rating"></i>
                  </div>
                </div>
                <div style={{display:'inline-block'}}>
                  <h6 style={{ display: 'inline-block'}} className="castomerrating">Food</h6>
                  <div style={{display:'inline-block'}}>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star Rating"></i>
                  <i class="fas fa-star rating"></i>
                  <i class="fas fa-star rating"></i>
                  <i class="fas fa-star rating"></i>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        <Footer />

      </div>
    )
  }
}

export default HotelKolkata

