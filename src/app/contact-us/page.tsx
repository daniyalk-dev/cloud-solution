"use client";
import { contactUsSubmit } from "@/actions/contactUs";
import ContactUsIcon from "@/assets/images/contact-us.png";
import Image from "next/image";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const ContactUs = () => {
  const [formState, formAction] = useActionState(contactUsSubmit, {
    success: false,
    errors: null,
    payload: null,
  });

  const SubmitBtn = () => {
    const { pending } = useFormStatus();
    return (
      <button
        className="bg-[#0A7EE1FF] border-none rounded-[30px] py-[9px] w-full text-white"
        type="submit"
        disabled={pending}
      >
        {pending ? "Submitting..." : "Submit"}
      </button>
    );
  };

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
          <form className="pt-[30px]" action={formAction}>
            <div className="flex flex-col mb-4 text-[#2C3345FF] gap-2">
              <label htmlFor="fullName">Name *</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                defaultValue={formState.payload?.get("fullName") ?? ""}
                placeholder="Name"
                className="text-xs font-light border border-solid border-[#ACACACFF] outline-none rounded-[5px] py-2 pl-5 pr-[15px]"
              />
              {formState.errors && formState.errors.fullName && (
                <div className="text-[#CB3837]">
                  {formState.errors.fullName[0]}
                </div>
              )}
            </div>
            <div className="flex flex-col mb-4 text-[#2C3345FF] gap-2">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={formState.payload?.get("email") ?? ""}
                placeholder="Email"
                className="text-xs font-light border border-solid border-[#ACACACFF] outline-none rounded-[5px] py-2 pl-5 pr-[15px]"
              />
              {formState.errors && formState.errors.email && (
                <div className="text-[#CB3837]">
                  {formState.errors.email[0]}
                </div>
              )}
            </div>
            <div className="flex flex-col mb-4 text-[#2C3345FF] gap-2">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                defaultValue={formState.payload?.get("phone") ?? ""}
                placeholder="Phone"
                className="text-xs font-light border border-solid border-[#ACACACFF] outline-none rounded-[5px] py-2 pl-5 pr-[15px]"
              />
              {formState.errors && formState.errors.phone && (
                <div className="text-[#CB3837]">
                  {formState.errors.phone[0]}
                </div>
              )}
            </div>
            <div className="flex flex-col mb-8 text-[#2C3345FF] gap-2">
              <label htmlFor="full_name">Message</label>
              <textarea
                id="message"
                name="message"
                defaultValue={formState.payload?.get("message") ?? ""}
                rows={4}
                className="text-xs font-light border border-solid border-[#ACACACFF] outline-none rounded-[5px] py-2 pl-5 pr-[15px] resize-none"
              />
              {formState.errors && formState.errors.message && (
                <div className="text-[#CB3837]">
                  {formState.errors.message[0]}
                </div>
              )}
            </div>
            <SubmitBtn />
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
