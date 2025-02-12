
import logo from "../../assets/images/frolicsLogoHD.png";

function Footer () {
    return (
        <>
            <div className="about">
                <div className="container">
                    <div className="row d_flex">
                    <div className="col-md-6">
                        <div className="titlepage text_align_left">
                            <h2>About Our Honey</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have sufferedThere are many variations of passages of Lorem Ipsum available, but the majority have sufferedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered
                            </p>
                            <a className="read_more" href="about.html">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about_img text_align_center">
                            <figure><img className="img_responsive" src="images/about.png" alt="#"/></figure>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="footer">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="infoma text_align_left">
                                <h3>About</h3>
                                <p className="ipsum">Frolics Apparel creates stylish, comfortable, and timeless fashion for confident self-expression.</p>
                                <ul className="social_icon">
                                <li><a href="Javascript:void(0)"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="Javascript:void(0)"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="infoma">
                                <h3>Adderess</h3>
                                <ul className="conta">
                                <li>Healing Center, oo W Street name, <br />
                                    Loram ipusum 
                                </li>
                                <li>(+71) 8522369417 <br />(+71) 8522369417</li>
                                <li> <a href="Javascript:void(0)"> demo@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 pad_lrft col-sm-6">
                            <div className="infoma">
                                <h3>Links</h3>
                                <ul className="fullink">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="shop.html">Shop</a></li>
                                    <li><a href="quality.html">Quality</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            {/* <div className="infoma">
                                <h3>Newsletter</h3>
                                <form className="form_subscri">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input className="newsl" placeholder="Your Name" type="text" name="Your Name" />
                                    </div>
                                    <div className="col-md-12">
                                        <input className="newsl" placeholder="Email" type="text" name="Email" />
                                    </div>
                                    <div className="col-md-12">
                                        <button className="subsci_btn">subscribe</button>
                                    </div>
                                </div>
                                </form>
                            </div> */}
                            <img src={logo} className="img-fluid" alt="" />
                        </div>
                    </div>
                    </div>
                    <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p>© 2025 All Rights Reserved.  <a href=""> Frolics Apparel</a></p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;