import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../constants/strings";

const UploadForm = () => {
  const [category, setCategory] = useState("photos");
  const [title, setTitle] = useState(null);
  const [files, setFiles] = useState({
    preview: null,
    categoryFile: null,
  });
  const [previewURL, setPreviewURL] = useState(""); // State to store preview URL
  const [uploadStatus, setUploadStatus] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setFiles({ preview: null, categoryFile: null });
    setPreviewURL(""); // Clear preview when category changes
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles({ ...files, [name]: selectedFiles[0] });

    // Set preview URL for preview field only
    if (name === "preview" || (name === "categoryFile" && category === "photos")) {
      setPreviewURL(URL.createObjectURL(selectedFiles[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadStatus("");
  
    const formData = new FormData();
    formData.append("category", category);
    formData.append("title", title);
  
    if (category !== "photos") {
      formData.append("preview", files.preview);
      formData.append("file", files.categoryFile); // Change categoryFile to file
    } else {
      formData.append("file", files.categoryFile);
    }
  
    try {
      const response = await axios.post(
        `${baseUrl}/user/uploadimage/home`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.status === 200) {
        setUploadStatus("Upload successful!");
      }
    } catch (error) {
      setUploadStatus("Upload failed. Please try again.");
      console.error("Error during file upload:", error);
    }
  };
  

  return (
    <div className="w-full mx-auto p-6 md:p-14 bg-white rounded shadow-md">
      <h1 className="text-xl md:text-3xl font-bold mb-4 text-gray-700 text-center">Upload Files</h1>
  {/* Upload Status */}
  {uploadStatus && (
        <p
          className={`mt-4 text-center w-full p-3 bg-green-100  ${
            uploadStatus.includes("successful") ? "text-green-500" : "text-red-500"
          }`}
        >
          {uploadStatus}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category Selection */}
        <div>
          <label className="block text-sm md:text-lg font-semibold text-gray-600 mb-1">
            Select Category
          </label>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="block w-full p-2 border border-gray-300 rounded"
          >
            <option value="photos">Photos</option>
            <option value="psds">PSDs</option>
            <option value="mockups">Mockups</option>
            <option value="vectors">Vectors</option>
            <option value="pngs">PNGs</option>
            <option value="socialMedia">Social Media</option>
          </select>
        </div>

        {/* Image Title */}
        <div>
          <label className="block text-sm md:text-lg font-semibold text-gray-600 mb-1">
            Title
          </label>
          <input
            name="img-title"
            onChange={handleTitleChange}
            className="block w-full text-sm border border-gray-300 rounded px-3 py-2"
            placeholder="Mountains"
            required
          />
        </div>

        {/* File Upload */}
        {category !== "photos" && (
          <>
            {/* Preview Upload */}
            <div>
              <label className="block text-sm md:text-lg font-semibold text-gray-600 mb-1">
                Upload Preview
              </label>
              <input
                type="file"
                name="preview"
                onChange={handleFileChange}
                accept="image/*"
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded"
                required
              />
            </div>

            {/* Category-Specific File Upload */}
            <div>
              <label className="block text-sm md:text-lg font-semibold text-gray-600 mb-1">
                Upload {category.toUpperCase()} File
              </label>
              <input
                type="file"
                name="categoryFile"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded"
                required
              />
            </div>
          </>
        )}

        {category === "photos" && (
          <div>
            <label className="block text-sm md:text-lg font-semibold text-gray-600 mb-1">
              Upload Image
            </label>
            <input
              type="file"
              name="categoryFile"
              onChange={handleFileChange}
              accept="image/*"
              className="block w-full  text-sm text-gray-500 border border-gray-300 rounded"
              required
            />
          </div>
        )}

        {/* Image Preview */}
        {previewURL && (
          <div className="mt-4 flex justify-center">
            <img
              src={previewURL}
              alt="Preview"
              className="w-full md:w-48 md:h-60 object-contain rounded border border-gray-300"
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="text-right">
        <button
          type="submit"
          className="w-60 bg-blue-500 text-white p-3 font-semibold text-xl rounded hover:bg-blue-600 transition"
        >
          Upload
        </button>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
