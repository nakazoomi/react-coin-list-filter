import SwapVertIcon from '@mui/icons-material/SwapVert';

export default function CoinListHeader() {
  return (
    <div className="coinlist_header">
      <p className="coinlist_header-rank"><SwapVertIcon/>Rank</p>
      <p className="coinlist_header-name"><SwapVertIcon/>Name</p>
      <p className="coinlist_header-price"><SwapVertIcon/>Price</p>
      <p className="coinlist_header-volume"><SwapVertIcon/>Volume(24h)</p>
      <p className="coinlist_header-percent"><SwapVertIcon/>24h %</p>
      <p className="coinlist_header-mktcap"><SwapVertIcon/>Mkt Cap</p>
    </div>
  );
}
