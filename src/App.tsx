import React, { useState } from "react";
import TemplateImage from "./Resources/Images/template.png";
import Draggable from "react-draggable";
import "./App.css";

function App() {
  const [file, setFile] = useState<string>("");
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("loaded1");
    if (e.target.files != null) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        console.log("loaded2");
        if (reader.result != null) {
          console.log("loaded3");
          setFile(reader.result as string);
        }
      };
    }
  };

  return (
    <div className="App">
      <img src={TemplateImage} alt="Template"></img>
      <input className="text mainText" placeholder="아이템 이름 작성" />
      <textarea
        className="text discriptionText"
        placeholder="아이템 설명 작성"
      />
      <Draggable>
        <img className="itemImage" src={file} alt="" />
      </Draggable>
      <div>
        <span>이미지 넣기 ➡ </span>
        <input type="file" name="file" onChange={(e) => handleFileChange(e)} />
      </div>
    </div>
  );
}

export default App;
