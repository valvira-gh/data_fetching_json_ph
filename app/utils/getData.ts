export const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", { next: { revalidate: 3800, tags: ['collection'] } });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the cöpsest error boundary
        throw new Error("Failed to fetch");
    }

    return res.json();
}

