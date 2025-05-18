import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import { ComplaintsLog } from "./pages/ComplaintsLog";
import { ComplaintLogDetails } from "./pages/ComplaintLogDetails";
import { ComplaintsResolve } from "./pages/ComplaintsResolve";
import { ComplaintResolveDetails } from "./pages/ComplaintResolveDetails";
import { Sidebar } from "./components/Sidebar";
import { ContextProvider } from "./context/context";
import { ComplaintFilterModal } from "./components/ComplaintFilterModal";

function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <ContextProvider>
        <Sidebar />
        <ComplaintFilterModal />
        <main className="flex-1 h-screen overflow-y-hidden bg-[#f8fbff]">
          <Routes>
            <Route path="/complaints-log" element={<ComplaintsLog />} />
            <Route path="/complaints-resolve" element={<ComplaintsResolve />} />
            <Route
              path="/complaint-details/:id"
              element={<ComplaintLogDetails />}
            />
            <Route
              path="/complaint-resolve-details/:id"
              element={<ComplaintResolveDetails />}
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </ContextProvider>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AppLayout />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
