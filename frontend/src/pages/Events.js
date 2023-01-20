import { Link } from 'react-router-dom';

const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        <li><Link to='/events/ev1'>Event 1</Link></li>
        <li><Link to='/events/ev2'>Event 2</Link></li>
        <li><Link to='/events/ev3'>Event 3</Link></li>
        <li><Link to='/events/ev4'>Event 4</Link></li>
      </ul>
    </>
  );
};

export default EventsPage;