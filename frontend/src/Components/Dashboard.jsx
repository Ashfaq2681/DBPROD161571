import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [file, setFile] = useState([]);
  const [images, setImages] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      const result = await axios.get("http://localhost:4000/api/user/getimage");
      if (result) setImages(result.data.data);
      console.log("Images:", images);
    };
    getImage();
  }, []);

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      await axios.post("http://localhost:4000/api/user/uploadimage", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(alert("Images uploaded successfuly"))
    } catch (error) {
      alert(error);
    }
  };

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
        <div className="flex flex-row flex-wrap gap-2">
          {images == null
            ? ""
            : images.map((data) => {
                return (
                  <a href={`/imagedownload`} className="grow">
                    <img
                      loading="lazy"
                      src={`http://localhost:4000/images/` + data.image}
                      key={data._id}
                      alt="image"
                      className="object-cover w-full h-[292px]"
                    />
                  </a>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

// {images == null
//   ? ''
//   : images.map((data) => {
//       return <img src={`http://localhost:4000/images/`+ data.image} key={data._id} alt="image"/>
//   })}
