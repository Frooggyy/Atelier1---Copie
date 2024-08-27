import http from 'http';
import queryString from "query-string";
const server = http.createServer((req, res) => {
console.log(req.url);
let reqInfo = {url:req.url, method:req.method};
 res.writeHead(200, {"Content-Type": "application/json"});
 res.end(JSON.stringify(reqInfo));

});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));