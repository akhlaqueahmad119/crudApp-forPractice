let url = "http://localhost:3000/users";

// Get Api

export const fetchData = async () => {
  try {
    const response = await fetch(url);
    if (response.status !== 200)
      throw new Error(`Getting ${response.status} error !`);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error.message);
  }
};

// Delete Api

export const deleteData = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    if (response.status !== 200) throw new Error(`Getting ${response.status}`);
    const data = await response.json();
    console.log(data, "delete");
  } catch (error) {
    console.log(error.message);
  }
};

// Post Api

export const postData = async (data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // here i missed " Content"
      },
      body: JSON.stringify(data), // forgot stringify
    });
    if (response.status !== 201) throw new Error(`Getting ${response.status}`);
    console.log(response, "sasa");
  } catch (error) {
    console.log(error.message);
  }
};

//Put Api

export const updateData = async (allData) => {
  console.log(allData, "allData");

  try {
    const response = await fetch(`${url}/${allData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allData),
    });
    console.log(response, "put");
  } catch (error) {
    console.log(error);
  }
};
