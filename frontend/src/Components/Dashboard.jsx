import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [file, setFile] = useState([]);
  const [images, setImages] = useState(null)

  useEffect(() => {
    getImage()
  },[])

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
        const result = await axios.post(
            "http://localhost:4000/api/user/uploadimage",
            formData,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          )
          console.log("Images uploaded successfuly: ", result)
    } catch (error) {
        alert(error)
    }
  }

  const getImage = async (e) => {
    const result = await axios.get("http://localhost:4000/api/user/getimage")
    const resultArray = result.data.data
    console.log("Result Array", resultArray)
    setImages(resultArray) // BUG HERE
    console.log("Images:",images)
  }

  return (
    <section className="bg-[#F9FAFB] h-lvh px-5 py-10 lg:px-20 xl:px-40">
      <div className="flex flex-col gap-10">
        <p className="text-[50px] font-bold">Welcome to the admin dashboard</p>
        <form>
          <input type="file" onChange={onInputChange} />
          <button
            onClick={upload}
            className="nav-btn bg-[#4A16D8] text-white border-2 border-[#4A16D8]"
          >
            Upload
          </button>
        </form>
        {images && images.map((data) => {
            <img src={data.image} key={data._id} alt="image"/>
        })}
      </div>
    </section>
  );
};

export default Dashboard;
