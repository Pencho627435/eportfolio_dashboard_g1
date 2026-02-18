
function getMisModulosImpartidos() {
    return fetch("https://mocki.io/v1/722a6a40-46e3-40c4-9950-980de6eac720")
        .then((response) => {
            return (response.json())
        })
        .catch((error) => {
            return ([])
        })

}

export default getMisModulosImpartidos