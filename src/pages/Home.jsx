import Header from '../components/Header.jsx'
import HeroBanner from '../components/HeroBanner.jsx'
import ProductList from '../components/ProductList.jsx'
import UsageGuide from '../components/UsageGuide.jsx'
import Faq from '../components/Faq.jsx'

function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <ProductList />
      <UsageGuide />
      <Faq />
    </>
  )
}

export default Home
