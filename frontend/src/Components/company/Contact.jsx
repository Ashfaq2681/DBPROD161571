const Contact = () => {
  return (
    <section className="bg-[#F9FAFB] h-lvh flex flex-row justify-center pt-20 mt-5 lg:mt-0">
      <div className="flex flex-col justify-center items-center text-center rounded-xl md:rounded-r-none border border-[#c7c7c7] md:border-r-0 p-12 m-4 md:m-0 md:mr-0 shadow-2xl bg-white text-[#727272] h-[624px] lg:h-[664px] max-w-[400px] lg:max-w-[800px]">
        <form className="my-6 space-y-3 py-10 max-w-[600px]" action="POST">
          <p className="text-[36px] font-bold text-[#727272]] text-start">Contact Us</p>
          <div className="flex flex-row gap-5 lg:gap-10 w-full my-3">
            <input
              type="text"
              className="inputContact"
              placeholder="First Name"
            />
            <input
              type="text"
              className="inputContact"
              placeholder="Last Name"
            />
          </div>
          <input
            type="email"
            className="inputContact my-3 w-full"
            placeholder="Email"
          />
          <input
            type="number"
            className="inputContact my-3 w-full"
            placeholder="Phone"
          />
          <textarea
            name="contactMessage"
            id="contactMessage"
            className="inputContact my-3 w-full"
            placeholder="Type Your Message Here"
            rows={10}
          />
          <button className="nav-btn bg-[#3b82f6] text-white border border-[#3b82f6] float-end">
            Submit
          </button>
        </form>
      </div>
      <img
        loading="lazy"
        src="./coupons/c3.png"
        alt="login-image"
        className="hidden rounded-r-[16px] md:inline-block md:h-[625px] lg:h-[664px] md:w-[450px] lg:w-[600px] xl:w-[676px] object-cover"
      />
    </section>
  );
};

export default Contact;
