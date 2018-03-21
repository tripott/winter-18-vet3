import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import {
  map,
  compose,
  not,
  isNil,
  isEmpty,
  filter,
  contains,
  split,
  toLower
} from 'ramda'
import ResourceListItem from '../../components/ResourceListItem'
import List from 'material-ui/List'
import withDrawer from '../../components/Drawer'
import MenuAppBar from '../../components/MenuAppBar'
import { CHANGE_SEARCH_CRITERIA } from '../../constants'
import TextField from 'material-ui/TextField'
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
})

const Search = props => {
  const { classes } = props
  return (
    <div>
      <MenuAppBar title="Search" />
      <div style={{ marginTop: '56px' }}>
        <TextField
          id="search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
          value={props.searchCriteria}
          onChange={props.onSearchChange}
        />
        <List>
          {not(isNil(props.searchCriteria) || isEmpty(props.searchCriteria))
            ? compose(
                map(r => <ResourceListItem resource={r} />),
                filter(r =>
                  contains(toLower(props.searchCriteria))(
                    split(' ', toLower(r.name))
                  )
                )
              )(props.resources)
            : null}
        </List>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    resources: state.resources,
    searchCriteria: state.searchCriteria
  }
}
const mapActionsToProps = dispatch => {
  return {
    onSearchChange: e =>
      dispatch({ type: CHANGE_SEARCH_CRITERIA, payload: e.target.value })
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default withDrawer(connector(withStyles(styles)(Search)))
