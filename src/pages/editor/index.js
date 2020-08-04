import React, { useState } from 'react';
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import s from './index.module.css'
import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});
 
const Editor = () => {
  const [md, setMarkdown] = useState("**Write Something**");
  const [selectedTab, setSelectedTab] = useState("write");
  
  return (
      <div className={s.root}>
        <div className={s.container} style={{ marginTop: '30px'}}>
        <ReactMde
            value={md}
            onChange={setMarkdown}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={markdown =>
            Promise.resolve(converter.makeHtml(markdown))
            }
            />
        </div>
    </div>
  );
}

export default Editor;