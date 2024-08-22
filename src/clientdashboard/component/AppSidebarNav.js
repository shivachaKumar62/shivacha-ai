


// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";
// import { CBadge, CSidebarNav } from "@coreui/react";
// import { MdExpandLess, MdExpandMore } from "react-icons/md";
// import {  Popover } from "antd";
// import "./AppSidebarNav.css"; // Make sure to import the CSS


// export const AppSidebarNav = ({ items, showingSidebar }) => {
//   const [expandedGroupIndex, setExpandedGroupIndex] = useState(null);

//   const toggleGroup = (index) => {
//     setExpandedGroupIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const navLink = (name, icon, badge, indent = false) => (
//     <>
//       {icon
//         ? icon
//         : indent && (
//             <span className="nav-icon">
//               <span className="nav-icon-bullet  "></span>
//             </span>
//           )}
//       {!showingSidebar && name}
//       {badge && (
//         <CBadge color={badge.color} className="">
//           {badge.text}
//         </CBadge>
//       )}
//     </>
//   );

//   const navItem = (item, index, indent = false) => {
//     const { name, icon, badge, to } = item;
//     return (
//       <div
//         key={index}
//         className={`${indent ? "" : ""}   ${
//           showingSidebar ? "my-4 nav-icon" : "mb-3"
//         }`}
//       >
//         {to ? (
//           <NavLink
//             to={to}
//             className={` ${showingSidebar ? "nav-link" : "nav-link"}`}
//           >
//             {navLink(name, icon, badge, indent)}
//           </NavLink>
//         ) : (
//           navLink(name, icon, badge, indent)
//         )}
//       </div>
//     );
//   };

//   const navGroup = (item, index) => {
//     const { name, icon, items } = item;
//     const isExpanded = expandedGroupIndex === index;

//     return (
//       <div key={index}>
//         <div
//           className={`flex items-center cursor-pointer nav-link`}
//           onClick={() => toggleGroup(index)}
//         >
//           {navLink(name, icon)}
//           {!showingSidebar &&
//             (isExpanded ? (
//               <MdExpandLess className="ml-2 text-2xl" />
//             ) : (
//               <MdExpandMore className="ml-2 text-2xl" />
//             ))}
//         </div>
//         {isExpanded && (
//           <div
//             className={` cursor-pointer `}
//           >
//             {items &&
//               items.map((subItem, subIndex) =>
//                 subItem.items
//                   ? navGroup(subItem, subIndex)
//                   : navItem(subItem, subIndex, true)
//               )}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <CSidebarNav className="  ">
//       {items &&
//         items.map((item, index) =>
//           item.items ? navGroup(item, index) : navItem(item, index)
//         )}
//     </CSidebarNav>
//   );
// };

// AppSidebarNav.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.any).isRequired,
//   showingSidebar: PropTypes.bool.isRequired,
// };



// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";
// import { CBadge, CSidebarNav } from "@coreui/react";
// import { MdExpandLess, MdExpandMore } from "react-icons/md";
// import { Popover } from "antd";
// import "./AppSidebarNav.css"; // Make sure to import the CSS

// export const AppSidebarNav = ({ items, showingSidebar }) => {
//   const [expandedGroupIndex, setExpandedGroupIndex] = useState(null);

//   const toggleGroup = (index) => {
//     setExpandedGroupIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const navLink = (name, icon, badge, indent = false) => (
//     <div className="nav-link-content">
//       {icon
//         ? icon
//         : indent && (
//             <span className="nav-icon">
//               <span className="nav-icon-bullet"></span>
//             </span>
//           )}
//       <span className={showingSidebar ? "d-none" : ""}>{name}</span>
//       {badge && (
//         <CBadge color={badge.color} className="">
//           {badge.text}
//         </CBadge>
//       )}
//     </div>
//   );

//   const navItem = (item, index, indent = false) => {
//     const { name, icon, badge, to } = item;
//     return (
//       <div
//         key={index}
//         className={`${indent ? "" : ""} ${
//           showingSidebar ? "my-4 nav-icon" : "mb-3"
//         } `}
//       >
//         {to ? (
//           <NavLink
//             to={to}
//             className={` ${showingSidebar ? "nav-link flex" : "nav-link flex"}`}
//           >
//             {showingSidebar ? (
//               <Popover
//                 placement="right"
//                 content={
//                   <>
//                     <span to={to}>{name}</span>
//                   </>
//                 }
//                 title=""
//                 trigger="hover"
//               >
//                 {navLink(icon)}
//               </Popover>
//             ) : (
//               navLink(name, icon, badge, indent)
//             )}
//           </NavLink>
//         ) : (
//           // navLink(name, icon, badge, indent)
//           ""
//         )}
//       </div>
//     );
//   };

//   const navGroup = (item, index) => {
//     const { name, icon, items } = item;
//     const isExpanded = expandedGroupIndex === index;

//     return (
//       <div key={index}>
//         <div
//           className={`flex items-center cursor-pointer nav-link`}
//           onClick={() => toggleGroup(index)}
//         >
//           {navLink(name, icon)}
//           {!showingSidebar &&
//             (isExpanded ? (
//               <MdExpandLess className="ml-2 text-2xl" />
//             ) : (
//               <MdExpandMore className="ml-2 text-2xl" />
//             ))}
//         </div>
//         {isExpanded && (
//           <div className={` cursor-pointer `}>
//             {items &&
//               items.map((subItem, subIndex) =>
//                 subItem.items
//                   ? navGroup(subItem, subIndex)
//                   : navItem(subItem, subIndex, true)
//               )}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <CSidebarNav className="  ">
//       {items &&
//         items.map((item, index) =>
//           item.items ? navGroup(item, index) : navItem(item, index)
//         )}
//     </CSidebarNav>
//   );
// };

// AppSidebarNav.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.any).isRequired,
//   showingSidebar: PropTypes.bool.isRequired,
// };





// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";
// import { CBadge, CSidebarNav } from "@coreui/react";
// import { MdExpandLess, MdExpandMore } from "react-icons/md";
// import { Popover } from "antd";
// import "./AppSidebarNav.css"; // Make sure to import the CSS

// export const AppSidebarNav = ({ items, showingSidebar }) => {
//   const [expandedGroupIndex, setExpandedGroupIndex] = useState(null);

//   const toggleGroup = (index) => {
//     setExpandedGroupIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const navLink = (name, icon, badge, indent = false) => (
//     <>
//       {icon ? (
//         <span className="nav-icon">{icon}</span>
//       ) : (
//         indent && (
//           <span className="nav-icon">
//             <span className="nav-icon-bullet"></span>
//           </span>
//         )
//       )}
//       {showingSidebar && <span className="nav-name">{name}</span>}
//       {badge && (
//         <CBadge color={badge.color} className="">
//           {badge.text}
//         </CBadge>
//       )}
//     </>
//   );

//   const navItem = (item, index, indent = false) => {
//     const { name, icon, badge, to } = item;
//     const content = <span>{name}</span>;

//     return (
//       <Popover
//         key={index}
//         content={content}
//         placement="right"
//         overlayClassName="sidebar-popover"
//         visible={!showingSidebar}
//       >
//         <div
//           className={`${indent ? "nav-item-indent" : ""} nav-item ${
//             showingSidebar ? "expanded" : "collapsed"
//           }`}
//         >
//           {to ? (
//             <NavLink to={to} className="nav-link">
//               {navLink(name, icon, badge, indent)}
//             </NavLink>
//           ) : (
//             navLink(name, icon, badge, indent)
//           )}
//         </div>
//       </Popover>
//     );
//   };

//   const navGroup = (item, index) => {
//     const { name, icon, items } = item;
//     const isExpanded = expandedGroupIndex === index;
//     const content = <span>{name}</span>;

//     return (
//       <Popover
//         key={index}
//         content={content}
//         placement="right"
//         // overlayClassName="sidebar-popover"
//         visible={!showingSidebar}
//       >
//         <div className="nav-group">
//           <div
//             className={`flex items-center cursor-pointer nav-link`}
//             onClick={() => toggleGroup(index)}
//           >
//             {navLink(name, icon)}
//             {showingSidebar &&
//               (isExpanded ? (
//                 <MdExpandLess className="ml-auto" />
//               ) : (
//                 <MdExpandMore className="ml-auto" />
//               ))}
//           </div>
//           {isExpanded && (
//             <div className="nav-group-items">
//               {items &&
//                 items.map((subItem, subIndex) =>
//                   subItem.items
//                     ? navGroup(subItem, subIndex)
//                     : navItem(subItem, subIndex, true)
//                 )}
//             </div>
//           )}
//         </div>
//       </Popover>
//     );
//   };

//   return (
//     <CSidebarNav className="app-sidebar-nav">
//       {items &&
//         items.map((item, index) =>
//           item.items ? navGroup(item, index) : navItem(item, index)
//         )}
//     </CSidebarNav>
//   );
// };

// AppSidebarNav.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.any).isRequired,
//   showingSidebar: PropTypes.bool.isRequired,
// };
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { CBadge, CSidebarNav } from "@coreui/react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { Popover } from "antd";
import "./AppSidebarNav.css"; 

export const AppSidebarNav = ({ items, showingSidebar }) => {
  const [expandedGroupIndex, setExpandedGroupIndex] = useState(null);

  const toggleGroup = (index) => {
    setExpandedGroupIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const navLink = (name, icon, badge, indent = false) => (
    <>
      {icon ? (
        <span className="nav-icon">{icon}</span>
      ) : (
        indent && (
          <span className="nav-icon">
            <span className="nav-icon-bullet"></span>
          </span>
        )
      )}
      {showingSidebar && <span className="nav-name">{name}</span>}
      {badge && (
        <CBadge color={badge.color} className="">
          {badge.text}
        </CBadge>
      )}
    </>
  );

  const navItem = (item, index, indent = false) => {
    const { name, icon, badge, to } = item;
    const content = <span>{name}</span>;

    return (
      <Popover
        key={index}
        content={content}
        placement="right"
        overlayClassName="sidebar-popover"
        trigger={`${!showingSidebar && "hover"}`}
      >
        <div
          className={`${indent ? "nav-item-indent flex " : ""} nav-item ${
            showingSidebar ? "expanded" : "collapsed"
          } mx-3 my-1`}
        >
          {to ? (
            <NavLink to={to} className="nav-link">
              {navLink(name, icon, badge, indent)}
            </NavLink>
          ) : (
            navLink(name, icon, badge, indent)
          )}
        </div>
      </Popover>
    );
  };

  const navGroup = (item, index) => {
    const { name, icon, items } = item;
    const isExpanded = expandedGroupIndex === index;
    const content = <span>{name}</span>;

    return (
      <Popover
        key={index}
        content={content}
        placement="right"
        overlayClassName="sidebar-popover"
        trigger={`${!showingSidebar && "hover"}`}
      >
        <div className="nav-group mx-3">
          <div
            className={`flex items-center cursor-pointer nav-link`}
            onClick={() => toggleGroup(index)}
          >
            {navLink(name, icon)}
            {showingSidebar &&
              (isExpanded ? (
                <MdExpandLess className="ml-auto" />
              ) : (
                <MdExpandMore className="ml-auto" />
              ))}
          </div>
          {isExpanded && (
            <div className={`nav-group-items  ${showingSidebar?"pl-4":"pl-2px"}`}>
              {items &&
                items.map((subItem, subIndex) =>
                  subItem.items
                    ? navGroup(subItem, subIndex)
                    : navItem(subItem, subIndex, true)
                )}
            </div>
          )}
        </div>
      </Popover>
    );
  };

  return (
    <CSidebarNav className="app-sidebar-nav">
      {items &&
        items.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
    </CSidebarNav>
  );
};

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  // showingSidebar: PropTypes.bool.isRequired,
};

