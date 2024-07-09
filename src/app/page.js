"use client"
import Footer from "./components/Footer";
import Header from "./components/Header";
import StickButton from "./components/StickButton";
import Section1 from "./components/Section1";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section2 from "./components/Section2";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div>
          {/* Section 1 */}
          <Section1 />

          {/* Section 2 */}
          <Section2 />

          {/* Section 3 */}
          <Section3 />
          {/* Section 4 */}
          <Section4 />
        </div>
        <StickButton />
      </main>
      <Footer />
    </div>
  );
}
