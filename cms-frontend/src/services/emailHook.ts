import type { BlogEmail } from "@/interface/email";
import axios from "axios";

export async function postEmail(email: BlogEmail): Promise<BlogEmail | null> {
    try {
        const response = await axios.post('http://localhost:1337/api/email', {
            data: email,
        });
        return response.data;
    } catch (error) {
        console.error("Error posting email:", error);
        return null;
    }
}
