import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import MenuAppBar from '../../components/MenuAppBar'
import Drawer from '../../components/Drawer'

const Welcome = () => (
  <center>
    <img style={{ paddingTop: '16px' }} src="/tcvsn-ico.png" />

    <Typography style={{ padding: '16px' }} variant="display1">
      Welcome to the Veterans Support Network
    </Typography>

    <Link to="/resources">
      <Button variant="raised" color="primary">
        Browse Resources
      </Button>
    </Link>
  </center>
)

const Home = props => {
  return (
    <div style={{ padding: '60px' }}>
      <MenuAppBar title="Home" />
      <Welcome />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    home: state.appData
  }
}

const connector = connect(mapStateToProps)

export default Drawer(connector(Home))
