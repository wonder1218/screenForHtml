var myChart = echarts.init(document.getElementById("mapDiv"));
var mapData = [];
var areaName = "北京市";
var mapData2 = [];
var areaCode = "110000";
let datas = {
    orgdatas: [
        {
            orgid: "19",
            orgname: "北京分行",
            longitude: "116.358328",
            latitude: "39.901647",
            balance: 2140.05,
            badbalance: 120.57,
            balancerate: 1.35,
            overduerate: 89.91,
            overdueloanrate: 1.35,
            belongarea: "110102",
            value: [],
            follow: 432.45,
            bad: 278.92,
            normalShow: "19876.34",
            followShow: "432.45",
            badShow: "278.92",
            normalrate: 96.55,
            followrate: 2.1,
            badrate: 1.35,
        },
        {
            orgid: "23",
            orgname: "中关村分行",
            longitude: "116.356848",
            latitude: "39.939701",
            balance: 15373.67,
            badbalance: 283.15,
            balancerate: 1.58,
            overduerate: 251.95,
            overdueloanrate: 1.58,
            belongarea: "110102",
            value: [],
            follow: 378.65,
            bad: 312.43,
            normalShow: "20123.87",
            followShow: "378.65",
            badShow: "312.43",
            normalrate: 96.68,
            followrate: 1.82,
            badrate: 1.5,
        },
        {
            orgid: "25",
            orgname: "城市副中心分行",
            longitude: "116.69927",
            latitude: "39.86954",
            balance: 3477.75,
            badbalance: 211.12,
            balancerate: 1.2,
            overduerate: 131.55,
            overdueloanrate: 1.2,
            belongarea: "110112",
            value: [],
            follow: 415.78,
            bad: 265.34,
            normalShow: "19945.23",
            followShow: "415.78",
            badShow: "265.34",
            normalrate: 96.7,
            followrate: 2.01,
            badrate: 1.29,
        },
        {
            orgid: "10001",
            orgname: "总行_营业部",
            longitude: "116.35969",
            latitude: "39.937387",
            balance: 3357.75,
            badbalance: 281.12,
            balancerate: 1.3,
            overduerate: 161.55,
            overdueloanrate: 1.3,
            belongarea: "110102",
            value: [],
            follow: 445.92,
            bad: 295.67,
            normalShow: "20234.56",
            followShow: "445.92",
            badShow: "295.67",
            normalrate: 96.45,
            followrate: 2.13,
            badrate: 1.42,
        },
    ],
};
for (let item of datas.orgdatas) {
    mapData.push({
        orgId: item.orgid,
        bankName: item.orgname,
        value: [item.longitude, item.latitude],
        balance: item.balance,
        badbalance: item.badbalance,
        balancerate: item.balancerate,
        overduerate: item.overduerate,
        overdueloanrate: item.overdueloanrate,
        belongarea: item.belongarea,
        follow: item.follow,
        bad: item.bad,
        normalShow: item.normalShow,
        followShow: item.followShow,
        badShow: item.badShow,
        normalrate: item.normalrate,
        followrate: item.followrate,
        badrate: item.badrate,
    });
    item.value = [];
}
for (let item of mapData) {
    if (item.bankName == "北京分行") {
        item.longitude = "116.358328";
        item.latitude = "39.901647";
        item.value = ["116.358328", "39.901647"];
    } else if (item.bankName == "中关村分行") {
        item.longitude = "116.356848";
        item.latitude = "39.939701";
        item.value = ["116.356848", "39.939701"];
    } else if (item.bankName == "城市副中心分行") {
        item.longitude = "116.69927";
        item.latitude = "39.86954";
        item.value = ["116.69927", "39.86954"];
    } else if (item.bankName == "总行_营业部") {
        item.longitude = "116.386221";
        item.latitude = "39.937387";
        item.value = ["116.386221", "39.937387"];
    }
}
var mapData1 = JSON.stringify(mapData);
mapData1 = JSON.parse(mapData1);
var currentLevel = "city"; // 当前层级
var currentDistrictCode = ""; // 当前区县code
/**
 * @author wzheng
 * @date 2025年5月29日09:39:38
 * @description 初始化地图
 * @param {Object} mapData - 参数描述
 */
function initChart(mapData) {
    let optionsMap = {};
    let mapImg = document.createElement("img");
    // mapImg.src = "assets/images/riskAssets/map_bg1.png";
    var geoName = areaName;
    let locationImg = "image://data:image/png;base64,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";
    let locationImagSelect = "image://data:image/png;base64,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";
    const mapCharts = echarts.init(document.getElementById("mapDiv"));
    const mapTexture = '/assets/images/riskAssets/map_texture.png';
    // 等待地图数据加载完成后再初始化
    $.getJSON("assets/mapJson/110000/" + areaCode + ".json", function (geoJson) {
        // 注册地图数据
        echarts.registerMap(areaName, geoJson);
        // 初始化地图
        if (areaName == "北京市") {
            const centerMap = {};
            let featuresArr = [];
            // 给地图颜色
            if (geoJson && geoJson["features"] && geoJson["features"].length > 0) {
                for (let i = 0; i < geoJson["features"].length; i++) {
                    const feature = geoJson["features"][i];
                    const properties = feature.properties || {};
                    if (properties && properties.name) {
                        // centerMap[properties.name] = properties.cp || [];
                    }
                    // tslint:disable-next-line:prefer-const
                    // let featureObj = { name: '', value: 0, areaCode: '', valueShow: '0',itemStyle: {areaColor: 'rgba(133, 242, 255, 0)'}};
                    let featureObj = {
                        name: "",
                        value: 0,
                        areaCode: "",
                        valueShow: "0",
                        itemStyle: {
                            areaColor: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    { offset: 0, color: "rgba(35, 255, 255, 0.2)" },
                                    { offset: 1, color: "rgba(34, 114, 130, 0.2)" },
                                ],
                                global: false,
                            },
                            emphasis: {
                                // areaColor: '#A5DABB', // 高亮 绿色
                                areaColor: "rgba(18, 89, 182, 0.5)", // 高亮 绿色
                            },
                        },
                    };
                    featureObj.name = properties.name;
                    featureObj.areaCode = feature.id;
                    featuresArr.push(featureObj);
                }
            }
            // 将高亮颜色放入地图数据中
            if (featuresArr && featuresArr.length > 0) {
                for (let i = 0; i < featuresArr.length; i++) {
                    for (let j = 0; j < mapData1.length; j++) {
                        if (geoJson["features"][i].id == mapData1[j]["belongarea"]) {
                            featuresArr[i].value = mapData1[j]["value"];
                            featuresArr[i].itemStyle = {
                                areaColor: {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        { offset: 0, color: "#24FFFF" },
                                        { offset: 1, color: "#227282" },
                                    ],
                                    global: false,
                                },
                                emphasis: {
                                    // areaColor: '#A5DABB', // 高亮 绿色
                                    areaColor: "rgba(18, 89, 182, 0.5)", // 高亮 绿色
                                },
                            };
                        }
                    }
                }
            }
            $.getJSON(`assets/mapJsonNull/map_null.json`, function (resNull) {
                echarts.registerMap("chinaOutline", resNull);
                var series = [];
                optionsMap = {
                    tooltip: {
                        backgroundColor: "rgba()",
                        trigger: "item",
                        // point：鼠标位置 contentSize：dom 的尺寸
                        position: (point, params, dom, rect, size) => {
                            if (params.data.balance) {
                                return [point[0] - 145, point[1] - size.contentSize[1] + 32];
                            } else {
                                return [point[0] - 155, point[1] - size.contentSize[1] + 32];
                            }
                        },
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            restore: {
                                //还原
                                show: true,
                                title: "还原",
                                iconStyle: {
                                    borderColor: "#408ed5",
                                    // borderColor: '#3E9CFF',
                                },
                            },
                        },
                        right: 80,
                        top: 40,
                    },
                    geo: [
                        // 最上层 透明
                        {
                            type: "map",
                            map: geoName,
                            tooltip: {
                                trigger: "item",
                                formatter(parms) { },
                            },
                            layoutCenter: ["50%", "52%"],
                            animationDurationUpdate: 0,
                            // layoutSize: '100%',
                            // zoom: 1.2,
                            // aspectScale: 0.84,
                            aspectScale: 1,
                            layoutSize: "180%",
                            zoom: 0.65,
                            scaleLimit: {
                                min: 0.5,
                                // max: 2.8
                            },
                            zlevel: 2,
                            // roam: 'scale',
                            roam: true,
                            silent: true,
                            itemStyle: {
                                areaColor: {
                                    image: mapTexture,
                                    repeat: 'repeat'
                                },
                                normal: {
                                    borderColor: "rgba(121, 222, 237, 0.5)",
                                    areaColor: "rgba(133, 242, 255, 0)",
                                    borderWidth: 1,
                                    borderJoin: "round",
                                },
                                emphasis: {
                                    areaColor: "#A5DABB", // 高亮 绿色
                                },
                            },
                        },
                        // 背景图片
                        {
                            map: geoName,
                            type: "map",
                            // zoom: 1.2,
                            scaleLimit: {
                                min: 0.5,
                                // max: 2.8
                            },
                            layoutCenter: ["50%", "52%"],
                            animationDurationUpdate: 0,
                            // layoutSize: '100%',
                            roam: true,
                            zlevel: -1,
                            aspectScale: 1,
                            layoutSize: "180%",
                            zoom: 0.65,
                            // aspectScale: 0.84,
                            itemStyle: {
                                // color: {
                                //     image: mapImg,
                                //     borderWidth: '2',
                                //     borderColor: '#85F2FF',
                                // },
                                areaColor: {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        { offset: 0, color: "#74a5df" },
                                        { offset: 1, color: "#4491d7" },
                                    ],
                                    global: false,
                                },
                                // areaColor: 'rgba(15, 59, 111, 1)',
                                // color: "#081A30CC",
                                emphasis: {
                                    areaColor: "rgba(15, 59, 111, 1)",
                                    borderWidth: 0,
                                },
                            },
                            label: {
                                show: false,
                                emphasis: {
                                    show: false,
                                },
                            },
                        },
                        // 最下边一层浅蓝
                        {
                            type: "map",
                            map: geoName,
                            tooltip: {
                                show: false,
                            },
                            layoutCenter: ["50%", "54%"],
                            animationDurationUpdate: 0,
                            aspectScale: 1,
                            layoutSize: "190%",
                            zoom: 0.65,
                            // layoutSize: '100%',
                            // zoom: 1.2,
                            scaleLimit: {
                                min: 0.5,
                                // max: 2.8
                            },
                            label: {
                                emphasis: {
                                    show: false,
                                },
                            },
                            zlevel: -2,
                            // aspectScale: 0.82,
                            roam: true,
                            silent: true,
                            itemStyle: {
                                normal: {
                                    color: "#a6c84c",
                                    borderColor: "rgba(67 ,109 ,180, 0.1)",
                                    // borderWidth: 0.5,
                                    // areaColor: '#76acc4',
                                    areaColor: "#b7d0ee",
                                    shadowColor: "#b7d0ee",
                                    // shadowOffsetX: -39,
                                    //shadowBlur: 65
                                },
                            },
                        },
                    ],
                    series: [
                        {
                            type: "map",
                            map: geoName,
                            // geoIndex: 0,
                            animationDurationUpdate: 0,
                            // aspectScale: 0.84,
                            layoutCenter: ["50%", "52%"],
                            // layoutSize: '100%',
                            // zoom: 1.2,
                            aspectScale: 1,
                            layoutSize: "180%",
                            zoom: 0.65,
                            tooltip: {
                                show: false,
                            },
                            roam: true,
                            data: featuresArr,
                        },
                        {
                            type: "scatter",
                            zlevel: 10,
                            coordinateSystem: "geo",
                            symbol: locationImg,
                            emphasis: {
                                symbol: locationImagSelect, // 鼠标悬停时的图标
                            },
                            symbolSize: [17, 25],
                            labe: {
                                normal: {
                                    show: true,
                                },
                            },
                            tooltip: {
                                show: true,
                                trigger: "item",
                                borderWidth: 0, // 隐藏边框
                                formatter(params) {
                                    // console.log('params')
                                    // console.log(params)
                                    let data = params.data;
                                    let html = "";
                                    let balance = (data.balance * 1)
                                        .toFixed(2)
                                        .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                                    let overduerate = (data.overduerate * 1)
                                        .toFixed(2)
                                        .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                                    let overdueloanrate = (data.overdueloanrate * 1)
                                        .toFixed(2)
                                        .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                                    let badbalance = (data.badbalance * 1)
                                        .toFixed(2)
                                        .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                                    let balancerate = (data.balancerate * 1)
                                        .toFixed(2)
                                        .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                                    // 数据长时宽度变大
                                    let backgroudStyle =
                                    "height: 220px;width: 296px;padding-top: 8px;background:url(assets/images/riskAssets/map_locationSelect.png) no-repeat;background-size: 295px 219px;";
                                    html = `<div class="map-tooltip" style="${backgroudStyle}">
                                                <div class="map-tooltip-title" style="display: flex;justify-content: center;align-items: center;">
                                                    <div style="color:rgb(248, 242, 242);font-family: PingFang SC;font-size: 24px;">${data.bankName}</div>
                                                </div>
                                                <div class="map-tooltip-content" style="display: flex;justify-content: space-between;color:rgb(17, 15, 15);font-family: PingFang SC;font-weight: semibold;font-size: 20px;margin-top: 20px;">
                                                    <div style="margin-left: 12px;">风险收益水平：<span style="color: blue;font-size: 22px">${overduerate}%</span></div>
                                                </div>
                                            </div>`;
                                    return html;
                                },
                            },
                            data: mapData,
                        },
                    ],
                };
                myChart.setOption(optionsMap, true); //设置option
            });
        } else {
            var series = [];
            optionsMap = {
                tooltip: {
                    backgroundColor: "rgba()",
                    trigger: "item",
                    // point：鼠标位置 contentSize：dom 的尺寸
                    position: (point, params, dom, rect, size) => {
                        return [point[0] - 155, point[1] - size.contentSize[1] + 32];
                    },
                },
                toolbox: {
                    show: true,
                    feature: {
                        restore: {
                            show: true,
                            title: "还原",
                            iconStyle: {
                                borderColor: "#408ed5",
                                // borderColor: '#3E9CFF',
                            },
                        },
                    },
                    right: 80,
                    top: 40,
                },
                geo: [
                    // 最上层 透明
                    {
                        type: "map",
                        map: geoName,
                        tooltip: {
                            trigger: "item",
                            formatter(parms) { },
                        },
                        layoutCenter: ["50%", "50%"],
                        layoutSize: "72%",
                        zoom: 1.2,
                        scaleLimit: {
                            min: 0.5,
                            // max: 2.8
                        },
                        zlevel: 2,
                        aspectScale: 0.84,
                        // roam: 'scale',
                        roam: false,
                        silent: true,
                        itemStyle: {
                            areaColor: {
                                image: mapTexture,
                                repeat: 'repeat'
                            },
                            normal: {
                                borderColor: "rgba(121, 222, 237, 0.5)",
                                borderWidth: 1.5,
                                borderJoin: "round",
                                // areaColor: 'rgba(133, 242, 255, 0)',
                                areaColor: {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        { offset: 0, color: "rgba(35, 255, 255, 0.2)" },
                                        { offset: 1, color: "rgba(34, 114, 130, 0.2)" },
                                    ],
                                    global: false,
                                },
                            },
                            emphasis: {
                                areaColor: "#A5DABB", // 高亮
                            },
                        },
                    },
                    // 背景图片
                    {
                        map: geoName,
                        type: "map",
                        zoom: 1.2,
                        scaleLimit: {
                            min: 0.5,
                            // max: 2.8
                        },
                        layoutCenter: ["50%", "50%"],
                        layoutSize: "72%",
                        roam: false,
                        zlevel: -1,
                        aspectScale: 0.84,
                        itemStyle: {
                            // color: {
                            //     image: mapImg,
                            //     borderWidth: '2',
                            //     borderColor: '#85F2FF',
                            // },
                            areaColor: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    { offset: 0, color: "#74a5df" },
                                    { offset: 1, color: "#4491d7" },
                                ],
                                global: false,
                            },
                            emphasis: {
                                areaColor: "rgba(15, 59, 111, 1)",
                                borderWidth: 0,
                            },
                        },
                        label: {
                            show: false,
                            emphasis: {
                                show: false,
                            },
                        },
                    },
                    // 最下边一层浅蓝
                    {
                        type: "map",
                        map: geoName,
                        tooltip: {
                            show: false,
                        },
                        layoutCenter: ["50%", "52%"],
                        layoutSize: "80%",
                        zoom: 1.2,
                        scaleLimit: {
                            min: 0.5,
                            // max: 2.8
                        },
                        label: {
                            emphasis: {
                                show: false,
                            },
                        },
                        zlevel: -2,
                        aspectScale: 0.82,
                        roam: false,
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: "#a6c84c",
                                borderColor: "rgba(67 ,109 ,180, 0.1)",
                                // borderWidth: 0.5,
                                // areaColor: '#76acc4',
                                areaColor: "#b7d0ee",
                                shadowColor: "#b7d0ee",
                                // shadowOffsetX: -39,
                                //shadowBlur: 65
                            },
                        },
                    },
                ],
                series: [
                    {
                        type: "scatter",
                        zlevel: 10,
                        coordinateSystem: "geo",
                        symbol: locationImg,
                        emphasis: {
                            symbol: locationImagSelect, // 鼠标悬停时的图标
                        },
                        symbolSize: [17, 25],
                        labe: {
                            normal: {
                                show: true,
                            },
                        },
                        tooltip: {
                            show: true,
                            trigger: "item",
                            borderWidth: 0, // 隐藏边框
                            formatter(params) {
                                // console.log('params')
                                // console.log(params)
                                let data = params.data;
                                let html = "";
                                let balance = (data.balance * 1)
                                    .toFixed(2)
                                    .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                                let overduerate = (data.overduerate * 1)
                                    .toFixed(2)
                                    .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                                let overdueloanrate = (data.overdueloanrate * 1)
                                    .toFixed(2)
                                    .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                                let badbalance = (data.badbalance * 1)
                                    .toFixed(2)
                                    .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                                let balancerate = (data.balancerate * 1)
                                    .toFixed(2)
                                    .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                                // 数据长时宽度变大
                                let backgroudStyle =
                                    "height: 220px;width: 296px;padding-top: 8px;background:url(assets/images/riskAssets/map_locationSelect.png) no-repeat;background-size: 295px 219px;";
                                html = `<div class="map-tooltip" style="${backgroudStyle}">
                                            <div class="map-tooltip-title" style="display: flex;justify-content: center;align-items: center;">
                                                <div style="color:rgb(248, 242, 242);font-family: PingFang SC;font-size: 24px;">${data.bankName}</div>
                                            </div>
                                            <div class="map-tooltip-content" style="display: flex;justify-content: space-between;color:rgb(17, 15, 15);font-family: PingFang SC;font-weight: semibold;font-size: 20px;margin-top: 20px;">
                                                <div style="margin-left: 12px;">风险收益水平：<span style="color: blue;font-size: 22px">${overduerate}%</span></div>
                                            </div>
                                        </div>`;
                                return html;
                            },
                        },
                        data: mapData2,
                    },
                ],
            };
        }
        // 应用配置
        myChart.setOption(optionsMap, true);
    }).catch((error) => {
        console.error("加载地图数据失败:", error);
    });
}

/**
 * @author wzheng
 * @date 2025年5月29日09:39:38
 * @description 地图点击事件，下钻
 * @param {Object} item - 参数
 */
myChart.on("click", function (item) {
    if ((item.data && item.data.bankName) || (item.data && item.data.orgname)) {
        // this.mapClick.emit(item.data)
    } else {
        mapData2 = [];
        areaName = item.name;
        areaCode = item.data.areaCode;
        for (let data of mapData1) {
            if (data.belongarea == item.data.areaCode) {
                mapData2.push(data);
            }
        }
        initChart(mapData1);
    }
});
/**
 * @author wzheng
 * @date 2025年5月29日09:40:24
 * @description 地图还原事件
 */
myChart.on("restore", (params) => {
    restore();
});
function restore() {
    this.areaName = "北京市";
    this.areaCode = "110000";
    initChart(mapData1);
}
/**
 * @author wzheng
 * @date 2025年5月29日09:42:13
 * @description 地图缩放事件
 */
myChart.on("georoam", (params) => {
    let option = myChart.getOption();
    if (params.zoom != null && params.zoom != undefined) {
        //捕捉到缩放时
        option.geo[1].zoom = option.geo[0].zoom; //下层geo的缩放等级跟着上层的geo一起改变
        option.geo[1].center = option.geo[0].center; //下层的geo的中心位置随着上层geo一起改变

        option.geo[2].zoom = option.geo[0].zoom; //下层geo的缩放等级跟着上层的geo一起改变
        option.geo[2].center = option.geo[0].center; //下层的geo的中心位置随着上层geo一起改变

        // option.geo[3].zoom = option.geo[0].zoom; //下层geo的缩放等级跟着上层的geo一起改变
        // option.geo[3].center = option.geo[0].center; //下层的geo的中心位置随着上层geo一起改变\

        option.series[0].zoom = option.geo[0].zoom; //下层geo的缩放等级跟着上层的geo一起改变
        option.series[0].center = option.geo[0].center; //下层的geo的中心位置随着上层geo一起改变\
    } else {
        //捕捉到拖曳时
        option.geo[1].center = option.geo[0].center; //下层的geo的中心位置随着上层geo一起改变
        option.geo[2].center = option.geo[0].center; //下层的geo的中心位置随着上层geo一起改变
        // option.geo[3].center = option.geo[0].center; //下层的geo的中心位置随着上层geo一起改变
        option.series[0].center = option.geo[0].center; //下层的geo的中心位置随着上层geo一起改变
    }
    myChart.setOption(option, true); //设置option
});
initChart(mapData1);
