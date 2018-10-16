import * as types from '../constants/ItemType';//导入事件类型，用来分配给各个事件

import Immutable from 'immutable';

import {Toast} from 'antd-mobile-rn';


const defaultState = {
    list:[],
    genresList:[],
    castsList:[],
    otherDataList:[],
    directorsList:[]
}

export const itemReducer = (state = defaultState, action = {}) => {
    let imuDataList;
    switch (action.type) {
        case types.SAVE_ITEM:
            const obj = {
                title: action.title,
                image: action.image,
                stars: action.stars,
                id: action.id
            }
            if(!Immutable.fromJS(state.list).includes(Immutable.fromJS(obj))){
                Toast.success('添加成功',1);
                return { 
                    ...state,
                    ...[state.list.push(obj)],
                    ...[state.genresList.push(action.genres)],
                    ...[state.castsList.push(action.casts)],
                    ...[state.otherDataList.push(action.otherData)],
                    ...[state.directorsList.push(action.directors)]
                }
            }else{
                Toast.fail('不可重复添加该电影',1);
                return { 
                    ...state,
                    ...[state.list],
                    ...[state.genresList],
                    ...[state.castsList],
                    ...[state.otherDataList],
                    ...[state.directorsList]
                }
            }
            
        case types.DELETE_ITEM:
            const { list, genresList, castsList, otherDataList, directorsList} = state;
            list.forEach(function (value,index){
                if(value.id == action.id){
                    list.splice(index,1);
                    genresList.splice(index,1);
                    castsList.splice(index,1);
                    otherDataList.splice(index,1);
                    directorsList.splice(index,1);
                }
            })
            imuDataList = Immutable.fromJS(list);
            Toast.success('删除成功', 1);
            return {
                ...state,
                ...{list:imuDataList.toJS()},
                ...{ genresList: Immutable.fromJS(genresList).toJS()},
                ...{ castsList: Immutable.fromJS(castsList).toJS() },
                ...{ otherDataList: Immutable.fromJS(otherDataList).toJS() },
                ...{ directorsList: Immutable.fromJS(directorsList).toJS() },
            }
        default:
            return state;
    }
}