import Header from ".@/Components/Header";
import HomeScreen from ".@/Components/HomeScreen";

export default function Home() {
  return (
    <div className="w-full  backdrop-blur-sm md:backdrop-blur-lg relative  bg-black  h-screen">
      <Header />
      <HomeScreen />
    </div>
  );
}
