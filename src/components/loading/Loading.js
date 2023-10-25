import React from "react";

const Loading = (props) => {
   return (
      <div
         className={`skeleton ${props.className}`}
         style={{
            height: props.height,
            width: props.width || "100%",
         }}
      ></div>
   );
};

export default Loading;
