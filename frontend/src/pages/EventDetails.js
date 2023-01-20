import { useParams, Link } from 'react-router-dom';

const EventDetailsPage = () => {

  const params = useParams();

  return (
    <>
      <h1>Details Page</h1>
      <h2>Event: {params.id}</h2>
      <Link to='..' end>Back</Link>
    </>
  );
};

export default EventDetailsPage;