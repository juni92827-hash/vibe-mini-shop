import '../styles/Footer.css'

// 공개 저장소이므로 연락처는 가상 데이터로 둔다. (프로젝트 규칙)
const SHOP = {
  name: '미니가구점',
  phone: '010-0000-0000',
  email: 'shop@example.com',
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__name">{SHOP.name}</p>
        <ul className="footer__contact">
          <li>
            연락처 <a href={`tel:${SHOP.phone}`}>{SHOP.phone}</a>
          </li>
          <li>
            이메일 <a href={`mailto:${SHOP.email}`}>{SHOP.email}</a>
          </li>
        </ul>
        <p className="footer__copyright">© 2026 {SHOP.name}</p>
      </div>
    </footer>
  )
}

export default Footer
