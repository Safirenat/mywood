import Container from "../components/ui/Container/Container";
import HeroSlider from "../components/sections/HeroSlider/HeroSlider";
import CategoryCircles from "../components/sections/CategoryCircles/CategoryCircles";

export default function HomePage() {
  return (
    <>
      {/* <Container> */}
        <HeroSlider />
        <CategoryCircles />
      {/* </Container> */}
    </>
  );
}
