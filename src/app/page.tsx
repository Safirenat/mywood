import Container from "../components/ui/Container/Container";
import HeroSlider from "../components/sections/HeroSlider/HeroSlider";
import CategoryCircles from "../components/sections/CategoryCircles/CategoryCircles";
import ProductSection from "../components/sections/ProductSection/ProductSection";


export default function HomePage() {
  return (
    <>
      {/* <Container> */}
        <HeroSlider />
        <CategoryCircles />
        <ProductSection title="хиты продаж" mode="hits" />
        <ProductSection title="новинки" mode="new" />
      {/* </Container> */}
    </>
  );
}
