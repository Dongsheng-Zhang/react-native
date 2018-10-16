import React from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Linking, FlatList } from 'react-native';
import { Toast } from 'antd-mobile-rn';

const { width } = Dimensions.get('window');
const imageWidth = width / 3 - 10 * 2;
const imageHeight = imageWidth / 0.7;
const icon_full = require('../image/star-full.png');
const icon_half = require('../image/star-half.png');
const icon_empty = require('../image/star-empty.png');


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

export default class Detail extends React.Component {

    renderItem = ({ item, index }) => {
        let marginLeft = 5;
        if(index == 0){
            item.daoyan = '导演';
            marginLeft = 0;
        }
        return (
            <View style={{ width: imageWidth, marginLeft: marginLeft}}>
                <TouchableOpacity activeOpacity={1} onPress={() => { Linking.openURL(item.alt).catch(err => Toast.fail('打开异常', 1)) }}>
                    <Image
                        source={{ uri: item.avatars.medium }}
                        style={styles.image}
                    />
                    <Text numberOfLines={1} style={[styles.text, styles.text1]}>
                        {item.name}
                    </Text>
                    <Text style={{ textAlign: 'center'}}>{item.daoyan}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        const { params } = this.props.navigation.state;
        console.log(params)
        const flatListData = [...params.data[4], ...params.data[2]];
        return (
            <View style={styles.container}>
                <View style={styles.flexView}>
                    <View style={{ maxWidth: 220 }}>
                        <Text style={styles.text}>
                            {params.data[1].title}
                        </Text>
                        <View style={{ width: 80, flexDirection: 'row', borderWidth: 1, borderColor: '#DCDCDC', marginTop: 5 }}>
                            <Text style={styles.three}>3D</Text>
                            <Text style={styles.imax}>IMAX</Text>
                        </View>
                        <Text style={{ marginTop: 5, marginBottom: 5, color: '#DCDCDC' }}>{params.data[3][0].original_title}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {
                                params.data[0].map((item, index) => {
                                    if (index == (params.data[0].length - 1)) {
                                        return <Text style={{ color: '#DCDCDC' }} key={index}>{item}</Text>
                                    }
                                    return <Text style={{ color: '#DCDCDC' }} key={index}>{item} / </Text>
                                })
                            }
                        </View>
                        <Text style={{ marginTop: 5, color: '#DCDCDC' }}>{params.data[3][0].year}年中国大陆上映</Text>
                        <Text style={{ marginTop: 5, color: '#DCDCDC' }}>想看人数：<Text style={{ fontSize: 16, color: '#000' }}>{params.data[3][0].collect_count}</Text></Text>
                    </View>
                    <Image
                        source={{ uri: params.data[1].image }}
                        style={styles.image}
                    />
                </View>
                <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginRight: 10 }}>豆瓣评分：<Text style={{ fontSize: 16 }}>{params.data[3][1].average}</Text></Text>
                        {renderStars(params.data[3][1].stars)}
                    </View>
                    <Text style={{ fontSize: 20, marginTop: 10, marginBottom: 10 }}>演职人员</Text>
                    <FlatList
                        data={flatListData}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        // padding: 20
    },
    flexView: {
        padding: 20,
        backgroundColor: '#808A87',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#fff'
    },
    text1: {
        color: '#000',
        fontWeight: 'normal',
        fontSize: 14,
        textAlign: 'center'
    },
    image: {
        width: imageWidth,
        height: imageHeight
    },
    three: {
        backgroundColor: '#DCDCDC',
        height: 20,
        width: 30,
        textAlign: 'center'
    },
    imax: {
        height: 20,
        width: 50,
        textAlign: 'center',
        color: '#DCDCDC'
    },
    starWrappers: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    star: {
        width: 10,
        height: 10,
        paddingRight: 5
    },
});