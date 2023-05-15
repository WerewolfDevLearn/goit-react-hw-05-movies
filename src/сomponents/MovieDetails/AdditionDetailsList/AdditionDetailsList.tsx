import { Link } from 'react-router-dom';

function AdditionDetailsList() {
  return (
    <>
      <h3>Addition Iformation</h3>
      <ul>
        <li key='casts'>
          <Link to={'casts'}>Casts</Link>
        </li>
        <li key='reviews'>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
      <hr />
    </>
  );
}

export default AdditionDetailsList;
