// import CallToAction from '../components/CallToAction/CallToAction';
// import CoinListHeader from '@/components/CoinListMC/CoinListHeader';
// import Coins from '@/components/CoinListMC/ShowCoinList';
// import Header from '@/components/Header/Header';

import { useEffect, useState } from 'react';
import GetCoinList from '../components/CoinListMC/GetCoinList';
import SearchBar from '../components/CoinListMC/SearchBar';
import Layout from '../components/Layout';

import SearchIcon from '@mui/icons-material/Search';
import SwapVertIcon from '@mui/icons-material/SwapVert';
// import { sortCoinList } from '../components/Utils/index';

// ******************************************************************************
// THIS FUNCTION WILL FILTER ALL ITEMS WITHIN THE COIN LIST ARRAY

export default function Cryptotracker({ filteredCoins }) {
  // CREATE A STATE TO FILTER THE COIN LIST
  const [search, setSearch] = useState('');
  // CREATE A STATE FOR THE COIN LIST
  const [coinList, setCoinList] = useState([]);
  // CREATE A STATE FOR THE FILTER DIRECTION
  const [filterDirection, setFilterDirection] = useState('asc');

  const sortCoinList = (coinList, filterDirection, header) => {
    switch (filterDirection) {
      case 'asc':
      default:
        return coinList.sort((a, b) =>
          a[header] > b[header] ? 1 : b[header] ? -1 : 0
        );
      case 'desc':
        return coinList.sort((a, b) =>
          a[header] < b[header] ? 1 : b[header] ? -1 : 0
        );
    }
  };

  // SORT COINS AS ASCENDING (asc) AND DESCENDING (desc)
  const handleSorting = (header) => {
    sortCoinList(coinList, filterDirection, header);
    setFilterDirection(filterDirection === 'asc' ? 'desc' : 'asc');
  };
  // console.log(coinList)

  const handleChange = (e) => {
    e.preventDefault();
    //   const allCoins = coinList.filter((coin) =>
    //   coin.name.toLowerCase().includes(e.target.value.toLowerCase())
    // );
    // setSearch(coinList);
    setSearch(e.target.value);
  };

  const allCoins = filteredCoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setCoinList(filteredCoins);
  }, []);

  // ******************************************************************************
  // RETURN

  return (
    <Layout title="Market Capitalization">
      <div className="coin-list__container">
        <div className="search-bar__wrapper">
          <SearchIcon />
          <SearchBar type="text" placeholder="Search" onChange={handleChange} />
        </div>

        <div className="coinlist-header__wrapper">
          <p
            className="coinlist-header"
            onClick={() => handleSorting('market_cap_rank')}
          >
            <SwapVertIcon />
            Rank
          </p>
          <p className="coinlist-header" onClick={() => handleSorting('name')}>
            <SwapVertIcon />
            Name
          </p>
          <p
            className="coinlist-header"
            onClick={() => handleSorting('current_price')}
          >
            <SwapVertIcon />
            Price
          </p>
          <p
            className="coinlist-header"
            onClick={() => handleSorting('total_volume')}
          >
            <SwapVertIcon />
            Volume(24h)
          </p>
          <p
            className="coinlist-header"
            onClick={() => handleSorting('price_change_percentage_24h')}
          >
            <SwapVertIcon />
            24h %
          </p>
          <p
            className="coinlist-header"
            onClick={() => handleSorting('market_cap')}
          >
            <SwapVertIcon />
            Mkt Cap
          </p>
        </div>

        <GetCoinList filteredCoins={allCoins} />
      </div>
    </Layout>
  );
}

// ******************************************************************************
// FETCH THE COIN LIST FROM COINGECKO API

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
  );
  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};
