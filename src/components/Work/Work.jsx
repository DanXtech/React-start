import "./Work.css";
import Upwork from '../../assets/img/Upwork.png';
import Fiverr from '../../assets/img/Fiverr.png';
import Amazon from '../../assets/img/Amazon.png';
import Shopify from '../../assets/img/Shopify.png';
import Facebook from '../../assets/img/facebook.png';
import { motion } from "framer-motion";
// import { Link } from 'react-scroll'
// import Facebook from "../../img/Facebook.png";

const Work = () => {
    return (
        <>
            <div className="works">
                <div className="awesome">
                    <span>Works for All these</span>
                    <span>Brands & Client</span>
                    <span>I web designer with love to create so many Good project
                        <br />
                        view to see more of my project.
                        <br />
                        {/* Lorem Pariatur quibusdam consequatur dicta ipsa facere */}
                        <br />
                        {/* Lorem, ipsum do nemo rem labore autem nesciunt quam rerum */}
                    </span>
                    {/* <a href= {Resume} download>
                <button className='button s-button'>Download CV</button>
            </a> */}
                    <button className='button s-button'>Hire Me</button>
                    <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
                </div>


                <div className="w-right">
                    <motion.div
                        initial={{ rotate: 45 }}
                        whileInView={{ rotate: 0 }}
                        viewport={{ margin: "-40px" }}
                        transition={{ duration: 3.5, type: "spring" }}
                        className="w-mainCircle">
                        <div className="w-secCircle">
                            <img src={Upwork} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Fiverr} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Amazon} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Shopify} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Facebook} alt="" />
                        </div>
                    </motion.div>
                    {/* background Circles */}
                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>
                </div>
            </div>
        </>
    )
}

export default Work