import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/covid/About";
import Indonesia from "./pages/covid/Indonesia";
import Provinsi from "./pages/covid/Provinsi";
import Layout from "./Layout/Layout";

// ThemeProvider
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/covid/indonesia" element={<Indonesia />} />
            <Route path="/covid/provinsi" element={<Provinsi />} />
            <Route path="/covid/about" element={<About />} />
            <Route path="*" element={<h2>not found 404</h2>} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
