import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchStats = async (country) => {
    let changeableUrl = country ? `${url}/countries/${country}` : url;

    try {
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = await axios.get(changeableUrl);

        return {
            deaths,
            confirmed,
            recovered,
            lastUpdate,
        };
    } catch (error) {
        console.log(error);
    }
};

export const fetchDaily = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        return data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            recovered: dailyData.recovered.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
    } catch (error) {
        console.log(error);
    }
};

export const fetchByCountries = async () => {
    try {
        const {
            data: { countries },
        } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
};
