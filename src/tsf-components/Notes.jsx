import React, { useEffect, useRef, useState} from 'react';
import Modal from "../tsf-components/Modal"

function Notes() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
const [modalMessage, setModalMessage] = useState('');

   const inputRef = useRef(null);

useEffect(() => {
  const notesData = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(notesData);
  inputRef.current.focus();
}, []);

// addNote function
  function addNote() {
    // Ensure title and description are provided
    if (!title || !description) {
      showAlert('Please enter title and description!');
      return;
    }
    
    
    // Create a new note and update the state
    const newNotes = [{ title, description }, ...notes];
    setNotes(newNotes);
    
    // Save the updated notes list to localStorage
    localStorage.setItem('notes', JSON.stringify(newNotes));

    // Clear input fields and refocus on the input
    resetForm();
    showAlert('Note added  successfully!');
}

// function to update selected notes
function updateNote() {
  // Ensure title and description are provided
  if (!title || !description) return alert('Please enter title and description!');
  if (editIndex === null) return; // Prevent updating if no note is selected

  // Update the specific note in the list
  const updatedNotes = notes.map((note, index) =>
      index === editIndex ? { title, description } : note
  );

  // Update state and localStorage
  setNotes(updatedNotes);
  localStorage.setItem('notes', JSON.stringify(updatedNotes));

  // Reset editIndex and input fields
  setEditIndex(null);
  resetForm();
  showAlert('Note has been updated!');
}

// Function to clear the input fields and refocus the input
function resetForm() {
  setTitle('');
  setDescription('');
  inputRef.current.focus();
}

  //  Added delete function
  function deleteNotes() {
    setNotes([]); // Clears all notes
    
    resetForm(); // Clears input fields
    showAlert('Notes deleted successfully!');
  }

  function deleteById(id){
    showAlert(`Deleting note ${id+1}`);
    const updatedNotes = notes.filter((note, index) => index !== id); // Filter out the note to delete
    setNotes(updatedNotes); // Update the state
    localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Update localStorage
    showAlert('Note deleted successfully!');
  }

function editById(id){
  if (!notes[id]) return; // Prevent errors if index is invalid
setTitle(notes[id].title);
setDescription(notes[id].description);
setEditIndex(id);
inputRef.current.focus();

}

function showAlert(message) {
  setModalMessage(message);
  setShowModal(true);
}
  return (
    <>
      <h1>Notes</h1>
      
      <Modal show={showModal} handleClose={() => setShowModal(false)} title="Notification" modalMessage={modalMessage} />
      <div style={styles.container}>
        <input
          style={{ ...styles.inputF, width: '25%' }}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          ref={inputRef}
        />
        <textarea
          style={styles.inputF}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write notes here"
        />

      {/* Add & Delete Buttons Functional */}
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={editIndex === null ? addNote : updateNote}>{editIndex !== null ?"Update":"Add"}</button>
        <button style={styles.button} onClick={deleteNotes}>Clear All</button>
      </div>

      </div>


      {/*  Display Notes  */}
      <div style={styles.noteContainer}>
        {notes.map((note, index) => (
          <div key={index} style={styles.noteCard}>
            <span style={styles.actionBtn} onClick={()=>deleteById(index)}>
                <img src='https://cdn-icons-png.flaticon.com/128/14044/14044168.png' alt='delete icon' height={"20px"}/>
            </span>
            <span style={styles.actionBtn} onClick={()=>editById(index)}>
                <img src='https://cdn-icons-png.flaticon.com/128/14204/14204341.png' alt='delete icon' height={"20px"}/>
            </span>

            <div style={styles.tittleContainer}><strong>{index+1}: {note.title}</strong></div> 
            <p>{note.description}</p>
            
          </div>
        ))}
      </div>
    </>
  );
}

export default Notes;


// Styles for note component
const styles = {
  inputF: {
    width: '45%',
    border: '1px solid black',
    padding: '5px 10px',
    textAlign: 'left',
    direction: 'ltr',
    color: 'black',
    margin: '5px',
    backgroundColor: 'white',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '10px',
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    margin: '5px',
    gap: '10px', // Added space between buttons
  },

  button: {
    padding: '5px',
    backgroundColor: 'blue',
    color: 'white',
    border: '1px solid black',
    cursor: 'pointer',
    width: '100px',
  },

  //  Styled Notes Display
  noteContainer: {
    display: 'flex',
    flexWrap: 'wrap', // Allows wrapping after 3 items
    justifyContent: 'left',
    margin: '10px',
    gap: '10px', // Space between notes
  },

  noteCard: {
    border: '1px solid black',
    padding: '10px',
    backgroundColor: '#b8c7cb',
    borderRadius: '5px',
    width: '30%', // Ensures only 3 cards fit in a row (3 × 30% = 90%)
    minWidth: '200px', //  Prevents shrinking too much on small screens
    boxSizing: 'border-box',
  },
   actionBtn:{
        cursor: 'pointer',
        float: 'right',
        
         marginLeft: "8px"

  },
  tittleContainer:{
height: "30px",
width: "80%",
border: '1px solid black',
padding: '1px',
backgroundColor: 'white',
  }
};
