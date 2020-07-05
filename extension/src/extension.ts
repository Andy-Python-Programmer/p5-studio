// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// register the command with vscode.
	// so that we can run it from command pallete.
	// this command is also defined in package.json
	let disposable = vscode.commands.registerCommand("p5-complete.openSketch", async () => {

		// create a new webview
		// this is used to show the sketch
		const panel = vscode.window.createWebviewPanel(
			"p5Sketch",
			"p5 Sketch",
			// use split mode
			vscode.ViewColumn.Two,
			{
				// enable javascript
				enableScripts: true,
			}
		)

		// find all the javascript files in the workspace
		const files = await vscode.workspace.findFiles("*.js");

		// map the files to script tag
		const scripts = files.map(file => {
			const path = panel.webview.asWebviewUri(file).toString();
			return `<script src="${path}"></script>`
		}).join("");

		// get url of p5.js file
		const p5Path = panel.webview.asWebviewUri(
			vscode.Uri.file(path.join(context.extensionPath, "p5.js"))
		);

		// add everything to html content of webview
		panel.webview.html = `<script src="${p5Path}"></script>${scripts}`
	});

	// I don't know
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
