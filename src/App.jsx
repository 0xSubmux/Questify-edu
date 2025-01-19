import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import "./App.css";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
import Navbar from "./components/Navbar/Navbar";

import { createAppKit } from '@reown/appkit/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { metadata, networks, projectId, wagmiAdapter } from './config';


const queryClient = new QueryClient()

const generalConfig = {
  projectId,
  metadata,
  networks
}

// Create modal
createAppKit({
  adapters: [wagmiAdapter],
  ...generalConfig,
})


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Toaster />
            <Navbar />
            <AllRoutes />
          </Router>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}

export default App;
