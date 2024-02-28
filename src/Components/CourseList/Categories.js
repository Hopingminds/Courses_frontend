import React, { useState } from "react";
import { ReactComponent as Square } from "../../Assets/Icons/square.svg";
import { ReactComponent as SquareCheck } from "../../Assets/Icons/squarecheck.svg";

const Categories = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [fullStackChecked, setFullStackChecked] = useState(false);
  const [cyberSecurityChecked, setCyberSecurityChecked] = useState(false);
  const [aimlChecked, setaimlChecked] = useState(false);
  const [evdChecked, setevdChecked] = useState(false);
  const [hcChecked, sethcChecked] = useState(false);
  const [dsChecked, setdsChecked] = useState(false);
  const [uiChecked, setuiChecked] = useState(false);
  const [dmChecked, setdmChecked] = useState(false); 
  const [ins1Checked, setins1Checked] = useState(false); 
  const [ins2Checked, setins2Checked] = useState(false); 
  const [allChecked, setallChecked] = useState(false); 
  const [freeChecked, setfreeChecked] = useState(false); 
  const [paidChecked, setpaidChecked] = useState(false); 
  const [r1Checked, setr1Checked] = useState(false); 
  const [r2Checked, setr2Checked] = useState(false); 
  const [r3Checked, setr3Checked] = useState(false); 
  const [r4Checked, setr4Checked] = useState(false); 
  const [r5Checked, setr5Checked] = useState(false); 
  const [l1Checked, setl1Checked] = useState(false); 
  const [l2Checked, setl2Checked] = useState(false); 
  const [l3Checked, setl3Checked] = useState(false); 
  const [l4Checked, setl4Checked] = useState(false); 
  
  return (
    <div className="flex flex-col h-[1104px] gap-6">
      <div className="flex flex-col gap-4">
        <p className="text-[#000000] text-[20px] font-Montserrat font-bold">
          Course Category
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setFullStackChecked(!fullStackChecked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">
                Full Stack Development
              </p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">15</p>
          </div>
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setCyberSecurityChecked(!cyberSecurityChecked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">
                Cyber Security
              </p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">15</p>
          </div>
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setaimlChecked(!aimlChecked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">
                AI /ML
              </p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">15</p>
          </div>
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setevdChecked(!evdChecked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">
                Electric Vehicle Design
              </p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">15</p>
          </div>
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => sethcChecked(!hcChecked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">
                Hydrocarbon
              </p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">15</p>
          </div>
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setdsChecked(!dsChecked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">
                Data Science
              </p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">15</p>
          </div>
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setuiChecked(!uiChecked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">
                UI/UX
              </p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">15</p>
          </div>
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setdmChecked(!dmChecked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">
                Digital Marketing
              </p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">15</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-[#000000] text-[20px] font-Montserrat font-bold">
          Instructors
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setins1Checked(!ins1Checked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">
                Kenny White
              </p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">15</p>
          </div>
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setins2Checked(!ins2Checked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">
                John Doe
              </p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">15</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-[#000000] text-[20px] font-Montserrat font-bold">
          Price
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setallChecked(!allChecked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">All</p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">15</p>
          </div>
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setfreeChecked(!freeChecked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">Free</p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">15</p>
          </div>
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setpaidChecked(!paidChecked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">Paid</p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">15</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-[#000000] text-[20px] font-Montserrat font-bold">
          Review
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setr1Checked(!r1Checked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">
                <span className="text-xl text-center text-[#FFB800]">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>
              </p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">(1,025)</p>
          </div>
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setr2Checked(!r2Checked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">
              <span className="text-xl text-center text-[#FFB800]">
                  &#9733;&#9733;&#9733;&#9733;&#9734;
                </span>
              </p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">(1,025)</p>
          </div>
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setr3Checked(!r3Checked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">
              <span className="text-xl text-center text-[#FFB800]">
                  &#9733;&#9733;&#9733;&#9734;&#9734;
                </span>
              </p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">(1,025)</p>
          </div>
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setr5Checked(!r5Checked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">
              <span className="text-xl text-center text-[#FFB800]">
                  &#9733;&#9733;&#9734;&#9734;&#9734;
                </span>
              </p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">(1,025)</p>
          </div>
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setr4Checked(!r4Checked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">
              <span className="text-xl text-center text-[#FFB800]">
                  &#9733;&#9734;&#9734;&#9734;&#9734;
                </span>
              </p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">(1,025)</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-[#000000] text-[20px] font-Montserrat font-bold">
          Level
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setl1Checked(!l1Checked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">
                All levels
              </p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">15</p>
          </div>
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setl2Checked(!l2Checked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">
                Beginner
              </p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">15</p>
          </div>
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setl3Checked(!l3Checked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">
                Intermidiate
              </p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">15</p>
          </div>
          <div className="flex flex-row justify-between">
            <div
              className="flex flex-row gap-1 items-center cursor-pointer"
              onClick={() => setl4Checked(!l4Checked)}
            >
              <input type="checkbox" className="h-4 w-4"/>
              <p className="text-[#555555] text-[18px] font-Montserrat">
                Expert
              </p>
            </div>
            <p className="text-[#555555] text-[18px] font-Jost">15</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
