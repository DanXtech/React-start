import './Intro.css';
import Github from '../../assets/img/github.png';
import LinkedIn from '../../assets/img/linkedin.png';
import Instagram from '../../assets/img/instagram.png';
import Vector1 from '../../assets/img/Vector1.png';
import Vector2 from '../../assets/img/Vector2.png';
import Boy from '../../assets/img/boy.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Humble from '../../assets/img/humble.png';
import Crown from '../../assets/img/crown.png';
import Glassesimoji from '../../assets/img/glassesimoji.png';
import { motion } from 'framer-motion';

const Intro = () => {

    const transtion = { duration: 2, type: 'spring' }
    return (
        <div className="Intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I Am</span>
                    <span>Danel Kehinde</span>
                    <span>A Frontend Developer with high level of experience
                        in web Designing and developemnt, UI/UX Product Design
                        and Graphics Design and more Quality work
                    </span>
                </div>
                <button className="i-button button">Hire Me</button>
                <div className="i-icons">
                    <a href="">
                        <img src={Github} alt="" />
                    </a>
                    <a href="">
                        <img src={LinkedIn} alt="" />
                    </a>
                    <a href="">
                        <img src={Instagram} alt="" />
                    </a>
                </div>
            </div>

            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy} alt="" />
                <motion.img
                    initial={{ left: '-30%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transtion}
                    src={Glassesimoji} alt="" />
                {/* <div style={{ top: '-4%', left: '60%' }}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </div> */}
                <motion.div
                    initial={{ top: '-4%', left: '78%' }}
                    whileInView={{ left: '68%' }}
                    transition={transtion}
                    style={{ top: '-4%', left: '74%' }}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </motion.div>

                <motion.div
                    initial={{ left: '4rem', top: '15rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transtion}
                    style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={Humble} txt1='Best Design' txt2='DanXcode' />
                </motion.div>

                {/* blur div */}
                <div className='blur' style={{ background: 'rgba(238, 210, 255)' }}></div>
                <div className='blur'
                    style={{
                        background: '#c1f5ff',
                        top: '17rem',
                        width: '21rem',
                        height: '11rem',
                        left: '-9rem'
                    }}
                ></div>
            </div>
        </div>
    )
}

export default Intro