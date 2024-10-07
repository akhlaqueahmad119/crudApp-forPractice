// import { useState } from 'react'
import { useRef, useState } from 'react';
import './App.css'
import Header from  './components/Header';
import Body from './components/body';
import Form from './components/form/form';
function App() {
  const [editData, setEditData] = useState({})
  const [getData, setGetData] = useState([]);

  console.log(editData, "d")
  const myRef = useRef(false)
  console.log(myRef);

  return (
    <>
      {/* <h1>Allah Paak</h1> */}
      <Header />
      <Body
        setEditData={setEditData}
        myRef={myRef}
        getData={getData}
        setGetData={setGetData}
      />
      <Form
        editData={editData}
        setEditData={setEditData}
        myRef={myRef}
        getData={getData}
        setGetData={setGetData}
      />
    </>
  );
}

export default App