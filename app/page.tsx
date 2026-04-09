import { HomeHero } from "@/components/sections/HomeHero";
import { HomeSectionGrid } from "@/components/sections/HomeSectionGrid";
import { HomeWhyUs } from "@/components/sections/HomeWhyUs";
import { HomeStayTeaser } from "@/components/sections/HomeStayTeaser";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeSectionGrid />
      <HomeStayTeaser />
      <HomeWhyUs />
    </>
  );
}
