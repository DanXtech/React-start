// import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import { Link } from 'react-scroll'
import { MdLightMode } from 'react-icons/md'
const Navbar = ({ handleToggleDarkMode }) => {
    return (
        <div className='n-wrapper'>
            <div className="n-left">
                <div className="n-name">DanXtech</div>
                <button
                    onClick={() =>
                        handleToggleDarkMode(
                            (previousDarkMode) => !previousDarkMode
                        )
                    }
                    className=' light btn-toggle'>
                    <MdLightMode />
                </button>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true}>
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonials' smooth={true}>
                            <li>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                <button className='button'>
                    <Link spy={true} to='Contact' smooth={true}>Contact</Link>
                </button>
            </div>
        </div>
    )
}

export default Navbar