import { useEffect, useState } from "react";
import { FaArrowLeft, FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../../Api/api";
import Spinner from "../../Spinner";
import toast, { Toaster } from "react-hot-toast";

export default function AssessmentQuestion() {
  const [Selected, setSelected] = useState();
  const [data, setdata] = useState([]);
  const [show, setshow] = useState(false);
  const [params, setparams] = useSearchParams();
  const [index, setindex] = useState(1);
  
  let navigate = useNavigate();
  const [Length, setLength] = useState();
  let token = localStorage.getItem("COURSES_USER_TOKEN");

  async function Fetchdata() {
    try {
      let url = `${BASE_URL}/getassessment?assessmentId=${params.get("assessmentId")}&index=${params.get("index")}`;
      setshow(true);
      const data = await fetch(url, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const response = await data.json();
      console.log(response);
      if (response.success) {
        setshow(false);
        setdata(response?.data);
        setLength(response?.length);
      } else {
        localStorage.removeItem('lastminute')
        navigate("/submitted");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Fetchdata();
  }, [params.get("index")]);

  const handleSubmit = async () => {
    try {
      let url = `${BASE_URL}/submitassessmentanswer`;
      setshow(true);
      const data1 = await fetch(url, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          questionID: data._id,
          assessment_id: params.get("assessmentId"),
          answer: Selected
          
        }),
      });
      const response = await data1.json();
      if (response.success) {
        setindex(index + 1);
        setshow(false);
        setSelected("");
        navigate(`/assessmentquestions?assessmentId=${params.get("assessmentId")}&index=${index + 1}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function Nextquestion() {
    if (index <= Length) {
      Fetchdata();
      setSelected("");
      setindex(index + 1);
      navigate(`/assessmentquestions?assessmentId=${params.get("assessmentId")}&index=${index + 1}`);
    }
  }

  function Previousquestion() {
    if (index >= 1) {
      Fetchdata();
      setindex(index - 1);
      navigate(`/assessmentquestions?assessmentId=${params.get("assessmentId")}&index=${index - 1}`);
    }
  }

  async function handleClick(status,remarks) {
    try {
      let url = `${BASE_URL}/submitassessment`;
      const data = await fetch(url, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ assessment_id: params.get("assessmentId"),remarks:remarks,status:status }),
      });
      const response = await data.json();
      if (response.success) {
        localStorage.removeItem('lastminute')
        toast.success("Submitted Successfully");
        navigate('/submitted');
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handlePrev() {
    if (localStorage.getItem('history')) {
      let history = localStorage.getItem('history');
      localStorage.removeItem('history');
      navigate(history);
    } else {
      navigate('/modules');
    }
  }

  return (
    <>
      <Toaster toastOptions={{
         duration: 500,
      }} />
      <div className="px-[6%] space-y-5 py-2 bg-white" >
        <div className="flex justify-between items-center border p-3 rounded-lg font-pop">
          {/* <div onClick={handlePrev} className="flex items-center space-x-3 cursor-pointer">
            <FaArrowLeft />
            <p className="font-semibold">Go Back to {data?.module} Module</p>
          </div> */}
          <div className="flex items-center space-x-3">
            <FaLessThan
              className={`h-8 w-8 text-xs rounded-full bg-slate-300 p-2 ${index === 1 ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
              onClick={() => (index > 1 ? Previousquestion() : "")}
            />
            <FaGreaterThan
              className={`h-8 w-8 text-xs rounded-full bg-slate-300 p-2 ${index === Length ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
              onClick={() => (index < Length ? Nextquestion() : "")}
            />
          </div>
        </div>
        <div className="flex justify-between h-[77vh] xsm:flex-col xsm:gap-5 font-pop">
          <div className="w-[60%] rounded-xl border h-full shadow-xl xsm:w-full">
            <div className="border-b-[2px] p-3 font-semibold">{data?.module}</div>
            <div className="p-3 text-lg text-gray-700">Q:{params.get("index")}{data?.question}</div>
          </div>
          <div className="w-[35%] rounded-xl border min-h-full shadow-xl overflow-y-auto xsm:w-full xsm:min-h-[50vh] xsm:h-fit">
            <div className="border-b-[2px] p-3 font-semibold">Options</div>
            <div className="flex flex-col p-5 gap-y-5">
              {data?.options && data?.options?.map((item) => (
                <label
                  key={item?._id}
                  onClick={() => !data?.isSubmitted ? setSelected(item?.option) : ""}
                  htmlFor={item?.option}
                  className={`${Selected === item.option || data?.submittedAnswer === item?.option ? "border-[#1DBF73]" : ""} flex p-3 border rounded-lg space-x-2 cursor-pointer`}
                >
                  <input
                    name="option"
                    id={item?.option}
                    type="radio"
                    checked={data?.isSubmitted ? data.submittedAnswer === item?.option : Selected === item?.option}
                    className="accent-[#1DBF73]"
                    readOnly
                  />
                  <p>{item?.option}</p>
                </label>
              ))}
              <div className="flex justify-end space-x-2">
                <button
                  className={`py-2 px-4 rounded-xl bg-[#1DBF73] text-white ${data?.isSubmitted ? "cursor-not-allowed opacity-50" : ""}`}
                  onClick={() => !data?.isSubmitted ? handleSubmit() : ""}
                >
                  Save
                </button>
                {Length === parseInt(params.get("index")) && (
                  <button className="py-2 px-4 rounded-xl bg-[#1DBF73] text-white" onClick={()=>handleClick(false,'')}>
                    Finish
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        {show && (
          <div className="w-full h-screen fixed top-0 left-0 bg-[#b4cca1] opacity-80">
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
}