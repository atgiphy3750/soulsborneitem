import React, {useState} from "../_snowpack/pkg/react.js";
import TemplateImage from "./Resources/Images/template.png.proxy.js";
import html2canvas from "../_snowpack/pkg/html2canvas.js";
import Draggable from "../_snowpack/pkg/react-draggable.js";
import "./App.css.proxy.js";
function App() {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const handleFileChange = (e) => {
    if (e.target.files != null) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        if (reader.result != null) {
          setFile(reader.result);
        }
      };
    }
  };
  const downloadUrl = (url) => {
    fetch(url, {
      headers: new Headers({
        Origin: location.origin
      }),
      mode: "cors"
    }).then((response) => response.blob()).then((blob) => {
      let blobUrl = window.URL.createObjectURL(blob);
      forceDownload(blobUrl);
    });
  };
  const forceDownload = (blob) => {
    let link = document.createElement("a");
    link.download = fileName !== "" ? fileName : "Image";
    link.href = blob;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "AppDiv"
  }, /* @__PURE__ */ React.createElement("img", {
    src: TemplateImage,
    alt: "Template"
  }), /* @__PURE__ */ React.createElement("input", {
    className: "text mainText",
    placeholder: "아이템 이름 작성",
    onChange: (e) => {
      setFileName(e.target.value);
    }
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text discriptionDiv",
    contentEditable: true
  }, "아이템 설명 작성"), /* @__PURE__ */ React.createElement(Draggable, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    className: "itemImage",
    src: file,
    alt: "",
    draggable: "false"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "Controls"
  }, " ", /* @__PURE__ */ React.createElement("span", null, "이미지 넣기 ➡ "), /* @__PURE__ */ React.createElement("input", {
    type: "file",
    name: "file",
    onChange: (e) => handleFileChange(e),
    accept: ".jpg,.png,.bmp,.webp,.heic,.heif"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    className: "BtnDownload",
    onClick: () => {
      html2canvas(document.getElementById("AppDiv")).then(function(canvas) {
        let url = canvas.toDataURL("image/jpeg", 0.9);
        downloadUrl(url);
      });
    }
  }, "Download Image"))));
}
export default App;
