import { useContext } from 'react';
import { ProductsFetch } from '@/lib/ProductsFetch';
import { useQuery } from 'react-query';
import ProductsCard from '../components/ProductsCard';
import { CartContext } from '../context/ShopContext';

const Cart = () => {
  const { data } = useQuery("data", ProductsFetch);

  const { cartItems, getTotalAmount } = useContext(CartContext);
  const totalAmount = getTotalAmount();
  return (
    <div className=" bg-black text-white h-900px bg-screen">
      <div className=" text-5xl text-center py-10">Your cart items</div>
      <div className="flex h-auto w-screen flex-wrap justify-center items-center py-10">
        {data.map((product)=> {
          if (cartItems[product.id] !== 0) {
            return (
              <ProductsCard
                key={product.id}
                name={product.title}
                category={product.category}
                price={product.price}
                img={product.image}
                id={product.id}
              />
            );
          }
          else{
            return <div></div>
          }
        })}
      </div>
      <div className="text-center text-3xl bg-black text-white rounded-md">
        Total amount:{totalAmount}
      </div>
    </div>
  );
};

export default Cart;
