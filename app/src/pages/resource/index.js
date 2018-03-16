import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import ResourceListItem from '../../components/ResourceListItem'
import List from 'material-ui/List'
import MenuAppBar from '../../components/MenuAppBar'
import { getResource } from '../../action-creators/resources'

class Resource extends React.Component {
  // props.toggleDrawer()
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getResource(id)
  }

  render() {
    if (this.props.resource._id !== this.props.match.params.id) {
      return <h1>Loading Resource...</h1>
    }

    return (
      <div>
        <MenuAppBar title="Resource" />
        <div style={{ marginTop: '44px' }}>
          <ResourceListItem resource={this.props.resource} />
          <div>{this.props.resource.purpose}</div>
        </div>
      </div>
    )
  }
}

//<ResourceListItem resource={this.props.resource} />
//<ResourceListItem name={props.name} shortDesc={props.shortDesc} />

const mapStateToProps = state => {
  console.log('What IS state?', state)
  return {
    resource: state.resource
  }
}

const mapActionsToProps = dispatch => {
  return { getResource: id => dispatch(getResource(id)) }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Resource)
