import './App.css';
import Addnew from './Components/AddNewTransaction/addnew';
import BalanceComponent from './Components/balancepart/balance';
import History from './Components/History/history';
import MainHeading from './Components/navbar';

function App() {
  return (
    <div className="container">
     <MainHeading/>
     <BalanceComponent/>
     <History/>
     <Addnew/>
    </div>
  );
}

export default App;
