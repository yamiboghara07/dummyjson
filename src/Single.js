import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import logo from './image/loho1.png';
import { FiSearch } from 'react-icons/fi';
import { FaCartShopping, FaStar } from 'react-icons/fa6';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from 'axios';
import { MdLocalOffer } from "react-icons/md";
import {useParams} from 'react-router-dom';

function Single() {

    const {id} = useParams();

    const [search, setSearch] = useState('');
    const [data, setdata] = useState([]);
    const [selectimage, setselectimage] = useState(0);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(function (response) {
                console.log(response.data);
                setdata(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const thumbnailclick = (index) => {
        setselectimage(index);
    }

    return (
        <>
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
                                        <input type='button' value={"Search"} className='h_btn' ></input>

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
            <div className="main_single">
                <Container fluid>
                    <Row>
                        <Col lg={5}>
                            <div className='single sticky-top'>
                                <div className='sin_img'>
                                    <div className='imagess'>
                                        <img src={data.images && data.images[selectimage]} alt={`Thumbnail ${selectimage}`}></img>
                                    </div>
                                </div>
                                <div className='mul_image d-flex'>
                                    {
                                        // data.images && data.images.map((item, index) => (
                                        //     <img key={index} src={item} alt={`Image ${index + 1}`} onClick={() => thumbnailclick(image)}></img>
                                        // ))

                                        data.images?.length > 0 && (

                                            data.images.map((item, index) => (
                                                <img key={index} src={item} alt={`Image ${index + 1}`} className={`img ${index === selectimage ? 'selected' : ''}`} onClick={() => thumbnailclick(index)}></img>
                                            ))

                                        )
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} >
                            <div className='top_headss'>
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
                            </div>
                            {/* <div className='single_txt'>
                                <div className='item_txt'>
                                    <div className='titlee'> {data.title}</div>
                                    <div className='id'>{data.id}</div>
                                    <div className='desc'>{data.description}</div>
                                    <div className='price'>{data.price}</div>
                                    <div className='per'>{data.discountPercentage}%</div>
                                    <div className='rate'>{data.rating}</div>
                                    <div className='stock'>{data.stock}</div>
                                    <div className='brand'>{data.brand}</div>
                                    <div className='catss'>{data.category}</div>
                                </div>
                            </div> */}
                            <div className='single_txt'>
                                <div className='sing_item'>
                                    {/* <h3>Apple iPhone 15 (Blue, 128 GB)</h3> */}
                                    <h3>{data.title}</h3>
                                    <div className='sing_row flex'>
                                        <div className='start_item flex'>
                                            <span className='star_icon flex'>
                                                <div>{data.rating}</div>
                                                <i><FaStar></FaStar></i>
                                            </span>
                                            <span className='ss_text'>9,937 Ratings  &  650 Reviews</span>
                                        </div>
                                        <div className='row_logo'>
                                            <img src={require('./image/logo2.png')}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className='extra'>
                                    <span>Extra ₹13901 off</span>
                                </div>
                                <div className='rupee flex'>
                                    <div className='rates'>₹{data.price}</div>
                                    <div className='old_rate'>({data.stock})</div>
                                </div>
                                <div className='pack'>
                                    <p>+ ₹99 Secured Packaging Fee</p>
                                </div>
                            </div>
                            <div className='offer'>
                                <div className='avail'>
                                    <div>Available offers</div>
                                </div>
                                <div className='offer_list'>
                                    <div className='f_list'>
                                        <div className='off_icon'>
                                            <i><MdLocalOffer></MdLocalOffer></i>
                                            <li className='off_txt'>
                                                <span>Bank Offer</span>
                                                <p>10% off on Bank of Baroda Credit Card and EMI Transactions, up to ₹750 on orders of ₹5,000 and above</p>
                                            </li>
                                        </div>
                                        <div className='off_icon'>
                                            <i><MdLocalOffer></MdLocalOffer></i>
                                            <li className='off_txt'>
                                                <span>Bank Offer</span>
                                                <p>10% off on Citi-branded Credit Card EMI Transactions, up to ₹1,500 on orders of ₹10,000 and above</p>
                                            </li>
                                        </div>
                                        <div className='off_icon'>
                                            <i><MdLocalOffer></MdLocalOffer></i>
                                            <li className='off_txt'>
                                                <span>Bank Offer</span>
                                                <p>Flat ₹750 off on OneCard Credit Card and Credit EMI Transactions on orders of ₹12,500 and above</p>
                                            </li>
                                        </div>
                                        <div className='off_icon'>
                                            <i><MdLocalOffer></MdLocalOffer></i>
                                            <li className='off_txt'>
                                                <span>Bank Offer</span>
                                                <p>Get extra ₹12901 off (price inclusive of cashback/coupon)</p>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='high'>
                                <div className='highlight flex'>
                                    <div className='h_light'>Highlights</div>
                                    <div className='high_list'>
                                        <ul>
                                            <li>128 GB ROM</li>
                                            <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
                                            <li>48MP + 12MP | 12MP Front Camera</li>
                                            <li>A16 Bionic Chip, 6 Core Processor Processor</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='highlight'>
                                    <div className='h_light'>Description</div>
                                    <div className='high_list'>
                                        <p>
                                            Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='product'>
                                <div className='product_item'>
                                    <div className='p_item'>Product Description</div>
                                </div>
                                <div className='dynamic'>
                                    <h4>Dynamic Island</h4>
                                    <p>Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can track your next ride, see who’s calling, check your flight status, and so much more.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Single;
