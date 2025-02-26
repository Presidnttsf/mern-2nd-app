import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
function Loading() {
  return (
    <>
       <Spinner animation="border" variant="primary" />
<p>Loading....</p>
</>
  );
}
export default Loading;