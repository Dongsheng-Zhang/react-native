import React,{ Component } from "react";
import { Platform, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';

const icon_full = require('../image/star-full.png');
const icon_half = require('../image/star-half.png');
const icon_empty = require('../image/star-empty.png');
// const icon_poster = require('../image/poster.jpg');
const {width} = Dimensions.get('window');
const imageWidth = width / 3 - 10 * 2;
const imageHeight = imageWidth / 0.7;
// type Props = {};
const renderStars = (stars) => {

    if (stars === '00') {
        return (
            <View style={styles.starWrappers}>
                <Text>暂无评分</Text>
            </View>
        );
    }

    const total = 5;
    let full, half, empty;
    full = parseInt(stars[0]); // 表示取出字符串的第一位 转为整数

    if (stars[1] === '5') {
        half = 1;
        empty = total - half - full;
    } else {
        half = 0;
        empty = total - full;
    }

    // 转化为图片组件 五个图片组件
    // 使用map函数 把数组转化为组件
    const result = [];

    // 添加满星星
    let i;
    for (i = 0; i < full; i++) {
        result.push(
            <Image
                key={i}
                style={styles.star}
                source={icon_full}
            />
        );
    }

    // 添加半颗星
    if (half) {
        i++;
        result.push(
            <Image
                key={i}
                style={styles.star}
                source={icon_half}
            />
        );
    }

    // 添加空星星
    for (let j = 0; j < empty; j++) {
        result.push(
            <Image
                key={i + j + 1}
                style={styles.star}
                source={icon_empty}
            />
        );
    }

    return (
        <View style={styles.starWrappers}>
            {result}
        </View>
    );
}

class Item extends Component{

    render() {
        // 获取传递过来的数据 
        const { title, image, stars, id, genres, casts, otherData, directors} = this.props;
        const data = {
            title: title,
            image: image,
            stars: stars,
            id: id
        }
        const arr = [
            genres,
            data,
            casts,
            otherData,
            directors
        ]
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('Detail', { data: arr})}}>
                    <Image
                        source={{ uri: image }}
                        style={styles.image}
                    />
                    <Text numberOfLines={1} style={styles.text}>
                        {title}
                    </Text>
                    <View style={styles.stars}>
                        {renderStars(stars)}
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
};

export default connect((state) => state)(Item);


const styles = StyleSheet.create({
    container: {
        width: imageWidth,
        flexDirection: 'column',
        marginRight: 15
    },
    stars:{
        height:25,
        overflow:'hidden'
    },
    buttons:{
        marginBottom:10
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    viewText:{
        width: imageWidth,
        backgroundColor:'blue'
    },
    text: {
        marginTop: 5,
        width: imageWidth,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    image: {
        width: imageWidth,
        height: imageHeight
    },
    star: {
        width: 10,
        height: 10,
    },
    starWrappers: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 15,
    },
});