import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";

//  CONTROL PROPS => QUE LAS PROPS CONTROLEN EL ESTADO DE NUESTRO COMPONENTE

const product = products[0];

export const ShoppingPage = () => {
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
        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark text-white"
          initialValues={{
            count: 4,
            maxCount: 10
          }}
        >
          {
            ({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
              <>
                <ProductImage className="custom-image" />
                <ProductTitle className="text-bold" />
                <ProductButtons className="custom-buttons" />
                

                <button onClick={ reset }>reset</button>
                {
                  count !== 0 &&
                    <button onClick={ () => increaseBy(-2) }>-2</button>
                }
                
                {
                  ( !isMaxCountReached ) &&
                    <button onClick={ () => increaseBy(2) }>+2</button>
                }
                <span>{ count } - { maxCount } </span>
              </>
            )
          }
          
        </ProductCard>
      </div>
    </div>
  );
};
