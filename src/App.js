import Pokedex from "./Components/Pokedex";
import { QueryClient, QueryClientProvider } from 'react-query'
import './Styles/App.css'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{textAlign: 'center'}}>
        <h1 style={{color: 'white', fontSize: '48px'}}>Silvermon</h1>
        <h4 style={{color: 'white', fontSize: '24px'}}>Gotta cache em all!</h4>
        <Pokedex />
      </div>
    </QueryClientProvider>
  );
}

export default App;
