import React from 'react-native'

const {
  StyleSheet,
  View,
  ListView,
  Text,
  TouchableHighlight
} = React

const styles = StyleSheet.create({
  view: {
    flex: 1
  }
})

export default EventsView = React.createClass({
  propTypes: {
    events: React.PropTypes.array,
    onEventPress: React.PropTypes.func
  },

  render: function () {
    return (
      <View style={styles.view}>
        <ListView
          dataSource={this._createDataSource()}
          renderRow={this._renderRow}
        />
      </View>
    )
  },

  _createDataSource: function () {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    return ds.cloneWithRows(this._getRows(this.props.events))
  },

  _getRows: function (events) {
    return events.map(event => {
      return [event.name]
    })
  },

  _renderRow: function (rowData, sectionId, rowId) {
    return <TouchableHighlight
      onPress = {() => this._handleEventPress(rowId)} >
      <View>
        <Text>
          {rowData[0]}
        </Text>
      </View>
    </TouchableHighlight>
  },

  _handleEventPress: function (rowId) {
    return this.props.onEventPress(this.props.events[rowId])
  }
})
