import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from '../../assets/img/Sidebar.png';
import Ecommerce from '../../assets/img/Ecommerce.png';
import Hoc from '../../assets/img/Hoc.png';
import MusicApp from '../../assets/img/MusicApp.png';
import 'swiper/css';
const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            {/* heading */}
            <span>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Hoc} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio