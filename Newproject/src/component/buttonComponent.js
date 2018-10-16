import React from 'react';
import { Button, View, StyleSheet, Dimensions,Alert} from 'react-native';
import { saveItem } from "../actions/itemAction";
import { connect } from 'react-redux';

const { width } = Dimensions.get('window');
const imageWidth = width / 3 - 10 * 2;

class ButtonComponent extends React.Component {

    constructor(props) {//构造函数
        super(props);
    }

    saveItemFun = (title, image, stars, id, genres, casts, otherData, directors) => {
        // 将数据保存至redux
        const { dispatch} = this.props;
        dispatch(saveItem(title, image, stars, id, genres, casts, otherData, directors));
    }

    render() {
        const { title, image, stars, id, genres, casts, otherData, directors} = this.props;
        return (
            <View style={styles.btn}>
                <Button onPress={() => { this.saveItemFun(title, image, stars, id, genres, casts, otherData, directors)}} title="想 看" />
            </View>
        )
    }
}

export default connect((state) => state)(ButtonComponent);

const styles = StyleSheet.create({
    btn:{
        marginBottom:10,
        width: imageWidth
    }
})