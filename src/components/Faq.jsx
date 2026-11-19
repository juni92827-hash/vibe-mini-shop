import '../styles/Faq.css'

// 연락처는 Footer.jsx 와 같은 가상 값이다. 바꿀 때는 두 곳을 함께 고친다.
const PHONE = '010-0000-0000'
const EMAIL = 'shop@example.com'

const FAQS = [
  {
    question: '배송은 얼마나 걸리나요?',
    answer: '주문 후 보통 2~3일 안에 받아 보실 수 있어요. 주말과 공휴일은 배송 기간에서 빠져요.',
  },
  {
    question: '교환·환불이 되나요?',
    answer: '상품을 받은 날부터 7일 안에 신청하시면 교환이나 환불을 도와드려요. 사용한 상품은 어려울 수 있어요.',
  },
  {
    question: '문의는 어디로 하나요?',
    answer: `전화 ${PHONE} 또는 이메일 ${EMAIL} 로 문의해 주세요. 평일 오전 10시부터 오후 6시까지 답변드려요.`,
  },
]

function Faq() {
  return (
    <section className="faq">
      <h2 className="faq__title">자주 묻는 질문</h2>
      <div className="faq__list">
        {FAQS.map((item) => (
          // details/summary: 질문을 누르면 답변이 펼쳐지고 접힌다.
          <details key={item.question} className="faq__item">
            <summary className="faq__question">{item.question}</summary>
            <p className="faq__answer">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default Faq
