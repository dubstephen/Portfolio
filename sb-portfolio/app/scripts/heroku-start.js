const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
console.log("-------------------------------------------------")
console.log("Working Directory: ", __dirname)
// Your static pre-build assets folder
app.use(express.static(path.join(__dirname, '../../public')));
// Root Redirects to the pre-build assets
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '../..'));
});
// Any Page Redirects to the pre-build assets folder index.html that // will load the react app
// app.get('*', function(req,res){
//   res.sendFile(path.join(__dirname, '../../index.tsx'));
// });
app.listen(port, ()=>{
  console.log("Server is running on port: ", port)
})