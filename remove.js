const fs = require("fs")
const path = require('path')

const folder_name = path.join(__dirname, "Logs/")

function removeLogFiles(folder_name){
    if (fs.existsSync(folder_name)){
        const files = fs.readdirSync(folder_name, { withFileTypes: true })
        
        files.map(file => {
            file_path = path.join(folder_name, file.name)
            fs.unlinkSync(file_path)
            console.log("Deleted file " + file.name)
        })
        
        fs.rmSync(folder_name, { recursive: true, force: true })
    }
    else{
        console.log("Can't find folder in path: " + folder_name)
    }
}

removeLogFiles(folder_name)