import { useEffect, useState } from "react";

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.example.com/bank-data"); // Replace with a valid API URL
        const json = await res.json();
        setBankData(json);
      } catch (error) {
        console.error("Error fetching bank data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setExchangeData({
        returnValue: 100, // Changed from `return`
      });
    }, 1000);
  }, []);

  // Safeguard against undefined data
  const income = bankData.income || 0;
  const exchangeReturn = exchangeData.returnValue || 0;
  const incomeTax = (income + exchangeReturn) * 0.3;

  return (
    <div>
      Hi! There, your income tax returns are {incomeTax.toFixed(2)}
    </div>
  );
}

export default App;
