function getTareasRA() {
    return fetch("https://mocki.io/v1/a9dc8a4c-3982-4336-be44-18cc8ad66a6e")
        .then((response) => {
            return (response.json())
        })
        .catch((error) => {
            return ([])
        })

}

export default getTareasRA