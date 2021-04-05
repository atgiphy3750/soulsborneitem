// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".text {\n  width: 620px;\n  color: #aaa;\n  position: absolute;\n  font-size: 23px;\n  font-family: 'Nanum Myeongjo', serif;\n  background-color: transparent;\n  border: none;\n}\n\n.mainText {\n  position: absolute;\n  margin-left: -645px;\n  margin-top: 16px;\n}\n\n.discriptionDiv {\n  position: absolute;\n  margin-left: 24px;\n  margin-top: -396px;\n  resize: none;\n  overflow: hidden;\n  line-height: 29px;\n  height: 400px;\n}\n\n.itemImage {\n  position: absolute;\n  width: 180px;\n  height: auto;\n  cursor: move;\n}\n\n#AppDiv {\n  width: 665px;\n  height: 809px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}