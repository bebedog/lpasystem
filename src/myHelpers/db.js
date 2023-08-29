/**
 * ================================================================================
 * FILE        : db.js
 * AUTHOR      : Jayson O. Amodia, Kathryn Marie P. Sigaya
 * DESCRIPTION : js file that handles the database-related helper functions
 * COPYRIGHT   : 31 July 2023
 * REVISION HISTORY
 * Date:            By:        Description:
 * 31 July 2023    Amodia      Creation of file
 * ================================================================================
 */

import {json, redirect} from "react-router-dom";

// This is the helper function file for database fetching
// This function has no parameters 
// (but in the future a few parameters will be added for a more customized display of data e.g. alphabetical etc.,)

/**
 *
 * @returns an array of object which is the result of   the query.
 */
const fetchClients = () => {
    return (
        new Promise((resolve, reject) => {
            var requestOptions = {
                method: 'POST',
                redirect: 'follow',
            }

            fetch('/clients', requestOptions)
                .then(response => response.text())
                .then(text => {
                    const myObj = JSON.parse(text)
                    console.log(myObj)
                    resolve(myObj.rows)
                })
                .catch(error => reject(error))
        })
    )
}


/**
 * 
 * @param {Integer} id id number of the entry to be deleted.
 * @returns returns a message <String> that lets the user know about the result.
 */
const deleteEntryAsync = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "clinic_id": id
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return (
        new Promise((resolve, reject) => {
            fetch('/delete', requestOptions)
                .then(response => response.text())
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    )
}

const deleteEntry = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "clinic_id": id
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return (
        fetch('/delete', requestOptions)
            .then(response => response.text())
            .then(result => result)
            .catch(error => error)
    )
}

export { fetchClients, deleteEntryAsync, deleteEntry }