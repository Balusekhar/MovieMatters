import DetailPage from "./components/DetailPage";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className="w-full min-h-screen bg-black pb-12 overflow-hidden">
      <Header />
      {/* <Section title="Trending" />
      <Section title="Popular" />
      <Section title="Popular" /> */}
      <DetailPage />
    </div>
  );
}

export default App;
