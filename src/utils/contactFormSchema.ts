import { z } from 'zod';

const contactFormSchema = z.object({
    fullName: z.string().trim().min(1, "Full name is required"),
    email: z.string().trim().min(1, "Email is required").email("Invalid email"),
    phone: z.string().trim().optional(),
    message: z.string().trim().min(10, "Message must be at least 10 characters long")
        .max(500, "Message must not exceed 500 characters"),
});

const contactFormValidate = (formData: FormData) => {
    return contactFormSchema.safeParse(Object.fromEntries(formData.entries()));
}

export default contactFormValidate;