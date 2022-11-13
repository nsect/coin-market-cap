import Image from 'next/image';
import Search from '../assets/svg/search';

const Header = () => {
  return (
    <div className="header">
      <Image
        src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
        alt="logo"
        width={220}
        height={220}
      />

      <div className="headerWrapper">
        <nav className="nav">
          <div className="navItem">
            <div className="navLink">Cryptocurrencies</div>
            <div className="badge" />
          </div>
          <div className="navItem">
            <div className="navLink">Exchanges</div>
          </div>
          <div className="navItem">
            <div className="navLink">NFT</div>
            <div className="badge" />
          </div>
          <div className="navItem">
            <div className="navLink">Cryptown</div>
            <div className="badge" />
          </div>
          <div className="navItem">
            <div className="navLink">Portfolio</div>
          </div>
          <div className="navItem">
            <div className="navLink">Watchlist</div>
          </div>
          <div className="navItem">
            <div className="navLink">Products</div>
            <div className="badge" />
          </div>
          <div className="navItem">
            <div className="navLink">Learn</div>
          </div>
        </nav>

        <div className="flex items-center">
          {/* Connnect button */}

          <div className="inputContainer">
            <Search />
            <input className="input" type="text" placeholder="search" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
