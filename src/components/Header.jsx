import { useState } from 'react'
import '../styles/Header.css'

const menus = ['상품목록', '주문하기', '관리자']

function Header() {
  // 모바일 화면에서 햄버거 메뉴가 펼쳐져 있는지 기억한다.
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((open) => !open)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="header">
      <div className="header__logo">미니 쇼핑몰</div>

      {/* 모바일 화면에서만 보이는 햄버거 버튼 */}
      <button
        type="button"
        className={`header__toggle${isMenuOpen ? ' is-open' : ''}`}
        aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={isMenuOpen}
        aria-controls="header-nav"
        onClick={toggleMenu}
      >
        <span className="header__toggle-bar"></span>
        <span className="header__toggle-bar"></span>
        <span className="header__toggle-bar"></span>
      </button>

      <nav id="header-nav" className={`header__nav${isMenuOpen ? ' is-open' : ''}`}>
        {menus.map((menu) => (
          // 아직 화면이 없어서 이동하지 않는다. 모바일에서는 누르면 메뉴만 닫힌다.
          <button key={menu} type="button" className="header__menu" onClick={closeMenu}>
            {menu}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header
