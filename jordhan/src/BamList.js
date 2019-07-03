import PropTypes from 'prop-types';
import React from 'react'
import { View, FlatList, Text } from 'react-native'

const NoRenderItem = props => <Text>No renderItems provided</Text>

const BamList = ({ collection, children }) => {
    const toRender = children == null
        ? <NoRenderItem />
        : <FlatList 
            data={collection}
            renderItem={(data) => <children.type item={data.item} {...children.props}/>}
            keyExtractor={(item, index) => index.toString()} 
        />
    return <View>
        {toRender}
    </View>
}

BamList.propTypes = {
    collection: PropTypes.array,
    children: PropTypes.node
};

export default BamList
