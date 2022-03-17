document.getElementById('add-condition').addEventListener('click', () => {
    const inputID = document.getElementById("ID");
    const idValue = parseInt(inputID.value);
    if (!isNaN(idValue) && document.getElementById("date").value.length > 0) {
        const container = document.getElementById("inspection-details-data");
        const div = document.createElement('div');
        div.innerHTML = `
        <div>
            <label for="station">Station: </label>
            <input type="number" id="station" name="station" required>
            <br>
            <label for="main">Main:</label>
            <input type="text" id="main" name="main" required>
            <br>
        </div>
        `
        container.append(div);
        
    } else { 
        alert("Please provide correct input");
        inputID.value = "";
        document.getElementById("date").value = "";
    }
})


