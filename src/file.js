const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const pathToDirectory = process.env.pathToDirectory;

const getAllFilesInDirectorySync = () =>{
    
    const files = fs.readdirSync( path.resolve(pathToDirectory));
    return files;

}

const getAllFilesInDirectory = ()=>{
    
    const files = fs.readdir( path.resolve(pathToDirectory), (err, files)=>{
        if(err) {
            console.error( err.message);
            console.log('done');
            return
        };
        return files;
    });
}

module.exports = { getAllFilesInDirectory, getAllFilesInDirectorySync};