import Pokedex from "./Components/Pokedex";
import { QueryClient, QueryClientProvider,  } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
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
      <ReactQueryDevtools initialIsOpen={true}/>
    </QueryClientProvider>
  );
}

export default App;
