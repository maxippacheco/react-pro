import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';
import { products } from '../data/products';

export const useShoppingCart = () => {

	  // esto dice q viene una x cantidad de keys = [key: string]
  const [ shoppingCart, setShoppingCart ] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
    // mala practica => mutar state => usar setState
    setShoppingCart( oldShoppingCart => {

      if ( count === 0 ) { 

        // desestructurar propiedades computadas
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      
        return rest;
      }

      return {
        ...oldShoppingCart,
        [ product.id ]: { ...product, count}
      };
    });
  }

  
  return{
    products,  
    shoppingCart,
    onProductCountChange
  }

}
