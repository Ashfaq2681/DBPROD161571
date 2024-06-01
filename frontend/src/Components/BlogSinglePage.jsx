import BlogCard from "./BlogCard";
import { useLocation } from 'react-router-dom'
import { blogCardItems } from ".";

const BlogSinglePage = () => {

    const bloglocation = useLocation()

  return (
    <section className="bg-[#F9FAFB] p-5 lg:px-20 xl:px-40 mt-5 lg:mt-0 text-[#505153]">
      <p className="text-[36px] md:text-[60px] font-bold w-full lg:w-[55%] my-2 md:my-10 leading-none">
        Creative Ideas for DIY Birthday Card Designs
      </p>
      <p className="text-[24px] font-light w-full lg:w-[55%] my-2 md:my-10 pt-3 md:pt-10 leading-tight">
        Celebrating birthdays with loved ones is always special, and what better
        way to express your affection than with a handmade birthday card?
        Crafting your own birthday card not only adds a personal touch but also
        allows you to unleash your creativity. Whether you're a seasoned crafter
        or new to the world of DIY, here are some inspiring ideas to help you
        design unique and memorable birthday cards for your friends and family.
      </p>
      <div className="flex flex-row items-center">
        <img
          loading="lazy"
          src={bloglocation.state.i.img}
          alt="image35"
          className="min-w-[362px] max-w-[1350px] min-h-[388px] max-h-[550px] object-cover"
        />
        <img
          loading="lazy"
          src="./blogSinglePage/playButton.png"
          alt="playButton"
          className="min-w-[86px] max-w-[216px] min-h-[86px] max-h-[216px] -ml-[50px] md:-ml-[70px]"
        />
      </div>
      <p className="hidden lg:inline-block text-[77px] font-bold w-[55%] leading-none mt-10">
        Creative Ideas for DIY Birthday Card Designs
      </p>
      <p className="hidden lg:inline-block text-[24px] font-light w-[55%] my-10 leading-tight">
        Celebrating birthdays with loved ones is always special, and what better
        way to express your affection than with a handmade birthday card?
        Crafting your own birthday card not only adds a personal touch but also
        allows you to unleash your creativity.
      </p>
      <div className="flex flex-row flex-wrap justify-start gap-7 lg:gap-20 xl:gap-40 text-[36px] md:text-[40px] font-bold my-10 lg:my-20 leading-none">
        <p>Headline A</p>
        <p>Headline B</p>
        <p>Headline C</p>
        <p>Headline D</p>
      </div>
      <p className="text-[36px] md:text-[60px] lg:text-[75px] font-bold my-2 pt-8">Watercolor Wonders</p>
      <div className="flex flex-col md:flex-row justify-start items-center gap-5 lg:gap-10">
        <p className="text-[24px] font-light w-full lg:max-w-[825px] leading-none">
          Celebrating birthdays with loved ones is always special, and what
          better way to express your affection than with a handmade birthday
          card? Crafting your own birthday card not only adds a personal touch
          but also allows you to unleash your creativity. Whether you're a
          seasoned crafter or new to the world of DIY, here are some inspiring
          ideas to help you design unique and memorable birthday cards for your
          friends and family.
          <br />
          <br /> Celebrating birthdays with loved ones is always special, and
          what better way to express your affection than with a handmade
          birthday card? Crafting your own birthday card not only adds a
          personal touch but also allows you to unleash your creativity. Whether
          you're a seasoned crafter or new to the world of DIY, here are some
          inspiring ideas to help you design unique and memorable birthday cards
          for your friends and family.
        </p>
        <img src="./blogSinglePage/image 27.png" alt="image1" className="w-[366px] lg:w-[400px] xl:w-[598px] h-[552px] lg:h-[450px] xl:h-[414px] object-cover" />
      </div>
      <div className="flex flex-col lg:flex-row gap-10 my-40">
        <BlogCard
          src="./blogSinglePage/image 27.png"
          number="1"
          title="Pop Up Surprises"
          subtitle="Add an element of surprise to your birthday cards with fun and interactive pop-up designs. Begin by sketching out your desired pop-up elements, such as balloons, cakes, or animals, on sturdy cardstock. Carefully cut along the outlines and fold as needed to create the 3D effect. Attach the pop-up elements to the inside of your card using adhesive, ensuring they can unfold smoothly when opened. For an extra dose of creativity, incorporate mechanisms like sliders or pull tabs to animate your pop-up creations."
        />
        <BlogCard
          src="./blogSinglePage/image 33.png"
          number="2"
          title="Quirky Collages"
          subtitle="Give your birthday cards a quirky and eclectic vibe by incorporating collage techniques. Gather a variety of materials such as patterned paper, magazine clippings, fabric scraps, and ephemera. Cut or tear these elements into different shapes and sizes, then arrange them on your card base to form a cohesive composition. Get playful with layering and overlapping to add depth and texture to your collage. Finish off your design with hand-drawn doodles, stamped images, or witty captions for a personalized touch."
        />
        <BlogCard
          src="./blogSinglePage/image 34.png"
          number="3"
          title="Elegant Embossing"
          subtitle="Elevate your birthday cards with the timeless elegance of embossing. Start by stamping your chosen design or sentiment onto cardstock using embossing ink. Sprinkle embossing powder generously over the stamped image, ensuring full coverage. Tap off any excess powder and use a heat gun to melt the powder until it becomes raised and glossy. The result is a beautifully embossed motif that adds texture and dimension to your card. Experiment with metallic or translucent embossing powders for different effects."
        />
      </div>
      <div className="py-10 my-20 px-2 md:px-10 xl:px-20 flex flex-col md:flex-row gap-10 bg-white justify-center items-center w-full lg:max-w-[1477px] relative">
        <p className="text-[36px] md:[60px] lg:text-[75px] font-bold leading-none w-full text-start md:text-end">Watercolor Wonders</p>
        <p className="text-[24px] font-light leading-none">Nature-Inspired Beauties: Bring the beauty of the outdoors to your birthday cards with nature-inspired designs. Incorporate elements like pressed flowers, leaves, or feathers to add a touch of natural charm. Begin by pressing fresh flowers or foliage between the pages of a heavy book until they are flat and dry. Arrange the pressed botanicals on your card base, securing them with adhesive or clear glue. Pair these organic elements with hand-drawn illustrations of birds, butterflies, or landscapes to create a serene and enchanting scene.</p>
        <img loading="lazy" src="./blogSinglePage/blogDetail.png" alt="detail" className="w-[96px] h-[96px] absolute right-0 bottom-0 -mb-6"/>
      </div>
      <p className="text-[40px] font-bold mt-28 max-w-[1456px]">Conclusion</p>
      <p className="text-[24px] font-light leading-tight mt-5 mb-40 max-w-[1456px]">Designing your own birthday cards allows you to infuse each creation with love, care, and personal flair. Whether you prefer watercolor painting, pop-up surprises, quirky collages, elegant embossing, or nature-inspired designs, the possibilities are endless. Let your creativity soar as you craft one-of-a-kind birthday cards that are sure to bring joy and smiles to your loved ones on their special day.</p>
      <div className="flex flex-col flex-wrap gap-7 lg:justify-start  lg:mt-32">
        <div className="flex flex-col gap-3">
        <p className="text-[48px] font-bold text-[#505153]">Related Articles</p>
        <p className="text-[24px] font-light mr-20 text-[#505153] w-[75%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been. It has survived not only five centuries.</p>
        </div>
        <div className="flex flex-row flex-wrap gap-7">
        {blogCardItems.slice(6).map((i) => (
          <div
            key={i.id}
            className="w-full md:w-[350px] bg-white pb-10 md:pb-12 h-auto md:h-[500px] flex-none"
          >
            <img
              loading="lazy"
              src={i.img}
              alt={i}
              className="w-full object-cover h-[200px] md:h-[242px]"
            />
            <p className="text-[36px] px-3 my-4">{i.desc}</p>
            <a
              href={i.link}
              className="underline text-[26px] px-3 underline-offset-4 decoration-[#5E5E5E]"
            >
              Read More
            </a>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSinglePage;
