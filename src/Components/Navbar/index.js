import { ReactComponent as Search } from '../../Assets/Icons/search.svg'
import { ReactComponent as Bell } from '../../Assets/Icons/Bell.svg'
import { ReactComponent as Heart } from '../../Assets/Icons/Heart.svg'
import { ReactComponent as Cart } from '../../Assets/Icons/cart.svg'
import { Link } from 'react-router-dom'
export default function Navbar(){
    return(<>
    <div className="h-[80px] flex justify-between items-center font-mons px-10 ">
        <div className="flex justify-center items-center text-[#4E5566] space-x-20">
            <Link to=''><img src="/logo.png"/></Link>
            <div className='flex justify-center items-center space-x-3'>
                <div className="w-32  h-8 flex items-center border rounded">
                    <select className="w-full h-full pl-2 bg-transparent text-[#4E5566] outline-none">
                        <option>Browse</option>
                    </select>
                </div>
                <div className="w-[350px] h-8 relative font-mons">
                    <Search className='absolute top-1 left-1'/>
                    <input className="pl-7 w-full h-full bg-transparent outline-none border rounded text-[#4E5566]" placeholder="What do you want learn..."/>
                </div>
            </div>
        </div>

        <div className='flex items-center space-x-4'>
            <Link to='/learning' className='font-semibold'>My Learning</Link>
            <Bell/>
            <Heart/>
            <Cart/>
            <Link to='/register' className='text-[#1D2026] font-mons py-2 px-4 text-[16px] font-semibold'>Create Account</Link>
            <Link to='/login' className='text-white font-mons py-2 px-4 text-center text-[16px] font-semibold bg-[#1D2026]'>Sign In</Link>
        </div>
    </div>
    </>)
}