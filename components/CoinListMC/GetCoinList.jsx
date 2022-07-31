// STRUCTURE COINS FROM SHOW COIN LIST

import Coins from './ShowCoinList';

export default function CoinList({ filteredCoins }) {
  return (
    <>
      {filteredCoins.map((coin) => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
            ath={coin.ath}
            market_cap_rank={coin.market_cap_rank}
          />
        );
      })}
    </>
  );
}
