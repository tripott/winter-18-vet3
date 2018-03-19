import React from 'react'
import { connect } from 'react-redux'
import ResourceListItem from '../../components/ResourceListItem'
import MenuAppBar from '../../components/MenuAppBar'
import { getResource } from '../../action-creators/resources'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: theme.spacing.unit * 3
  })
})

class Resource extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getResource(id)
  }

  render() {
    const props = this.props
    const { classes } = props

    if (props.resource._id !== props.match.params.id) {
      return <h1>Loading Resource...</h1>
    }

    return (
      <div>
        <MenuAppBar {...this.props} showBackArrow={true} title="Resource" />
        <div style={{ marginTop: '34px' }}>
          <div>
            <Paper className={classes.root} elevation={2}>
              <ResourceListItem resource={this.props.resource} />
              <Typography style={{ paddingTop: 8 }} component="p">
                {this.props.resource.purpose}
              </Typography>
            </Paper>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    resource: state.resource
  }
}

const mapActionsToProps = dispatch => {
  return { getResource: id => dispatch(getResource(id)) }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(Resource))
