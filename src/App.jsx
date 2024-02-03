import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import PageNotFouund from "./pages/PageNotFouund";

// Setting up Query Client to be used by the provider
const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate to="home" />} />
              <Route path="home" element={<Home />} />

              {/* Route incase incase the Page is Not Foud */}
              <Route path="*" element={<PageNotFouund />} />
            </Route>
          </Routes>

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 3000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "#323232",
                color: "#fff",
              },
            }}
          />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
