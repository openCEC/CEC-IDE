/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

declare module 'vscode' {
	// https://github.com/opencec/CEC-IDE/issues/161144
	export enum NotebookControllerAffinity2 {
		Default = 1,
		Preferred = 2,
		Hidden = -1
	}

	export interface NotebookController {
		updateNotebookAffinity(notebook: NotebookDocument, affinity: NotebookControllerAffinity | NotebookControllerAffinity2): void;
	}
}
