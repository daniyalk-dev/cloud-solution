import ContactUsIcon from "@/assets/images/contact-us.png";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="container mx-auto px-4 sm:px-8 my-8 sm:my-16 md:my-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-2 sm:mb-6">
            Keep in touch
          </h2>
          <div className="text-textSecondary md:text-lg mb-4 sm:mb-12">
            {" We're just an email away for any concerns."}
          </div>
          <form className="pt-[30px]">
            <div className="flex flex-col mb-4 text-[#2C3345FF] gap-2">
              <label htmlFor="full_name">Name *</label>
              <input
                id="full_name"
                type="text"
                placeholder="Name"
                className="text-xs font-light border border-solid border-[#ACACACFF] outline-none rounded-[5px] py-2 pl-5 pr-[15px]"
              />
              <div className="text-[#CB3837] hidden">Name is required</div>
            </div>
            <div className="flex flex-col mb-4 text-[#2C3345FF] gap-2">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                type="text"
                placeholder="Email"
                className="text-xs font-light border border-solid border-[#ACACACFF] outline-none rounded-[5px] py-2 pl-5 pr-[15px]"
              />
              <div className="text-[#CB3837] hidden">Email is required</div>
            </div>
            <div className="flex flex-col mb-4 text-[#2C3345FF] gap-2">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="text"
                placeholder="Phone"
                className="text-xs font-light border border-solid border-[#ACACACFF] outline-none rounded-[5px] py-2 pl-5 pr-[15px]"
              />
              <div className="text-[#CB3837] hidden">Phone is required</div>
            </div>
            <div className="flex flex-col mb-8 text-[#2C3345FF] gap-2">
              <label htmlFor="full_name">Message</label>
              <textarea
                id="message"
                rows={4}
                className="text-xs font-light border border-solid border-[#ACACACFF] outline-none rounded-[5px] py-2 pl-5 pr-[15px] resize-none"
              />
              <div className="text-[#CB3837] hidden">Name is required</div>
            </div>
            <button className="bg-[#0A7EE1FF] border-none rounded-[30px] py-[9px] w-full text-white">
              Submit
            </button>
          </form>
        </div>
        <div className="flex justify-center items-start md:items-center">
          <Image src={ContactUsIcon} alt="Contact Us" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
