import { ReactComponent as Search } from '../../Assets/Icons/search.svg'
import { ReactComponent as Bell } from '../../Assets/Icons/Bell.svg'
import { ReactComponent as Heart } from '../../Assets/Icons/Heart.svg'
import { ReactComponent as Cart } from '../../Assets/Icons/cart.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchCategories } from '../../Api/api'
export default function Navbar() {

    const [categorydata, setcategorydata] = useState()
    const navigate = useNavigate()
    function handleChange(e) {
        let id = e.target.value;
        // console.log(id);
        navigate(`courses?category=${id}`)
    }

    const fetchCategory = async () => {
        const res = await fetchCategories();
        console.log(res.data.categories);
        setcategorydata(res.data.categories);
    }

    useEffect(() => {
        fetchCategory()
    }, [])

    return (<>
        <div className="h-[80px] flex justify-between items-center font-mons px-[5%] 2xl:px-[0%]">
            <div className="flex justify-center items-center text-[#4E5566] space-x-20">
                <Link to=''><img src="/logo.png" /></Link>
                <div className='flex justify-center items-center space-x-3'>
                    <div className="w-32  h-8 flex items-center border rounded">
                        <select onChange={(e) => handleChange(e)} className="w-full h-full pl-2 bg-transparent text-[#4E5566] outline-none">
                            <option value='/' selected >Browse</option>

                            {
                                categorydata?.map((val, ind) => {
                                    return (
                                        <option value={val.Category_Name} key={ind}>{val.Category_Name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="w-[350px] h-8 relative font-mons">
                        <Search className='absolute top-1 left-1' />
                        <input className="pl-7 w-full h-full bg-transparent outline-none border rounded text-[#4E5566]" placeholder="What do you want learn..." />
                    </div>
                </div>
            </div>

            <div className='flex items-center space-x-4'>
                <Link to='/learning' className='font-semibold'>My Learning</Link>
                <Link to='/notification'><Bell /></Link>
                <Link to='/learning/wishlist'><Heart /></Link>
                <Link to='/cart'><Cart /></Link>
                <Link to='/register' className='text-[#1D2026] font-mons py-2 px-4 text-[16px] font-semibold'>Create Account</Link>
                <Link to='/login' className='text-white font-mons py-2 px-4 text-center text-[16px] font-semibold bg-[#1D2026] rounded-full'>Sign In</Link>
            </div>
        </div>
    </>)
}