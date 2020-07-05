const loader = require('monaco-loader');
const remote = require("electron").remote;
const FileManager = require("./filemanager.js")

loader().then((monaco) => {
  const editor = monaco.editor.create(document.getElementById('container'), {
    language: 'javascript',
    theme: 'vs-code',
    automaticLayout: true,
  });

  const fileManager = new FileManager({ editor, monaco });

  remote.getCurrentWindow().show();
});