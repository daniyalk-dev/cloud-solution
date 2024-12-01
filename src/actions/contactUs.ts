"use server";
import { z } from 'zod';

interface FormState {
    success: boolean;
    errors?: any;
    payload?: any;
}

const contactFormSchema = z.object({
    fullName: z.string().trim().min(1, "Full name is required"),
    email: z.string().trim().min(1, "Email is required").email("Invalid email"),
    phone: z.string().trim().optional(),
    message: z.string().trim().min(10, "Message must be at least 10 characters long")
        .max(500, "Message must not exceed 500 characters"),
});

export const contactUsSubmit = async (prevState: FormState, formData: FormData): Promise<FormState> => {
    const result = contactFormSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!result.success) {
        return { success: false, errors: result.error.formErrors.fieldErrors, payload: formData };
    }
    return { success: true };
};