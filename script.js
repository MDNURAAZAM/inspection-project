document.getElementById('add-condition').addEventListener('click', () => {
    // getting input id value
    const inputID = document.getElementById("ID");
    const idValue = parseInt(inputID.value);
    // getting input date value
    const inputDate = document.getElementById("date");
    const dateValue = inputDate.value;
    const dateObj = new Date(dateValue);
    //getting code system input
    const codeSystemValue = document.getElementById("code-system").value;
    // empty input handled
    if (!isNaN(idValue) && dateValue.length > 0) {
        const container = document.getElementById("inspection-details-data");
        const div = document.createElement('div');
        div.classList.add('p-5');
        div.innerHTML = `
            <h2>ID: ${idValue} Date: ${dateObj.getDate()}/${(dateObj.getMonth()+1)}/${dateObj.getFullYear()}    Code System: ${codeSystemValue.toUpperCase()}</h2>
            
            <div class="row">
                <div class="col-12">
                    <label for="station">Station: </label>
                    <input type="number" id="station" name="station">
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-2">
                    <label for="main">Main:</label>
                    <div class="row">
                        <div class="col-12">
                            <select class="form-select form-select-sm">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-7">
                    <label for="main">Characterizations: </label>
                    <div class="row">
                        <div class="col-4">
                            <select class="form-select form-select-sm">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <select class="form-select form-select-sm">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <select class="form-select form-select-sm">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-2">
                <div class="col-2">
                    <label for="quant-1">Quant 1</label>
                    <div class="row">
                        <div class="col-12">
                            <input type="number" id="quant-1">
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <label for="quant-2">Quant 2</label>
                    <div class="row">
                        <div class="col-12">
                            <input type="number" id="quant-2">
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-6">
                    <button class="btn btn-primary" onclick="saveContent()">Save</button>
                    <button onclick="removeContent()" class="btn btn-danger">Remove</button>
                </div>
            </div>
        `
        container.append(div);
        
    } else { 
        alert("Please provide correct input");
        inputID.value = "";
        inputDate.value = "";
    }
})

//removing content on button click
const removeContent = () => { 
    const parentContent = event.target.parentNode.parentNode.parentNode;
    parentContent.style.display = "none";
}

//handling save click and update click
const saveContent = () => { 
    const parentContent = event.target.parentNode.parentNode.parentNode;
    const inputFields = parentContent.getElementsByTagName('input');
    const dropdownFields = parentContent.getElementsByTagName('select');
    if (event.target.textContent == "Save") {
        for (input of inputFields) {
            input.setAttribute("disabled", "true");
        }

        for (dropdown of dropdownFields) {
            dropdown.setAttribute("disabled", "true");
        }
        event.target.textContent = "Update";
    } else if (event.target.textContent == "Update") { 
        for (input of inputFields) {
            input.removeAttribute("disabled");
        }

        for (dropdown of dropdownFields) {
            dropdown.removeAttribute("disabled");
        }
        event.target.textContent = "Save";
    }
    

}


