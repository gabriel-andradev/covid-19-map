import React, { memo } from 'react'
// import PropTypes from 'prop-types'
import { Grid } from '../../../components'
// import { Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases, active, critical, casesPerOneMillion } = data

  const getValue = (value) => value ? value : 0

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases).toLocaleString(['ban', 'id'])} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayDeaths).toLocaleString(['ban', 'id'])} label="Óbitos hoje" color="#FF0000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayCases).toLocaleString(['ban', 'id'])} label="Casos hoje" color="#000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths).toLocaleString(['ban', 'id'])} label="Total de mortos" color="#E95078" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(recovered).toLocaleString(['ban', 'id'])} label="Total de recuperados" color="#67C887" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(active).toLocaleString(['ban', 'id'])} label="Casos ativos" color="#FFA500" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(critical).toLocaleString(['ban', 'id'])} label="Casos ativos critícos" color="#8B0000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(casesPerOneMillion).toLocaleString(['ban', 'id'])} label="Casos por milhão" color="#302b63" />
      </Grid>
    </Grid>
  )
}


export default memo(Board)