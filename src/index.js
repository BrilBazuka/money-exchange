// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
  let exchange = {};
  let rich = {error: "You are rich, my friend! We don't have so much coins for exchange"};
  let change = 0;
  if(currency <= 0) return exchange;
  if(currency > 10000) return rich;
  
  exchange["H"] = Math.floor(currency / 50);
  change = currency - exchange["H"] * 50;
  exchange["Q"] = Math.floor(change / 25);
  change = change - exchange["Q"] * 25;
  exchange["D"] = Math.floor(change / 10);
  change = change - exchange["D"] * 10;
  exchange["N"] = Math.floor(change / 5);
  change = change - exchange["N"] * 5;
  exchange["P"] = change;

  console.log(exchange);

  for(let key in exchange) {
    if(exchange[key] == 0) delete exchange[key];
  }
  console.log(exchange);
  return exchange;
}
