const url = "https://jsonplaceholder.typicode.com/posts";

const getPosts = async () => {
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });

    if (!res.ok) {
        throw new Error(`Could not fetch: ${res.status}`);
    }

    return await res.json();
};

const postNote = async () => {
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });

    return await res.json();    
};

export { getPosts, postNote };
