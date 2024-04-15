import React, { useEffect, useState } from "react";
import "./TextExpander.css";
let x= 10
const TextExpander = ({
  className = "",
  expended = false,
  collapsedNumWords = 10,
  expandButtonText = "show more",
  collapseButtonText = "show less",
  buttonColor = "#ac2fd0",
  children = "please Enter Text",
}) => {
  const [showText, setShowText] = useState(expended);
  



  const style = {
    color: buttonColor,
    padding: "2px",
    marginLeft: "10px",
    border: "none",
    backgroundColor: "#fff",
    fontWeight: "bold",
    cursor: 'pointer',
  };

  return (
    <div className={className}>
      {console.log(x)}
  
        {showText
          ? children
          : children.split(" ", collapsedNumWords).join(" ") + "..."}
      
      <button style={style} onClick={() => setShowText((bool) => !bool)}>
        {showText ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};

export default TextExpander;
