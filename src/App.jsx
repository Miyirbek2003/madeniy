import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Museum from "./pages/Museum/Museum";
import News from "./pages/News/News";
import Organization from "./pages/Organization/Organization";
import { Helmet } from "react-helmet";
export default function App() {
  return (
    <>
      <Helmet>
        <title>Madeniy miyras agentligi</title>
        <meta
          name="description"
          content="Qaraqalpastan madeniy miyras agentligi, Qaraqalpaqstandagi tarixiy ham madeniy orinlari haqqinda magliwmatlar"
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/museum/:id" element={<Museum />} />
          <Route path="/news/:id" element={<News />} />
        </Route>
      </Routes>
    </>
  );
}
