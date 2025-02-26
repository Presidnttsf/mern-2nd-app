import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function UserCard({ firstName, lastName, email }) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img 
        variant="top" 
        src="https://picsum.photos/id/1/367/267" // Replace with a real image URL
        alt="User profile"
      />
      <div style={{ backgroundColor:"grey", padding: "1rem" }}>

        <Card.Title>{firstName} {lastName}</Card.Title>
        <Card.Text>
          Email: {email}
        </Card.Text>
        <Button variant="primary">View Profile</Button>
      </div>
    </Card>
  );
}

export default UserCard;


