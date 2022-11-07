<script>
import axios from "axios";
import Chart from "chart.js/auto";

export default {
  data() {
    return {
      labels: [],
      price: [],
      symbol: "",
      rank: 1,
      circulatingSupply: 0,
      totalSupply: 0,
      maxSupply: 0,
      betaValue: 0,
      USDPrice: 0,
      percentChange1h: 0.00,
      percentChange12h: 0.00,
      percentChange24h: 0.00,
      percentChange7d: 0.00,
      percentChange30d: 0.00,
      percentChange1y: 0.00,
      percentFromATH: 0.00,
      ATHPrice: 0.00
      
    };
  },

  // Fetches posts when the component is created.
  async created() {
    try {
      const response = await axios.get(
        `https://api.coinpaprika.com/v1/tickers/btc-bitcoin/historical?start=2022-01-01&interval=1d`
      );

      const btcDetailInfoResponse = await axios.get(`https://api.coinpaprika.com/v1/tickers/btc-bitcoin`);

      this.symbol = btcDetailInfoResponse.data.symbol
      this.rank = btcDetailInfoResponse.data.rank

      this.circulatingSupply = btcDetailInfoResponse.data.circulating_supply;
      this.totalSupply = btcDetailInfoResponse.data.total_supply;
      this.maxSupply = btcDetailInfoResponse.data.max_supply;
      this.betaValue = btcDetailInfoResponse.data.beta_value;
      this.USDPrice = btcDetailInfoResponse.data.quotes.USD.price;
      this.percentChange1h = btcDetailInfoResponse.data.quotes.USD.percent_change_1h;
      this.percentChange12h = btcDetailInfoResponse.data.quotes.USD.percent_change_12h;
      this.percentChange24h = btcDetailInfoResponse.data.quotes.USD.percent_change_24h;
      this.percentChange7d = btcDetailInfoResponse.data.quotes.USD.percent_change_7d;
      this.percentChange30d = btcDetailInfoResponse.data.quotes.USD.percent_change_30d;
      this.percentChange1y = btcDetailInfoResponse.data.quotes.USD.percent_change_1y;
      this.percentFromATH = btcDetailInfoResponse.data.quotes.USD.percent_from_price_ath;
      this.ATHPrice = btcDetailInfoResponse.data.quotes.USD.ath_price;

      let timeStampList = [];
      let priceList = [];
      for (let i = 0; i < response.data.length; i++) {
        timeStampList.push(response.data[i].timestamp);
        priceList.push(response.data[i].price);
      }
      this.labelsOfTimeStamp = timeStampList;
      this.price = priceList;
      // this.price = response.data.bpi.USD.rate;
      const ctx = document.getElementById("myChart");

      const btcChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: this.labelsOfTimeStamp,
          datasets: [
            {
              label: "Btc Price in Usd",
              data: this.price,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
      });

      btcChart;
    } catch (e) {}
  },
};
</script>
<template>
  <div>
    <h1>BTC Info</h1>
    <tr>
      <td aria-colindex="1" role="cell" class> Symbol:</td>
      <td aria-colindex="2" role="cell" class> {{symbol}}</td>
    </tr>
    <tr>
      <td aria-colindex="1" role="cell" class> Rank:</td>
      <td aria-colindex="2" role="cell" class> {{rank}}</td>
    </tr>
    <tr>
      <td aria-colindex="1" role="cell" class> circulating Supply :</td>
      <td aria-colindex="2" role="cell" class> {{circulatingSupply}}</td>
    </tr>
    <tr>
      <td aria-colindex="1" role="cell" class> total Supply :</td>
      <td aria-colindex="2" role="cell" class> {{totalSupply}}</td>
    </tr>
    <tr>
      <td aria-colindex="1" role="cell" class> USDPrice :</td>
      <td aria-colindex="2" role="cell" class> {{USDPrice}}</td>
    </tr>
    <tr>
      <td aria-colindex="1" role="cell" class> percent Change 1h: </td>
      <td aria-colindex="2" role="cell" class> {{percentChange1h}}%</td>
    </tr>
    <tr>
      <td aria-colindex="1" role="cell" class> percent Change 24h: </td>
      <td aria-colindex="2" role="cell" class> {{percentChange24h}}</td>
    </tr>
    <tr>
      <td aria-colindex="1" role="cell" class> percent Change 7d: </td>
      <td aria-colindex="2" role="cell" class> {{percentChange7d}}</td>
    </tr>
    <tr>
      <td aria-colindex="1" role="cell" class> percent Change 30d: </td>
      <td aria-colindex="2" role="cell" class> {{percentChange30d}}</td>
    </tr>
    <tr>
      <td aria-colindex="1" role="cell" class> percent Change 1y: </td>
      <td aria-colindex="2" role="cell" class> {{percentChange1y}}</td>
    </tr>
    <tr>
      <td aria-colindex="1" role="cell" class> The Most a ape was willing to pay for a btc: </td>
      <td aria-colindex="2" role="cell" class> {{ATHPrice}}</td>
    </tr>

    <canvas id="myChart" width="100" height="50"></canvas>
    <li v-for="item in labels" :key="item">
      {{ item }}
    </li>
  </div>
</template>
