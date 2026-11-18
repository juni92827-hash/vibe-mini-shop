import '../styles/HeroBanner.css'

// 상품 목록 영역에 붙일 id. 다음에 만드는 상품 목록에 id="product-list" 를 달면 된다.
export const PRODUCT_LIST_ID = 'product-list'

function HeroBanner() {
  // HashRouter 는 주소의 # 을 화면 이동에 쓰므로 href="#..." 대신 스크롤 함수로 이동한다.
  const scrollToProducts = () => {
    const target = document.getElementById(PRODUCT_LIST_ID)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="hero">
      <div className="hero__inner">
        <h2 className="hero__title">이번 주 새로 들어 온 새상품</h2>
        <p className="hero__desc">판매자가 직접 고른 신상품을 가장 먼저 만나 보세요.</p>
        <button type="button" className="hero__button" onClick={scrollToProducts}>
          상품 보러 가기
        </button>
      </div>
    </section>
  )
}

export default HeroBanner
