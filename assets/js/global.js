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