const student = require("./student");
const http = require("http");

const PORT = 3000;

function startServer() {
  console.log(`Server is running on port ${PORT}`);
  console.log(
    `My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}`
  );
}

http.createServer((req, res) => {}).listen(PORT, startServer);
