import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import ResourceListItem from '../../components/ResourceListItem'
import List from 'material-ui/List'
import MenuAppBar from '../../components/MenuAppBar'

const Resource = props => {
  // props.toggleDrawer()
  return (
    <div>
      <MenuAppBar title="Resource" />
      <div style={{ marginTop: '44px' }}>
        {map(r => <ResourceListItem resource={r} />, props.resource)}
        <div>{props.purpose}</div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('What IS state?', state)
  return {
    resource: state.resource
  }
}

const connector = connect(mapStateToProps)

export default connector(Resource)
