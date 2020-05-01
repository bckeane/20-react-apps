import React, { useState } from 'react';
//import marked from 'marked';
import ReactMarkdown from 'react-markdown'; 
import './App.css';

export default function App() {
  const [markdown, setMarkdown] = useState('# Sup');

  function handleChange(e){
    setMarkdown(e.target.value);
  }

  return (
    <div className="app">
      <textarea
        onChange={handleChange}
        value={markdown} 
      />
{/*
      < div className = "preview"
      dangerouslySetInnerHTML = {{ __html: marked(markdown)}} >
         </div>
     
  */}

  <ReactMarkdown className="preview" source={markdown} />
 < /div>

  );
}
