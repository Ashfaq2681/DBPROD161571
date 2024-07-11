import axios from "axios";
import { useRef, useState } from "react";

const Article = () => {

    const [images, setImages] = useState([]);
    const [description, setDescription] = useState(null)
    const [savedImages, setSavedImages] = useState([]);
    const [selectImage, setSelectImage] = useState(null);
    const [fileSizeWarning, setFileSizeWarning] = useState(false);
    const [duplicateImageError, setDuplicateImageError] = useState(false);
    const [successImageUpload, setSuccessImageUpload] = useState(false);
    const [failImagedUpload, setFailImagedUpload] = useState(false);
    const [noSavedImages, setNoSavedImages] = useState(false);
    const [maxImages, setMaxImages] = useState(false);
    const fileInputRef = useRef(null);

    const onFileSelect = (e) => {
        const files = e.target.files;
        if (files.length === 0) return;
        for (let i = 0; i < files.length; i++) {
          if (files[i].type.split("/")[0] !== "image") continue;
          if (files[i].size > 2000000) {
            setFileSizeWarning(true);
          } else if (!images.some((e) => e.name === files[i].name)) {
            setFileSizeWarning(null);
            if (images.length < 1) {
              setMaxImages(false);
              setNoSavedImages(false);
              setImages((prevImages) => [
                ...prevImages,
                {
                  name: files[i].name,
                  url: URL.createObjectURL(files[i]),
                  size: files[i].size,
                },
              ]);
            } else {
              setMaxImages(true);
            }
          }
        }
      };

      const selectFiles = () => {
        fileInputRef.current.click();
      };

      const deleteImage = (index) => {
        setImages((prevImages) => prevImages.filter((el, i) => i !== index));
        setSelectImage(null);
      };

      const convertBytesToMB = (value) => {
        let toMB = value / 1024 ** 2;
        let reducedDecimals = toMB.toFixed(3);
        return reducedDecimals;
      };

      const upload = async (e) => {
        e.preventDefault();
        setSavedImages([images, description])
        const formData = new FormData();
        formData.append("file", savedImages);
        console.log(description)
        console.log(savedImages)
        try {
          await axios
            .post("http://localhost:4000/api/user/uploadarticle", formData, {
              headers: { "Content-Type": "multipart/form-data" },
            })
            .then(setSuccessImageUpload(true))
            .then(setFailImagedUpload(false));
        } catch (error) {
          setFailImagedUpload(true);
          setSuccessImageUpload(false);
          console.log(error);
        }
      };  

  return (
    <div className="bg-[#F9FAFB] w-full h-auto ">
        {fileSizeWarning && (
            <p className="bg-red-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]">
              <img
                src="./header/warning.png"
                className="w-10 h-10"
                alt="warning"
              />
              File size exceeds 6mb
            </p>
          )}
        {maxImages && (
            <p className="bg-red-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]">
              <img
                src="./header/warning.png"
                className="w-10 h-10"
                alt="warning"
              />
              Maximum 1 image are allowed
            </p>
          )}
          {duplicateImageError && (
            <p className="bg-red-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]">
              <img
                src="./header/warning.png"
                className="w-10 h-10"
                alt="warning"
              />
              Image already addded. Please select another image
            </p>
          )}
          {noSavedImages && (
            <p className="bg-red-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]">
              <img
                src="./header/warning.png"
                className="w-10 h-10"
                alt="warning"
              />
              Please Select an Image to upload
            </p>
          )}
          {successImageUpload && (
            <p className="bg-green-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]">
              <img
                src="./header/checkmark.png"
                className="w-10 h-10"
                alt="warning"
              />
              Article Uploaded Successfully
            </p>
          )}
          {failImagedUpload && (
            <p className="bg-red-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]">
              <img
                src="./header/warning.png"
                className="w-10 h-10"
                alt="warning"
              />
              Failed to upload Article. Please Try again
            </p>
          )}
      <div className="mt-5 md:mt-16 mx-5 md:mx-20">
        <div className="rounded-xl border border-[#E1E6EF] bg-white flex flex-row flex-wrap gap-10 p-5 md:p-16 ">
          <div className="rounded-xl border border-[#E1E6EF] p-5 md:p-10 flex flex-col gap-10 justify-start items-start">
            <form className="w-full lg:w-[550px]">
              <p className="text-[36px] font-bold text-[#727272]] text-[#727272]">
                Add New Article
              </p>
              <div className="flex flex-col gap-5 lg:gap-10 w-full my-3">
              <textarea
                    onChange={e => setDescription(e.target.value)}
                    name="contactMessage"
                    id="contactMessage"
                    className="inputContact my-3 w-full"
                    placeholder="Type the article description here"
                    rows={5}
                />
                <input
                type="file"
                name="file"
                multiple
                ref={fileInputRef}
                onChange={onFileSelect}
                className="hidden"
              />
              <div className="w-full h-auto flex flex-row justify-center md:justify-start items-start flex-wrap mb-5 gap-5 px-5">
                {images.length !== 0 ? (
                  images.map((images, index) => (
                    <div className="w-[200px] relative text-center" key={index}>
                      <img
                        src="./header/bin.png"
                        className="absolute w-8 h-8 top-4 right-[15px] text-[40px] cursor-pointer text-[#4A16D8]"
                        onClick={() => deleteImage(index)}
                      />
                      <img
                        onClick={() => setSelectImage(images)}
                        className={`${
                          selectImage && selectImage.name === images.name
                            ? "border-8 border-gray-300"
                            : ""
                        } cursor-pointer w-full h-[200px] rounded-lg object-cover`}
                        src={images.url}
                        alt={images.name}
                      />
                      <span className="flex flex-row justify-center gap-2 font-bold mt-2">
                        {convertBytesToMB(images.size)}
                        <p>MB</p>
                      </span>
                      <p>{images.name}</p>
                      <button
                        onClick={upload}
                        className="px-8 py-1 rounded-full bg-[#4A16D8] text-white text-[24px] mt-5 mb-7"
                        >
                        Upload
                        </button>
                    </div>
                  ))
                ) : (
                  <div className="mx-auto mt-10 text-center">
                    <span className="text-[24px] mx-auto">
                    Select your image{" "}
                      <p
                        onClick={selectFiles}
                        className="text-[#4A16D8] cursor-pointer"
                      >
                        Browse
                      </p>
                    </span>
                  </div>
                )}
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
