import { FaPlus } from "react-icons/fa";
import { CartItem } from "../types/types";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: ()=>void;
};


const ProductCard = ({
  productId,
  price,
  name,
  photo,
  stock,
  handler
}: ProductsProps) => {
  return (
    <div className="product-card">
      <img src={photo} alt={name} />
      <p>{name}</p>
      <span>${price}</span>

      <div>
        <button>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;