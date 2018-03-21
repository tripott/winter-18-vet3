import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import ResourceListItem from '../../components/ResourceListItem'
import List from 'material-ui/List'
import withDrawer from '../../components/Drawer'
import MenuAppBar from '../../components/MenuAppBar'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import AddIcon from 'material-ui-icons/Add'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    display: 'inlineBlock',
    position: 'fixed',
    right: '15px',
    bottom: '15px',
    padding: 0
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  pageMargin: { marginTop: '56px' }
})

const Search = props => {
  const { classes } = props
  return (
    <div>
      <MenuAppBar title="Search" />
      <div style={{ marginTop: '56px' }}>
        <form>
          <TextField
            id="search"
            label="Search Resources"
            type="search"
            className={classes.textField}
            margin="normal"
          />
        </form>
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
export default withDrawer(connector(withStyles(styles)(Search)))

/*
 <form  noValidate autoComplete="off">
<TextField
          id="search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
        />
 </form>

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

 <List>
   {map(r => <ResourceListItem resource={r} />, props.resources)}
 </List>


*/
