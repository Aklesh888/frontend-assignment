export async function singleProductFetch(id: number){
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json();
}