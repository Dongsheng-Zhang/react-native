import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Provider } from "react-redux";
import TabNavigator from 'react-native-tab-navigator';
import CSComponent from '../component/CSComponent';
import YSComponent from '../component/YSComponent';
import ZXComponent from '../component/ZXComponent';
import store from '../store/itemStore';

const tab_cs = require('../image/icon_order_h.png');
const tab_cs_selected = require('../image/icon_order_w.png');
const tab_yunshi = require('../image/icon_room_h.png');
const tab_yunshi_selected = require('../image/icon_room_w.png');
const tab_zixun = require('../image/icon_call_h.png');
const tab_zixun_selected = require('../image/icon_call_w.png');


export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'cs'
        }
    }

    render() {
        return (
            <Provider store={store}>
                <TabNavigator style={styles.container}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cs'}
                        title="热映"
                        titleStyle={{ color: "#323232" }}
                        selectedTitleStyle={{ color: "#1e9dff" }}
                        renderIcon={() => <Image source={tab_yunshi} style={styles.icon} />}
                        renderSelectedIcon={() => <Image source={tab_yunshi_selected} style={styles.icon} />}
                        onPress={() => this.setState({ selectedTab: 'cs' })}>
                        <CSComponent {...this.props} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'yunshi'}
                        title="想看"
                        titleStyle={{ color: "#323232" }}
                        selectedTitleStyle={{ color: "#1e9dff" }}
                        renderIcon={() => <Image source={tab_zixun} style={styles.icon} />}
                        renderSelectedIcon={() => <Image source={tab_zixun_selected} style={styles.icon} />}
                        onPress={() => this.setState({ selectedTab: 'yunshi' })}>
                        <YSComponent  {...this.props} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'zixun'}
                        title="我的"
                        titleStyle={{ color: "#323232" }}
                        selectedTitleStyle={{ color: "#1e9dff" }}
                        renderIcon={() => <Image source={tab_cs} style={styles.icon} />}
                        renderSelectedIcon={() => <Image source={tab_cs_selected} style={styles.icon} />}
                        onPress={() => this.setState({ selectedTab: 'zixun' })}>
                        <ZXComponent  {...this.props} />
                    </TabNavigator.Item>
                </TabNavigator>
            </Provider>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingLeft: 20,
        paddingRight: 20
    },
    icon: {
        width: 22,
        height: 20
    }
});