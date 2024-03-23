import Banner from "@/Components/Home/Banner";
import Features from "@/Components/Home/Features";
import FeaturesCard from "@/Components/Shared/FeaturesCard";
import Report from "@/Components/Home/Report";


export default function Home() {
  
  // card imtem here 
  const items = [
    {
        title: "Affordable Auto Insurance",
        description: "USA Underwriters offers affordable rates on quality coverage."
    },
    {
        title: "Accidents Can Add Up",
        description: "Accidents and infractions can linger long after the fines are paid and the car is repaired."
    },
    {
        title: "Price Conscious",
        description: "Price conscious consumers choose USA Underwriters for affordable auto insurance solutions."
    }
];

  return (
    <main className="max-w-screen-xl mx-auto px-6 ">
      {/*  banner section here  */}
          <Banner/>
          {/* Features section */}

          <Features/>
          <FeaturesCard items={items} />
          {/* Report section  */}
          <Report/>
    </main>
  );
}
