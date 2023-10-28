const fs = require('fs')
const process = require('process')
const axios = require('axios')


if (process.argv[2]){
    cat(process.argv[2]);

} else{
    cat("urls.txt");
}



function handlOutput(path, error) {
    if (error) {
        fs.writeFile(path, error, 'utf8', function (error) {
            if (error) {
                console.log(error)
                process.exit(1)
            }
        })
    } else {
        console.log(data)
    }


}


async function cat(path) {
    try{
        fs.readFile(path, 'utf8', async function (error, data) {
            if (error) {
                console.log(error)
                process.exit(1)
            } else {
                lines = data.split("\n")
                let urlResult           
                for (let i = 0; i < lines.length; i++) {
                    if (lines[i] == ''){
                        continue
                    }
                    console.log("pending", i)
                    console.log(lines[i])
                    try{
                        urlResult = await webCat(lines[i])
                    } catch (error){
                        console.log("URL not found", lines[i]); 
                        continue 
                    }
                    let filename = createFileNameFromUrl(lines[i]) + ".txt"
                    fs.writeFile(filename, urlResult, (err) => {
                        if (err) {
                            console.error('Error creating the file:', err);
                        } else {
                            console.log('File created successfully.');
                        }
                    });
                }
            }
        })
    } catch(error){ console.log(error)}
}


async function webCat(url) {
    console.log(url)
    if (url.slice(0, 4) === 'http') {
        let urlResult = await axios.get(`${url}`)
        return await urlResult.data
    } else {
    console.log("NOT URL")
    }
}


function createFileNameFromUrl(str){
    let strArr = str.split("//")
    if (strArr[1].includes("/")){
        strArr = strArr[1].split("/")
        return (strArr[0])
    }
    else{
        return (strArr[1])
    }
}
