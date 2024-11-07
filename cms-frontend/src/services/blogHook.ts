import type { BlogPost } from '@/interface/blog';
import axios from 'axios';

export async function fetchBlogPosts(): Promise<BlogPost[]> {
    try {
        const response = await axios.get('http://localhost:1337/api/blogs');
        return response.data.data.map((post: { id: number; title: string; excerpt: string; date: string }) => ({
            id: post.id,
            title: post.title,
            excerpt: post.excerpt,
            date: post.date,
        }));
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}