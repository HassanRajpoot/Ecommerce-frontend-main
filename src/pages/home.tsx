import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";
function Home() {
  const addToCartHandler = ()=>{}
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          key={1}
          productId="1232"
          name={"macbook"}
          price={45}
          stock={455}
          handler={addToCartHandler}
          photo={"https://m.media-amazon.com/images/I/71fMZDz2sEL._AC_UY218_.jpg"}
        />
      </main>
    </div>
  )
}

export default Home