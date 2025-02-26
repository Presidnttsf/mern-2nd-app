import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserCard({user, index}) {   
   
  const {firstName, lastName, email} = user;
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/1/367/267" />
      <Card.Body>
        <Card.Title>USER {index+1}</Card.Title>
        <Card.Text>
  Name: {firstName} {lastName} <br />
  Email: {email} <br />          
        </Card.Text>
        <Button variant="primary">View Profile</Button>
      </Card.Body>
    </Card>
  );
}

export default UserCard;