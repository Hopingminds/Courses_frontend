import './AiMinds.css';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function AiTools(){

    const tools = [
        {
            name:'python',
            img:'../img/python.png',
        },
        {
            name:'Tensor Flow',
            img:'../img/Tensorflow.png',
        },
        {
            name:'Pandas',
            img:'../img/Panda.png',
        },
        {
            name:'Power BI',
            img:'../img/powerbi.png',
        },
        {
            name:'Kaggle',
            img:'../img/kaggle.png',
        },
        {
            name:'MySQL',
            img:'../img/mysql.png',
        },
        {
            name:'Docker',
            img:'../img/docker.png',
        },
        {
            name:'SQl',
            img:'../img/SQL.png',
        },
        {
            name:'NumPy',
            img:'../img/Numpy.png',
        },
        {
            name:'C++',
            img:'../img/c++.png',
        },
        {
            name:'MATLAB',
            img:'../img/matlab.png',
        },
        {
            name:'Scala',
            img:'../img/scala.png',
        },
    ];

    return (
        <div id="tools" className=" px-[5%] py-[4%] pl-[24%] flex flex-col gap-2 xsm:px-[2%] xsm:py-[2%] xsm:gap-1">
            <p className="font-mons font-extrabold text-[30px] text-[#169f63] xsm:text-[14px]">Lanuguages & Tools You Will Learn</p>
            <p className="font-mons font-extrabold text-[20px] text-[#100101] xsm:text-[10px]">15+ Programming Languages, Tools and Libraries Covered</p>
            {/* Tools cards */}
            <div className="grid grid-cols-4 gap-4 gap-y-6 my-6 xsm:my-2 xsm:gap-y-2 xsm:gap-2">
                {tools.map((tool,index)=>(
                <div
                    key={index}
                    className="flex flex-col items-center justify-between h-[160px] rounded-xl fullshadow p-[10px] xsm:h-[70px]">
                    <div className='h-[85%] flex justify-center items-center'>
                        <img className='w-full h-full' src={tool.img} alt="" />
                    </div>
                    <p className="font-outfit font-semibold py-2 text-[14px] xsm:text-[7px]">{tool.name}</p>
                </div>
                ))}
            </div>
            <p className="font-mons font-extrabold text-[20px] text-[#100101] xsm:text-[10px]">Generative AI Tools Covered</p>
            {/* splide */}
            <div className='px-[6%] mt-4 xsm:px-[3%] xsm:mt-2'>
                <Splide
                    options={{
                        type: "loop",
                        perPage: 3,
                        pagination: false,
                        perMove: 1,
                        wheel: false,
                        arrows: false,
                        autoplay: true,
                        interval: 5000,
                        speed: 1500,
                        delay: 4,
                        pauseOnHover: false,
                        drag: true,
                        gap:'70px',

                    }}>
                    <SplideSlide>
                        <img className='border border-black rounded-xl xsm:rounded-md xsm:border-[1px]' src='../img/chatgpt.png' alt="banner  not found" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className='border border-black rounded-xl xsm:rounded-md xsm:border-[1px]' src='../img/huggingFace.png' alt="banner  not found" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className='border border-black rounded-xl xsm:rounded-md xsm:border-[1px]' src='../img/dalle.png' alt="banner  not found" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className='border border-black rounded-xl xsm:rounded-md xsm:border-[1px]' src='../img/MidJourney.png' alt="banner not found" />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    );
}