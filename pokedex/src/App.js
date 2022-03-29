import Layout from './components/Layout';
import AppRouter from './routes';
import CreateStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <BrowserRouter>
      <AppRouter />
      </BrowserRouter>
      <CreateStyle />
    </Layout>
  );
}

export default App;
