const apiKey = "419a21588766fe723fa73caa907dea46";

// Arrow Function
const showMessage = (msg, callback) => {

    alert(msg);

    callback();
};

// Callback Function
const callbackFunction = () => {

    console.log("Callback Executed");
};

// Promise Example
const fetchWeatherPromise = (url) => {

    return new Promise((resolve, reject) => {

        fetch(url)

        .then(response => {

            if(response.ok) {
                resolve(response.json());
            }
            else {
                reject("Weather Data Not Found");
            }
        })

        .catch(error => reject(error));
    });
};

// Async/Await
async function getWeather() {

    const city = document.getElementById("city").value;

    const url =
`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {

        showMessage(
            "Fetching Weather Data...",
            callbackFunction
        );

        const data = await fetchWeatherPromise(url);

        // Extract Data
        const labels = [];
        const temperatures = [];

        data.list.slice(0, 8).forEach(item => {

            labels.push(item.dt_txt);

            temperatures.push(item.main.temp);
        });

        displayGraph(labels, temperatures);

    }

    catch(error) {

        alert(error);
    }
}

// Display Graph
const displayGraph = (labels, temperatures) => {

    const ctx =
        document.getElementById("weatherChart");

    new Chart(ctx, {

        type: "line",

        data: {

            labels: labels,

            datasets: [{
                label: "Temperature °C",

                data: temperatures,

                borderWidth: 2
            }]
        },

        options: {

            responsive: true
        }
    });
};
