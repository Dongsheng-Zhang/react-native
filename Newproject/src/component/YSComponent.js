import React from 'react';
import { Platform, StyleSheet, Text, View, Alert, FlatList} from 'react-native';
import { connect } from 'react-redux';
import Item from "../pages/Item";
import { is, fromJS } from 'immutable';
import CloseBtnComponent from "./closeBtnComponent";

class YSComponent extends React.Component {

    constructor(props) {//构造函数
        super(props);
    }

    componentWillMount(){//组件未进入render时执行 多用于服务端渲染
        console.log('组件渲染完成，只执行一次')
        const { list } = this.props;
        if (list == false) {
            Alert.alert('提示', '暂无想看的电影', [{ text: '知道了'}]);
            return false;
        }
    }

    // componentDidMount (){//组件渲染完成之后的操作调用
    //     
    // }

    componentDidUpdate(prevProps,prevState){//组件重新渲染都会执行
        console.log('组件重新渲染都会执行')
        const { list } = prevProps;
        if (list == false) {
            Alert.alert('提示', '暂无想看的电影', [{ text: '知道了'}]);
            return false;
        }
    }

    // componentWillReceiveProps(nextProps){//父组件props发生改变时调用
    //
    // }
    
    // shouldComponentUpdate(nextProps,nextState){//state发生改变，不代表所有组件都需要重新渲染，return false可以阻止组件更新
    //     return true;
    // }

    // componentWillUpdate(nextProps, nextState) {//shouldComponentUpdate返回为true时执行，组件进入重新渲染
    //     console.log(nextProps, nextState)
    // }

    renderItem(item, genresList, index, castsList, otherDataList, directorsList) {
        return (
            <View>
                <Item title={item.title} image={item.image} stars={item.stars} id={item.id} genres={genresList[index]} casts={castsList[index]} otherData={otherDataList[index]} directors={directorsList[index]} {...this.props}/>
                <CloseBtnComponent id={item.id}/>
            </View>
        )
    }

    render() {
        const { list, genresList, castsList, otherDataList, directorsList} = this.props;
        return (
            <View>
                <FlatList
                    extraData={this.props}
                    style={styles.row}
                    numColumns={3}
                    keyExtractor={item => item.id}
                    data={list}
                    renderItem={({ item, index }) => this.renderItem(item, genresList, index, castsList, otherDataList, directorsList)}
                />
            </View>
        )
    }
}


export default connect((state) => state)(YSComponent);

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 15,
        marginTop: 20
    },
});