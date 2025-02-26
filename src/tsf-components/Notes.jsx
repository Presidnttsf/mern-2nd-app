import React, { useEffect, useRef, useState } from 'react';
import Modal from "../tsf-components/Modal"; // Importing the Modal component

function Notes({searchTerm}) {
  // State variables to store note details, list of notes, and other UI states
  const [title, setTitle] = useState(''); // Stores the title of the note
  const [description, setDescription] = useState(''); // Stores the description of the note
  const [notes, setNotes] = useState([]); // Stores all notes as an array
  const [editIndex, setEditIndex] = useState(null); // Tracks index of the note being edited
  const [showModal, setShowModal] = useState(false); // Controls visibility of the modal
  const [confirmAction, setConfirmAction] = useState(null); // Stores the action to confirm in the modal
  const [modalMessage, setModalMessage] = useState(''); // Stores the message to be displayed in the modal

  const inputRef = useRef(null); // Reference for focusing the title input field

  // Load saved notes from localStorage when the component mounts
  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem('notes')) || []; // Retrieve notes from localStorage
    setNotes(notesData); // Set retrieved notes in state
    inputRef.current.focus(); // Automatically focus on the title input field
  }, []);

  // Function to add a new note
  function addNote() {
    if (!title || !description) {
      showAlert('Please enter title and description!'); // Ensure both fields are filled
      return;
    }
    
    const newNotes = [{ title, description }, ...notes]; // Create a new note and add it to the list
    setNotes(newNotes); // Update state with new note
    localStorage.setItem('notes', JSON.stringify(newNotes)); // Save notes to localStorage
    resetForm(); // Clear input fields
    showAlert('Note added successfully!'); // Show success message
  }

  // Function to update an existing note
  function updateNote() {
    if (!title || !description) {
      alert('Please enter title and description!'); // Ensure fields are not empty
      return;
    }
    if (editIndex === null) return; // Prevent updating if no note is selected

    const updatedNotes = notes.map((note, index) => 
      index === editIndex ? { title, description } : note // Replace the note at editIndex
    );
    setNotes(updatedNotes); // Update state
    localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Save changes to localStorage
    setEditIndex(null); // Reset edit mode
    resetForm(); // Clear input fields
    showAlert('Note has been updated!'); // Show success message
  }

  // Function to clear input fields and refocus the title input
  function resetForm() {
    setTitle('');
    setDescription('');
    inputRef.current.focus();
  }

  // Function to delete all notes
  function deleteNotes() {
    setNotes([]); // Clear notes list
    localStorage.removeItem('notes'); // Remove from localStorage
    resetForm(); // Clear input fields
    showAlert('Notes deleted successfully!'); // Show success message
    setConfirmAction(null); // Reset confirmation action
  }

  // Function to delete a specific note by its index
  function deleteById(id) {
    showAlert(`Deleting note ${id + 1}`);
    const updatedNotes = notes.filter((_, index) => index !== id); // Remove selected note
    setNotes(updatedNotes); // Update state
    localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Save changes to localStorage
    showAlert('Note deleted successfully!'); // Show success message
    setConfirmAction(null); // Reset confirmation action
  }

  // Function to edit a specific note by its index
  function editById(id) {
    if (!notes[id]) return; // Prevent errors if index is invalid
    setTitle(notes[id].title); // Set selected note's title
    setDescription(notes[id].description); // Set selected note's description
    setEditIndex(id); // Store index of the note being edited
    inputRef.current.focus(); // Refocus input field
  }

  // Function to display an alert message in a modal
  function showAlert(message) {
    setModalMessage(message);
    setShowModal(true);
  }

  // Function to confirm deletion of all notes
  function confirmDeleteAll() {
    setModalMessage("Are you sure you want to delete all notes?");
    setConfirmAction(() => deleteNotes); // Set delete action
    setShowModal(true);
  }

  // Function to confirm deletion of a specific note
  function confirmDeleteById(id) {
    setModalMessage(`Are you sure you want to delete note ${id + 1}?`);
    setConfirmAction(() => () => deleteById(id)); // Set delete action
    setShowModal(true);
  }

  // Filter notes based on search term
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.description.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
      <h1>Notes</h1>
      <Modal show={showModal} handleClose={() => setShowModal(false)} title="Notification" modalMessage={modalMessage} confirmAction={confirmAction}/>
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

        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={editIndex === null ? addNote : updateNote}>{editIndex !== null ? "Update" : "Add"}</button>
          <button style={styles.button} onClick={confirmDeleteAll}>Clear All</button>
        </div>
      </div>

      <div style={styles.noteContainer}>
        {filteredNotes.length > 0 ?filteredNotes.map((note, index) => (
          <div key={index} style={styles.noteCard}>
            <span style={styles.actionBtn} onClick={() => confirmDeleteById(index)}>
              <img src='https://cdn-icons-png.flaticon.com/128/14044/14044168.png' alt='delete icon' height="20px"/>
            </span>
            <span style={styles.actionBtn} onClick={() => editById(index)}>
              <img src='https://cdn-icons-png.flaticon.com/128/14204/14204341.png' alt='edit icon' height="20px"/>
            </span>
            <div style={styles.tittleContainer}><strong>{index + 1}: {note.title}</strong></div>
            <p>{note.description}</p>
          </div>
        )): <h3>No notes found!</h3>}
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
