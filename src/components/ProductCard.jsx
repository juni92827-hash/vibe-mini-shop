function ProductCard({ name, price }) {
  return (
    <article className="product-card">
      {/* 실제 사진 대신 회색 빈 상자 */}
      <div className="product-card__image" aria-hidden="true"></div>
      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__price">{price.toLocaleString('ko-KR')}원</p>
      </div>
    </article>
  )
}

export default ProductCard
