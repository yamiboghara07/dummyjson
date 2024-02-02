import React, { useState } from 'react';
import logo from './image/loho1.png';
import { FiSearch } from 'react-icons/fi';
import { FaCartShopping } from 'react-icons/fa6';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function Home() {
    const [search, setSearch] = useState('');

    return (
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
                                            <input
                                                type='text'
                                                placeholder='search for product, brands and more'
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
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
                                        <input type='button' value={"Search"} className='h_btn'></input>
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
    );
}

export default Home;
