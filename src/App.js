
import {useRef, useState, useEffect} from 'react';
import './App.css';
import { uploadFile} from './services/api';



function App() {
  const [file, setFile] = useState(''); 

  const fileInputRef = useRef();
  const [result, setResult] = useState('');

  const [showButton, setShowButton] = useState(false);


  useEffect(() => {
    const getImage = async() => {
    if (file){
      const data = new FormData();
      data.append("name", file.name);
      data.append("file", file);

     let response =await uploadFile(data); 
     setResult(response.path);
    }
    }
    getImage();
  },[file])



   const onUploadClick = () => {
    fileInputRef.current.click();
    setShowButton(!showButton);

   }

    console.log(file);


  

  return (
    <div className='container'>
      
      <div className='wrapper'>
      <div className='drop-zone'>
     
        {/* <h1>simple file sharing!</h1>
        <p>Upload and share the download link.</p> */}

        <button className='button1' onClick={() => onUploadClick()}>Upload</button>
        <input type="file"
        ref={fileInputRef}
        style={{display: 'none'}}
        onChange={(e) => setFile(e.target.files[0])}
        />

         <div className='copy-box'>
        <a href={result} target="_blank" className='link'>{result} </a>
        
        
        {showButton && <button className='button2'  onClick={() =>  navigator.clipboard.writeText(result)}>copy</button>}
        
        </div> 
        
        </div>
        </div>
      </div>
    
  );
}

export default App;
