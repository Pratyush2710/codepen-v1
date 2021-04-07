import React, { useEffect, useState } from "react";
import Editor from "./editor";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJS] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>
      `);
    }, 250);
  }, [html, css, js]);
  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJS}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
