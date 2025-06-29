const Licence = () => {
  const allowed = [
    "All photos and videos on Pexels are eligble to download and use",
    "Attribution is not required. Giving credit to the photographer or Pexels is not necessary but always appreciated.",
    "You can modify the photos and videos from Pexels. Be creative and edit them as you like.",
    "Download and use images as much as you like",
  ];

  const notAllowed = [
    "Identifiable people may not appear in a bad light or in a way that is offensive.",
    "Don't sell unaltered copies of a photo or video, e.g. as a poster, print or on a physical product without modifying it first.",
    "Don't imply endorsement of your product by people or brands on the imagery.",
    "Don't redistribute or sell the photos and videos on other stock photo or wallpaper platforms",
    "Don't use the photos or videos as part of your trade-mark, design-mark, trade-name, business name or service mark.",
    "Don't use our platform for personal scouting of photographers or any of their content",
  ];
  return (
    <section className="text-[#727272] mt-10 lg:mt-0 leading-tight">
      <div className="px-8 md:px-16 lg:px-20 xl:px-32 py-5 md:py-16 lg:py-40 text-center">
        <p className="text-[20px] font-light mb-2 lg:mb-10">
          Attested licence for image download and use
        </p>
        <span className="text-[48px] lg:text-[70px] font-bold my-5 lg:my-10">
          All images and data on Harry Photo are{" "}
          <p className="text-[#3b82f6]">licenced and copyright free </p>
          under our terms and policy usage
        </span>
        <p className="text-[24px] font-light mt-2 lg:mt-10">
          From small stuff to the big picture, streamline, explore, choose and
          get efficient with our plans without any hestation
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 max-w-[800px] mx-auto mt-10 md:mt-20 lg:mt-40 px-5">
        <p className="text-[48px] font-bold flex flex-row gap-5 items-center">
          What is Allowed{" "}
          <img src="./legal/thumbsup.svg" alt="thumbsup" className="w-16 h-16" />
        </p>
        {allowed.map((items) => (
          <div
            key={items}
            className="border border-gray-300 rounded-xl flex flex-row justify-start items-center gap-5 py-10 px-5 w-full"
          >
            <img loading="lazy" src="./legal/tick.svg" alt="close" className="w-10 h-10" />
            <p className="text-[24px] font-bold">{items}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-10 max-w-[800px] mx-auto mt-10 md:mt-20 lg:mt-40 px-5">
        <p className="text-[48px] font-bold flex flex-row gap-5 items-center">
          What is not Allowed{" "}
          <img src="./legal/thumbsdown.svg" alt="thumbsdown" className="w-16 h-16" />
        </p>
        {notAllowed.map((items) => (
          <div
            key={items}
            className="border border-gray-300 rounded-xl flex flex-row justify-start items-center gap-5 py-10 px-5 w-full"
          >
            <img
              loading="lazy"
              src="./legal/closeCircle.svg"
              alt="close"
              className="w-10 h-10"
            />
            <p className="text-[24px] font-bold">{items}</p>
          </div>
        ))}
      </div>
      <div className="px-8 md:px-16 lg:px-20 xl:px-32 py-5 md:py-16 lg:py-40 text-center max-w-[1500px] mx-auto">
        <p className="text-[48px] font-bold my-10">Licence Summary</p>
        <p className="text-[24px] font-light">
          Harry Photo grants you an unlimited, perpetual, nonexclusive,
          worldwide license to download, copy, modify, distribute, perform, and
          use Harry Photo images downloaded from your Harry Photo subscription,
          including for commercial purposes, without requiring attribution
          (photo credit). If you use the Harry Photo images properly, Harry
          Photo promises that your use will not infringe on anyone else's
          copyright or other intellectual property rights, or any rights of
          publicity or privacy. This license does not include the right to
          compile any image (including Harry Photo images) from Harry Photo to
          replicate a similar or competing service, and certain restrictions
          apply (for example, you cannot re-sell Harry Photo photos “as-is”, or
          use Harry Photo images in connection with sensitive topics, or in
          digital templates, machine learning, AI, or for biometric tracking
          technology). Please review the Harry Photo Subscription Terms for the
          full set of Harry Photo terms and conditions that apply to your use of
          Harry Photo photos.
        </p>
      </div>
    </section>
  );
};

export default Licence;
