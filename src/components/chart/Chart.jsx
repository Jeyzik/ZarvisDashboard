import './chart.scss';
import plus from '../../assets/chart/plus.png';
import mustercard from '../../assets/chart/mustercard.png';

const Chart = () => {
  return (
    <div className="chart">
      <div className="top">
        <h1 className="title">Balances</h1>
        <img src={plus} alt="plus" />
      </div>
      <div className="center">
        <p>
          <b>$ </b>
          <span>Dollar</span>
        </p>
        <h2 className="balance">9784.79</h2>
      </div>
      <div className="bottom">
        <div className="card">
          <div className="topCard">
            <h3 className="title">Glassy.</h3>
            <img src={mustercard} alt="mustercard" />
          </div>
          <div className="infoCard">
            <p>7813 2139 0823 XXXX</p>
          </div>
          <div className="moreInfo">
            <div className="data">
              <p>valid thru</p>
              <p>05/24</p>
            </div>
            <div className="cvv">
              <p>cvv</p>
              <p>09X</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
