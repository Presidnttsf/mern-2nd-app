import React from 'react'

function FetchEx() {
    const studentPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                response: {
                    status: 200,
                    message: "Success",
                    data: {
                        student: {
                            id: 101,
                            name: "John Doe",
                            age: 20,
                            subjects: ["Math", "Science", "English"]
                        }
                    }
                }
            });
        }, 1000);
    });
    
    // Accessing the nested data
    studentPromise
        .then(result => {
            console.log("Full Response:", result);
            console.log("Status:", result.response.status);
            console.log("Message:", result.response.message);
            console.log("Student Data:", result.response.data.student);
            console.log("Student Name:", result.response.data.student.name);
            console.log("Subjects:", result.response.data.student.subjects);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    
  
  
  
  
    return (
    <div>
<h1>Fetch Tutorial</h1>


    </div>
  )
}

export default FetchEx