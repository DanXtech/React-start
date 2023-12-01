// import { useContext } from "react";
// import "./Toggle.css";
// import { MdWbSunny } from "react-icons/md";
// import { LuSunMoon } from "react-icons/lu";
// // import Moon from "@iconscout/react-unicons/icons/uil-moon";
// // import Sun from "@iconscout/react-unicons/icons/uil-sun";
// import { themeContext } from "../../../Context";

// const Toggle = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
//   const handleClick = () => {
//     // debugger
//     theme.dispatch({ type: "toggle" });
//   };
//   return (
//     <div className="toggle" onClick={handleClick}>
//       <MdWbSunny />
//       <LuSunMoon />
//       <div
//         className="t-button"
//         style={darkMode ? { left: "2px" } : { right: "2px" }}
//       ></div>
//     </div>
//   );
// };

// export default Toggle;

// import { MdWbSunny } from "react-icons/md";
// import { LuSunMoon } from "react-icons/lu";
// import "./Toggle.css";
const Toggle = () => {
  return (
    <>
      <div className="toggle" >
        {/* <MdWbSunny /> */}
        {/* <LuSunMoon /> */}
        Toggle
        <div
          className="t-button"></div>
      </div>
    </>
  )
}

export default Toggle