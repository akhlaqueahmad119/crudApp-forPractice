// import React from 'react'
import "./body.css"
import { useEffect, useState } from "react"
import { deleteData, fetchData, updateData } from "../../api/api"
const Body = ({ setEditData, myRef, getData, setGetData }) => {
  console.log(myRef);
  console.log(getData, "vat");

  const getFetchData = async () => {
     const getFetchData = await fetchData();
     setGetData(getFetchData);
     console.log(getFetchData, "hData");
  }
  useEffect(() => {
    getFetchData()
  }, []);

  return (
    <div className="bodyBox">
      {getData.length > 0 ? (
        getData.map((item) => (
          <div key={item.id}>
            {console.log(item,"item7")}
            <button
              onClick={() => {
                deleteData(item.id);
                fetchData(setGetData);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                setEditData(item);
                myRef.current = true;
              }}
            >
              Update
            </button>
            <h3>{item.name}</h3>
            <p>{item.email}</p>
            <h3>{item.number}</h3>
            <hr></hr>
          </div>
        ))
      ) : (
        <p>Loading... Please wait</p>
      )}
    </div>
  );
};

export default Body
