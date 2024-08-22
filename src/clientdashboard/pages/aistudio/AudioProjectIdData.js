// import React, { useState, useMemo, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { MaterialReactTable } from "material-react-table";
// import { CiShare2 } from "react-icons/ci";
// import { toast } from "react-toastify";
// import { MdDelete } from "react-icons/md";
// import { BsDownload } from "react-icons/bs";
// import AudioPlayer from "../../customcomponent/AudioPlayer";
// import { deleteBulkRequest, getRequest } from "../../../api";

// const AudioProjectIdData = () => {
//   const location = useLocation();
//   const { id } = useParams();

//   const [data, setData] = useState([]);
//   const [playingAudioId, setPlayingAudioId] = useState(null);
//   const [checkedItems, setCheckedItems] = useState([]);
//   const [selectAll, setSelectAll] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showGif, setShowGif] = useState(false);
//   const [forSelectAllCheckBox, setforSelectAllCheckBox] = useState([]);
//   const fetchBulkAudio = async () => {
//     try {
//       const response = await getRequest(`/bulk_audios/${id}`);
//       setforSelectAllCheckBox(response?.data?.audio_files);
//       setData(response?.data?.audio_files || []);
//     } catch (error) {
//       toast.error("Failed to fetch Bulk Audio");
//     }
//   };

//   useEffect(() => {
//     fetchBulkAudio();
//   }, [id]);

//   // const handleCheckboxChange = (event, itemId) => {
//   //   const isChecked = event.target.checked;
//   //   setCheckedItems((prev) => {
//   //     if (isChecked) {
//   //       return [...prev, itemId];
//   //     } else {
//   //       return prev.filter((item) => item !== itemId);
//   //     }
//   //   });
//   // };
// const handleCheckboxChange = (event, itemId) => {
//   const isChecked = event.target.checked;
//   if (isChecked) {
//     setCheckedItems([...checkedItems, itemId]);
//   } else {
//     const updatedItems = checkedItems.filter((item) => item !== itemId);
//     setCheckedItems(updatedItems);
//   }
// };

// const handleSelectAllChange = (event) => {
//   const isChecked = event.target.checked;
//   setSelectAll(isChecked);

//   if (isChecked) {
//     const allItemIds = forSelectAllCheckBox?.map((item) => item.audio_id);
//     setCheckedItems(allItemIds);
//   } else {
//     setCheckedItems([]);
//   }
// };

//   // const handleSelectAllChange = (event) => {
  
//   //   const isChecked = event.target.checked;
//   //   setSelectAll(isChecked);

//   //   setCheckedItems((prev) => {
//   //     const allItemIds = data.map((item) => item?.audio_id);
//   //     return event.target.checked ? allItemIds : [];
//   //   });
//   // };

//   const deleteAllBulkAudio = async () => {
//     setShowGif(true);
//     try {
//       const response = await deleteBulkRequest(
//         `/bulk_audios/delete_audios/${id}`,
//         {
//           audio_ids: checkedItems,
//         }
//       );
//       setShowDeleteModal(false);
//       setData([]);
//       fetchBulkAudio();
//       if (response.status === 200) {
//         toast.success("Selected Audios are deleted successfully!");
//         setShowGif(false);
//       }
//     } catch (error) {
//       console.log(error, "error");
//       toast.error("Failed to delete Bulk Audio");
//       setShowGif(false);
//     }
//   };

//   const indexedBulkAudioList = useMemo(() => {
//     return data.map((category, index) => ({
//       ...category,
//       index: index + 1,
//     }));
//   }, [data]);

//   const columns = useMemo(
//     () => [
//       {
//         accessorKey: "select",
//         header: (
//           <input
//             type="checkbox"
//             className="cursor-pointer w-[15px] h-[15px] block pt-[2px]"
//             checked={selectAll}
//             onChange={handleSelectAllChange}
//           />
//         ),
//         size: 50,
//         Cell: ({ row }) => (
//           <input
//             type="checkbox"
//             className="cursor-pointer w-[15px] h-[15px] block pt-[2px]"
//             checked={checkedItems.includes(row?.original?.audio_id)}
//             onChange={(event) =>
//               handleCheckboxChange(event, row?.original?.audio_id)
//             }
//           />
//         ),
//       },
//       {
//         accessorKey: "index",
//         header: "ID",
//         size: 50,
//       },
//       {
//         accessorKey: "audio_data",
//         header: "Audio",
//         size: 150,
//         Cell: ({ row }) => (
//           <AudioPlayer
//             audioData={row.original?.audio_data}
//             audioId={row.original?.audio_id}
//             playingAudioId={playingAudioId}
//             setPlayingAudioId={setPlayingAudioId}
//           />
//         ),
//       },
//       {
//         accessorKey: "filename",
//         header: "File",
//         size: 150,
//       },
//       {
//         accessorKey: "name",
//         header: "Name",
//         size: 150,
//       },
//       {
//         accessorKey: "mobile",
//         header: "Mobile",
//         size: 150,
//       },
//       {
//         accessorKey: "updatedAt",
//         header: "Date",
//         size: 200,
//       },
//       {
//         accessorKey: "actions",
//         header: "Actions",
//         size: 150,
//         Cell: ({ row }) => {
//           const audioBlob = new Blob(
//             [
//               new Uint8Array(
//                 atob(row.original?.audio_data)
//                   .split("")
//                   .map((c) => c.charCodeAt(0))
//               ),
//             ],
//             { type: "audio/wav" }
//           );
//           const url = URL.createObjectURL(audioBlob);
//           return (
//             <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
//               <button
//                 className="bg-white cursor-pointer flex items-center justify-center w-[25px] h-[25px] rounded-full"
//                 onClick={() => {
//                   setShowDeleteModal(true);
//                   setCheckedItems([row.original.audio_id]);
//                 }}
//                 disabled={checkedItems.length > 1}
//               >
//                 <MdDelete className="text-lg text-red-500" />
//               </button>
//               <a href={url} download={"dummy"}>
//                 <span className="bg-white cursor-pointer flex items-center justify-center w-[25px] h-[25px] rounded-full">
//                   <BsDownload />
//                 </span>
//               </a>
//               <span className="bg-white cursor-pointer flex items-center justify-center w-[25px] h-[25px] rounded-full">
//                 <CiShare2 />
//               </span>
//             </div>
//           );
//         },
//       },
//     ],
//     [checkedItems, selectAll, playingAudioId]
//   );

//   return (
//     <div>
//       {showGif && (
//         <div className="fixed inset-0 z-40 w-[100%] flex justify-center items-center bg-black bg-opacity-50">
//           <img
//             src={`${process.env.PUBLIC_URL}/image/audio/Upload-excel-Sheet.gif`}
//             className="w-[248px] h-[248px]"
//           />
//         </div>
//       )}

//       {showDeleteModal && (
//         <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-40">
//           <div className="bg-white rounded-[16px] w-[429px] px-[36px] py-[36px] z-20">
//             <div className="flex justify-center items-center mb-[38px]">
//               <img
//                 src={`${process.env.PUBLIC_URL}/image/clientimage/deleteicon.png`}
//                 className="w-[48px] h-[48px]"
//                 alt="icon"
//               />
//             </div>
//             <div className="flex justify-center items-center mb-[16px]">
//               <p className="font-worksans text-xl font-semibold text-[#212121]">
//                 Delete Audio
//               </p>
//             </div>
//             <div>
//               <p className="text-center font-inter font-medium text-base text-[#565656]">
//                 Are you sure you want to delete this Audio?
//               </p>
//               <p className="text-center font-inter font-medium text-base text-[#565656]">
//                 This Action can't be undone.
//               </p>
//             </div>
//             <div className="flex justify-center items-center gap-5 mt-[41px]">
//               <button
//                 onClick={() => setShowDeleteModal(false)}
//                 className="w-[170px] h-[42px] bg-[#F3F3F3] rounded-[8px] text-center font-worksans font-medium text-lg text-[#000000]"
//               >
//                 Cancel
//               </button>
//               <button
//                 className="w-[170px] h-[42px] bg-[#FF4439] rounded-[8px] text-center font-worksans font-medium text-lg text-white"
//                 onClick={deleteAllBulkAudio}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="px-4 py-2">
//         <h1 className="font-semibold text-lg text-[#000000] font-worksans pb-6 pt-2">
//           Project Name: {location?.state.project_name}
//         </h1>
//         <MaterialReactTable
//           key={`${selectAll}-${checkedItems.length}`} // Add this line
//           columns={columns}
//           data={indexedBulkAudioList}
//         />
//       </div>
//       {checkedItems.length >= 1 && (
//         <button onClick={() => setShowDeleteModal(true)}>Delete All</button>
//       )}
//     </div>
//   );
// };

// export default AudioProjectIdData;





import React, { useState, useMemo, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { MaterialReactTable } from "material-react-table";
import { CiShare2 } from "react-icons/ci";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import { BsDownload } from "react-icons/bs";
import AudioPlayer from "../../customcomponent/AudioPlayer";
import { deleteBulkRequest, getRequest } from "../../../api";

const AudioProjectIdData = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [showOpacity,setShowOpacity] = useState(false)
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showGif, setShowGif] = useState(false);

  const fetchBulkAudio = async () => {
    try {
      const response = await getRequest(`/bulk_audios/${id}`);
      setData(response?.data?.audio_files || []);
    } catch (error) {
      toast.error("");
    }
  };

  useEffect(() => {
    fetchBulkAudio();
  }, []);

  // Update checkedItems based on selectAll
  useEffect(() => {
    if (selectAll) {
      setCheckedItems(data.map((item) => item.audio_id));
    } else {
      setCheckedItems([]);
    }
  }, [selectAll, data]);

  const handleCheckboxChange = (event, itemId) => {
    const isChecked = event.target.checked;
    setCheckedItems((prev) => {
      if (isChecked) {
        return [...prev, itemId];
      } else {
        return prev.filter((item) => item !== itemId);
      }
    });
  };

  const handleSelectAllChange = () => {
    setSelectAll((prev) => !prev);
    
  };

  const deleteAllBulkAudio = async () => {
    setShowGif(true);
    try {
      const response = await deleteBulkRequest(
        `/bulk_audios/delete_audios/${id}`,
        {
          audio_ids: checkedItems,
        }
      );
      setShowDeleteModal(false);
      
      setCheckedItems([]); // Clear checked items
      setSelectAll(false); // Reset select all checkbox
      fetchBulkAudio();
      if (response.status === 200) {

        toast.success("Selected Audios are deleted successfully!");
        if(showOpacity){
        navigate("/Shivacha-Ai-Studio/bulk-audio");
        }
      }
    } catch (error) {
      
      toast.error("Failed to delete Bulk Audio");
    } finally {
      setShowGif(false);
    }
  };
useEffect(() => {
  if(checkedItems?.length=== data?.length){
setShowOpacity(true);
  }else{
    setShowOpacity(false);
  }
},[checkedItems])

  const indexedBulkAudioList = useMemo(() => {
    return data.map((category, index) => ({
      ...category,
      index: index + 1,
    }));
  }, [data]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "select",
        header: (
          <div onClick={handleSelectAllChange} style={{ cursor: "pointer" }}>
            <input
              type="checkbox"
              className="cursor-pointer w-[15px] h-[15px] block pt-[2px]"
              checked={selectAll}
              readOnly
            />
          </div>
        ),
        size: 50,
        Cell: ({ row }) => (
          <input
            type="checkbox"
            className="cursor-pointer w-[15px] h-[15px] block pt-[2px]"
            checked={checkedItems.includes(row.original.audio_id)}
            onChange={(event) =>
              handleCheckboxChange(event, row.original.audio_id)
            }
          />
        ),
      },
      {
        accessorKey: "index",
        header: "ID",
        size: 50,
      },
      {
        accessorKey: "audio_data",
        header: "Audio",
        size: 150,
        Cell: ({ row }) => (
          <AudioPlayer
            audioData={row.original.audio_data}
            audioId={row.original.audio_id}
            playingAudioId={playingAudioId}
            setPlayingAudioId={setPlayingAudioId}
          />
        ),
      },
      {
        accessorKey: "filename",
        header: "File",
        size: 150,
      },
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "mobile",
        header: "Mobile",
        size: 150,
      },
      {
        accessorKey: "updatedAt",
        header: "Date",
        size: 200,
      },
      {
        accessorKey: "actions",
        header: "Actions",
        size: 150,
        Cell: ({ row }) => {
          const audioBlob = new Blob(
            [
              new Uint8Array(
                atob(row.original.audio_data)
                  .split("")
                  .map((c) => c.charCodeAt(0))
              ),
            ],
            { type: "audio/wav" }
          );
          const url = URL.createObjectURL(audioBlob);
          return (
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button
                className={`${
                  checkedItems.length > 1
                ? "opacity-25":''}bg-white cursor-pointer flex items-center justify-center w-[25px] h-[25px] rounded-full`}
                onClick={() => {
                  setShowDeleteModal(true);
                  setCheckedItems([row.original.audio_id]);
                }}
                disabled={checkedItems.length > 1}
              >
                <MdDelete className={`text-lg text-red-500 ${
                  checkedItems.length > 1
                ? "opacity-25 text-red-400":'text-red-500'}`} />
              </button>
              <a href={url} download={"dummy"}>
                <span className="bg-white cursor-pointer flex items-center justify-center w-[25px] h-[25px] rounded-full">
                  <BsDownload />
                </span>
              </a>
              <span className="bg-white cursor-pointer flex items-center justify-center w-[25px] h-[25px] rounded-full">
                <CiShare2 />
              </span>
            </div>
          );
        },
      },
    ],
    [checkedItems, selectAll, playingAudioId]
  );

  return (
    <div>
      {showGif && (
        <div className="fixed inset-0 z-40 w-[100%] flex justify-center items-center bg-black bg-opacity-50">
          <img
            src={`${process.env.PUBLIC_URL}/image/audio/Upload-excel-Sheet.gif`}
            className="w-[248px] h-[248px]"
          />
        </div>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-[16px] w-[429px] px-[36px] py-[36px] z-20">
            <div className="flex justify-center items-center mb-[38px]">
              <img
                src={`${process.env.PUBLIC_URL}/image/clientimage/deleteicon.png`}
                className="w-[48px] h-[48px]"
                alt="icon"
              />
            </div>
            <div className="flex justify-center items-center mb-[16px]">
              <p className="font-worksans text-xl font-semibold text-[#212121]">
                Delete Audio
              </p>
            </div>
            <div>
              <p className="text-center font-inter font-medium text-base text-[#565656]">
                Are you sure you want to delete this Audio?
              </p>
              <p className="text-center font-inter font-medium text-base text-[#565656]">
                This Action can't be undone.
              </p>
            </div>
            <div className="flex justify-center items-center gap-5 mt-[41px]">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="w-[170px] h-[42px] bg-[#F3F3F3] rounded-[8px] text-center font-worksans font-medium text-lg text-[#000000]"
              >
                Cancel
              </button>
              <button
                className="w-[170px] h-[42px] bg-[#FF4439] rounded-[8px] text-center font-worksans font-medium text-lg text-white"
                onClick={deleteAllBulkAudio}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="px-4 py-2">
        <h1 className="font-semibold text-lg text-[#000000] font-worksans pb-6 pt-2">
          Project Name: {location?.state.project_name}
        </h1>
        {/* <div className="relative">
          <MaterialReactTable
            columns={columns}
            data={indexedBulkAudioList}
            
            muiTablePaginationProps={{
             
              actions: (
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => setShowDeleteModal(true)}
                  disabled={checkedItems.length === 0}
                >
                  Delete All
                </button>
              ),
            }}
          />
        </div> */}
        <div className="relative">
          <MaterialReactTable
            columns={columns}
            data={indexedBulkAudioList}
          />
          {checkedItems.length > 1 && (
            <div className="absolute top-2 z-20 left-1">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setShowDeleteModal(true)}
              >
                Delete All
              </button>
            </div>
          )}
          </div>
        {/* {checkedItems.length >= 1 && (
          <button
            className="absolute left-0 bottom-0 mb-2 ml-2"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete All
          </button>
        )} */}
        {/* {checkedItems.length >= 1 && (
        <button className="absolute bottom-3" onClick={() => setShowDeleteModal(true)}>Delete All</button>
      )} */}
      </div>
    </div>
  );
};

export default AudioProjectIdData;
