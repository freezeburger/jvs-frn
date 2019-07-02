import PropTypes from 'prop-types';
import React from 'react'
import { View, FlatList } from 'react-native'

const NoRenderItem = props => <Text>No renderItems provided</Text>

const BamList = ({ collection, children }) => {
    const toRender = props.children == null
        ? <NoRenderItem />
        : <FlatList 
            data={collection}
            renderItem={(data) => <children.type item={data.item} {...children.props} />}
            />
    return <View>
        {toRender}
    </View>
}

BamList.propTypes = {
    collection: PropTypes.array.isRequired,
    children: PropTypes.node
};

export default BamList
