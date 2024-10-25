import axios from "axios";
import { useState } from "react";

const PublishArticle = () => {
  // State for form inputs
  const [mainTitle, setMainTitle] = useState("");
  const [mainDescription, setMainDescription] = useState("");
  const [descriptionImage, setDescriptionImage] = useState(null);
  const [descriptionImagePreview, setDescriptionImagePreview] = useState(null);

  const [heading1, setHeading1] = useState("");
  const [description1, setDescription1] = useState("");
  const [description1Image, setDescription1Image] = useState(null);
  const [description1ImagePreview, setDescription1ImagePreview] = useState(null);

  const [heading2, setHeading2] = useState("");
  const [description2_1, setDescription2_1] = useState("");
  const [description2_2, setDescription2_2] = useState("");

  const [heading3_1, setHeading3_1] = useState("");
  const [description3_1, setDescription3_1] = useState("");
  const [description3_1Image, setDescription3_1Image] = useState(null);
  const [description3_1ImagePreview, setDescription3_1ImagePreview] = useState(null);

  const [heading3_2, setHeading3_2] = useState("");
  const [description3_2, setDescription3_2] = useState("");
  const [description3_2Image, setDescription3_2Image] = useState(null);
  const [description3_2ImagePreview, setDescription3_2ImagePreview] = useState(null);

  const [heading3_3, setHeading3_3] = useState("");
  const [description3_3, setDescription3_3] = useState("");
  const [description3_3Image, setDescription3_3Image] = useState(null);
  const [description3_3ImagePreview, setDescription3_3ImagePreview] = useState(null);

  const [conclusion, setConclusion] = useState("");

  // State for upload status messages
  const [successImageUpload, setSuccessImageUpload] = useState(false);
  const [failImagedUpload, setFailImagedUpload] = useState(false);

  // Handles image selection and preview generation
  const handleImageChange = (e, setImage, setPreview) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const upload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("mainTitle", mainTitle);
    formData.append("mainDescription", mainDescription);
    if (descriptionImage) formData.append("descriptionImage", descriptionImage);

    formData.append("heading1", heading1);
    formData.append("description1", description1);
    if (description1Image) formData.append("description1Image", description1Image);

    formData.append("heading2", heading2);
    formData.append("description2_1", description2_1);
    formData.append("description2_2", description2_2);

    formData.append("heading3_1", heading3_1);
    formData.append("description3_1", description3_1);
    if (description3_1Image) formData.append("description3_1Image", description3_1Image);

    formData.append("heading3_2", heading3_2);
    formData.append("description3_2", description3_2);
    if (description3_2Image) formData.append("description3_2Image", description3_2Image);

    formData.append("heading3_3", heading3_3);
    formData.append("description3_3", description3_3);
    if (description3_3Image) formData.append("description3_3Image", description3_3Image);

    formData.append("conclusion", conclusion);

    try {
      await axios.post(
        "http://localhost:4000/api/user/uploadarticle",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setSuccessImageUpload(true);
      setFailImagedUpload(false);

      // Clear form after successful upload
      setMainTitle("");
      setMainDescription("");
      setDescriptionImage(null);
      setDescriptionImagePreview(null);
      setHeading1("");
      setDescription1("");
      setDescription1Image(null);
      setDescription1ImagePreview(null);
      setHeading2("");
      setDescription2_1("");
      setDescription2_2("");
      setHeading3_1("");
      setDescription3_1("");
      setDescription3_1Image(null);
      setDescription3_1ImagePreview(null);
      setHeading3_2("");
      setDescription3_2("");
      setDescription3_2Image(null);
      setDescription3_2ImagePreview(null);
      setHeading3_3("");
      setDescription3_3("");
      setDescription3_3Image(null);
      setDescription3_3ImagePreview(null);
      setConclusion("");
    } catch (error) {
      setFailImagedUpload(true);
      setSuccessImageUpload(false);
      console.error("Error uploading:", error);
    }
  };

  return (
    <div className="bg-[#F9FAFB] w-full h-auto">
      {/* Warnings and success messages */}
      {successImageUpload && (
        <p className="bg-green-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]">
          <img src="./header/checkmark.png" className="w-10 h-10" alt="checkmark" />
          Article uploaded successfully
        </p>
      )}
      {failImagedUpload && (
        <p className="bg-red-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]">
          <img src="./header/warning.png" className="w-10 h-10" alt="warning" />
          Failed to upload article. Please try again
        </p>
      )}
      <div className="pt-5 mx-2 md:mx-20">
        <div className="p-5 md:p-10">
          <div className="rounded-xl border border-[#E1E6EF] bg-white p-5">
            <form className="w-full">
              <p className="text-xl md:text-3xl font-bold text-[#727272]">Upload An Article</p>
              <div className="flex flex-col gap-5 lg:gap-4 w-full my-3">
                <input
                  type="text"
                  value={mainTitle}
                  onChange={(e) => setMainTitle(e.target.value)}
                  placeholder="Article Title"
                  className="inputContact w-full"
                  required
                />
                <textarea
                  onChange={(e) => setMainDescription(e.target.value)}
                  className="inputContact w-full"
                  placeholder="Type the article description here"
                  rows={3}
                  required
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setDescriptionImage, setDescriptionImagePreview)}
                  className="my-2"
                />
                {descriptionImagePreview && (
                  <img src={descriptionImagePreview} alt="Description Preview" className="w-32 h-32 object-cover my-2" />
                )}

                <input
                  type="text"
                  value={heading1}
                  onChange={(e) => setHeading1(e.target.value)}
                  placeholder="Heading 1"
                  className="inputContact w-full"
                  required
                />
                <textarea
                  onChange={(e) => setDescription1(e.target.value)}
                  className="inputContact w-full"
                  placeholder="Description 1"
                  rows={5}
                  required
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setDescription1Image, setDescription1ImagePreview)}
                  className="my-2"
                />
                {description1ImagePreview && (
                  <img src={description1ImagePreview} alt="Description 1 Preview" className="w-32 h-32 object-cover my-2" />
                )}

                <input
                  type="text"
                  value={heading2}
                  onChange={(e) => setHeading2(e.target.value)}
                  placeholder="Heading 2"
                  className="inputContact w-full"
                  required
                />
                <textarea
                  onChange={(e) => setDescription2_1(e.target.value)}
                  className="inputContact w-full"
                  placeholder="Description 2 - Paragraph 1"
                  rows={5}
                  required
                />
                <textarea
                  onChange={(e) => setDescription2_2(e.target.value)}
                  className="inputContact w-full"
                  placeholder="Description 2 - Paragraph 2"
                  rows={5}
                  required
                />

                <input
                  type="text"
                  value={heading3_1}
                  onChange={(e) => setHeading3_1(e.target.value)}
                  placeholder="Heading 3.1"
                  className="inputContact w-full"
                  required
                />
                <textarea
                  onChange={(e) => setDescription3_1(e.target.value)}
                  className="inputContact w-full"
                  placeholder="Description 3.1"
                  rows={5}
                  required
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setDescription3_1Image, setDescription3_1ImagePreview)}
                  className="my-2"
                />
                {description3_1ImagePreview && (
                  <img src={description3_1ImagePreview} alt="Description 3.1 Preview" className="w-32 h-32 object-cover my-2" />
                )}

                <input
                  type="text"
                  value={heading3_2}
                  onChange={(e) => setHeading3_2(e.target.value)}
                  placeholder="Heading 3.2"
                  className="inputContact w-full"
                  required
                />
                <textarea
                  onChange={(e) => setDescription3_2(e.target.value)}
                  className="inputContact w-full"
                  placeholder="Description 3.2"
                  rows={5}
                  required
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setDescription3_2Image, setDescription3_2ImagePreview)}
                  className="my-2"
                />
                {description3_2ImagePreview && (
                  <img src={description3_2ImagePreview} alt="Description 3.2 Preview" className="w-32 h-32 object-cover my-2" />
                )}

                <input
                  type="text"
                  value={heading3_3}
                  onChange={(e) => setHeading3_3(e.target.value)}
                  placeholder="Heading 3.3"
                  className="inputContact w-full"
                  required
                />
                <textarea
                  onChange={(e) => setDescription3_3(e.target.value)}
                  className="inputContact w-full"
                  placeholder="Description 3.3"
                  rows={5}
                  required
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setDescription3_3Image, setDescription3_3ImagePreview)}
                  className="my-2"
                />
                {description3_3ImagePreview && (
                  <img src={description3_3ImagePreview} alt="Description 3.3 Preview" className="w-32 h-32 object-cover my-2" />
                )}

                <textarea
                  onChange={(e) => setConclusion(e.target.value)}
                  className="inputContact w-full"
                  placeholder="Conclusion"
                  rows={5}
                  required
                />
              </div>

              <div className="w-full flex justify-end">
                <button
                  onClick={upload}
                  className="mt-5 bg-[#98D9FF] w-[200px] lg:w-[300px] h-[50px] lg:h-[60px] text-xl lg:text-3xl text-[#252733] font-bold rounded-xl"
                >
                  Publish Article
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishArticle;
