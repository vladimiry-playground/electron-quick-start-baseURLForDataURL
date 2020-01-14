// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const webview = document.querySelector("webview");

const domReadyHandler = () => {
  webview.removeEventListener("dom-ready", domReadyHandler);
  webview.loadURL(
    `data:text/html;charset=utf-8,${encodeURIComponent(`hello<script src="script.js"></script>`)}`,
    {baseURLForDataURL: `file2://home/`},
  );
  webview.openDevTools();
};

webview.addEventListener("dom-ready", domReadyHandler);
