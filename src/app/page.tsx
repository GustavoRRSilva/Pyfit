import Banner from "@/Components/Banner";
import "./page.module.scss";
import Plans from "@/Components/Plans";
export default function Home() {
  return <div className="Home">
    <Banner/>
    <Plans/>
  </div>;
}
