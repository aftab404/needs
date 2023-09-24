export default async function getPosts(cat:string){
    const res = await fetch(`https://dummyjson.com/products/category/${cat}`)
    const posts = await res.json()
    return posts
}