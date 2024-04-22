import fs from "fs";
import path from "path";

function handler(req, res) {
  const id = req.query.id;
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
    const user = parseData.users.find((user) => user.id == id);
    if (!user)
      return res.status(404).json({ message: `user not found with id=${id}` });
    const users = parseData.users.filter((user) => user.id != id);
    parseData.users = users;
    const errorWriteFile = fs.writeFileSync(dbPath, JSON.stringify(parseData));

    if (errorWriteFile) {
      return res
        .status(501)
        .json({ message: `error delete user with id=${id}` });
    }
    return res.status(200).json({ message: `delete user with id=${id}` });
  } 
  
  
  
  else if (req.method == "PUT") {
    const id = req.query.id;
    const user = parseData.users.find((user) => user.id == id);
    if (!user)
      return res.status(404).json({ message: `user not found with id=${id}` });
    const users = parseData.users.map((user) => {
      if (user.id == id) {
        return { id: user.id, ...req.body };
      } else {
        return user;
      }
    });

    parseData.users = users;
    const errorWriteFile = fs.writeFileSync(dbPath, JSON.stringify(parseData));

    if (errorWriteFile) {
      return res
        .status(501)
        .json({ message: `error update user with id=${id}` });
    }
    return res.status(200).json({ message: `update user with id=${id}` });
  }
}

export default handler;
