import coin from '../pages/coin/[id]';
// import { coins } from '../components/CoinListMC/ShowCoinList';

const service = {
  getData: (from, to) => {
    return new Promise((resolve, reject) => {
      const data = coin.slice(from, to);

      resolve({
        count: coin.length,
        data: data,
      });
    });
  },
};

export default service;
