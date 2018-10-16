import * as types from '../constants/ItemType';//导入事件类型，用来分配给各个事件

export const saveItem = (title, image, stars, id, genres, casts, otherData, directors) => {
    return {
        type: types.SAVE_ITEM,
        title,
        image,
        stars,
        id,
        genres,
        casts,
        otherData,
        directors
    }
}

export const deleteItem = (id) => {
    return {
        type:types.DELETE_ITEM,
        id
    }
} 