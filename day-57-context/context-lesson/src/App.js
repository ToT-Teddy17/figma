import "./App.css";
import UserInfo from "./components/UserInfo";
import Layout from "./components/Layout";
import { UserProvider } from "./context/UserContext";
import Section from "./components/Section";
import Heading from "./components/Heading";

function App() {
  const userName = "Teddy";
  return (
    <div className="App">
      <h1>DAY57-REACT CONTEXT</h1>
      <Section level={1}>
        <Heading>Title</Heading>
        <Section level={2}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={3}>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Section level={4}>
              <Heading>Heading</Heading>
              <Heading>Heading</Heading>
              <Heading>Heading</Heading>
              <Section level={5}>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Section level={6}>
                  <Heading>Heading</Heading>
                  <Heading>Heading</Heading>
                  <Heading>Heading</Heading>
                </Section>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  );
}

export default App;
