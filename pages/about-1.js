import BreadCrumbOne from '../components/breadcrumb/breadcrumb-1';
import Seo from './seo/seo';
import HeaderOne from '../components/header/header-1';
import FooterOne from '../components/footer/footer-1';
import About from '../components/about/about';
import SkillTwo from '../components/skill/skill-2';
import FeaturesOne from '../components/features/features-1';
import MapOne from '../components/map/map-1';

const AboutOne = () => {
  return (
    <>
        <HeaderOne/>
        <Seo title={"About"} />
        <BreadCrumbOne title={"About"}/>
        <main>
          <About/>
          <SkillTwo/>
          <FeaturesOne/>
          <MapOne/>
        </main>
        <FooterOne/>
    </>
  )
}

export default AboutOne