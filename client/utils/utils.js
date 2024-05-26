const api = 'http://localhost:5000/books'

export default async function postBook(data) {
    try {
        const response = await fetch(api, {
            method: 'POST',
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log('Success:', responseData);
        return responseData;
    } catch (error) {
        console.error('Error:', error);
        return null; 
    }
}

export default async function getBooks() {
    try {
        const response = await fetch(api, {
            method: "GET"
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e);
        return null;
    }
}

