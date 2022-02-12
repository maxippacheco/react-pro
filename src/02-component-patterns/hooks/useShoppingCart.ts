import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';
import { products } from '../data/products';

export const useShoppingCart = () => {

	  // esto dice q viene una x cantidad de keys = [key: string]
  const [ shoppingCart, setShoppingCart ] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
    // mala practica => mutar state => usar setState
    setShoppingCart( oldShoppingCart => {

      const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };
      
      if ( Math.max( productInCart.count + count, 0 ) > 0 ) {
        productInCart.count += count;

        return{
          ...oldShoppingCart,
          [product.id]: productInCart
        }
      }

      // Borrar el producto

      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      
      return { ...rest };

      // if ( count === 0 ) { 

      //   // desestructurar propiedades computadas
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      
      //   return rest;
      // }

      // return {
      //   ...oldShoppingCart,
      //   [ product.id ]: { ...product, count}
      // };
    });
  }

  
  return{
    products,  
    shoppingCart,
    onProductCountChange
  }

}
