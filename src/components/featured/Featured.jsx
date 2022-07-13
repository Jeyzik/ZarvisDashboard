import './featured.scss';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'January',
    Sell: 4000,
    Buy: 2400,
    amt: 2400,
  },
  {
    name: 'February',
    Sell: 3000,
    Buy: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    Sell: 2000,
    Buy: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    Sell: 2780,
    Buy: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    Sell: 1890,
    Buy: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    Sell: 2390,
    Buy: 3800,
    amt: 2500,
  },
];

const Featured = ({ aspect, title }) => {
  return (
    <div className="featured">
      <div className="headerInfo">
        <div className="title">{title}</div>
        <div className="selectData">
          <ul className="subMenu">
            <li>
              <span>all</span>
            </li>
            <li>
              <span>1m</span>
            </li>
            <li>
              <span>6m</span>
            </li>
            <li>
              <span>1y</span>
            </li>
            <li>
              <span>ytd</span>
            </li>
          </ul>
        </div>
      </div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Buy" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Sell" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Featured;
