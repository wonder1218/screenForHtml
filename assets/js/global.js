/**
 * @author wzheng
 * @description 全局变量配置
 * @date 2025年5月29日09:45:37
 */
var options = [{
    value: '公司金融服务部',
    label: '公司金融服务部'
}, {
    value: '普惠及乡村振兴金融服务部',
    label: '普惠及乡村振兴金融服务部'
}, {
    value: '零售羚信货部',
    label: '零售羚信货部'
}, {
    value: '合计',
    label: '合计'
}];
// 地图参数
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
// 折线图参数
let StipLineData = {
    '公司金融服务部': ['0.80', '0.36', '0.12', '0.49'],
    '普惠及乡村振兴金融服务部': ['0.60', '0.67', '0.34', '0.43'],
    '零售羚信货部': ['0.70', '0.89', '0.45', '0.53'],
    '合计': ['0.30', '0.34', '0.56', '0.63'],
    DATADATE: ['2025/06/30', '2025/03/31', '2024/12/31', '2024/09/30'],
};
let data = {
    RATE: ['0.80', '0.36', '0.12', '0.49'],
    DATADATE: ['2025/06/30', '2025/03/31', '2024/12/31', '2024/09/30'],
};

let productLineData = {
    '对公信贷产品': ['0.87', '0.36', '0.12', '0.49'],
    '个人信贷产品': ['0.62', '0.67', '0.34', '0.43'],
    DATADATE: ['2025/06/30', '2025/03/31', '2024/12/31', '2024/09/30'],
};
let customerData = {
    RATE: ['0.80', '0.36', '0.12', '0.49'],
    DATADATE: ['2025/06/30', '2025/03/31', '2024/12/31', '2024/09/30'],
};
let customerDistributeData = {
    frontEarn: ['120', '132', '101'],
    warnCondition: ['220', '182', '191'],
    warnDistribute: ['340', '314', '292'],
};
let series = [
    {
        name: '公司金融服务部',
        type: 'line',
        smooth: true,
        color: '#F3410A',
        // showSymbol: false,
        label: {
            show: true,           // 显示标签
            position: 'top',      // 标签位置
        },
        data: StipLineData['公司金融服务部'],
    },
    {
        name: '普惠及乡村振兴金融服务部',
        type: 'line',
        smooth: true,
        color: '#F3B20B',
        // showSymbol: false,
        label: {
            show: true,           // 显示标签
            position: 'top',      // 标签位置
        },
        data: StipLineData['普惠及乡村振兴金融服务部'],
    },
    {
        name: '零售羚信货部',
        type: 'line',
        smooth: true,
        color: '#065DFF',
        // showSymbol: false,
        label: {
            show: true,           // 显示标签
            position: 'top',      // 标签位置
        },
        data: StipLineData['零售羚信货部'],
    },
    {
        name: '合计',
        type: 'line',
        smooth: true,
        color: '#31FBFB',
        // showSymbol: false,
        label: {
            show: true,           // 显示标签
            position: 'top',      // 标签位置
        },
        data: StipLineData['合计'],
    },
];
let productSeries = [
    {
        name: '对公信贷产品',
        type: 'line',
        smooth: true,
        color: '#F3410A',
        // showSymbol: false,
        label: {
            show: true,           // 显示标签
            position: 'top',      // 标签位置
        },
        data: productLineData['对公信贷产品'],
    },
    {
        name: '个人信贷产品',
        type: 'line',
        smooth: true,
        color: '#F3B20B',
        // showSymbol: false,
        label: {
            show: true,           // 显示标签
            position: 'top',      // 标签位置
        },
        data: productLineData['个人信贷产品'],
    }
];

let customerDistributeDataCopy = {
    frontEarn: {
        '正收益': '56个',
        '无收益': '28个',
        '负收益': '44个'
    },
    warnCondition: {
        '上升': '22个',
        '不变': '88个',
        '下降': '18个',
        '新增客户': '30个',
    },
    warnDistribute: {
        '高于全行平均': '12个',
        '等于全行平均': '56个',
        '低于全行平均': '60个'
    },
};
let xData = data.DATADATE;
let yData = data.RATE;
/**
 * @author wzheng
 * @description 条线纬度选择框单击事件
 * @date 2025年5月29日13:18:23
 */
function handleChange(select) {
    // 获取选中的值
    var selectedValue = select.value;
    // 获取选中的文本
    // var selectedText = select.options[select.selectedIndex].text;
    if (selectedValue != '全部') {
        series = [{
            name: selectedValue,
            type: 'line',
            smooth: true,
            color: '#F3410A',
            // showSymbol: false,
            label: {
                show: true,           // 显示标签
                position: 'top',      // 标签位置
            },
            data: StipLineData[selectedValue]
        }];
    } else {
        series = [
            {
                name: '公司金融服务部',
                type: 'line',
                smooth: true,
                color: '#F3410A',
                // showSymbol: false,
                label: {
                    show: true,           // 显示标签
                    position: 'top',      // 标签位置
                },
                data: StipLineData['公司金融服务部'],
            },
            {
                name: '普惠及乡村振兴金融服务部',
                type: 'line',
                smooth: true,
                color: '#F3B20B',
                // showSymbol: false,
                label: {
                    show: true,           // 显示标签
                    position: 'top',      // 标签位置
                },
                data: StipLineData['普惠及乡村振兴金融服务部'],
            },
            {
                name: '零售羚信货部',
                type: 'line',
                smooth: true,
                color: '#065DFF',
                // showSymbol: false,
                label: {
                    show: true,           // 显示标签
                    position: 'top',      // 标签位置
                },
                data: StipLineData['零售羚信货部'],
            },
            {
                name: '合计',
                type: 'line',
                smooth: true,
                color: '#31FBFB',
                // showSymbol: false,
                label: {
                    show: true,           // 显示标签
                    position: 'top',      // 标签位置
                },
                data: StipLineData['合计'],
            },
        ];
    }
    initStripLineEcharts(xData);
}

/**
 * @author wzheng
 * @description 产品纬度选择框单击事件
 * @date 2025年5月29日14:04:06
 */
function handleProductChange(select) {
    // 获取选中的值
    var selectedValue = select.value;
    // 获取选中的文本
    // var selectedText = select.options[select.selectedIndex].text;
    if (selectedValue != '全部') {
        productSeries = [{
            name: selectedValue,
            type: 'line',
            smooth: true,
            color: '#F3410A',
            // showSymbol: false,
            label: {
                show: true,           // 显示标签
                position: 'top',      // 标签位置
            },
            data: productLineData[selectedValue]
        }];
    } else {
        productSeries = [
            {
                name: '对公信贷产品',
                type: 'line',
                smooth: true,
                color: '#F3410A',
                // showSymbol: false,
                label: {
                    show: true,           // 显示标签
                    position: 'top',      // 标签位置
                },
                data: productLineData['对公信贷产品'],
            },
            {
                name: '个人信贷产品',
                type: 'line',
                smooth: true,
                color: '#F3B20B',
                // showSymbol: false,
                label: {
                    show: true,           // 显示标签
                    position: 'top',      // 标签位置
                },
                data: productLineData['个人信贷产品'],
            }
        ];
    }
    initProductLineEcharts(productLineData.DATADATE);
}

/**
 * @author wzheng
 * @description 客户纬度选择框单击事件
 * @date 2025年5月29日14:12:58
 */
function handleCustomerChange(select) {
    // 获取选中的值
    var selectedValue = select.value;
    // 获取选中的文本
    // var selectedText = select.options[select.selectedIndex].text;

    // initProductLineEcharts(productLineData.DATADATE);
}

/**
 * @author wzheng
 * @description 机构纬度选择框单击事件
 * @date 2025年5月29日14:27:32
 */
function handleOrgChange(select) {
    // 获取选中的值
    var selectedValue = select.value;
    // 获取选中的文本
    // var selectedText = select.options[select.selectedIndex].text;

    // initProductLineEcharts(productLineData.DATADATE);
}