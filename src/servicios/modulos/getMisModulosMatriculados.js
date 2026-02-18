
function getMisModulosMatriculados() {
    return fetch("https://mocki.io/v1/81bf4fe2-7d55-454b-9402-23b1739ead20")
        .then((response) => {
            return (response.json())
        })
        .catch((error) => {
            return ([])
        })

}

export default getMisModulosMatriculados