import { Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import { AuthContextProvider } from "./context/authContext";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="create" element={<Create />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
