import { fetchCoin } from "./api.js";

const results = document.getElementById("results");

async function loadBitcoin() {

    try {

        const data = await fetchCoin();

        results.innerHTML = `
            <div class="card">

                <h2>
                    ${data.name}
                    (${data.symbol.toUpperCase()})
                </h2>

                <p>
                    Price:
                    $${data.market_data.current_price.usd}
                </p>

                <p>
                    24h Change:
                    ${data.market_data.price_change_percentage_24h}%
                </p>

            </div>
        `;

    } catch (error) {

        results.innerHTML =
        `<p>Failed to load data</p>`;

        console.error(error);
    }
}

loadBitcoin();