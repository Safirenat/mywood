// import Container from "../components/ui/Container/Container";
import HeroSlider from "../components/sections/HeroSlider/HeroSlider";
import CategoryCircles from "../components/sections/CategoryCircles/CategoryCircles";
import ProductSection from "../components/sections/ProductSection/ProductSection";
import PatternedSolutions from "../components/sections/PatternedSolutions/PatternedSolutions";
import GlassDoors from "../components/sections/GlassDoors/GlassDoors";


export default function HomePage() {
  return (
    <>
      {/* <Container> */}
        <HeroSlider />
        <CategoryCircles />
        <ProductSection title="хиты продаж" mode="hits" />
        <GlassDoors />
        <ProductSection title="новинки" mode="new" />
        <PatternedSolutions />
      {/* </Container> */}
    </>
  );
}
