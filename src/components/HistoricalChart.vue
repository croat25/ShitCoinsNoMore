<script>
import axios from "axios";
import Chart from "chart.js/auto";

export default {
  data() {
    return {
      labels: [],
      price: [],
    };
  },

  // Fetches posts when the component is created.
  async created() {
    try {
      const response = await axios.get(
        `https://api.coinpaprika.com/v1/tickers/btc-bitcoin/historical?start=2022-01-01&interval=1d`
      );

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
    <canvas id="myChart" width="100" height="50"></canvas>
    <li v-for="item in labels" :key="item">
      {{ item }}
    </li>
  </div>
</template>
