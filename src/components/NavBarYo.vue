<script>
import axios from 'axios';
export default {
  data() {
    return {
      price: 0.00,
      lastFetch: "",
      history:  {},
      currentMarketCapUsd: 0,
      BTCDominatrix: 0.00,
      MarketATH: 0,
      TwoFourChange: 0.00 // percent
    }
  },

  // Fetches posts when the component is created.
  async created() {
    try {
      const response = await axios.get(`https://api.coinpaprika.com/v1/global`)
      // this.price = response.data.bpi.USD.rate;
      this.history = response.data;
      this.currentMarketCapUsd = response.data.market_cap_usd;
      this.BTCDominatrix = response.data.bitcoin_dominance_percentage;
      this.MarketATH = response.data.market_cap_ath_value;
      this.TwoFourChange = response.data.market_cap_change_24h;
      // this.lastFetch = response.data.time.updated;
    } catch (e) {
    }
  }
}
</script>
<template>
  <main>
    <div>
      <p>
        <small>
          current Market Cap Of Market: {{currentMarketCapUsd}}
        </small>
        <br>
        <small>
          BTC only dominates {{BTCDominatrix}}% of the Market
        </small>
        <br>
        <small>
          All Time High of Market is {{MarketATH}}
        </small>
        <br>
        <small>
          In the last 24 hours the market has been this volitate {{TwoFourChange}}%
        </small>
      </p>

  </div>
  </main>
</template>
