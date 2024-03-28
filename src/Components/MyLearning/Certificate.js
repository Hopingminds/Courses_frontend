export default function Certificate(props){
    // console.log(props);
    let {courses}=props
    console.log(courses);
    // const [Data, setData] = useState(courses)
    // function Download(){
    //     const pdfUrl = "Certic.pdf";
    //     const link = document.createElement("a");
    //     link.href = pdfUrl;
    //     link.download = "document.pdf"; // specify the filename
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // }
    return (
        <div className="px-[5%] mt-8 flex space-y-8 justify-between">
            <div className="flex flex-col w-[60%] justify-between ">

                {
                    courses?.map((item,ind)=>{
                        return(<>
                        <div key={ind} className="flex flex-row bg-[#E2FFF1] p-4 mt-4 w-full rounded-2xl justify-between shadow-2xl shadow-[#D9D9D9]">
                    <div className="w-[28%] rounded-2xl">
                        <img className="w-full h-full rounded-xl" src={item.course.featured_image}/>
                    </div>
                    <div className="w-[69%] flex flex-col justify-between">
                        <div className="space-y-2">
                            <p className="font-pop font-semibold text-[18px]">{item.course.title}</p>
                            <p className="font-pop text-[#555555] text-[13px]">{item.course.overview.slice(0,70)}..</p>
                            <div className="flex space-x-36 ">
                                <div className="flex space-x-2 items-center">
                                    <img className="w-[16px] h-[16px]" src="../Icons/RCDesign.svg"/>
                                    <p className="font-pop text-[11px] font-medium text-[#555555]">{item.course.category}</p>
                                </div>
                                <div className="flex space-x-2 items-center">
                                    <img className="w-[16px] h-[16px] text-[#555555]" src="../Icons/RCClock.svg"/>
                                    <p className="font-pop text-[11px] font-medium text-[#555555]">{item.course.duration}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="font-pop font-medium text-[13px] text-[#555555] xsm:text-[6px]">Add credential to Your Resume </p>
                            <button className="bg-[#1DBF73] py-2 px-6 rounded-full text-white text-[14px] font-nu font-bold xsm:text-[6px] xsm:py-1 xsm:px-3" >Get Certification</button>
                        </div>
                    </div>
                </div>
                        </>)
                    })
                }
            </div>
            <div className="flex flex-col Certificate-right gap-y-5 xsm:flex-row xsm:justify-between">
                <p className="font-pop font-semibold text-[18px] xsm:hidden">Explore Certificates By Category</p>
                <button className="bg-[#E2FFF1] py-3 px-10 rounded-lg font-nu font-semibold xsm:text-[6px] xsm:py-2 xsm:px-6 xsm:rounded-sm">Professional Certificates</button>
                <button className="bg-[#E2FFF1] py-3 px-10 rounded-lg font-nu font-semibold xsm:text-[6px] xsm:py-2 xsm:px-6 xsm:rounded-sm">Free Certificates</button>
            </div>
        </div>
    );
}