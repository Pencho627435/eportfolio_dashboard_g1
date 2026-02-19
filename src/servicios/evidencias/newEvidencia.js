function newEvidencia(evidencia_) {
    return fetch("https://mocki.io/v1/a9dc8a4c-3982-4336-be44-18cc8ad66a6e",{
        method: "POST",
        body: JSON.stringify(evidencia_),
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    }).then(response => {
        const data = response.json();
        return data;
    })
    .catch((error) => {
        console.log(error);
        return ({});
    })
    
}

export default newEvidencia