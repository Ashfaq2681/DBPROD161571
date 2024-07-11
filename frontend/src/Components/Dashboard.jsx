import { memo, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuthContext } from "../CustomHooks/useAuthContext";
import Settings from "./AccoutSettings/Settings";
import Product from "./AccoutSettings/Product";
import Article from "./AccoutSettings/Article";

const Dashboard = () => {
  const { user, plan } = useAuthContext();

  const [current, setCurrent] = useState("1");
  // const [file, setFile] = useState([]);
  const [images, setImages] = useState([]);
  const [savedImages, setSavedImages] = useState([]);
  const [selectImage, setSelectImage] = useState(null);
  const [fileSizeWarning, setFileSizeWarning] = useState(false);
  const [duplicateImageError, setDuplicateImageError] = useState(false);
  const [successImageUpload, setSuccessImageUpload] = useState(false);
  const [failImagedUpload, setFailImagedUpload] = useState(false);
  const [tagLimit, setTagLimit] = useState(false);
  const [noSavedImages, setNoSavedImages] = useState(false);
  const [maxImages, setMaxImages] = useState(false);
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    console.log(user)
  },[])

  const handleKeydown = (e) => {
    if (e.key !== "Enter" && e.key !== ",") return;
    const value = e.target.value;
    if (!value.trim()) return;
    if (tags.length > 30) {
      setTagLimit(true);
    } else {
      setTags([...tags, value]);
      e.target.value = "";
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i != index));
  };

  const handleSavedImages = (e) => {
    if (e && savedImages.url === e.url) {
      setDuplicateImageError(true);
    } else if (!e) {
      setNoSavedImages(true);
    } else {
      setNoSavedImages(false);
      setSavedImages(() => [
        ...savedImages,
        {
          name: title,
          url: e.url,
          size: e.size,
          tags: [...tags],
        },
      ]);
    }
    console.log(savedImages, e);
  };

  const selectFiles = () => {
    fileInputRef.current.click();
  };

  const onFileSelect = (e) => {
    const files = e.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (files[i].size > 2000000) {
        setFileSizeWarning(true);
      } else if (!images.some((e) => e.name === files[i].name)) {
        setFileSizeWarning(null);
        if (images.length < 6) {
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

  const deleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((el, i) => i !== index));
    setSelectImage(null);
  };

  const deleteSavedImage = (index) => {
    setSavedImages((prevImages) => prevImages.filter((el, i) => i !== index));
    setSelectImage(null);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  };

  const onDragLeave = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (files[i].size > 2000000) {
        setFileSizeWarning(true);
      } else if (!images.some((e) => e.name === files[i].name)) {
        setFileSizeWarning(null);
        if (images.length < 6) {
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

  const convertBytesToMB = (value) => {
    let toMB = value / 1024 ** 2;
    let reducedDecimals = toMB.toFixed(3);
    return reducedDecimals;
  };

  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", savedImages);
    try {
      await axios
        .post("http://localhost:4000/api/user/uploadimage/user", formData, {
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
    <section className="flex flex-row">
      <nav className="py-10 md:pr-5 w-auto md:w-[266px] h-lvh border-r-2 border-gray-300">
        <img
          src="./header/menu-bar-admin.png"
          alt="menubar"
          className="h-4 w-4 ml-5"
        />
        <div
          className={`flex flex-row justify-start items-center gap-2 py-2 w-full mt-10 cursor-pointer ${
            current === "1" && "bg-[#E1E6EF] font-bold rounded-none md:rounded-r-lg"
          }`}
          onClick={() => setCurrent("1")}
        >
          <img
            src={
              current === "1"
                ? "./header/overview-filled.png"
                : "./header/overview.png"
            }
            alt="overviewfilled"
            className="px-5 md:pr-0"
          />
          <p className="text-[14px] font-light hidden md:inline-block">
            Overview
          </p>
        </div>
        <div
          className={`flex flex-row justify-start items-center gap-2 py-2 w-full mt-2 cursor-pointer ${
            current === "2" && "bg-[#E1E6EF] font-bold rounded-r-lg"
          }`}
          onClick={() => setCurrent("2")}
        >
          <img
            src={
              current === "2"
                ? "./header/product-filled.png"
                : "./header/product.png"
            }
            alt="overviewfilled"
            className="pl-5"
          />
          <p className="text-[14px] font-light hidden md:inline-block">
            Product
          </p>
        </div>
        <div
          className={`flex flex-row justify-start items-center gap-2 py-2 w-full mt-2 mb-16 cursor-pointer ${
            current === "3" && "bg-[#E1E6EF] font-bold rounded-r-lg"
          }`}
          onClick={() => setCurrent("3")}
        >
          <img
            src={
              current === "3"
                ? "./header/product-filled.png"
                : "./header/product.png"
            }
            alt="overviewfilled"
            className="pl-5"
          />
          <p className="text-[14px] font-light hidden md:inline-block">
            Articles
          </p>
        </div>
        <hr />
        <p className="pl-5 pt-5 font-bold">Support</p>
        <div
          className={`flex flex-row justify-start items-center gap-2 py-2 w-full mt-2 cursor-pointer ${
            current === "4" && "bg-[#E1E6EF] font-bold rounded-r-lg"
          }`}
          onClick={() => setCurrent("4")}
        >
          <img
            src="./header/settings.png"
            alt="overviewfilled"
            className="pl-5"
          />
          <p className="text-[14px] font-light hidden md:inline-block">
            Settings
          </p>
        </div>
        <div className="flex flex-row justify-start items-center gap-2 py-2  w-full mt-2 cursor-pointer">
          <img src="./header/moon.png" alt="overviewfilled" className="pl-5" />
          <p className="text-[14px] font-light hidden md:inline-block">
            Dark Mode
          </p>
        </div>
      </nav>
      {current === "1" && (
        <div className="bg-[#F9FAFB] w-full h-auto">
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
              Maximum 6 images are allowed
            </p>
          )}
          {tagLimit && (
            <p className="bg-red-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]">
              <img
                src="./header/warning.png"
                className="w-10 h-10"
                alt="warning"
              />
              Maximum 30 tags are allowed
            </p>
          )}
          <div className="rounded-xl border border-[#E1E6EF] bg-white my-5 md:my-16 mx-5 md:mx-10">
            <div
              className="rounded-xl border-4 border-dashed border-[#E1E6EF] bg-white mx-7 mt-7 mb-5 flex flex-col gap-5 justify-center items-center text-center py-10"
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
            >
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
                    </div>
                  ))
                ) : (
                  <div className="mx-auto mt-10 ">
                    <img
                      src="./header/cloud-upload.png"
                      alt="upload"
                      className="w-[108px] h-[66px]  mx-auto"
                    />
                    <span className="text-[24px] mx-auto">
                      Drag and Drop your artwork here or{" "}
                      <p
                        onClick={selectFiles}
                        className="text-[#4A16D8] cursor-pointer"
                      >
                        Browse
                      </p>
                    </span>
                  </div>
                )}
                {images.length !== 0 && (
                  <div
                    className="w-[200px] h-[200px] relative border-[#4A505C] bg-[#F9FAFB] text-center rounded-lg flex flex-col justify-center items-center cursor-pointer"
                    onClick={selectFiles}
                  >
                    <img
                      src="./header/plus.svg"
                      alt="plus"
                      className="w-8 h-8"
                    />
                    <p className="text-[20px]">Add More</p>
                  </div>
                )}
              </div>
            </div>
            <div
              className={`flex flex-col md:flex-row flex-wrap ${
                selectImage ? "justify-between" : "justify-end"
              } gap-10 md:gap-20 px-10 md:px-20 mb-7 text-[#505153]`}
            >
              <div
                className={`flex-col md:flex-row justify-center items-start gap-5 ${
                  selectImage ? "flex " : "hidden"
                }`}
              >
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="rounded-lg p-3 border-2 border-gray-400 bg-[#F9FAFB] text-[16px] md:text-[24px] w-auto focus:outline-none"
                  placeholder="Title"
                />
                <div className="flex flex-row gap-2 flex-wrap rounded-lg p-3 border-2 text-center border-gray-400 bg-[#F9FAFB] text-[16px] w-auto md:text-[24px]">
                  {tags.map((tag, index) => (
                    <div
                      className="flex flex-row px-5 gap-2 justify-center items-center rounded-full w-auto bg-gray-300"
                      key={index}
                    >
                      <span className="">{tag}</span>
                      <span
                        onClick={() => removeTag(index)}
                        className="bg-slate-800 text-center text-white p-3 rounded-full cursor-pointer inline-flex justify-center items-center w-5 h-5"
                      >
                        &times;
                      </span>
                    </div>
                  ))}
                  <input
                    onKeyDown={handleKeydown}
                    type="text"
                    placeholder="Keywords"
                    className=" focus:outline-none bg-[#F9FAFB]"
                  />
                </div>
              </div>
              <button
                onClick={() => handleSavedImages(selectImage)}
                className="px-8 py-1 rounded-full bg-[#4A16D8] text-white text-[24px] float-end"
              >
                Save changes
              </button>
            </div>
          </div>
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
              Image Uploaded Successfully
            </p>
          )}
          {failImagedUpload && (
            <p className="bg-red-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]">
              <img
                src="./header/warning.png"
                className="w-10 h-10"
                alt="warning"
              />
              Failed to upload image. Please Try again
            </p>
          )}
          <div className="bg-[#F9FAFB] w-full h-auto">
            <div className="rounded-xl border border-[#E1E6EF] bg-white my-5 md:my-16 mx-5 md:mx-10">
              <div className="rounded-xl border-4 border-dashed border-[#E1E6EF] bg-white m-7 flex flex-col gap-5 justify-center items-center text-center">
                <div className="w-full h-auto flex flex-row justify-center md:justify-start items-start flex-wrap my-5 gap-5 px-5">
                  {savedImages.length !== 0 ? (
                    savedImages.map((savedImages, index) => (
                      <div
                        className="w-[200px] relative text-center"
                        key={index}
                      >
                        <img
                          src="./header/bin.png"
                          className="absolute w-8 h-8 top-4 right-[15px] text-[40px] cursor-pointer text-[#4A16D8]"
                          onClick={() => deleteSavedImage(index)}
                        />
                        <img
                          className="w-full h-[200px] rounded-lg object-cover border-8 border-[#97FF9B]"
                          src={savedImages.url}
                          alt={savedImages.name}
                        />
                        <span className="flex flex-row justify-center gap-2 font-bold mt-2">
                          {convertBytesToMB(savedImages.size)}
                          <p>MB</p>
                        </span>
                        <p>{savedImages.name}</p>
                        <div className="flex flex-row gap-2 flex-wrap justify-center items-center text-center text-[16px] w-auto mt-2">
                          {savedImages.tags.map((tag, index) => (
                            <div
                              className="flex flex-row py-1 px-5 gap-2 justify-center items-center rounded-full w-auto bg-gray-300"
                              key={index}
                            >
                              <span className="">{tag}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center mt-8  mx-auto">
                      <img
                        src="./header/cloud-upload.png"
                        alt="upload"
                        className="w-[108px] h-[66px]"
                      />
                      <p className="text-[24px] mb-20 mt-o">
                        No images Uploaded yet
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-row justify-center md:justify-end">
                <button
                  onClick={upload}
                  className="px-8 py-1 rounded-full bg-[#4A16D8] text-white text-[24px] mr-0 md:mr-20 mb-7"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {current === "2" && <Product user={user} plan={plan}/>}
      {current === "3" && <Article/>}
      {current === "4" && <Settings user={user} plan={plan}/>}
    </section>
  );
};

export default memo(Dashboard);
