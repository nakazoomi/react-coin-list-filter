import CoinListHeader from '@/components/CoinListMC/CoinListHeader';
import Coins from '@/components/CoinListMC/ShowCoinList';
import { useState } from 'react';
import CoinList from '../components/CoinListMC/GetCoinList';
import SearchBar from '../components/CoinListMC/SearchBar';
import Layout from '../components/Layout';
import SearchIcon from '@mui/icons-material/Search';

// Default function for showing coin data
export default function Cryptotracker({ filteredCoins }) {
  // Search Bar for filtering Coins
  const [search, setSearch] = useState('');

  const allCoins = filteredCoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value);
  };
  //
  return (
    <Layout title="Market Capitalization">
      <div className="cryptotracker_container">

<div className="searchbar__wrapper">
        <SearchIcon/> 
        <SearchBar type="text" placeholder="Search" onChange={handleChange} />
        </div>

        {/* <SearchOutput /> */}
        <CoinListHeader />
        <CoinList filteredCoins={allCoins} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  );
  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};
