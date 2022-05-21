import { useEffect } from "react";

const AddTask = (data) => {

    fetch('http://localhost:7000/arrayDatos', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
        window.location.reload();
}

export default AddTask
