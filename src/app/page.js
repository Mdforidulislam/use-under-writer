import Banner from "@/Components/Home/Banner";
import Features from "@/Components/Home/Features";
import FeaturesCard from "@/Components/Home/FeaturesCard";
import Report from "@/Components/Home/Report";


export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto px-6 ">
      {/*  banner section here  */}
          <Banner/>
          {/* Features section */}

          <Features/>
          <FeaturesCard/>

          {/* Report section  */}
          <Report/>
    </main>
  );
}
