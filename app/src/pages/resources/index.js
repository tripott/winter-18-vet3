import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import ResourceListItem from '../../components/ResourceListItem'
import List from 'material-ui/List'

import MenuAppBar from '../../components/MenuAppBar'

const Resources = props => {
  return (
    <div style={{ marginTop: '56px' }}>
      <MenuAppBar title="Resources" />
      <List>
        {map(r => <ResourceListItem resource={r} />, props.resources)}
      </List>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    resources: state.resources
  }
}

const connector = connect(mapStateToProps)

export default connector(Resources)
