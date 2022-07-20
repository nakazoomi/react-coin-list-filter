import Link from 'next/link';

const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  market_cap_rank,
  volume,
  image,
  priceChange,
  id,
  ath,
}) => {
  return (
    <>
      <Link href="/coin/[id]" as={`/coin/${id}`}>
        <a>
          <div className="coinlist_collection"></div>
          <div className="coinlist_wrapper">
            <div className="coinlist_row">
              <div className="coinlist_mktcap-rank">
                <p>{market_cap_rank}</p>
              </div>

              <div className="name-img-wrapper">
                <img src={image} alt={name} className="coinlist_img" />

                <div className="name-wrapper">
                  <h1 className="coinlist_name">{name}</h1>
                  <p className="coinlist_symbol">{symbol}</p>
                </div>
              </div>

              <div className="price-wrapper">
                <p className="coinlist_price">$ {price}</p>
                <p className="coinlist_ath">ATH $ {ath}</p>
              </div>

              <div className="coinlist_data">
                <div className="volume-wrapper">
                  <p className="coinlist_volume">
                    $ {volume.toLocaleString('en-US')}
                  </p>
                </div>

                <div className="percent-wrapper">
                  {priceChange < 0 ? (
                    <p className="coinlist_percent, red">
                      {priceChange.toFixed(2)}%
                    </p>
                  ) : (
                    <p className="coinlist_percent, green">
                      {priceChange.toFixed(2)}%
                    </p>
                  )}
                </div>

                <div className="mktcap-wrapper">
                  <p className="coinlist_mktcap">
                    $ {marketcap.toLocaleString('en-US')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default Coins;
