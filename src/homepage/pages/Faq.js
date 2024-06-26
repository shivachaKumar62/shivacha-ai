import React,{useState} from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Faq = () => {
    const [openQuestionId, setOpenQuestionId] = useState(null);
  const data = [
    {
      id: 1,
      question:
        " How does Shivacha.AI generate bulk campaign clips for social media?",
      answer:
        "Shivacha.AI utilizes advanced AI algorithms to analyze input data, such as text, URLs, or media, and automatically generates batches of campaign clips tailored for social media platforms.",
    },
    {
      id: 2,
      question:
        "What types of social media platforms are supported by Shivacha.AI?",
      answer:
        "Shivacha.AI utilizes advanced AI algorithms to analyze input data, such as text, URLs, or media, and automatically generates batches of campaign clips tailored for social media platforms.",
    },
    {
      id: 3,
      question:
        "Can I customize the bulk campaign clips generated by Shivacha.AI?",
      answer:
        "Shivacha.AI supports a wide range of social media platforms, including but not limited to Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube",
    },
    {
      id: 4,
      question:
        "How long does it take to generate bulk campaign clips with Shivacha.AI?",
      answer:
        "Shivacha.AI supports a wide range of social media platforms, including but not limited to Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube",
    },
    {
      id: 5,
      question:
        "Can I integrate Shivacha.AI with other marketing tools or platforms?",
      answer:
        "Yes, Shivacha.AI offers integrations with popular marketing tools and platforms, allowing seamless workflow integration and enhanced campaign management capabilities.",
    },
  ];
  const toggleAnswer = (id) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };
  return (
 
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="container ">
        <div className="flex flex-col  items-center ">
          <div>
            <p className="font-worksans font-semibold text-sm text-[#212121]">
              FAQ
            </p>
          </div>
          <div className="pt-[20px] sm:pb-[48px] max-sm:pb-[20px]">
            <p className="font-worksans font-semibold max-sm:text-[32px] max-sm:text-center sm:text-[40px] text-[#212121]">
              Eager for additional information?
            </p>
          </div>
          <div className="w-full sm:max-w-[80%] max-sm:w-full mx-auto">
            {data.map(({ id, question, answer }) => (
              <div key={id} className="border-2 border-gray-200 mb-[24px] px-4 rounded-md shadow-md">
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggleAnswer(id)}
                >
                  <button
                    className="w-full text-left font-worksans font-medium max-sm:text-base sm:text-lg text-[#212121] py-4 focus:outline-none"
                    // onClick={() => toggleAnswer(id)}
                  >
                    {question}
                  </button>
                  {openQuestionId === id ? (
                    <span className="cursor-pointer ">
                      <FaMinus />
                    </span>
                  ) : (
                    <span className="cursor-pointer ">
                      <FaPlus />
                    </span>
                  )}
                </div>
                {openQuestionId === id && (
                  <div className=" pb-4 ">
                    <span  className="text-[#565656] text-left font-worksans">
                      {answer}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
