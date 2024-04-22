import fs from "fs";
import path from "path";

function handler(req, res) {
  const {id} = req.query;
  const dbPath = path.join(process.cwd(), "data", "db.json");
  const data = fs.readFileSync(dbPath);
  const parseData = JSON.parse(data);

  if (req.method == "GET") {
    const user = parseData.users.find((user) => user.id == +id);
    if (user) {
      return res.json({ user: user });
    } else {
      return res.status(404).json({ message: "user not found" });
    }
  } 
  
  else if (req.method == "DELETE") {
    const isUser = parseData.users.some((user) => user.id == id);
    if (!isUser)
      return res.status(404).json({ message: `user not found with id=${id}` });
    const users = parseData.users.filter((user) => user.id != id);
    const errorWriteFile = fs.writeFileSync(dbPath, JSON.stringify({...parseData,users:users}));

    if (errorWriteFile) {
      return res
        .status(501)
        .json({ message: `error delete user with id=${id}` });
    }
    return res.status(200).json({ message: `delete user with id=${id}` });
  } 
  
  else if (req.method == "PUT") {
    const {name,age, password}=req.body

    if(name.trim().length<2 || !String(age).trim() || password.trim().length<5){
      return res.status(422).json({ message: "data not valid" });
    }
    const isUser = parseData.users.some((user) => user.id == id);
    if (!isUser)
      return res.status(404).json({ message: `user not found with id=${id}` });

    parseData.users.some((user) => {
      if (user.id == id) {
        user.name =req.body.name
        user.age =req.body.age
        user.password =req.body.password
        return true
      }
    });
  
    const errorWriteFile = fs.writeFileSync(dbPath, JSON.stringify({...parseData}));

    if (errorWriteFile) {
      return res
        .status(501)
        .json({ message: `error update user with id=${id}` });
    }
    return res.status(200).json({ message: `update user with id=${id}` });
  }
}

export default handler;
