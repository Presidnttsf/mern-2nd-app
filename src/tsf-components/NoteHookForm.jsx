// Import necessary hooks from React and React Hook Form
import { useState } from "react";
import { useForm } from "react-hook-form";

const NoteHookForm = () => {
  // Initialize useForm and destructure required methods and properties
  const {
    register, // Register function to connect input fields to React Hook Form
    handleSubmit, // Function to handle form submission
    reset, // Function to clear the form after submission
    formState: { errors }, // Extract errors from formState
  } = useForm(); 

  // useState hook to manage the notes list
  const [notes, setNotes] = useState([]);

  // Function to handle form submission
  const onSubmit = (data) => {
    // Add new note with a unique ID
    setNotes([{ id: Date.now(), ...data }, ...notes]);
    reset(); // Clear the form after submission
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Notes App</h2>

      {/* Form Submission */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title Input Field */}
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: "Title is required" })} // Apply validation
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        {/* Display error message if title is empty */}
        {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}

        {/* Description Input Field */}
        <textarea
          placeholder="Description"
          {...register("description", { required: "Description is required" })} // Apply validation
          style={{ width: "100%", marginBottom: "10px", padding: "8px", height: "80px" }}
        />
        {/* Display error message if description is empty */}
        {errors.description && <p style={{ color: "red" }}>{errors.description.message}</p>}

        {/* Submit Button */}
        <button type="submit" style={{ padding: "8px 20px" }}>Add Note</button>
      </form>

      {/* Display Notes Section */}
      <div style={{ marginTop: "20px", textAlign: "left" }}>
        <h3>Your Notes</h3>
        {notes.map((note) => (
          <div key={note.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <p><strong>ID:</strong> {note.id}</p>
            <h4>{note.title}</h4>
            <p>{note.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteHookForm;
