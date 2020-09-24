import React, { useState } from "react";
import TemplateImage from "./Resources/Images/template.png";
import html2canvas from "html2canvas";
import Draggable from "react-draggable";
import "./App.css";

function App() {
  const [file, setFile] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        if (reader.result != null) {
          setFile(reader.result as string);
        }
      };
    }
  };

  const downloadUrl = (url: string) => {
    fetch(url, {
      headers: new Headers({
        // eslint-disable-next-line no-restricted-globals
        Origin: location.origin,
      }),
      mode: "cors",
    })
      .then((response) => response.blob())
      .then((blob) => {
        let blobUrl = window.URL.createObjectURL(blob);
        forceDownload(blobUrl);
      });
  };

  const forceDownload = (blob: string) => {
    let link = document.createElement("a");
    link.download = fileName !== "" ? fileName : "Image";
    link.href = blob;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="App">
      <div id="AppDiv">
        <img src={TemplateImage} alt="Template"></img>
        <input
          className="text mainText"
          placeholder="아이템 이름 작성"
          onChange={(e) => {
            setFileName(e.target.value);
          }}
        />
        <div className="text discriptionDiv" contentEditable={true}>
          아이템 설명 작성
        </div>
        <Draggable>
          <div>
            <img className="itemImage" src={file} alt="" draggable="false" />
          </div>
        </Draggable>
      </div>
      <div>
        <span>이미지 넣기 ➡ </span>
        <input
          type="file"
          name="file"
          onChange={(e) => handleFileChange(e)}
          accept=".jpg,.png,.bmp,.webp,.heic,.heif"
        />
        <button
          onClick={() => {
            html2canvas(document.getElementById("AppDiv") as HTMLElement).then(
              function (canvas) {
                let url = canvas.toDataURL("image/jpeg", 0.9);
                downloadUrl(url);
              }
            );
          }}
        >
          Download Image
        </button>
      </div>
    </div>
  );
}

export default App;
