import {useEffect,useState} from 'react'

function App(){
  const [exchangeData,setExchangeData] =useState({});
  const[bankData,setBankData] = useState({});


  useEffect(()=> {
    fetch("https://www.google.com",async (res) => {
      const json = await res.json();
      setBankData(json);
    });
  },[])

  useEffect(() => {
    setTimeout(()=>{
      setExchangeData({
        return : 100
      })
    },1000)
  },[])

  const incomeTax = (bankData.income + exchangeData.return) * 0.3;

  return(
    <div>
      hi! there,your income tax returns are  {incomeTax}
    </div>
  )
}

export default App;