"use client";
import { contactUsSubmit } from "@/actions/contactUs";
import ContactUsIcon from "@/assets/images/contact-us.png";
import { FormErrors, FormState } from "@/interfaces/contact-us";
import contactFormValidate from "@/utils/contactFormSchema";
import Image from "next/image";
import { useActionState, useState } from "react";

const ContactUs = () => {
  const initialState: FormState = {
    success: false,
  };
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formState, formAction, pending] = useActionState(
    async (state: FormState, payload: FormData) => {
      const result = contactFormValidate(payload);
      if (!result.success) {
        setFormErrors(result.error.formErrors.fieldErrors);
        return { success: false, payload };
      } else {
        await contactUsSubmit(state, payload);
        return { success: true };
      }
    },
    initialState
  );

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
                defaultValue={
                  (formState.payload?.get("fullName") as string) ?? ""
                }
                placeholder="Name"
                className="text-xs font-light border border-solid border-[#ACACACFF] outline-none rounded-[5px] py-2 pl-5 pr-[15px]"
              />
              {!formState.success && formErrors.fullName && (
                <div className="text-[#CB3837]">{formErrors.fullName[0]}</div>
              )}
            </div>
            <div className="flex flex-col mb-4 text-[#2C3345FF] gap-2">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={(formState.payload?.get("email") as string) ?? ""}
                placeholder="Email"
                className="text-xs font-light border border-solid border-[#ACACACFF] outline-none rounded-[5px] py-2 pl-5 pr-[15px]"
              />
              {!formState.success && formErrors.email && (
                <div className="text-[#CB3837]">{formErrors.email[0]}</div>
              )}
            </div>
            <div className="flex flex-col mb-4 text-[#2C3345FF] gap-2">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                defaultValue={(formState.payload?.get("phone") as string) ?? ""}
                placeholder="Phone"
                className="text-xs font-light border border-solid border-[#ACACACFF] outline-none rounded-[5px] py-2 pl-5 pr-[15px]"
              />
              {!formState.success && formErrors.phone && (
                <div className="text-[#CB3837]">{formErrors.phone[0]}</div>
              )}
            </div>
            <div className="flex flex-col mb-8 text-[#2C3345FF] gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                defaultValue={
                  (formState.payload?.get("message") as string) ?? ""
                }
                rows={4}
                className="text-xs font-light border border-solid border-[#ACACACFF] outline-none rounded-[5px] py-2 pl-5 pr-[15px] resize-none"
              />
              {!formState.success && formErrors.message && (
                <div className="text-[#CB3837]">{formErrors.message[0]}</div>
              )}
            </div>
            <button
              className="bg-[#0A7EE1FF] border-none rounded-[30px] py-[9px] w-full text-white"
              type="submit"
              disabled={pending}
            >
              {pending ? "Submitting..." : "Submit"}
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
