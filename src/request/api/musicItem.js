import service from "..";
// 获取歌单详情页数据
export function getMusicItem(id) {
    return service({
        method: "GET",
        url: `/playlist/detail?id=${id}`
    })
}

// 获取歌单详情页播放列表
export function getMusicItemList(id) {
    return service({
        method: "GET",
        url: `/playlist/track/all?id=${id}`
    })
}