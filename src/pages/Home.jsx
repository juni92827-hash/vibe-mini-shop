import Header from '../components/Header.jsx'
import HeroBanner from '../components/HeroBanner.jsx'
import ProductList from '../components/ProductList.jsx'
import UsageGuide from '../components/UsageGuide.jsx'
import '../styles/Home.css'

function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <ProductList />
      <UsageGuide />
      <main className="home">
        <h1>미니 쇼핑몰 준비 중</h1>
      </main>
    </>
  )
}

export default Home
