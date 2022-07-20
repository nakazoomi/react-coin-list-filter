import Layout from 'components/Layout';
import Link from 'next/link';

// import Charts from 'components/Charts/Charts';

const Coin = ({ coin }) => {
  return (
    <Layout>
      <div className="cryptotracker-single">
        <Link href="/">
          <a>
            <button className="back-to-coinlist-btn">Back to Mkt Cap</button>
          </a>
        </Link>
        <div className="coinpage-container">
          <div className="coinpage-name">
            <img
              src={coin.image.large}
              alt={coin.name}
              className="coin_image"
            />
            <h1 className="coin_name">{coin.name}</h1>
          </div>
          <p className="coin_symbol">{coin.symbol}</p>
          <p className="coin_price">$ {coin.market_data.current_price.usd}</p>
        </div>
      </div>
    </Layout>
  );
};

// Infos um update status zu ändern:

// useEffect in coin function
// state für die coins definieren
// Daten müssen in der Componente überschrieben werden

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
