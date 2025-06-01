import { Children, use, useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState('')
  const [percentage1, setPercentage1] = useState(0)
  const [percentage2, setPercentage2] = useState(0)

  const tip = (bill * (percentage1 + percentage2) / 2 )/ 100

  function handleReset() {
    setBill("")
    setPercentage1(0)
    setPercentage2(0)
  }
  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>How did you like the service?</SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>How did your frinds like the sarvice?</SelectPercentage>
      {
        bill > 0 &&
        <>
        <Output bill={bill} tip={tip}/>
        <Reset onReset={handleReset} />
        </>
      }
    </div>
  );
}

function BillInput({bill, setBill}) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input type="text" value={bill} onChange={(e) => setBill(e.target.value)} placeholder="Bill Value" />
    </div>
  );
}

function SelectPercentage({percentage, onSelect, children}) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okey (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({bill, tip}) {
  return (
    <h3>You pay ${+bill + +tip} (${bill} + ${tip})</h3>
  )
}

function Reset({onReset}) {
  return (
    <button onClick={onReset}>REST</button>
  )
}

// export default function App() {
//   const [bill, setBill] = useState(null);
//   const [tip, setTip] = useState([]);
//   const [calcTip, setCalcTip] = useState();

//   return (
//     <div>
//       <Bill setTip={setTip} bill={bill} setBill={setBill}></Bill>

//       <Tips tip={tip} setTip={setTip} setCalcTip={setCalcTip}>
//         How did you like the service?
//       </Tips>
//       <Tips tip={tip} setTip={setTip} setCalcTip={setCalcTip}>
//         How did your frinds like the sarvice?
//       </Tips>
//       {bill !== null ? (
//         <h2>
//           You pay {bill} ({calcTip})
//         </h2>
//       ) : null}
//     </div>
//   );
// }

// function Bill({ bill, setBill }) {
//   function handleInput(value) {
//     setBill(value);
//   }
//   return (
//     <div>
//       <span>How much was the bill? </span>
//       <input type="number" onChange={(e) => handleInput(e.target.value)} />
//     </div>
//   );
// }

// function Tips({ tip, setTip, setCalcTip, children }) {
//   function handleTip(item) {
//     setTip((items) => [...items, item]);
//     setCalcTip(
//       tip[tip.length - 1] + tip[tip.length - 2]
//     );
//   }
//   return (
//     <div>
//       <span>{children} </span>
//       <select  onChange={(e) => handleTip(Number(e.target.value))}>
//         <option value={0}>Dissatisfied (0%)</option>
//         <option value={5}>It was okey (5%)</option>
//         <option value={10}>It was good (10%)</option>
//         <option value={20}>Absolutely amazing! (20%)</option>
//       </select>
//     </div>
//   );
// }
