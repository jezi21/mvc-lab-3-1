const student = require("./student");
const http = require("http");

const PORT = 3000;
const title = "About student";

function hello() {
  return `My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}`;
}

function startServer() {
  console.log(`Server is running on port ${PORT}`);
}

const reqListener = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head><title>${title}</title></head>
    <body><p>${hello()}</p></body>
    </html>`
  );
  res.end();
 
};

http.createServer(reqListener).listen(PORT, startServer);
