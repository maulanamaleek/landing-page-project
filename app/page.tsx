import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PricingTable from "@/components/PricingTable";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <div className="mt-12 mx-10">
        <h1 className="text-center font-bold text-3xl md:text-5xl">Berrylabs Pricing</h1>
        <p className="text-center text-tertiary text-base md:text-2xl mt-6">Automate Without Breaking the Bank: Affordable Solutions for <br /> Every Business.</p>
      </div>

      <PricingTable />

      <div className="flex flex-col items-center mt-12 mb-20 mx-10">
          <h2 className="text-center text-2xl md:text-6xl font-bold">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Haven't found which package is <br /> right for you?
          </h2>

          <p className="text-center text-tertiary text-base md:text-2xl mt-8">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            We've got you covered! Talk to our experts to find the best solution for you, anytime for free!
          </p>

          <Button type="primary" className="mt-8">Talk to Expert</Button>
      </div>

      <Footer />      
    </main>
  );
}
