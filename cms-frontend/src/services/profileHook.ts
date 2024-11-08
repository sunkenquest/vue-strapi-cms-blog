import type { BlogProfile } from '@/interface/profile';
import axios from 'axios';

export async function fetchProfile(): Promise<BlogProfile | null> {
    try {
        const response = await axios.get('http://localhost:1337/api/profiles');
        const profileData = response.data.data[0];
        return {
            title: profileData.title,
            bio: profileData.bio,
        };
    } catch (error) {
        console.error("Error fetching profile:", error);
        return null;
    }
}
