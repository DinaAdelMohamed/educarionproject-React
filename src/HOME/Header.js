/* eslint-disable jsx-a11y/alt-text */
    /* eslint-disable jsx-a11y/anchor-has-content */
        /* eslint-disable no-script-url */
        /* eslint-disable jsx-a11y/anchor-is-valid */
        import React from 'react'
    import { Link } from 'react-router-dom'
    import { CartProvider,useCart } from 'react-use-cart';


        function Header() {
            const {totalItems}=useCart()
        return (
            <CartProvider>
                <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* <!-- ***** Logo Start ***** --> */}
                            <Link to="/" className="logo">
                                <img src="assets/images/templatemo-eduwell.png" alt="EduWell Template"/>
                            </Link>
                            {/* <!-- ***** Logo End ***** --> */}
                            {/* <!-- ***** Menu Start ***** --> */}
                            <ul className="nav">
                                <li className="scroll-to-section"><Link to="/" className="active">Home</Link></li>
                                <li className="scroll-to-section"><a href="#services">
                                Services</a></li>
                                <li className="scroll-to-section"><a href="#courses">Courses</a></li>
                                <li className="has-sub">
                                    <a href="javascript:void(0)">Pages</a>
                                    <ul className="sub-menu">
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/servise">Our Services</Link></li>
                                        <li><Link to="/conct">Contact Us</Link></li>
                                        <li><Link to="/featsh">Featers</Link></li>
                                        <li><Link to="/prodect">prodect</Link></li>
                                    </ul>
                                </li>
                                <li className="scroll-to-section"><a href="#testimonials">Testimonials</a></li> 
                                <li className="scroll-to-section"><a href="#contact-section">
                                    Contact Us</a></li> 
                                <li className="scroll-to-section">
                                    <Link to="/cart">
                                   <p className='mb-0 h4 dark' > +{totalItems } </p> 
                                        <img src='assets\images\cart-arrow-down-solid.svg' className='mt-0'  
                                        style={{width:"25px"}} />
                                        {/* <i class="fa-solid fa-cart-plus" style={{color: '#ec8989'}}></i> */}
                                </Link>
                                    </li> 
                                
                            
                            </ul>        
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                            {/* <!-- ***** Menu End ***** --> */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
            </CartProvider>
        )
        }

        export default Header