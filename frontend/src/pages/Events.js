import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'event 1',
  },
  {
    id: 'e2',
    title: 'event 2',
  },
  {
    id: 'e3',
    title: 'event 3',
  },
  {
    id: 'e4',
    title: 'event 4',
  },]

const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map(event => <li key={event.id}><Link to={event.id}>{event.title}</Link></li>)}
      </ul>
    </>
  );
};

export default EventsPage;