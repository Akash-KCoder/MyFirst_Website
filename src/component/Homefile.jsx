
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import './Homefile.css'
import MenuAr from "./MenuAr";
const Homefile = () => {
    const [data, setItems] = useState(MenuAr)

    const filterItem = (cateItem) => {
        const updateItems = MenuAr.filter((carrElem) => {
            return carrElem.category === cateItem;
        })
        setItems(updateItems);
    };
    return (
        <div>
            <Header />

            <div >
                <img src="/Hotels/hotel4.jpg" alt=".." className="img-fluid imm" ></img>
            </div>
            <div>
                <h1 className="text-white"> Explore Destination</h1>
            </div>

            <div >
                <div className="container-fluid">
                    <div >
                        <div class="card" >
                            <div className="row" >
                                <div class="card-body" className="col-md-10 col-sm-4" >
                                    <h3>Latest reviews. Lowest prices.</h3>
                                    <p>compares prices from 200+ booking sites to help you find the lowest price on the right hotel for you.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 col-sm-12">
                                    <select onChange={(e) => filterItem(e.target.value)} style={{ width: "100%" }}>
                                        <option disabled selected value>Search'Thailand,Asia'</option>

                                        <option value="kolkata">Kolkata</option>
                                        <option value="chennai">Chennai</option>
                                        <option value="pune">Pune</option>
                                        <option value="delhi">Delhi</option>
                                    </select>
                                    {/* <input placeholder="Search'Thailand,Asia'" type='text' style={{ width: "100%" }}></input> */}
                                </div>
                                <div className="col-md-3 col-sm-12">

                                    <label style={{ backgroundColor: 'pink' }}>Check-in Date</label>
                                    <input placeholder="Check-in Date" type='date'></input>


                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <label style={{ backgroundColor: 'pink' }}>Check-out Date</label>
                                    <input placeholder="Check-in Date" type='date'  ></input>
                                </div>
                                <div className="col-md-1 col-sm-12">
                                    <input placeholder="Room" type='text' style={{ width: "100%" }}></input>
                                </div>
                                <div className="col-md-1 col-sm-12">
                                    <input placeholder="People" type='text' style={{ width: "100%" }}></input>
                                </div>
                                <div className="col-md-1 col-sm-12">
                                    <button class="button-grow" style={{ width: '100%' }}>Find</button>
                                </div>
                            </div>


                        </div>
                        <div className="row">
                            {
                                data.map((ele) => {

                                    const { img, name, price, category, link1 } = ele;
                                    return (
                                        <div>
                                            <div className="row">
                                                <div className="col-md-4 col-sm-12">
                                                    <div className="card" style={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px', padding: '10px', margin: '40px', width: '350px' }} >

                                                        <img className="card-img-top" src={img} alt="food" style={{ height: '200px' }}></img>
                                                        <div className="card-body" >
                                                            <h2 style={{ fontSize: '15px' }}>{name};Rs-{price};Address-{category}</h2>




                                                            <NavLink to={link1} class="button-grow">View Details</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    )
                                })
                            }

                        </div>
                    </div>


                </div>


            </div>
            <Footer/>
        </div>
    )
}
export default Homefile
