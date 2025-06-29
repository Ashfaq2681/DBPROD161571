import { useState } from "react";
import { useLocation } from "react-router-dom";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { baseUploadsUrl } from "../constants/strings";
// import { zip1 } from "../assets";

const ImageDownload = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const i = location.state.data.photos[0];

  console.log(location.state.data.photos[0]);

  const toggleLike = () => {
    setIsActive(!isActive);
  };

  const handleDownloadZip = async () => {
    const zip = new JSZip();

    // Fetch the preview image and add it to the zip
    const previewResponse = await fetch(`${baseUploadsUrl}/images/${i.preview}`);
    const previewBlob = await previewResponse.blob();
    zip.file(i.preview, previewBlob); // Adds preview image

    // Fetch the file (psd) and add it to the zip
    const fileResponse = await fetch(`${baseUploadsUrl}/images/${i.file}`);
    const fileBlob = await fileResponse.blob();
    zip.file(i.file, fileBlob); // Adds the file (PSD)
    // Remove the file extension (e.g., .png, .jpg, etc.) from i.preview for the zip filename
    const zipFileName = i.preview.split('.').slice(0, -1).join('.');

    // Generate zip and trigger download
    zip.generateAsync({ type: "blob" }).then((content) => {
    saveAs(content, `${zipFileName}.zip`);
    });
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(`${baseUploadsUrl}/images/${i}`);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = i;
      a.click();

      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  return (
    <section className="bg-[#F9FAFB] px-4 lg:px-40 mt-5 lg:mt-0 pb-10">
      <div className="mx-auto flex flex-col">
        <div className="flex gap-1 justify-end py-5 md:max-w-[860px]">
          <button
            onClick={toggleLike}
            className="flex flex-row items-center bg-[#EDEDED] rounded-full px-6 py-1 gap-1"
          >
            Save
            {isActive ? (
              <img loading="lazy" src="./imageDownload/heartfilled.svg" alt="heartfilled" className="w-6 h-6" />
            ) : (
              <img loading="lazy" src="./imageDownload/heartempty.svg" alt="heartempty" className="w-6 h-6" />
            )}
          </button>
          <button className="flex flex-row items-center bg-[#EDEDED] rounded-full px-6 py-1 gap-1">
            Share
            <img loading="lazy" src="./imageDownload/share.png" alt="share" />
          </button>
          <button className="bg-[#EDEDED] rounded-full px-2 py-1">
            <img loading="lazy" src="./imageDownload/options.png" alt="options" />
          </button>
        </div>
        <div className="flex flex-col gap-10 justify-start lg:items-center md:max-w-[860px]">
          {console.log(`${baseUploadsUrl}/images/${i.split("/").pop()}`)}
          <img
            loading="lazy"
            src={`${baseUploadsUrl}/images/${i.split("/").pop()}`}
            alt={i.file}
            className="h-auto lg:h-[600px]"
          />
          <p className="text-[24px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea earum obcaecati, facere eligendi magni rerum
            blanditiis aliquid.
          </p>
          <div className="flex flex-col md:flex-row-reverse md:justify-between items-start md:items-center w-full">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start justify-center">
              <div className="flex flex-row items-center justify-start gap-2 h-[32px] bg-[#EDEDED] rounded-full px-3 py-1">
                <img loading="lazy" src="./imageDownload/pixels.png" alt="" />
                1920x1080 pixels
              </div>
              <div className="flex flex-row items-center justify-start gap-2 h-[32px] bg-[#EDEDED] rounded-full px-3 py-1">
                <img loading="lazy" src="./imageDownload/photolayered.png" alt="" />
                Photoshop Layered
              </div>
            </div>
            <button onClick={handleDownload} className="rounded-full py-2 px-5 my-10 lg:my-0 bg-[#3b82f6] font-semibold text-[20px] text-white border-2 border-[#3b82f6] max-w-[200px] flex flex-row gap-2">
              <img loading="lazy" src="./imageDownload/arrowdown.png" alt="arrowdown" />
              Download
            </button>
          </div>
        </div>
        <p className="hidden lg:inline-block text-[10px] text-start font-light max-w-[730px] mt-8 mb-20">
          BeautifulPremium images aren&apos;t included in image subscriptions, FLEX subscriptions, or on-demand packs. You
          can license and pay for them separately Model Posing at the Sunlight, City Background with Gray Clothes
        </p>
      </div>
    </section>
  );
};

export default ImageDownload;
