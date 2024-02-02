import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import logo from './image/loho1.png';
import { FiSearch } from 'react-icons/fi';
import { FaCartShopping, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


function Main() {
    const [data, setdata] = useState([]);
    const [data1, setdata1] = useState([]);
    const [reset, setreset] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get('https://dummyjson.com/products/categories')
            .then(function (response) {
                setdata(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        axios
            .get('https://dummyjson.com/products')
            .then(function (response) {
                setdata1(response.data.products);
                setreset(response.data.products);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const searchbtn = () => {
        axios
            .get(`https://dummyjson.com/products/search?q=${search}`)
            .then(function (response) {
                setdata1(response.data.products);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const catbtn = (item) => {
        let demo = reset.filter((ele) => {
            return ele.category.toLowerCase() === item.toLowerCase();
        })
        setdata1(demo);
    }

    return (
        <>
            <div className='body'>
                <header className='header1'>
                    <div className='top_head'>
                        <div className='bgblue'>
                            <Container>
                                <div className='flipkart flex'>
                                    <div className='top_header flex'>
                                        <div className='logo_head'>
                                            <img src={logo} alt='logo'></img>
                                        </div>
                                        <div className='search'>
                                            <div className='serch_inp'>
                                                <input type='text' placeholder='search for product, brands and more' value={search} onChange={(e) => setSearch(e.target.value)}
                                                ></input>
                                            </div>
                                            <div className='search_icon'>
                                                <i>
                                                    <FiSearch></FiSearch>
                                                </i>
                                            </div>
                                        </div>
                                        <div className='ser_btn'>
                                            {/* <a href='#'>Login</a> */}
                                            <input type='button' value={"Search"} className='h_btn' onClick={searchbtn}></input>

                                        </div>
                                        <div className='cart'>
                                            <div className='class_item flex'>
                                                <i>
                                                    <FaCartShopping></FaCartShopping>
                                                </i>
                                                <span>cart</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </div>
                </header>
            </div>
            <div className='main'>
                <Container fluid>
                    <Row>
                        <Col lg={2}>
                            <div className='left_main sticky-top'>
                                <div className='side_main'>
                                    <div className='main_img'>
                                        <img src={require('./image/ket1.jpg')}></img>
                                    </div>
                                    <div className='main_txt'>
                                        <div className='deal'>Deal's You Can't Resist!</div>
                                        <div className='sale'>Sale Is Live From ₹329</div>
                                    </div>
                                </div>
                                <div className='side_main'>
                                    <div className='filter'>
                                        <div className='cat'>
                                            <span>Filters</span>
                                        </div>
                                        <div className='cate'>
                                            <div className='categorie'>
                                                <div className='cat_item'>
                                                    <span>CATEGORIES</span>
                                                </div>
                                                <div className='cat_main'>
                                                    {
                                                        data.map((item, index) => (
                                                            <div className='cat1' key={index}>
                                                                {/* <i>
                                                                    <IoIosArrowBack></IoIosArrowBack>
                                                                </i> */}
                                                                {/* {item} */}
                                                                <p key={index} onClick={() => catbtn(item)}><i><IoIosArrowBack></IoIosArrowBack></i>{item}</p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={10}>
                            <div className='right_main'>
                                <div className='right_side'>
                                    <div className='top_data flex'>
                                        <div className='top_menus'>
                                            <a href='#'>Home</a>
                                            <i><IoIosArrowForward></IoIosArrowForward></i>
                                        </div>
                                        <div className='top_menus'>
                                            <a href='#'>Mobiles & Accessories</a>
                                            <i><IoIosArrowForward></IoIosArrowForward></i>
                                        </div>
                                        <div className='top_menus'>
                                            <a href='#'>Mobiles</a>
                                        </div>
                                    </div>
                                    <span className='show'>Showing 1–24 of 9,550 results for "mobiles"</span>
                                    <div className='popular flex'>
                                        <span>Sort By</span>
                                        <p>Relevance</p>
                                        <p>Popularity</p>
                                        <p>Price -- Low to High</p>
                                        <p>Price -- High to Low</p>
                                        <p>Newest First</p>
                                    </div>
                                </div>
                                <div className='pop_item'>
                                    {data1.map((item, index) => (
                                        <div className='item_col d-flex' key={index}>
                                            <div className='item_img'>
                                                <Link to={`/single/${item.id}`} target='_blank'><img src={item.images[0]} alt='product'></img></Link>
                                            </div>
                                            <i>
                                                <FaHeart></FaHeart>
                                            </i>
                                            <div className='item_txt'>
                                                <div className='titlee'>{item.title}</div>
                                                <div className='desc d-flex'>{item.description}</div>
                                                <div className='rate d-flex'>
                                                    <div>{item.rating}</div>
                                                    <i><FaStar></FaStar></i>
                                                </div>
                                                <div className='price d-flex'>
                                                    ₹{item.price}
                                                </div>
                                                <div className='per'>({item.discountPercentage}% OFF)</div>
                                                <div className='stock'>{item.stock}</div>
                                                <div className='brand'>{item.brand}</div>
                                                <div className='catss'>{item.category}</div>
                                                <div className='d-flex'>
                                                    <div className='show'>
                                                        <a href={item.thumbnail}>Show More</a>
                                                    </div>
                                                    {/* <div className='wish'>
                                                        <a><FaRegHeart></FaRegHeart>wishlist</a>
                                                    </div> */}
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Main;
