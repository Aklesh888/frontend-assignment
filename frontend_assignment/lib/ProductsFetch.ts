export async function ProductsFetch(){
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
}