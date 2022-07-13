import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import bitcoin from '../../assets/coin/bitcoin.png';
import litecoin from '../../assets/coin/litecoin.png';
import ethereum from '../../assets/coin/ethereum.png';

const List = () => {
  const rows = [
    {
      id: 161234,
      img: (
        <img src={bitcoin} alt="bitcoin" className="icon" style={{ backgroundColor: '#FFCC40' }} />
      ),
      name: 'Bitcoin',
      time: '10.45:16 AM',
      price: '+1545,00',
      status: 'Completed',
    },
    {
      id: 623525,
      img: (
        <img
          src={ethereum}
          alt="ethereum"
          className="icon"
          style={{ backgroundColor: '#FE8F66' }}
        />
      ),
      name: 'Ethereum',
      time: '09:15:31 AM',
      price: '+5649,00',
      status: 'Painding',
    },
    {
      id: 385729,
      img: (
        <img
          src={litecoin}
          alt="litecoin"
          className="icon "
          style={{ backgroundColor: '#783EFD' }}
        />
      ),
      name: 'LTC',
      time: '09:01:12 AM',
      price: '+4547,00',
      status: 'Completed',
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.img}</TableCell>
              <TableCell className="tableInfo">{row.name}</TableCell>
              <TableCell className="tableInfo">{row.time}</TableCell>
              <TableCell className="tableInfo">{row.price}</TableCell>
              <TableCell>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
