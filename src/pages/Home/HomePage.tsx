import HeroSection from "components/HeroSection/HeroSection";
import StatsGridSection from "components/StatsGridSection/StatsGridSection";

const HomePage = () => {
  return (
    <main className="container m-auto flex flex-col gap-6 px-4 pb-6 tablet:px-8 tablet:pb-8 desktop:px-16">
      <HeroSection />
      <StatsGridSection />
    </main>
  );
};

export default HomePage;
