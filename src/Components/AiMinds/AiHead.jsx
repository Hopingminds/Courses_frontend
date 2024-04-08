import "./AiMinds.css";
import Typewriter from 'typewriter-effect';

export default function AiHead() {
  const handleDownloadPdf = () => {
    // Replace 'path_to_your_pdf.pdf' with the actual path to your PDF file
    const pdfUrl = "brochure-26-09.pdf";

    // Create a hidden anchor element
    const anchorElement = document.createElement("a");
    anchorElement.href = pdfUrl;
    anchorElement.download = "DownloadedBrochure.pdf"; // Set the filename for downloaded file

    // Append the anchor element to the body
    document.body.appendChild(anchorElement);

    // Trigger the click event on the anchor element to initiate download
    anchorElement.click();

    // Remove the anchor element from the body
    document.body.removeChild(anchorElement);
  };

  return (
    <div className="flex justify-between bg-red-400 px-[5%] py-[4%] Ai-Backimg">
      <div className="w-[60%] flex flex-col justify-center gap-4">
        <p className="font-mons font-medium text-[25px] text-white">
          Professional Certificate Course of
        </p>
        <div>
          <p className="font-mons font-bold text-[70px] text-[#169f63] leading-none flex">
            <Typewriter
                          options={{
                            strings: ['AI & Data Science'],
                            cursor: '',
                            autoStart: true,
                            loop: true,
                          }}
                        />
            <span className="text-white text-[80px]">|</span>
          </p>
        </div>
        <div className="w-[75%] ">
          <p className="font-mons font-medium text-[14px] text-white text-justify leading-7 word-spacing-2">
            Learn in-demand AI skills such as Deep Learning, Generative AI, NLP
            & Reinforcement Learning. Master 15+ programming tools & languages
            along with the latest Gen AI tools while also working on 12+
            industry projects.
          </p>
        </div>
        <div className="flex justify-between w-[73%] mt-6">
          {/* <button className="font-mons font-bold text-white text-[20px] bg-[#169f63] border-2 border-white rounded-2xl px-14 py-4">Enroll Now</button> */}
          <a
            onClick={handleDownloadPdf}
            className="font-mons font-bold text-white text-[20px] bg-[#169f63] border-2 border-white rounded-2xl px-9 py-4 cursor-pointer"
          >
            Download Brochure
          </a>
        </div>
      </div>
      <div className="w-[30%] flex flex-col gap-4 items-end">
        <div className="w-[90%] bg-white flex flex-col gap-2 items-center rounded-2xl py-3 innerShadow fadeInLeft">
          <p className="font-mons font-bold text-[#169f63]">Partner with</p>
          <img className="w-36" src="../img/ainsdc.png" alt="nsdc" />
        </div>
        <div className="w-[90%] bg-white flex flex-col gap-2 items-center rounded-2xl py-6 innerShadow fadeInLeft">
          <p className="font-mons font-bold text-[#169f63]">
            Boom in AI Applications
          </p>
          <p className="font-mons font-medium">Limited Seats Available</p>
        </div>
        <div className="w-[90%] bg-white flex flex-col gap-2 items-center rounded-2xl py-6 innerShadow fadeInLeft">
          <p className="font-mons font-bold text-[#169f63]">
            Program Duration: 40 Weeks
          </p>
          <p className="font-mons font-medium">8-10 hours/week</p>
        </div>
        <div className="w-[90%] bg-white flex flex-col gap-2 items-center rounded-2xl py-6 innerShadow fadeInLeft">
          <p className="font-mons font-bold text-[#169f63]">Learning Format</p>
          <p className="font-mons font-medium">Online Live Classes</p>
        </div>
      </div>
    </div>
  );
}
