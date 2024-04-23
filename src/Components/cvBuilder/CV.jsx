import ReactMarkdown from "react-markdown";
import {
  HiOutlineMail,
  HiOutlineBriefcase,
  HiOutlineLink,
  HiOutlineCalendar,
  HiExternalLink,
} from "react-icons/hi";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import { useContext } from "react";
import { CvContext } from "./hooks/CvContext";
import { websiteLinkCreator, resolvedWebsiteLink } from "./utils/link.utils";
const CV = () => {
  const items = "flex items-center mr-3 mt-[5px] ";
  const itemsSVG = "h-3 w-3 text-gray-700 mr-1";
  const titles = "text-sm font-medium uppercase text-rose-400";
  const paragraphSize = "text-[0.680rem] mt-[3px] text-gray-700 ";
  const jobSize = "text-[0.68rem] text-gray-500 ";

  const cv = useContext(CvContext);

  return (
    <div className="w-full h-full" id="cv">
      {[cv.cv].map((item, index) => {
        return (
          <div key={index}>
            <section id="header">
              {/* HEADER START */}
              <div className="flex items-center">
                {item.displayImage ? (
                  <div className="mr-4 flex ">
                    <img
                      src={item.image || "/login_bg.png"}
                      className="rounded-full"
                      style={{
                        height: "60px",
                        width: "60px",
                        objectFit: "cover",
                      }}
                      alt="profilePicture"
                    />
                  </div>
                ) : null}

                <div className="space-y-[3px]">
                  <h1 className="text-2xl font-semibold">{item.name}</h1>
                  <h4 className=" text-gray-400 text-sm font-medium">
                    {item.jobTitle}
                    {item.location ? " - " : null}
                    {item.location}
                  </h4>
                </div>
              </div>
              <div className="flex flex-wrap text-xs mt-[0.2rem] items-center align-middle ">
                {item.email && item.displayMail ? (
                  <div className={items}>
                    <HiOutlineMail className={itemsSVG} />
                    <a href={`mailto:${item.email}`}>{item.email}</a>
                  </div>
                ) : null}
                {item.website && item.displayWebSite ? (
                  <div className={items}>
                    <HiOutlineLink className={itemsSVG} />
                    <a
                      href={websiteLinkCreator(item.website)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {resolvedWebsiteLink(websiteLinkCreator(item.website))}
                    </a>
                  </div>
                ) : null}
                {item.github && item.displayGithub ? (
                  <div className={items}>
                    <AiFillGithub className={itemsSVG} />

                    <a
                      href={`https://github.com/${item.github}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.github}
                    </a>
                  </div>
                ) : null}
                {item.twitter && item.displayTwitter ? (
                  <div className={items}>
                    <TbBrandTwitter className={itemsSVG} />
                    <a
                      href={`https://twitter.com/${item.twitter}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.twitter}
                    </a>
                  </div>
                ) : null}
                {item.linkedIn && item.displayLinkedIn ? (
                  <div className={items}>
                    <AiOutlineLinkedin className={itemsSVG} />
                    <a
                      href={`https://www.linkedin.com/in/${item.linkedIn}/`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.linkedIn}
                    </a>
                  </div>
                ) : null}
                {item.instagram && item.displayInstagram ? (
                  <div className={items}>
                    <AiOutlineInstagram className={itemsSVG} />
                    <a
                      href={`https://www.instagram.com/${item.instagram}/`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.instagram}
                    </a>
                  </div>
                ) : null}
                {item.facebook && item.displayFacebook ? (
                  <div className={items}>
                    <AiOutlineFacebook className={itemsSVG} />
                    <a
                      href={`https://www.facebook.com/${item.facebook}/`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.facebook}
                    </a>
                  </div>
                ) : null}
              </div>
            </section>

            {item.about ? (
              <section id="about">
                <div className="bg-gray-100/50 border p-1 rounded-lg mt-3">
                  <ReactMarkdown className={paragraphSize}>
                    {item.about}
                  </ReactMarkdown>
                </div>
              </section>
            ) : null}

            <section id="skills_and_projects" className="flex mt-3">
              {/* SKILLS START */}
              <section id="skills" className="w-1/2">
                <h3 className={titles}>Skills</h3>

                <div className="mt-1">
                  <h4 className="font-medium text-sm">{item.skillTitle1}</h4>
                  <p className={paragraphSize}>
                    {item.toolsAndTechSkills.join(", ")}
                  </p>
                </div>

                <div className="mt-1">
                  <h4 className="font-medium  text-sm">{item.skillTitle2}</h4>
                  <p className={paragraphSize}>
                    {item.industryKnowledge.join(", ")}
                  </p>
                </div>

                <div className="mt-1">
                  <h4 className="font-medium text-sm">{item.skillTitle3}</h4>
                  <p className={paragraphSize}>{item.languages.join(", ")}</p>
                </div>
              </section>

              <section id="projects" className="w-1/2">
                <h3 className={titles}>Projects</h3>
                {item.projects.map((project, index) => {
                  return (
                    <div key={index} className="mt-1">
                      <h4 className="font-medium text-sm">
                        <a href={project.link} target="_blank" rel="noreferrer">
                          {project.title}
                          {project.link ? (
                            <HiExternalLink className="ml-1 inline" />
                          ) : null}
                        </a>
                      </h4>
                      <p className={paragraphSize}>{project.summary}</p>
                    </div>
                  );
                })}
              </section>
            </section>

            <section className="mt-3">
              <h3 className={titles}>Experience</h3>
              {item.experiences
                .map((experience, index) => {
                  return (
                    <div className="border-b-[1px] last:border-0" key={index}>
                      <div className="flex mt-2  justify-between">
                        <h4 className="font-medium  text-sm">
                          {experience.title}
                        </h4>
                        <span className="flex items-center space-x-1">
                          {experience.company ? (
                            <HiOutlineBriefcase className="inline" />
                          ) : null}

                          <p className={jobSize}>{experience.company}</p>
                        </span>
                        <span className="flex items-center space-x-1">
                          {experience.startDate || experience.endDate ? (
                            <HiOutlineCalendar className="inline" />
                          ) : null}

                          <p className={jobSize}>{experience.startDate}</p>
                          {experience.endDate ? (
                            <span className={jobSize}> - </span>
                          ) : null}

                          <p className={jobSize}>{experience.endDate}</p>
                        </span>
                      </div>
                      <ReactMarkdown className="myList relative text-[0.605rem] mb-2 mt-2 text-gray-700 ">
                        {experience.summary}
                      </ReactMarkdown>
                    </div>
                  );
                })
                .reverse()}
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default CV;
