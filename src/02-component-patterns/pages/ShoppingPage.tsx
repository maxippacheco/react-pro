import { useState } from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { useShoppingCart } from '../hooks/useShoppingCart';

//  CONTROL PROPS => QUE LAS PROPS CONTROLEN EL ESTADO DE NUESTRO COMPONENTE


export const ShoppingPage = () => {

  const { products, shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark text-white"
              value={ shoppingCart[ product.id ]?.count || 0 }
              onChange={ onProductCountChange }
            >
              <ProductImage className="custom-image" />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }
      </div>

      <div className="shopping-cart">

        {

          // Object.entries( shoppingCart ).map( ([ key, product ]) => {}) es lo mismo
          Object.values( shoppingCart ).map( product => (
            ( product.count > 0 )
              &&
                <ProductCard
                  key={product.id}
                  product={product} 
                  className="bg-dark text-white"
                  style={{ width: '100px'}}
                  value={ product.count }
                  onChange={ onProductCountChange }

                >
                  <ProductImage className="custom-image" />
                  <ProductButtons 
                    className="custom-buttons" 
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  />
                </ProductCard>  
          ))
        }

        
      </div>

      <div>
        <code>
          { JSON.stringify(shoppingCart, null, 5 )}
        </code>
      </div>
    </div>
  );
};
