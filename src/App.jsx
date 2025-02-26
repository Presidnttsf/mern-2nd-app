import { useEffect, useState } from 'react';
import axios from 'axios';  // ✅ Import axios
import './App.css';
import Navbar from './tsf-components/Navbar';
import Notes from './tsf-components/Notes';
import Pagination from './tsf-components/mini-projects/Pagination';
import StudentNotes from './components/StudentNotes';
import NoteHookForm from './tsf-components/NoteHookForm';
import HomeoPatient from './tsf-components/mini-projects/HomeoPatient';
import ToDoApp from './tsf-components/ToDoApp';


function App() {
  const [dark, setDark] = useState(false);
  const [users, setUsers] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const URL = "https://dummyjson.com/users";

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setTimeout(() => {
          setUsers(response.data.users);
        }, 500);
      } catch (error) {
        console.log("This is my error", error);
      }
    };

    fetchData();
  }, []);

  // ✅ Fix dark mode function
  const toggleDarkMode = () => {
    setDark(prevDark => !prevDark);
    document.body.style.backgroundColor = dark ? "white" : "black";
    document.body.style.color = dark ? "black" : "green";
  };

  return (
    <div className={dark ? "dark-mode" : "light-mode"}>
      <Navbar dark={dark} toggleDarkMode={toggleDarkMode} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      
      <Notes searchTerm={searchTerm}/>
{/* <Pagination/> */}
      {/* <StudentNotes/> */}
      <NoteHookForm></NoteHookForm>
      {/* <HomeoPatient/> */}
      {/* <ToDoApp/> */}
    </div>
  );
}

export default App;
