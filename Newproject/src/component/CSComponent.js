import React from 'react';
import { StyleSheet, View, FlatList, RefreshControl, Image, Dimensions, Text, ScrollView } from 'react-native';
import Movies from "../api/movies.json";
import Item from "../pages/Item";
import ButtonComponent from "./buttonComponent";
import { Toast, Carousel } from 'antd-mobile-rn';

const {width,height} = Dimensions.get('window');
export default class CSComponent extends React.Component {

    constructor(props) {//构造函数
        super(props);
        this.state = {
            isRefreshing:false
        }
    }
    renderItem (item) {
        const otherData = [{
            "collect_count": item.collect_count,
            "original_title": item.original_title,
            "year": item.year
        }, item.rating]
        return(
            <View>
                <Item title={item.title} image={item.images.medium} stars={item.rating.stars} id={item.id} genres={item.genres} casts={item.casts} otherData={otherData} directors={item.directors}{...this.props}/>
                <ButtonComponent title={item.title} image={item.images.medium} stars={item.rating.stars} id={item.id} genres={item.genres} casts={item.casts} otherData={otherData} directors={item.directors}/>
            </View>
        )
    }
    
    onEndReached () {
        Toast.success('上拉加载', 1);
    }

    onRefresh () {
        Toast.success('下拉刷新', 1);
        const that = this;
        this.setState({isRefreshing:true});
        setTimeout(() => {
            this.setState({isRefreshing:false});
        }, 2000);
    }

    render(){
        return (
            <ScrollView style={{width:width, height: height}}>
                <Carousel
                    style={styles.wrapper}
                    selectedIndex={0}
                    autoplay
                    infinite
                >
                    <View style={styles.slide}>
                        <Image resizeMode="stretch" style={styles.image} source={require('../image/download1.jpg')} />
                    </View>
                    <View style={styles.slide}>
                        <Image resizeMode="stretch" style={styles.image} source={require('../image/download2.jpg')} />
                    </View>
                    <View style={styles.slide}>
                        <Image resizeMode="stretch" style={styles.image} source={require('../image/download3.jpg')} />
                    </View>
                    <View style={styles.slide}>
                        <Image resizeMode="stretch" style={styles.image} source={require('../image/download4.jpg')} />
                    </View>
                </Carousel>
                <FlatList
                    extraData={this.props} 
                    style={styles.row}
                    numColumns={3}
                    // onEndReached={this.onEndReached.bind(this)}//当列表滚动到距离底部不足onEndReachedThreshold时触发
                    // onEndReachedThreshold={0.1}//距离底部的距离 百分比0-1
                    // refreshControl={//为刷新设置样式
                    //     <RefreshControl
                    //         refreshing={this.isRefreshing}
                    //         onRefresh={this.onRefresh.bind(this)}
                    //         colors={['#ff0000', '#00ff00', '#0000ff', '#3ad564']}
                    //         progressBackgroundColor="#ffffff"
                    //     />
                    // }
                    keyExtractor={item => item.id}
                    data={Movies.subjects}
                    renderItem={({ item }) => this.renderItem(item) }
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 15,
        marginTop: 20
    },
    wrapper:{
        height:150
    },
    slide:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        height:150,
    },
    image:{
        width:width,
        height:150
    }
});