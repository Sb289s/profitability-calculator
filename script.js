function calculate() {
  const risk = parseFloat(document.getElementById("risk").value);
  const accountSize = parseFloat(document.getElementById("accountSize").value);
  const winRate = parseFloat(document.getElementById("winRate").value);
  const rrRatio = parseFloat(document.getElementById("rrRatio").value);

  const totalTrades = 100;
  const wins = totalTrades * (winRate / 100);
  const losses = totalTrades - wins;

  const lossPerTrade = accountSize * (risk / 100);
  const profitPerTrade = lossPerTrade * rrRatio;

  const totalProfit = profitPerTrade * wins;
  const totalLoss = lossPerTrade * losses;
  const netProfit = totalProfit - totalLoss;

  // Profit per trade
  document.getElementById("profitPerTrade").innerText = `$${profitPerTrade.toFixed(2)}`;

  // Average loss per trade: make red after calculate
  const lossPerTradeEl = document.getElementById("lossPerTrade");
  lossPerTradeEl.innerText = `-$${lossPerTrade.toFixed(2)}`;
  lossPerTradeEl.classList.remove("red");
  lossPerTradeEl.classList.add("red");

  // Other outputs
  document.getElementById("wins").innerText = wins.toFixed(0);
  document.getElementById("losses").innerText = losses.toFixed(0);
  document.getElementById("totalProfit").innerText = `$${totalProfit.toFixed(0)}`;

  const netProfitEl = document.getElementById("netProfit");
  netProfitEl.innerText = `$${netProfit.toFixed(0)}`;
  netProfitEl.classList.remove("positive", "negative");

  if (netProfit >= 0) {
    netProfitEl.classList.add("positive");
  } else {
    netProfitEl.classList.add("negative");
  }
}
