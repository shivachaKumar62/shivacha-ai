// import React, { useState } from "react";
// import { RxCross2 } from "react-icons/rx";
// const Pricing = () => {
//   const [plan, setPlan] = useState("monthly");

//   return (
//     <div className=" px-4 bg-white rounded-[20px]">
//       <div className="flex justify-between items-center  pt-8 pb-12 ">
//         <h2 className="text-3xl font-medium font-worksans text-[#000000]">
//           Pricing
//         </h2>
//         <div className="inline-flex rounded-md shadow-sm ">
//           <button
//             className={`px-4 py-2 text-sm font-medium ${
//               plan === "monthly"
//                 ? "bg-blue-500 text-white"
//                 : "bg-white text-blue-500"
//             } border border-blue-500 rounded-l-md`}
//             onClick={() => setPlan("monthly")}
//           >
//             Monthly Plan
//           </button>
//           <button
//             style={
//               plan === "yearly"
//                 ? {
//                     background:
//                       "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }
//                 : {background:"white"}
//             }
//             className={`px-4 py-2 text-sm font-medium  border border-blue-500 rounded-r-md`}
//             onClick={() => setPlan("yearly")}
//           >
//             Yearly Plan 20% Off
//           </button>
//         </div>
//         <p>
//           <RxCross2 />
//         </p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Free Trail */}
//         <div className="p-6 border rounded-lg shadow-sm">
//           <h3 className="text-2xl font-semibold">Free Trail</h3>
//           <p className="text-4xl font-bold mt-4">
//             $0<span className="text-lg">/Per Month</span>
//           </p>
//           <ul className="mt-4 space-y-2 text-sm">
//             <li>✔ 15 min of voiceover/month</li>
//             <li>✔ Each video limits to 1 min</li>
//             <li>✔ 5 voice clone</li>
//             <li>✔ Shivacha Ai Watermark</li>
//             <li>✔ No Downloads</li>
//             <li>✔ 250+ Premium stock voices</li>
//             <li>✔ Chat support & Email</li>
//           </ul>
//           <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg">
//             Current Plan
//           </button>
//         </div>
//         {/* Plus */}
//         <div className="p-6 border rounded-lg shadow-sm">
//           <h3 className="text-2xl font-semibold">Plus</h3>
//           <p className="text-4xl font-bold mt-4">
//             $99<span className="text-lg">/Per Month</span>
//           </p>
//           <ul className="mt-4 space-y-2 text-sm">
//             <li>✔ 15 min of voiceover/month</li>
//             <li>✔ Each video limits to 10 min</li>
//             <li>✔ 5 voice clone</li>
//             <li>✔ Shivacha Ai Watermark</li>
//             <li>✔ No Downloads</li>
//             <li>✔ 250+ Premium stock voices</li>
//             <li>✔ Chat support & Email</li>
//           </ul>
//           <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg">
//             Upgrade
//           </button>
//         </div>
//         {/* Pro */}
//         <div className="p-6 border rounded-lg shadow-sm bg-blue-50">
//           <h3 className="text-2xl font-semibold text-blue-500">Pro</h3>
//           <p className="text-4xl font-bold mt-4 text-blue-500">
//             $99<span className="text-lg">/Per Month</span>
//           </p>
//           <ul className="mt-4 space-y-2 text-sm text-blue-500">
//             <li>✔ 15 min of voiceover/month</li>
//             <li>✔ Each video limits to 20 min</li>
//             <li>✔ 5 voice clone</li>
//             <li>✔ Shivacha Ai Watermark</li>
//             <li>✔ No Downloads</li>
//             <li>✔ 250+ Premium stock voices</li>
//             <li>✔ Chat support & Email</li>
//           </ul>
//           <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg">
//             Upgrade
//           </button>
//         </div>
//         {/* Enterprise */}
//         <div className="p-6 border rounded-lg shadow-sm">
//           <h3 className="text-2xl font-semibold">Enterprise</h3>
//           <p className="text-4xl font-bold mt-4">Let's Talk</p>
//           <p className="text-lg">Custom Pricing</p>
//           <ul className="mt-4 space-y-2 text-sm">
//             <li>✔ 15 min of voiceover/month</li>
//             <li>✔ Each video limits to 60 min</li>
//             <li>✔ 5 voice clone</li>
//             <li>✔ Shivacha Ai Watermark</li>
//             <li>✔ No Downloads</li>
//             <li>✔ 250+ Premium stock voices</li>
//             <li>✔ Chat support & Email</li>
//           </ul>
//           <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg">
//             Upgrade
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;






import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Pricing: React.FC = () => {
  const [plan, setPlan] = useState("monthly");
  const [planSummary, setPlanSummary] = useState("Pro");

  const data = [
    {
      id: 1,
      basic: "Free Trial",
      paymentType: "Free",
      dollarmonth: "$0",
      permonth: "/Per Month",
      customPricing: "",
      featureData: {
        pointOne: "15 min of voiceover/month",
        pointTwo: "Each video limits to 1 min",
        pointThree: "5 voice clones",
        pointFour: "Shivacha Ai Watermark",
        pointFive: "No Downloads",
        pointSix: "250+ Premium stock voices",
        pointSeven: "Chat support & Email",
      },
      btnText: "Current Plan",
    },
    {
      id: 2,
      basic: "Plus",
      paymentType: "Basic Package",
      dollarmonth: "$99",
      permonth: "/Per Month",
      customPricing: "",
      featureData: {
        pointOne: "15 min of voiceover/month",
        pointTwo: "Each video limits to 10 min",
        pointThree: "5 voice clones",
        pointFour: "Shivacha Ai Watermark",
        pointFive: "No Downloads",
        pointSix: "250+ Premium stock voices",
        pointSeven: "Chat support & Email",
      },
      btnText: "Upgrade",
    },
    {
      id: 3,
      basic: "Pro",
      paymentType: "Advance Package",
      dollarmonth: "$99",
      permonth: "/Per Month",
      customPricing: "",
      featureData: {
        pointOne: "15 min of voiceover/month",
        pointTwo: "Each video limits to 20 min",
        pointThree: "5 voice clones",
        pointFour: "Shivacha Ai Watermark",
        pointFive: "No Downloads",
        pointSix: "250+ Premium stock voices",
        pointSeven: "Chat support & Email",
      },
      btnText: "Upgrade",
    },
    {
      id: 4,
      basic: "Enterprise",
      paymentType: "Customize Package",
      dollarmonth: "Let’s Talk",
      permonth: "",
      customPricing: "Custom Pricing",
      featureData: {
        pointOne: "15 min of voiceover/month",
        pointTwo: "Each video limits to 60 min",
        pointThree: "5 voice clones",
        pointFour: "Shivacha Ai Watermark",
        pointFive: "No Downloads",
        pointSix: "250+ Premium stock voices",
        pointSeven: "Chat support & Email",
      },
      btnText: "Upgrade",
    },
  ];

  return (
    <>
    <div className="px-4 bg-white rounded-[20px]">
      <div className="flex justify-between items-center pt-8 pb-12">
        <h2 className="text-3xl font-medium font-worksans text-[#000000]">
          Pricing
        </h2>
        <div className="inline-flex gap-1 shadow-sm bg-[#E8E8E8] rounded-full px-2 py-2">
          <div
            className={`${plan === "monthly" ? "bg-white rounded-full" : ""}`}
          >
            <button
              style={
                plan === "monthly"
                  ? {
                      background:
                        "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }
                  : { color: "#0096FF" }
              }
              className={` px-4 py-2 text-base font-semibold font-worksans  rounded-full`}
              onClick={() => setPlan("monthly")}
            >
              Monthly Plan
            </button>
          </div>
          <div
            className={`${plan === "yearly" ? "bg-white  rounded-full" : ""}`}
          >
            <button
              style={
                plan === "yearly"
                  ? {
                      background:
                        "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }
                  : { color: "#0096FF" }
              }
              className={` px-4 py-2 text-base font-semibold font-worksans   rounded-full`}
              onClick={() => setPlan("yearly")}
            >
              Yearly Plan <span className="text-black">20% Off</span>
            </button>
          </div>
        </div>
        <p>
          <RxCross2 />
        </p>
      </div>
      <div className="grid grid-cols-1 bg-white md:grid-cols-4 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className={`p-1 rounded-[24px] shadow-sm h-full border-2 ${
              planSummary === item.basic.toLowerCase()
                ? "border-transparent bg-gradient-to-r from-[#0096FF] to-[#8E54E9]"
                : "border-gray-300"
            }`}
            onClick={() => setPlanSummary(item.basic.toLowerCase())}
          >
            <div
              className={`${
                planSummary === item.basic.toLowerCase()
                  ? "bg-white py-[32px] px-[16px] rounded-[24px]"
                  : "py-[32px] px-[16px] rounded-[24px]"
              }`}
            >
              <h3
                className={`text-[40px] font-medium font-worksans ${
                  planSummary === item.basic.toLowerCase()
                    ? "bg-gradient-to-r from-[#0096FF] to-[#8E54E9] text-transparent bg-clip-text"
                    : "text-[#000000]"
                }`}
              >
                {item.basic}
              </h3>
              <p className="leading-3 font-medium text-base font-worksans text-[#000000]">
                {item.paymentType}
              </p>
              <p
                className={`text-[40px] font-semibold font-worksans  mt-4 ${
                  planSummary === item.basic.toLowerCase()
                    ? "bg-gradient-to-r from-[#0096FF] to-[#8E54E9] text-transparent bg-clip-text"
                    : "text-[#212121]"
                }`}
              >
                {item.dollarmonth}
                <span
                  className={` font-medium font-worksans text-2xl ${
                    planSummary === item.basic.toLowerCase()
                      ? "bg-gradient-to-r from-[#0096FF] to-[#8E54E9] text-transparent bg-clip-text"
                      : "text-[#212121]"
                  }`}
                >
                  {item.permonth}
                </span>
                <p className="font-worksans font-medium text-sm text-[#000000]">
                  {item.customPricing}
                </p>
              </p>
              <ul className="mt-4 space-y-4 text-sm">
                {Object.values(item.featureData).map((feature, index) => (
                  <li key={index}>✔ {feature}</li>
                ))}
              </ul>
              <button
                className={`mt-6 w-full font-medium font-worksans text-base py-2 rounded-[16px] border-2 ${
                  planSummary !== item.basic.toLowerCase()
                    ? "border-transparent bg-gradient-to-r from-[#0096FF] to-[#8E54E9]"
                    : "border-transparent bg-transparent"
                }`}
                style={
                  planSummary === item.basic.toLowerCase()
                    ? {
                        background:
                          "linear-gradient(to right, #0096FF, #8E54E9)",
                        color: "white",
                        borderRadius: "16px", // Ensure the border-radius is applied in the style
                      }
                    : {
                        background:
                          "linear-gradient(to right, #0096FF, #8E54E9)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        borderImageSlice: 1,
                        borderImageSource:
                          "linear-gradient(to right, #0096FF, #8E54E9)",
                        borderRadius: "16px", // Ensure the border-radius is applied in the style
                      }
                }
              >
                {item.btnText}
              </button> 
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <PaymentForm />
    </>
  );
};

export default Pricing;


// Install Tailwind CSS by following the official documentation: https://tailwindcss.com/docs/installation
// After setting up Tailwind in your React project, you can create the following components:

export const PaymentForm: React.FC = () => {


  return (
    <div className="min-h-screen flex w-full bg-red-100 mt-[40px]">
      <div className="bg-white w-full shadow-md rounded-lg p-8 ">
        <div className="flex justify-center items-center mb-6">
          <span className="text-blue-500">Choose Plan —</span>
          <span className="text-purple-500"> Details —</span>
          <span className="text-gray-500"> Payment</span>
        </div>
        <h3 className="text-2xl font-worksans text-center font-normal text-[#000000] mb-4">
          Enter Payment Details
        </h3>
        <div className="grid grid-cols-2">
          <div className="bg-[#E8E8E8] py-[36px] px-[16px] rounded-[16px]">
            <div className="bg-white rounded-[16px]">
              <div className="px-[16px] pt-[24px]">
                <p className="font-worksans font-normal text-base text-[#565656]">
                  Plan Details
                </p>
                <h2
                  className="text-[32px] font-worksans font-semibold   "
                  style={{
                    background:
                      "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Pro Plan Yearly
                </h2>
                <p className="text-2xl font-medium font-worksans text-[#565656] mb-6">
                  @ $224/ year only
                </p>
              </div>
              <div className=" border-t-2 px-4 py-4 flex justify-between items-center border-dashed border-gray-200">
                
                  <p className="text-base  font-worksans font-normal text-[#565656]  ">
                    Total Amount
                  </p>
                  <p className="text-2xl font-medium font-worksans  text-[#212121]">
                    @ $224
                  </p>
                
              </div>
            </div>
          </div>
          <div className="px-[16px] py-[16px]">
            <h3 className="text-xl font-normal font-worksans text-[#000000] mb-4">
              Biller Details
            </h3>

            <div className="mb-4">
              <label
                className="block text-[#565656] font-worksans font-normal text-sm  mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Suraj kumar"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#E8E8E8]"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="surajkumar@xyz"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="card"
              >
                Card Details
              </label>
              <input
                type="text"
                id="card"
                placeholder="Card Number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Other Payment Methods
              </label>
              <div className="flex space-x-4">
                <button className="bg-gray-200 p-2 rounded-lg shadow hover:bg-gray-300">
                  <i className="fa fa-google"></i>
                </button>
                <button className="bg-gray-200 p-2 rounded-lg shadow hover:bg-gray-300">
                  <i className="fa fa-paypal"></i>
                </button>
                <button className="bg-gray-200 p-2 rounded-lg shadow hover:bg-gray-300">
                  <i className="fa fa-apple"></i>
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700 text-sm">
                  I'm not a robot
                </span>
              </label>
            </div>

            <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



