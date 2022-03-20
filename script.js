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
        div.classList.add('bg-light', 'container-fluid', 'mt-3', 'mx-auto', 'p-5');
        div.innerHTML = `
        <!-- header part  -->
            <div class="row text-center">
                <div class="col-2">
                    <h2> <span class='text-primary fw-bold'>ID: </span> ${idValue}</h2>
                </div>
                <div class="col-3">
                    <h2><span class='text-primary fw-bold'>DATE: </span> ${dateObj.getDate()}/${(dateObj.getMonth()+1)}/${dateObj.getFullYear()}</h2>
                </div>
                <div class="col-7">
                    <h2><span class='text-primary fw-bold'>CODE SYSTEM: </span> ${codeSystemValue.toUpperCase()}</h2>
                </div>
            </div>
            <div class="row fs-2 ms-5 mt-5 ">
                <div class="col-12">
                    <label for="station" class="fw-bold me-5">STATION : </label>
                    <input type="number" id="station" name="station" class="text-center border border-primary border-3">
                </div>
            </div>
            <div class="row mt-2 fs-2 ms-5 mt-5">
                <div class="col-3">
                    <label for="main" class="fw-bold">MAIN</label>
                    <div class="row">
                        <div class="col-12 mt-3">
                            <select class="form-select form-select-sm text-center border border-primary border-3 fs-2">
                                <option value="1">ABC</option>
                                <option value="2">DEF</option>
                                <option value="3">XYZ</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-8 ms-auto text-center">
                    <label for="main" class="fw-bold">CHARACTERIZATION </label>
                    <div class="row">
                        <div class="col-4 mt-3">
                            <select class="form-select form-select-sm text-center border border-primary border-3 fs-2">
                                <option value="1">A</option>
                                <option value="2">B</option>
                                <option value="3">C</option>
                            </select>
                        </div>
                        <div class="col-4 mt-3">
                            <select class="form-select form-select-sm text-center border border-primary border-3 fs-2">
                                <option value="1">D</option>
                                <option value="2">E</option>
                                <option value="3">F</option>
                            </select>
                        </div>
                        <div class="col-4 mt-3">
                            <select class="form-select form-select-sm text-center border border-primary border-3 fs-2">
                                <option value="1">X</option>
                                <option value="2">Y</option>
                                <option value="3">Z</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row fs-2 ms-5 mt-5 text-start ">
                <div class="col-6">
                    <label for="quant-1" class="fw-bold">QUANT 1: </label>
                    <input type="number" id="quant-1" name="quant-1" class="text-center border border-primary border-3">
                </div>
                <div class="col-6">
                    <label for="quant-2" class="fw-bold">QUANT 2:</label>
                    <input type="number" id="quant-2" name="quant-2" class="text-center border border-primary border-3">
                </div>

            <div class="row mt-4 text-center">
                <div class="col-12 mt-5">
                    <button class="btn btn-lg btn-primary me-5" onclick="saveContent()">SAVE</button>
                    <button class="btn btn-lg btn-danger" onclick="removeContent()" >REMOVE</button>
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
    const parentContent = event.target.parentNode.parentNode.parentNode.parentNode;
    parentContent.style.display = "none";
}

//handling save click and update click
const saveContent = () => { 
    const parentContent = event.target.parentNode.parentNode.parentNode.parentNode;
    const inputFields = parentContent.getElementsByTagName('input');
    const dropdownFields = parentContent.getElementsByTagName('select');
    if (event.target.textContent == "SAVE") {
        for (input of inputFields) {
            input.setAttribute("disabled", "true");
        }

        for (dropdown of dropdownFields) {
            dropdown.setAttribute("disabled", "true");
        }
        event.target.textContent = "UPDATE";
    } else if (event.target.textContent == "UPDATE") { 
        for (input of inputFields) {
            input.removeAttribute("disabled");
        }

        for (dropdown of dropdownFields) {
            dropdown.removeAttribute("disabled");
        }
        event.target.textContent = "SAVE";
    }
    

}


