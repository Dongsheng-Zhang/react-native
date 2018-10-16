/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, ToastAndroid } from 'react-native';
import Button from "apsl-react-native-button";
import { Toast } from 'antd-mobile-rn';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// type Props = {};

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }

    login = () => {
        const userName = this.state.userName;
        const password = this.state.password;
        // if (!userName) {
        //     Toast.offline('请输入账号');
        //     return false;
        // }
        // if (!password) {
        //     Toast.offline('请输入密码');
        //     return false;
        // }
        // if (userName === '0178659' && password == '123.com') {
        this.props.navigation.navigate('Home');
        // } else {
        //     Toast.offline('账号密码错误');
        // }

    }

    render() {
        return (
            <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
                <View style={styles.container}>
                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                    <View style={styles.input_view}>
                        <TextInput style={styles.input_text} placeholder="请输入账号" keyboardType='default' underlineColorAndroid="transparent" value={this.state.userName} onChangeText={(userName) => this.setState({ userName })} />
                        <TextInput style={[styles.input_text, styles.input_psd]} placeholder="请输入密码" keyboardType='default' underlineColorAndroid="transparent" secureTextEntry={true} value={this.state.password} onChangeText={(password) => this.setState({ password })} />
                    </View>
                    <Button
                        onPress={this.login}
                        style={styles.login_btn}
                        textStyle={{ fontSize: 18, color: '#fff' }}>
                        登 录
                </Button>
                    <Text style={styles.footer}>powered by zhangds</Text>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

const { width,height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        paddingLeft: 40,
        paddingRight: 40,
        height: height
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginBottom: 50
    },
    footer: {
        position: "absolute",
        left: 0,
        bottom: 5,
        textAlign: 'center',
        width: width
    },
    instructions: {
        flex: 1,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    input_view: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 20,
        borderRadius: 5,
        shadowColor: 'rgba(148, 168, 197, 0.2)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        // elevation 只在android上起作用，只能显示为灰色
        elevation: 4,
        shadowRadius: 5,
        marginBottom: 40
    },
    input_text: {
        width: '100%',
        height: 40,
        padding: 0,
        borderBottomWidth: 1,
        borderColor: '#eaeaea',
        paddingLeft: 5
    },
    input_psd: {
        marginTop: 20
    },
    login_btn: {
        width: '100%',
        height: 40,
        borderRadius: 50,
        borderWidth: 0,
        backgroundColor: '#fa6265'
    }
});
