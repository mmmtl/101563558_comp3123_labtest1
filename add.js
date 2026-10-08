const fs = require("fs")
const path = require('path')

const folder_name = path.join(__dirname, "Logs/")

function createLogFiles(){
    if (!fs.existsSync(folder_name)){
        fs.mkdirSync("Logs")
        console.log("Directory 'Logs' was created successfully!")
    }

    for (i = 1; i <=10; i++){
        let name = "log" + i + ".txt"
        file_name = folder_name + name
        fs.writeFileSync(file_name, "Write something here")
        console.log(name + " was created")
    }
    
}

createLogFiles()