import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDaily } from '../../Api';
import style from './style.module.css';

export default function Chart({ stats: { confirmed, recovered, deaths }, country }) {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchApi = async () => {
            const initialDailyData = await fetchDaily();
            setDailyData(initialDailyData);
        };

        fetchApi();
    }, []);

    const lineChart = dailyData.length ? (
        <Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [
                    {
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infectados',
                        borderColor: '#3333ff',
                        fill: true,
                    },
                    {
                        data: dailyData.map(({ recovered }) => recovered),
                        label: 'Recuperados',
                        borderColor: 'rgba(0, 255, 0, 0.8)',
                        fill: true,
                    },
                    {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Mortes',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    },
                ],
            }}
        />
    ) : null;

    const barChart = dailyData.length ? (
        <Bar
            data={{
                labels: ['Infectados', 'Recuperados', 'Mortos'],
                datasets: [
                    {
                        label: 'Pessoas',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                        ],
                        data: [confirmed.value, recovered.value, deaths.value],
                    },
                ],
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Situação actual em ${country}` },
            }}
        />
    ) : null;

    return (
        <div className={style.container}>{country ? barChart : lineChart}</div>
    );
};
