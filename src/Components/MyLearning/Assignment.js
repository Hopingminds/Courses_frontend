import './MLheader.css';

export default function Assignment(){
    return (
        <div className="px-[5%] my-6 mb-24 xsm:my-4">
            <div className="flex flex-col w-full space-y-1">
                <div className="grid grid-cols-[1fr,1.5fr,3fr,2fr,2fr,1.5fr] w-full bg-[#E2FFF1] py-4 px-4 rounded-md xsm:text-[6px] xsm:py-1 xsm:px-1 xsm:rounded-sm">
                    <p className="font-pop font-semibold text-center grid">Section</p>
                    <p className="font-pop font-semibold text-center">Assignment No</p>
                    <p className="font-pop font-semibold text-center">Subject</p>
                    <p className="font-pop font-semibold text-center">Issue Date</p>
                    <p className="font-pop font-semibold text-center">Deadline</p>
                    <p className="font-pop font-semibold text-center">Status</p>
                </div>
                 
                <div className="grid grid-cols-[1fr,1.5fr,3fr,2fr,2fr,1.5fr] w-full bg-[#E2FFF1] py-4 px-4 rounded-md xsm:text-[6px] xsm:py-1 xsm:px-1 xsm:rounded-sm">
                    <p className="font-nu font-semibold text-center">1</p>
                    <p className="font-nu font-semibold text-center">1</p>
                    <p className="font-nu font-semibold text-center">Full Stack Development</p>
                    <p className="font-nu font-semibold text-center">12 November 2024</p>
                    <p className="font-nu font-semibold text-center">12 November 2024</p>
                    <p className="font-nu font-semibold text-center text-[#1DBF73]">Succcess</p>
                </div>
            </div>
        </div>
    );
}