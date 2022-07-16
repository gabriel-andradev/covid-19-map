import React, { memo } from 'react'
// import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases, active, critical } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width="auto" height="auto">Sem dados</Skeleton>

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#FF0000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label="Total de mortos" color="#E95078" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#67C887" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(active)} label="Casos ativos" color="#FFA500" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(critical)} label="Casos ativos critícos" color="#8B0000" />
      </Grid>
    </Grid>
  )
}


export default memo(Board)