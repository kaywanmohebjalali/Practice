
import fs from "fs";
import path from "path";

function handler(req, res) {
  const dbPath = path.join(process.cwd(), "data", "db.json");
  const data = fs.readFileSync(dbPath);
  const parseData = JSON.parse(data);
  
  switch (req.method) {
    case "GET":
     
      return res.json(parseData.users);

    case "POST":
    const {name,age, password}=req.body
    if(name.trim().length<2 || !String(age).trim() || password.trim().length<5){
      return res.status(422).json({ message: "data not valid" });
    }
  
      const d = new Date();
      let time = d.getTime();
      // const newUSer = { id: crypto.randomUUID(), ...req.body };
      const newUSer = { id: time, ...req.body };
      const existence = parseData.users.find(
        (item) => item.name == newUSer.name
      );

      if (!existence) {
        parseData.users.push(newUSer);
        const errorWriteFile = fs.writeFileSync(
          dbPath,
          JSON.stringify(parseData)
        );
        if (errorWriteFile) {
          return res.status(501).json({ message: "error create user" });
        }
        return res
          .status(201)
          .json({ message: "create new user", user: newUSer });
      } else {
        return res
          .status(200)
          .json({ message: "existence user", user: newUSer });
      }

  
    default:
      return res.json({ message: "users" });
  }
}

export default handler;
