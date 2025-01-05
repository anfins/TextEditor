import { useState, useEffect } from "react";

const WordDoc = () => {
  const [text, setText] = useState("");

  /**
   * upon opening the document, load in the text from the db and setText to that text
   */
  useEffect(() => {
    //save new text to the document text field in the db
  }, [text]);


  /**
   * Make an input box to serve as the text to be edited, upon each change of the text, a write occurs to the db
   */

  return (
    <div>
        <input onChange = {()=>{setText()}}><p>{text}</p></input> 


      
    </div>
  );
};

export default WordDoc;
