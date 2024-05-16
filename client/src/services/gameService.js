import { request } from "../api/request";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export const  create = async (gameData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(gameData)
    });

    const result = await response.json();
    return result;
}

export const getAll = async() => {
    const result = await request('GET', baseUrl);
    return Object.values(result);
}