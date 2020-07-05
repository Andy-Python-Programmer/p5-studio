// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('p5-complete.addComp', async () => {
		const panel = vscode.window.createWebviewPanel(
			"p5Sketch",
			"p5 Sketch",
			vscode.ViewColumn.Two,
			{
				enableScripts: true,
			}
		)

		const files = await vscode.workspace.findFiles("*.js");
		// push index.js to last
		
		const scripts = files.map(file => {
			const path = panel.webview.asWebviewUri(file).toString();
			return `<script src="${path}"></script>`
		}).join("");
		
		const p = vscode.Uri.file(path.join(context.extensionPath,"p5.js"));
		const p5Path = panel.webview.asWebviewUri(p);
		

		panel.webview.html = `<script src="${p5Path}"></script>${scripts}`
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
