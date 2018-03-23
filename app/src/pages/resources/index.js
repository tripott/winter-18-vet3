import React from 'react'
import { connect } from 'react-redux'
import { map, isEmpty } from 'ramda'
import ResourceListItem from '../../components/ResourceListItem'
import List from 'material-ui/List'
import withDrawer from '../../components/Drawer'
import MenuAppBar from '../../components/MenuAppBar'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import AddIcon from 'material-ui-icons/Add'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    display: 'inlineBlock',
    position: 'fixed',
    right: '15px',
    bottom: '15px',
    padding: 0
  },
  pageMargin: { marginTop: '56px' },
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  loading: {
    position: 'absolute',
    top: '51.5%',
    left: '46.5%'
  }
})

const Resources = props => {
  // props.toggleDrawer()
  const { classes } = props

  if (isEmpty(props.resources)) {
    return (
      <div>
        <MenuAppBar title="Resources" />
        <div className={classes.loading}>
          {' '}
          <h1 className="animated infinite swing">Loading</h1>
        </div>
        <CircularProgress className={classes.progress} />
      </div>
    )
  }
  return (
    <div>
      <MenuAppBar title="Resources" />
      <div style={{ marginTop: '44px' }}>
        <List>
          {map(r => <ResourceListItem resource={r} />, props.resources)}
        </List>
        <Link to="/resources/new">
          <Button
            className={classes.button}
            variant="fab"
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Button>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    resources: state.resources
  }
}

const connector = connect(mapStateToProps)

export default withDrawer(connector(withStyles(styles)(Resources)))
