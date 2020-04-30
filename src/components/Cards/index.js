import React from 'react';
import CountUp from 'react-countup';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import cx from 'classnames';

import style from './style.module.css';

export default function Cards({
    stats: { deaths, confirmed, recovered, lastUpdate },
}) {
    if (!confirmed) {
        return 'Carregando...';
    }

    const formatDate = (date) =>
        new Date(date).toLocaleDateString('pt-BR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

    return (
        <div className={style.container}>
            <Grid container spacing={3} justify="center">
                <Grid
                    item
                    component={Card}
                    xs={12}
                    md={3}
                    className={cx(style.card, style.infected)}
                >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infetados
                        </Typography>
                        <Typography varaint="h5" gutterBottom>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator="."
                            />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            {formatDate(lastUpdate)}
                        </Typography>
                        <Typography varaint="body2" gutterBottom>
                            Numero de infectados do COVID-19
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={3}
                    className={cx(style.card, style.recovered)}
                    component={Card}
                >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recuperados
                        </Typography>
                        <Typography varaint="h5" gutterBottom>
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator="."
                            />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            {formatDate(lastUpdate)}
                        </Typography>
                        <Typography varaint="body2" gutterBottom>
                            Numero de recuperdos do COVID-19
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={3}
                    className={cx(style.card, style.deaths)}
                    component={Card}
                >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Mortos
                        </Typography>
                        <Typography varaint="h5" gutterBottom>
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator="."
                            />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            {formatDate(lastUpdate)}
                        </Typography>
                        <Typography varaint="body2" gutterBottom>
                            Numero de mortos do COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}
