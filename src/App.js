import Pokedex from "./Components/Pokedex";
import { QueryClient, QueryClientProvider } from 'react-query'
import './Styles/App.css'
import logo from '../src/Images/Silverchip.png'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{textAlign: 'center'}}>
      <img src={logo} height="150px"/>
        <Pokedex />
      </div>
    </QueryClientProvider>
  );
}

export default App;
