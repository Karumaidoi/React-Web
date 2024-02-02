import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import PageNotFouund from "./pages/PageNotFouund";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />

            {/* Route incase incase the Page is Not Foud */}
            <Route path="*" element={<PageNotFouund />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
