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
          initialValues={{
            count: 4,
            maxCount: 10
          }}
        >
          {
            ({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
              <>
                <ProductImage />
                <ProductTitle  />
                <ProductButtons />
              </>
            )
          }
          
        </ProductCard>
      </div>
    </div>
  );
};
