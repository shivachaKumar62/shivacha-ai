import React from 'react'
import { IoCopyOutline } from "react-icons/io5";
const ApiKey = () => {
  return (
    <div className="p-4 w-full">
      <div className="border border-dashed border-blue-400 p-4">
        <h2 className="text-lg font-semibold">API</h2>
        <p className="text-sm text-gray-700">Access Token</p>

        <div className="mt-4 flex w-full items-center space-x-2 ">
          <div className="relative w-full">
            <input
              type="text"
              value="salffvknvjijgioangkanjgaogknnjo"
              readOnly
              className="w-full p-2 border rounded-md bg-[#E8E8E8] text-gray-600"
            />
            <button className="absolute right-2 bottom-3 cursor-pointer">
              <IoCopyOutline />
            </button>
          </div>
          <button className="bg-[#47B3FF] hover:bg-blue-400 text-white px-4 py-2 rounded-md">
            Regenerate
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Ensure that your access token remains confidential and never include
          it in your API calls.
        </p>
      </div>
    </div>
  );
}

export default ApiKey
