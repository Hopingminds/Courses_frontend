import { ReactComponent as Search } from '../../Assets/Icons/search.svg'
import { ReactComponent as Bell } from '../../Assets/Icons/Bell.svg'
import { ReactComponent as Heart } from '../../Assets/Icons/Heart.svg'
import { ReactComponent as Cart } from '../../Assets/Icons/cart.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
export default function Navbar() {
    const navigate = useNavigate()
    function handleChange(e) {
        let id = e.target.value;
        // console.log(id);
        navigate(id)
    }
    return (
        <>
            <Row className='header'>
                <Col xl={6} className='d-flex'>
                    <div className='header-logo'>
                        <img src="/logo.png" alt='logo' />
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className="w-32  h-8 flex items-center border rounded mr-3">
                            <select onChange={(e) => handleChange(e)} className="w-full h-full pl-2 bg-transparent text-[#4E5566] outline-none">
                                <option value='/' selected >Browse</option>
                                <option value='/courses?category=full-stack-developer'>Full Stack Development</option>
                                <option value='/courses?category=ai&ml'>Ai & Ml</option>
                                <option value='/courses?category=design'>Design</option>
                                <option value='/courses?category=electric-vehicle-design'>Electric Vehicle Design</option>
                                <option value='/courses?category=data-science'>Data Science</option>
                                <option value='/courses?category=hydro-carbon'>Hydro Carbon</option>
                                <option value='/courses?category=cyber-security'>Cyber Security</option>
                            </select>
                        </div>
                        <div className="w-[350px] h-8 relative font-mons">
                            <Search className='absolute top-1 left-1' />
                            <input className="pl-7 w-full h-full bg-transparent outline-none border rounded text-[#4E5566]" placeholder="What do you want learn..." />
                        </div>
                    </div>

                </Col>
                <Col xl={6}>
                    <div className='d-flex justify-end header-link'>
                        <Link to='/learning' className='font-semibold'>My Learning</Link>
                        <Link to='/notification'><Bell /></Link>
                        <Link to='/learning/wishlist'><Heart /></Link>
                        <Link to='/cart'><Cart /></Link>
                        <Link to='/register' className='text-[#1D2026] font-mons py-2 px-4 text-[16px] font-semibold'>Create Account</Link>
                        <Link to='/login' className='text-white font-mons py-2 px-4 text-center text-[16px] font-semibold bg-[#1D2026] rounded-full'>Sign In</Link>
                    </div>
                </Col>
            </Row>
        </>
    )
}