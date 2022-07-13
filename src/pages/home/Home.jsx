import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';
import Team from '../../components/team/Team';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="btc" />
          <Widget type="ltc" />
          <Widget type="etm" />
          <Widget type="bnb" />
        </div>
        <div className="charts">
          <Featured title="Market Overview" aspect={2 / 1} />
          <Chart />
        </div>
        <div className="listContainer">
          <Table />
          <Team />
        </div>
      </div>
    </div>
  );
};

export default Home;
