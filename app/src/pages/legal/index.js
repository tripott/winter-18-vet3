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
    background: '#ffc0c0',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: '100px',
    verticalAlign: 'middle',
    padding: '30px'
  }
})

const Legal = props => {
  return (
    <div style={{ paddingTop: '30px' }}>
      <MenuAppBar title="Legal" />
      <div>
        <Paper className={props.classes.root}>
          <ListItem>
            <Icon className={props.classes.circl}>gavel</Icon>
            <ListItemText primary="Legal Disclaimer" />
          </ListItem>
          <Typography>
            The organizations and individuals listed in this directory cannot
            and do not guarantee that they can provide assistance, but each of
            us are “committed” to doing everything within our charters and
            organizations, bylaws, governing Federal-State-Local laws and
            rules-regulations, and resolve to do whatever we can that is legal,
            moral, and ethical and within in our resources and approvals
            processes to help those in need. Everyone and every organization in
            this directory is devoted to trying to help our beloved wounded,
            ill, injured, and needy troops and disabled veterans, veterans, and
            their families.
          </Typography>
          <Typography>
            <br />
            Although most of the services in this directory are free,some are
            not free.For example (and just one example) there are some co-pays
            for medications under hospice for Medicare covered hospice
            patients.However, all the organizations and individuals listed here
            are committed to help in every way possible and to make sure if
            there are any fees associated with their assistance that they are
            fully disclosed up front and before there are any charges accrued.
          </Typography>
          <Typography>
            <br />
            New organizations that wish to become a member of the Tri-County
            Veteran Support Network may submit contact information, mission
            statement, and website address (if applicable) via e-mailto
            tim@tcvsn.org.{' '}
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

export default Drawer(connector(withStyles(styles)(Legal)))
