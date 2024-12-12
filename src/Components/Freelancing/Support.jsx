// import { useState } from "react";
import { GoDotFill } from "react-icons/go";
const Support = () => {
  // const [link, setlink] = useState("")
  const postings = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1683836722608-60ab4d1b58e5?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      postingTime: "15 Sep 2023",
      designation: "Internet",
      heading: "How to build a scalable cloud infrastructure",
      link:"https://www.britannica.com/technology/Internet",
      description:
        "Learn how to design and deploy scalable cloud systems that can handle millions of users with minimal downtime, leveraging cloud providers like AWS and Google Cloud.",
      person: {
        profile:
          "https://images.unsplash.com/photo-1529665730773-4f3fda31a5f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Rahul Patel",
        profession: "Cloud Engineer",
      },
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      postingTime: "12 Aug 2022",
      designation: "AI & Machine Learning",
      link:"https://www.sciencedirect.com/science/article/pii/S2667241323000113",
      heading: "Mastering AI and machine learning algorithms",
      description:
        "An in-depth guide to developing and optimizing machine learning algorithms using Python, TensorFlow, and PyTorch to solve real-world problems efficiently.",
      person: {
        profile:
          "https://images.unsplash.com/photo-1642736468716-cc5836558a74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Maria Gonzales",
        profession: "Data Scientist",
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1634097538301-5d5f8b09eb84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      postingTime: "10 Jan 2024",
      designation: "Blockchain",
      heading: "The future of fintech and blockchain",
      link:"https://economictimes.indiatimes.com/jobs/c-suite/blockchain-and-fintech-revolutionizing-the-future-of-transactions/articleshow/105235312.cms?from=mdr",
      description:
        "Explore how blockchain technology is revolutionizing the financial industry by enabling decentralized, secure, and transparent transactions across global markets.",
      person: {
        name: "Alex Johnson",
        profile:
          "https://images.unsplash.com/photo-1728996777138-66a369255f18?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "Blockchain Developer",
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      postingTime: "22 Jun 2023",
      designation: "HR & Management",
      link:"https://www.proofhub.com/articles/managing-remote-teams",
      heading: "Effective remote team management strategies",
      description:
        "Discover practical techniques for managing distributed teams, improving collaboration, and boosting productivity in a remote work environment.",
      person: {
        profile:
          "https://images.unsplash.com/photo-1543207564-1271b510019d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Emily Wong",
        profession: "HR Manager",
      },
    }
  ];

  const handleClick = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };



  return (
<div className=" font-pop my-5 max-w-screen-xl mx-auto ">
  <h1 className="text-center text-[50px] font-bold mb-8 xsm:text-2xl">
    Support And <span className="text-green-500">Resources</span>
  </h1>

  {/* Responsive grid system */}
  <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xsm:grid-cols-1 gap-6 xl:mx-[12rem] md:mx-[6rem] mx-[5rem] xsm:mx-[2rem] " >
    {postings.map((card, index) => (
      <div key={index} className="flex flex-col w-[20rem] cursor-pointer" onClick={()=>handleClick(card.link)}>
        <img
          src={card.image}
          alt={card.title}
          className="w-full object-cover rounded-lg h-[15rem] "
        />
        <div className="flex gap-4 items-center my-2 ">
          <h2 className="text-normal font-semibold">{card.designation}</h2>
          <GoDotFill className="text-sm" /> 
          <h2 className="text-sm ">{card.postingTime}</h2>
        </div>
        <p className="text-justify">{card.description}</p>
        <p className="">{card.content}</p>
        <div className="flex gap-5 my-2">
          <img
            src={card.person.profile}
            alt=""
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
          <div className="flex flex-col text-md ">
            <span className="font-semibold">{card.person.name}</span>
            <span>{card.person.profession}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Support;
