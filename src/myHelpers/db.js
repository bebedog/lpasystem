// This is the helper function file for database fetching


// This function has no parameters 
// (but in the future a few parameters will be added for a more customized display of data e.g. alphabetical etc.,)


/**
 * 
 * @returns an array of object which is the result of the query.
 */
const fetchClients = () => {
    return(
        new Promise(async (resolve, reject) => {
            var requestOptions = {
                method: 'POST',
                redirect: 'follow',
            }
            
            await fetch('/clients', requestOptions)
            .then(response => response.text())
            .then(text => {
                const myObj = JSON.parse(text)
                console.log(myObj)
                resolve(myObj.rows)
            })
        })
    )
}

export {fetchClients}