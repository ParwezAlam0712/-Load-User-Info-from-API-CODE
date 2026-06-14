const API_URL =
"https://api.coingecko.com/api/v3";

// Fetch Coin Data

export async function fetchCoin(
    coin = "bitcoin"
){

    try{

        const response = await fetch(

`${API_URL}/coins/markets?vs_currency=usd&ids=${coin}`

        );

        const data =
        await response.json();

        if(data.length === 0){

            throw new Error(
                "Coin not found"
            );
        }

        return data[0];

    }catch(error){

        console.log(error);

        throw error;
    }
}

// Fetch Chart History

export async function fetchHistory(
    coin = "bitcoin"
){

    try{

        const response = await fetch(

`${API_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`

        );

        const data =
        await response.json();

        return data;

    }catch(error){

        console.log(error);

        throw error;
    }
}