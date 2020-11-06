import React from 'react'
import 'codemirror/theme/material.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { controlled as controlledEditor } from 'react-codemirror2'

export default function Editor(props) {
    const {
        language,
        displayName, 
        value,
        onChange
    } = props

    function handleChange(editor, data, value) {
        onchange(value)
    }

    return (
        <div className="editor-container">
            <div className="editor-title">
                {displayName}
                <button>oc</button>
            </div>
            <controlledEditor
              onBeforeChange={handleChange}
              value={value}
              className="code-mirror-wrapper"
              options={{
                  lineWrapping: true,
                  lint: true,
                  mode: language,
                  theme: 'material',
                  lineNumbers: true
              }}
              />
            
        </div>
    )
}
