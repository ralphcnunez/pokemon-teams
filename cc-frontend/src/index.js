
  let counter = 0

  const mainContainer = document.querySelector('main')
  const marketPrice = {};
  let counterObj = 1;
  const exchange = []
  const options = ['XRP', "BTC"]



function percentageChange(open, close){
  let newNum = close - open
   let x = ( (newNum / open) * 100 )
   return x
}

  function openWin() {
    let url = event.target.parentNode.id
    window.open(`https:/${url}.com`);
  }

  fetch('https://api.nomics.com/v1/markets/interval?key=5338f664f16533a31f3c9c5f642b0d6b&currency=BTC&start=2017-01-01T00%3A00%3A00Z&end=2018-10-03T00%3A00%3A00Z')
  .then(r => r.json())
  .then(displayBTC)



    fetch('https://api.nomics.com/v1/markets/interval?key=5338f664f16533a31f3c9c5f642b0d6b&currency=XRP&start=2017-09-08T00%3A00%3A00Z&end=2018-10-03T00%3A00%3A00Z')
    .then(r => r.json())
    .then(displayXRP)
    //
    function displayXRP(crypto) {
      crypto.forEach(currency => {
        console.log(currency)
       if (currency.quote === 'USD' && currency.exchange !== 'bittrex' && currency.exchange !== 'gdax') {
         mainContainer.innerHTML += `<div class="card" id=${currency.exchange}> <h3>On ${currency.exchange} XRP is currently $${currency.close} USD  </h3>
        <button data-trainer-id="" type="button" onclick="openWin()"> Click here to start buying</button>
        <ul>
        <li> January 1st, 2017 Price : $${currency.open} </li> <br><li> Yesterday's Closing Price: $${currency.close} </li><br> <li>
              Year to Date Gains: %${Math.floor(percentageChange(currency.open, currency.close))}
            <li></li>
              </li>

</ul>`
  marketPrice['XRP'] = Math.floor(percentageChange(currency.open, currency.close))
      }


    })

}


function displayBTC(crypto) {
  crypto.forEach(currency => {
    // console.log(currency)
   if (currency.quote === 'USD' && currency.exchange !== 'bittrex') {
     mainContainer.innerHTML += `<div class="card" id=${currency.exchange}> <h3>On ${currency.exchange} BTC is currently $${currency.close} USD  </h3>
    <button data-trainer-id="" type="button" onclick="openWin()"> Click here to start buying</button>
    <ul>
    <li> January 1st, 2017 Price : $${currency.open} </li> <br><li> Yesterday's Closing Price: $${currency.close} </li><br> <li>
          Year to Date Gains: %${Math.floor(percentageChange(currency.open, currency.close))}
        <li></li>
          </li>

</ul>`
  }

  marketPrice['BTC'] = Math.floor(percentageChange(currency.open, currency.close))

})

}

 mainContainer.innerHTML += `<div class="card" id='search'> <h3> Calculate investment: Enter intial amount </h3>  <input id='input'type='text'> </input>  <select id="select"> </select>
<button id="searchBtn" type="button" onclick="potentialGains()"> Click here to find out</button>`


for (var i = 0; i < options.length; i++) {
  let select = document.getElementById("select");
  let value = document.createElement("option");
  value.text = options[i];
  select.add(value)
  }


function potentialGains(){
  let inputValue = parseInt(event.target.parentElement.childNodes[3].value)
  let selectValue = event.target.parentElement.childNodes[5].value
  console.log(event.target.parentElement.childNodes)

  if( Number.isInteger(inputValue)) {
  alert(`You would have made $${(marketPrice[selectValue] * inputValue / 100) + inputValue} from your intial ${inputValue} investment on January 1st, 2017`)
    document.getElementById('input').value = ''


  }
  else{
    document.getElementById('input').value = ''
    alert('Please enter a Javscript Interger ;) ')
    // inputValue.innerText = ''
  }

}
