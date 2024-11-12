import type { BlogEmail } from "@/interface/email";
import axios from "axios";

export async function postEmail(email: BlogEmail): Promise<BlogEmail | null> {
    try {
        const response = await axios.post('http://localhost:1337/api/emails', {
            data: email,
        });
        return response.data;
    } catch (error) {
        console.error("Error posting email:", error);
        return null;
    }
}

export async function getAllEmails(): Promise<BlogEmail[] | null> {
    try {
        const response = await axios.get('http://localhost:1337/api/emails');
        return response.data.data;
    } catch (error) {
        console.error("Error getting all emails:", error);
        return null;
    }
}
