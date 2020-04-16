import React from 'react';
import Header from './components/Header';
import './styles.css';
import Routes from './routes';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

// function App() {
//   return (
//     <div className="App">
//       <Header />
//     </div>
//   );
// }

export default App;
