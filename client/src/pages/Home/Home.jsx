

import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import FeatureProducts from '../../components/FeaturedProjects/FeatureProducts'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"

const Home = ({ type }) => {
  return (
    <div className='home'>
      <Slider />
      <FeatureProducts />
      <Categories />
      <FeatureProducts />
      <Contact />
    </div>
  )
}

export default Home