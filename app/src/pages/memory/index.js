import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import MenuAppBar from '../../components/MenuAppBar'
import Drawer from '../../components/Drawer'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import Icon from 'material-ui/Icon'
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: theme.spacing.unit * 3
  }),
  cleaned: {
    textDecoration: 'none'
  },
  circl: {
    background: '#E91E63',
    color: 'white',
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: '25px',
    verticalAlign: 'middle',
    padding: '12px'
  }
})

const Memory = props => {
  return (
    <div style={{ paddingTop: '30px' }}>
      <MenuAppBar title="Legal" />
      <div>
        <Paper className={props.classes.root}>
          <ListItem>
            <Icon className={props.classes.circl}>favorite</Icon>
            <ListItemText
              primary="In Loving Memory of Eileen S. Hadbavny"
              secondary="Co-Founder of the Tri-County Veterans Support Network"
            />
          </ListItem>
          <Typography>
            Eileen passed away in her sleep on January 24, 2017 after a long
            battle with cancer. After 28 years of distinguished military service
            with the US Air Force Reserve Nurse Corps, taking her to numerous
            globalhot spots, Eileen continued to dedicate herself to the service
            of her fellow Veterans and families. Among her many accolades,
            Eileen was presented the Presidential Call to Service Award by
            President George W. Bush,honoring her example of service to Veterans
            in performing over 20,000 Red Cross volunteer hours with the Service
            to the Armed Forces (SAF) and International Services at the American
            Red Cross Lowcountry Chapter. Eileen,we love and appreciate you and
            will miss you dearly. Well done good and faithful servant. You ran
            the race until the very end.“Serviceis giving of yourself, touching
            the lives of others without wanting personal gain. You do it because
            it’s the right thing to do.” –Eileen Hadbavny
          </Typography>
        </Paper>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    home: state.appData
  }
}

const connector = connect(mapStateToProps)

export default Drawer(connector(withStyles(styles)(Memory)))
