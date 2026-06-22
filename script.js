function addPatient() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let disease = document.getElementById("disease").value;

    if(name === "" || age === "" || disease === ""){
        alert("Fill all fields");
        return;
    }

    let row = `
        <tr>
            <td>${name}</td>
            <td>${age}</td>
            <td>${disease}</td>
        </tr>
    `;

    document.getElementById("patientList").innerHTML += row;

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("disease").value = "";
}

function searchPatient(){
 let input =
 document.getElementById("searchInput")
 .value.toLowerCase();

 let rows =
 document.querySelectorAll("#patientList tr");

 rows.forEach(row=>{
   row.style.display =
   row.innerText.toLowerCase()
   .includes(input)
   ? "" : "none";
 });
}



let count = 0;

function addPatient(){

   count++;
   document.getElementById("patientCount")
   .innerText = count;

}
function addPatient() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let disease = document.getElementById("disease").value;

    if(name === "" || age === "" || disease === ""){
        alert("Fill all fields");
        return;
    }

    let row = `
    <tr>
        <td>${name}</td>
        <td>${age}</td>
        <td>${disease}</td>
    </tr>
    `;

    document.getElementById("patientList").innerHTML += row;

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("disease").value = "";
}

function addPatient() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let disease = document.getElementById("disease").value;

    let patients =
        JSON.parse(localStorage.getItem("patients")) || [];

    patients.push({
        name: name,
        age: age,
        disease: disease
    });

    localStorage.setItem(
        "patients",
        JSON.stringify(patients)
    );

    alert("Patient Added Successfully");
}

function addPatient(){

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let disease = document.getElementById("disease").value;

    let patients =
    JSON.parse(localStorage.getItem("patients")) || [];

    patients.push({
        name:name,
        age:age,
        disease:disease
    });

    localStorage.setItem(
        "patients",
        JSON.stringify(patients)
    );

    alert("Patient Added Successfully");
}


function addPatient() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let disease = document.getElementById("disease").value;

    if(name==="" || age==="" || disease===""){
        alert("Fill all fields");
        return;
    }

    let patients =
    JSON.parse(localStorage.getItem("patients")) || [];

    patients.push({
        name:name,
        age:age,
        disease:disease
    });

    localStorage.setItem(
        "patients",
        JSON.stringify(patients)
    );

    // Records table-ல் add ஆகும்
    document.getElementById("patientList").innerHTML += `
    <tr>
        <td>${name}</td>
        <td>${age}</td>
        <td>${disease}</td>
    </tr>
    `;

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("disease").value = "";
}
/*alter*/

let patients =
JSON.parse(localStorage.getItem("patients")) || [];

document.getElementById("patientCount").innerText =
patients.length;

let table =
document.getElementById("recentPatients");

patients.slice(-5).forEach(patient=>{
    table.innerHTML += `
    <tr>
      <td>${patient.name}</td>
      <td>${patient.age}</td>
      <td>${patient.disease}</td>
    </tr>`;
});

function searchPatient() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  let boxes = document.querySelectorAll(".patient-box");

  boxes.forEach(box => {
    let name = box.querySelector(".name").textContent.toLowerCase();

    if (name.includes(input) && input !== "") {
      box.classList.remove("hide");

      // highlight only name part
      box.querySelector(".name").classList.add("highlight");
    } else {
      box.classList.add("hide");
      box.querySelector(".name").classList.remove("highlight");
    }

    if (input === "") {
      box.classList.remove("hide");
      box.querySelector(".name").classList.remove("highlight");
    }
  });
}
