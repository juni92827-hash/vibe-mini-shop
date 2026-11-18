import '../styles/Header.css'

const menus = ['상품목록', '주문하기', '관리자']

function Header() {
  return (
    <header className="header">
      <div className="header__logo">미니 쇼핑몰</div>
      <nav className="header__nav">
        {menus.map((menu) => (
          // 아직 화면이 없어서 눌러도 이동하지 않는 버튼으로 둔다.
          <button key={menu} type="button" className="header__menu">
            {menu}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header
