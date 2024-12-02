export interface FormState {
    success: boolean;
    payload?: FormData;
}

export interface FormErrors {
    [key: string]: string[];
}
