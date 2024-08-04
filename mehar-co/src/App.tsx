import "./App.css";
import Header from "./components/header";
import Hero from "./components/sections/hero";
import Asps from "./components/sections/asps";
import ThreeCol from "./components/sections/threecol";
import Why from "./components/sections/why";
import Clients from "./components/sections/clients";
import QnA from "./components/sections/qa";
// import Form from "./components/form";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="bg-background">
          <Hero></Hero>
          <Asps></Asps>
          <ThreeCol></ThreeCol>
        </div>
        <Why></Why>
        <Clients></Clients>
        <QnA></QnA>
        {/* <Form></Form> */}
      </main>
    </>
  );
}

export default App;
