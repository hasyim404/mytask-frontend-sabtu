import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/CreateMovie";
import Populer from "./pages/movie/Populer";
import NowPlaying from "./pages/movie/NowPlaying";
import TopRated from "./pages/movie/TopRated";
import Layout from "./Layout/Layout";

// ThemeProvider
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/create" element={<CreateMovie />}></Route>
            <Route path="/movie/populer" element={<Populer />}></Route>
            <Route path="/movie/now-playing" element={<NowPlaying />}></Route>
            <Route path="/movie/top-rated" element={<TopRated />}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
