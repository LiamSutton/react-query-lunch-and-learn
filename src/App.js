import Pokedex from "./Components/Pokedex";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Pokedex />
      </div>
    </QueryClientProvider>
  );
}

export default App;
