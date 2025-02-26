import React, { useEffect, useState } from 'react';

function StudentNotes() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [notes, setNotes] = useState([]);

    // Get notes from local storage on mount
    useEffect(() => {
        const data = localStorage.getItem('notes');
        if (data) {
            try {
                setNotes(JSON.parse(data)); // Parse only if valid
            } catch (error) {
                console.error("Error parsing notes from localStorage", error);
                setNotes([]); // Reset if there's an issue
            }
        }
    }, []);

    // Add a new note
    function addNote() {
        if (!title || !description) {
            window.alert('Title and Description cannot be empty');
            return;
        }

        const newNotes = [{ title, description }, ...notes]; // Create updated notes array
        setNotes(newNotes); // Update state
        localStorage.setItem('notes', JSON.stringify(newNotes)); // Store updated notes in localStorage

        setTitle(''); // Reset input fields
        setDescription('');
    }

    // Clear all notes
    function deleteAllNotes() {
        setNotes([]);
        localStorage.removeItem('notes');
    }

    return (
        <div>
            <h1>Student Notes</h1>
            <div style={styles.container}>
                <input
                    type="text"
                    style={styles.inputF}
                    value={title}
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    type="text"
                    style={styles.inputF}
                    value={description}
                    placeholder="Write notes here"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <span>
                    <button onClick={addNote}>ADD</button>
                </span>
                <span>
                    <button onClick={deleteAllNotes}>Clear All</button>
                </span>
            </div>
            {notes.length === 0 ? (
                <p>No notes available.</p>
            ) : (
                notes.map((note, i) => (
                    <div key={i} style={styles.note}>
                        <h4>{note.title}</h4>
                        <p>{note.description}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default StudentNotes;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '10px',
    },
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
    note: {
        border: '1px solid black',
        padding: '10px',
        margin: '5px 0',
        backgroundColor: '#f9f9f9',
    },
};
