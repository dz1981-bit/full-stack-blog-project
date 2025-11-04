import slug from 'slug'
import dotenv from 'dotenv'

dotenv.config()
const baseURL = process.env.FRONTEND_URL
export async function generateSitemap() {
  const postsRequest = await fetch(`${process.env.VITE_BACKEND_URL}/posts`)
  const posts = await postsRequest.json()
  return `<?xml version="1.0" encoding ="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
            <loc>${baseURL}</loc>
            </url>
            <url>
            <loc>${baseURL}/signup</loc>
            </url>
            <url>
            <loc>${baseURL}/login</loc>
            </url>
            ${posts
              .map(
                (post) => `
                <url>
                <loc>${baseURL}/posts/${post._id}/${slug(post.title)}</loc>
                <lastmod>${post.updatedAt ?? post.createdAt}</lastmod>
                </url>`,
              )
              .join('')}
            </urlset>`
}
