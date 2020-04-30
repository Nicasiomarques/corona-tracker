import React, { useEffect, useState } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';

import { fetchByCountries } from '../../Api';

export default function CountryPicker({ handleChangeCountry }) {
    const [fechedCountries, setFechedCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setFechedCountries(await fetchByCountries());
        };

        fetchApi();
    }, [fechedCountries]);

    return (
        <FormControl>
            <NativeSelect onChange={e => handleChangeCountry(e.target.value)}>
                <option value="">Global</option>
                {fechedCountries.map((country, i) => (
                    <option key={i} value={country}>
                        {country}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );
}
