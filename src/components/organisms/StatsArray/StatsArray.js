import React from 'react'
import StatSelector from '../../molecules/StatSelector/StatSelector'

// StatsArray will expect to receive the stats object in app state.
// Expected props: stats, raceModActive

const StatsArray = (props) => {
  const statsArr = Object.keys(props.stats).map((stat) => {
    return (
      <StatSelector
        label={`${stat.slice(0, 3).toUpperCase()}:`}
        selectedStatVal={props.stats[stat].input}
        raceVal={props.stats[stat].race}
        raceModActive={props.raceModActive}
        key={stat}
      />
    )
  })
  console.log(statsArr)
  return (
    <React.Fragment>
      {statsArr}
    </React.Fragment>
  )
}

export default StatsArray
