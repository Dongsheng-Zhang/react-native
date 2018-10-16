import React from 'react';
import { Button, View, StyleSheet, Dimensions } from 'react-native';
import { deleteItem } from "../actions/itemAction";
import { connect } from 'react-redux';

const { width } = Dimensions.get('window');
const imageWidth = width / 3 - 10 * 2;

class CloseBtnComponent extends React.Component {
    constructor(props) {//构造函数
        super(props);
    }
    
    deleteData = (id) =>{
        const {dispatch} = this.props;
        dispatch(deleteItem(id));
    }

    render() {
        const {id } = this.props;
        return (
            <View style={styles.btn}>
                <Button  title="取 消" onPress={()=>{this.deleteData(id)}} />
            </View>
        )
    }
}

export default connect((state) => state)(CloseBtnComponent);

const styles = StyleSheet.create({
    btn: {
        marginBottom: 10,
        width: imageWidth
    }
}) 