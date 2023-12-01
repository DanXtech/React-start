import './Services.css';
// import Glasses form "../../"
import HeartEmoji from '../../assets/img/heartemoji.png';
import Glasses from '../../assets/img/glasses.png';
import Humble from '../../assets/img/humble.png';
import Card from '../Card/Card';
import { motion } from 'framer-motion';
const Services = () => {
    const transtion = { duration: 2, type: 'spring' }

    return (
        <div className='services' id='Services'>
            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>I web designer with love to create so many Good project
                    <br />
                    view to see more of my project.
                </span>
                {/* <a href= {Resume} download>
                <button className='button s-button'>Download CV</button>
            </a> */}
                <button className='button s-button'>Download CV</button>
                <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side */}
            <div className="cards ">
                <motion.div
                    initial={{ left: '12rem' }}
                    whileInView={{ left: '14rem' }}
                    transition={transtion}
                    style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Canva, Adobe"}
                    />
                </motion.div>
                <motion.div
                    initial={{ left: "-4rem", top: "10rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transtion}
                    style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"Html, Css, Scss, bootstrap, Tailwind,  chakra-ui,  material-ui JavaScript, React, Next js, Node js, P "}
                    />
                </motion.div>
                <motion.div
                    initial={{ top: "19rem", left: "10rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transtion}
                    style={{ top: "19rem", left: "12rem" }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"I am a product designer in which I can design any kind of project "}
                    />
                </motion.div>
                <div className="blur s-blur" style={{ background: 'var(--purple)' }}>
                </div>
            </div>
        </div >
    )
}

export default Services