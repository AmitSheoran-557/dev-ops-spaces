import CalculateProfitLoss from "@/components/CalculateProfitLoss";
import Hero from "@/components/Hero";
import ValidTriangle from "@/components/ValidTriangle";
async function getData() {
  try {
    const response = await fetch("http://universities.hipolabs.com/search?name=middle");
    const data = await response.json();
    console.log("Data fetched successfully:", data);
    return data;

  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getData();

  return (
    <>
      <Hero data={products} />
      <ValidTriangle />
      <CalculateProfitLoss />
    </>
  );
}
