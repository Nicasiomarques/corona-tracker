import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import GlobalStyle from './app.module.css';
import { fetchStats } from './Api';

export default class App extends React.Component {
    state = {
        stats: {},
    };

    async componentDidMount() {
        const fetchedState = await fetchStats();
        this.setState({ stats: fetchedState });
    }

    handleChangeCountry = async (country) => {
        const fetchedData = await fetchStats(country);
        this.setState({ stats: fetchedData, country: country });
    };

    render() {
        const { stats, country } = this.state;

        return (
            <div className={GlobalStyle.container}>
                <Cards stats={stats} />
                <CountryPicker handleChangeCountry={this.handleChangeCountry} />
                <Chart stats={stats} country={country} />
                <footer>
                    <p>Copyright&copy; Corona Not 2020. Todos os direitos reservados Nicásio da Silva.</p>
                </footer>
            </div>
        );
    }
}
