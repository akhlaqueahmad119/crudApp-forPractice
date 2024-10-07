import React from "react";
import { fetchData, postData, updateData } from "../../api/api";

const Form = ({ editData, setEditData, myRef, getData, setGetData }) => {
  const initialVal = {
    name: editData && editData.name ? editData.name : "",
    email: editData && editData.email ? editData.email : "",
    number: editData && editData.number ? editData.number : "",
  };
  const [formData, setFormData] = React.useState(initialVal);
  console.log(formData,"formData")
  const clearData = () => {
    console.log("object")
   setFormData({
     name: "",
     email: "",
     number: "",
   });
}
  const handleChange = (event) => {
    const data = event.target;
    if (editData && myRef.current) {
      setEditData({
        ...editData,
        [data["name"]]: data["value"],
      });
    } else {
      setFormData({
        ...formData,
        [data["name"]]: data["value"],
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData && myRef.current) {
      updateData(editData);
    } else {
      postData(formData);
    }
    console.log("ffucj")

    fetchData(setGetData);
    clearData()
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name || editData.name || ""}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="email"
          value={formData.email || editData.email || ""}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="number"
          value={formData.number || editData.number || ""}
          onChange={handleChange}
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
