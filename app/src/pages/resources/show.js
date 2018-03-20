import React from 'react'
import { connect } from 'react-redux'
import ResourceListItem from '../../components/ResourceListItem'
import MenuAppBar from '../../components/MenuAppBar'
import { getResource } from '../../action-creators/resources'

class Resource extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getResource(id)
  }

  render() {
    const props = this.props

    if (props.resource._id !== props.match.params.id) {
      return <h1>Loading Resource...</h1>
    }

    return (
      <div>
        <MenuAppBar {...this.props} showBackArrow={true} title="Resource" />
        <div style={{ marginTop: '44px' }}>
          <ResourceListItem resource={this.props.resource} />
          <div>{this.props.resource.purpose}</div>
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

export default connector(Resource)
