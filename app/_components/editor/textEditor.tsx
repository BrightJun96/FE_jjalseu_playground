"use client"

import React from 'react';
import {Editor} from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor.css';

// code-syntax-highlight
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import Prism from 'prismjs'

export interface TextEditorProps {
    label:string
    onHTMLChange?:(value:string)=>void
}

const TextEditor = ({label,onHTMLChange}:TextEditorProps) => {

const editorRef = React.useRef<Editor|null>(null);


    return (
        <div>
            <span className={"text-title3Normal"}>{label}</span>
            <Editor
                onChange={() => {
                   const   html:string =editorRef.current?.getInstance().getHTML()

                    if(editorRef.current&&onHTMLChange) {
                        onHTMLChange(html)

                    }

                }}
                ref={editorRef}

                // onChange={(e)=>console.log(e)}
                // previewStyle="vertical"
                initialValue={" "}
                useCommandShortcut={true}
                plugins={[[codeSyntaxHighlight,{ highlighter: Prism }]]}
            />
        </div>
    );
};

export default TextEditor;
