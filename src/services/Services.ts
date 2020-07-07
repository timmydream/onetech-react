const url = "https://reqres.in/api/";

const Services = async (values: {}, type: string) => {
    const res = await fetch(`${url}${type}`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (res.ok) {
        alert("Successful! Status: " + res.status);
    } else {
        alert("Error! Status: " + res.status);
    }
    return await res.json();
};

export { Services };
