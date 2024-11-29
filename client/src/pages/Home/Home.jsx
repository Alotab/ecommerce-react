

import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import FeatureProducts from '../../components/FeaturedProjects/FeatureProducts'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeatureProducts type={Featured}/>
      <Categories />
      <FeatureProducts type={Trending}/>
      <Contact />
    </div>
  )
}

export default Home