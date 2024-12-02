"use server";
import { FormState } from '@/interfaces/contact-us';
import contactFormValidate from '@/utils/contactFormSchema';

export const contactUsSubmit = async (prevState: FormState, formData: FormData) => {
    const result = contactFormValidate(formData);
    if (!result.success) console.log("form submission failed!");
    else console.log("form submission successful!");
};