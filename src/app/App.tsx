import './App.css';
import {Stock} from 'feature/stock/Stock';
import {Header} from 'common/components/Header/Header';

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Stock/>
    </div>
  );
}
