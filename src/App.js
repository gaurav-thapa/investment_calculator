import { useState } from 'react';
import './App.css';
import InvestmentForm from './components/Form/InvestmentForm';
import Result from './components/Result/Result';

function App() {
  const [data, setData] = useState('');

  const programLogic = (ED) => {
    const arrOfObj = [];

    let principle = ED.principle;
    let rate = ED.rate;
    let time = ED.time;
    let yearlySavings = ED.yearlySavings;

    let t_interest = 0;
    let inv_capital = principle + yearlySavings;

    for (let i = 0; i < time; i++) {
      let id = Math.random();
      let year = i + 1;
      let interest = principle * rate / 100;
      let amount = principle + interest;
      t_interest += interest;
      let t_savings = amount + yearlySavings;
      const data = {
        id: id,
        year: year,
        t_savings: t_savings,
        interest: interest,
        t_interest: t_interest,
        inv_capital: inv_capital
      }
      principle = t_savings;
      inv_capital += yearlySavings;
      arrOfObj.push(data);
    }
    return arrOfObj;
  };
  const onSaveData = (ED) => {
    const arrOfObj = programLogic(ED);
    // console.log(arrOfObj);
    setData(arrOfObj);
  };
  const onReset = () => {
    setData('');
  }
  return (
    <div className="App">
      <div className='container'>
        <h1>Investment Calculator</h1>
        <InvestmentForm saveData={onSaveData} reset={onReset} />
        {data ? <Result data={data} /> : ''}

      </div>
    </div>
  );
}

export default App;
