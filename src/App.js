import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import CreateMovie from "./pages/movie/CreateMovie";
import Populer from "./pages/movie/Populer";
import NowPlaying from "./pages/movie/NowPlaying";
import TopRated from "./pages/movie/TopRated";
import Layout from "./Layout/Layout";
import Detail from "./pages/movie/Detail";

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
            <Route path="/movie/:id" element={<Detail />}></Route>
            <Route path="*" element={<h2>404</h2>}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
