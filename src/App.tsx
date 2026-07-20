import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Pages/Home";
import Cv from "./Pages/Cv";
import Layout from "./components/Layout";
import './App.scss'

function App() {
  return (
    <>
     
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cv/" element={<Cv />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
