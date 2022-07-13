import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import bitcoin from '../../assets/coin/bitcoin.png';
import litecoin from '../../assets/coin/litecoin.png';
import ethereum from '../../assets/coin/ethereum.png';
import binance from '../../assets/coin/binance.png';

const Widget = ({ type }) => {
  let data;

  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'btc':
      data = {
        title: 'BTC',
        isMoney: false,
        link: 'More info',
        icon: (
          <img
            src={bitcoin}
            alt="bitcoin"
            className="icon"
            style={{ backgroundColor: '#FFCC40' }}
          />
        ),
      };
      break;
    case 'ltc':
      data = {
        title: 'LTC',
        isMoney: false,
        link: 'More info',
        icon: (
          <img
            src={litecoin}
            alt="litecoin"
            className="icon "
            style={{ backgroundColor: '#783EFD' }}
          />
        ),
      };
      break;
    case 'etm':
      data = {
        title: 'ETM',
        isMoney: false,
        link: 'More info',
        icon: (
          <img
            src={ethereum}
            alt="ethereum"
            className="icon"
            style={{ backgroundColor: '#FE8F66' }}
          />
        ),
      };
      break;
    case 'bnb':
      data = {
        title: 'BNB',
        isMoney: false,
        link: 'More info',
        icon: (
          <img
            src={binance}
            alt="binance"
            className="icon"
            style={{ backgroundColor: '#311D05' }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.icon}</span>
        <span className="counter">
          {data.isMoney && '$'} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
      </div>
    </div>
  );
};

export default Widget;
