/*import fs from 'fs';

// readfile() - callback - non blocking

fs.readFile('./test.txt', 'utf8', (err,data) => {
    if(err) throw err;
    console.log(data);
});


// readFileSync() - synchronous version - blocking
const data = fs.readFileSync('./test.txt','utf8');
console.log(data);
*/
// now using the promise version - comment all above

import fs from 'fs/promises';

// readfile -  promise.then()

fs.readFile('./test.txt','utf8')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// async await version
 const rdFile = async() => {
    try {
        const data = await fs.readFile('./test.txt','utf8');
        console.log(data);
    } catch (error) {
        console.log(error)
    }
 };

 // these are 4 different ways to read files,
 // similary do for write

 const writeFile = async() => {
    try {
        await fs.writeFile('./test.txt','Hello, I am writing new line to file to test functionality');
        console.log('File Wrtitten successfully');
    } catch (error) {
        console.log(error);
    }
    
 }
 writeFile(); // overWrites existing data LOL, need to append

 // appendFile
 const appendFile = async() => {
    try {
        await fs.appendFile('./test.txt','\n test append text');
        console.log("File appended successfully");
    } catch (error) {
        console.log(error);
    }
 }
 appendFile();
 rdFile();