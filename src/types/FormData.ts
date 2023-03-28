export interface FormData {
    id: number;
    name: string;
    priority: string;
    due_date: string;
    description: string;
}

export type FormSubmitHandler = (data: FormData) => void