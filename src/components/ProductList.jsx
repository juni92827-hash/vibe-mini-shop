import products from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import { PRODUCT_LIST_ID } from './HeroBanner.jsx'
import '../styles/ProductList.css'

function ProductList() {
  return (
    <section id={PRODUCT_LIST_ID} className="product-list">
      <h2 className="product-list__title">상품 목록</h2>
      <div className="product-list__grid">
        {products.map((product) => (
          <ProductCard key={product.id} name={product.name} price={product.price} />
        ))}
      </div>
    </section>
  )
}

export default ProductList
