const { getAllFilesInDirectorySync } = require('./file');


try {
    const files = getAllFilesInDirectorySync();
    console.log('files', files);
} catch (error) {
    console.log(error.message);
}


