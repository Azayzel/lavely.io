import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import s from './index.module.css';
import aboutMd from './index.md'

const About = () => {
    const [ markdown, setMarkdown] = useState(null)
    fetch(aboutMd).then(res => res.text()).then(md => setMarkdown(md)).catch(err => console.error(err))
    return (
        <div className={s.root}>
        <div className={s.container}>
        {markdown && 
        <ReactMarkdown
            source={markdown}
            escapeHtml={false}/>
        }
        </div>
        </div>
    )
}

export default About