import { GlobalProvider } from './GlobalProvider';
import { Router } from './router';

const App = () => (
  <GlobalProvider>
    <Router />
  </GlobalProvider>
);

export default App;
