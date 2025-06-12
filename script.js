const form = document.getElementById('studentForm');
const studentTableBody = document.getElementById('studentTableBody');

let students = [];

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const roll = document.getElementById('roll').value.trim();
  const studentClass = document.getElementById('class').value.trim();

  if (name && roll && studentClass) {
    const student = { name, roll, studentClass };
    students.push(student);
    displayStudents();
    form.reset();
  }
});

function displayStudents() {
  studentTableBody.innerHTML = '';
  students.forEach((student, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.roll}</td>
      <td>${student.studentClass}</td>
      <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
    `;
    studentTableBody.appendChild(row);
  });
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}
