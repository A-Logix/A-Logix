// Load saved notes on startup
window.onload = function () {
    loadNotes();
};

function addNote() {
    let noteText = document.getElementById("note-input").value;

    if (noteText.trim() === "") {
        alert("Please enter a note!");
        return;
    }

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));

    document.getElementById("note-input").value = "";
    loadNotes();
}

function loadNotes() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    let notesContainer = document.getElementById("notes-container");

    notesContainer.innerHTML = "";

    notes.forEach((note, index) => {
        let noteDiv = document.createElement("div");
        noteDiv.classList.add("note");

        noteDiv.innerHTML = `
            <p>${note}</p>
            <button class="delete-btn" onclick="deleteNote(${index})">X</button>
        `;

        notesContainer.appendChild(noteDiv);
    });
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes"));
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}
