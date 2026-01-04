import { client } from "./sanity-client"

export interface Product {
  _id: string
  title: string
  slug: {
    current: string
  }
  category: string[]
  content?: string
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
  }
  price?: number
  featured?: boolean
  imageUrl?: string
}

export interface Settings {
  _id: string
  title: string
  description?: string
  logo?: any
}

export async function getAllProducts(): Promise<Product[]> {
  try {
    const products = await client.fetch(
      `*[_type == "post"] | order(_createdAt desc) {
        _id,
        title,
        slug,
        category,
        content,
        "imageUrl": image,
        price,
        featured
      }`,
    )
    console.log("[v0] Fetched products from CMS:", products?.length || 0)
    return products || []
  } catch (error) {
    console.error("[v0] Error fetching products:", error)
    return []
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const product = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        category,
        content,
        "imageUrl": image,
        price,
        featured
      }`,
      { slug },
    )
    return product || null
  } catch (error) {
    console.error("[v0] Error fetching product by slug:", error)
    return null
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const products = await client.fetch(
      `*[_type == "post"] | order(_createdAt desc) [0...26] {
        _id,
        title,
        slug,
        category,
        content,
        "imageUrl": image,
        price,
        featured
      }`,
    )
    return products || []
  } catch (error) {
    console.error("[v0] Error fetching posts:", error)
    return []
  }
}

export async function getSettings(): Promise<Settings | null> {
  try {
    return await client.fetch(`*[_type == "settings"][0]`)
  } catch (error) {
    console.error("[v0] Error fetching settings:", error)
    return null
  }
}
