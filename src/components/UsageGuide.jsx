import '../styles/UsageGuide.css'

const STEPS = [
  { title: '상품 고르기', desc: '상품 목록에서 마음에 드는 상품을 골라 보세요.' },
  { title: '주문하기', desc: '수량과 배송지를 입력하고 주문을 완료하세요.' },
  { title: '배송 받기', desc: '판매자가 상품을 보내면 배송 상태를 확인할 수 있어요.' },
]

function UsageGuide() {
  return (
    <section className="usage-guide">
      <h2 className="usage-guide__title">이용 안내</h2>
      <ol className="usage-guide__steps">
        {STEPS.map((step, index) => (
          <li key={step.title} className="usage-guide__step">
            <span className="usage-guide__number">{index + 1}</span>
            <h3 className="usage-guide__step-title">{step.title}</h3>
            <p className="usage-guide__step-desc">{step.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default UsageGuide
