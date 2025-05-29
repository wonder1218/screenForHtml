
/**
 * @author wzheng
 * @date 2025年5月29日09:45:37
 * @description 机构纬度折线图
 * @version 1.0.0
 */
function initOrgLineEcharts(xData, yData) {
  let orgLatTotalEcharts = echarts.init(
    document.getElementById("orgLatTotalEcharts")
  );
  let orgLatTotalOption = {
    grid: {
      left: "2%",
      right: "4%",
      bottom: 14,
      top: "15%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      show: true,
      data: ['机构纬度汇总'],
      textStyle: {
        color: "#868686",
        fontSize: 10,
      },
      x: "center",
      y: "bottom",
      // bottom: 10,
    },
    series: [
      {
        name: '机构纬度汇总',
        type: 'line',
        smooth: true,
        color: '#5158FA',
        // showSymbol: false,
        label: {
          show: true,           // 显示标签
          position: 'top',      // 标签位置
          distance: 5,          // 标签与数据点的距离
          formatter: '{c}',     // 标签格式
          fontSize: 12,         // 字体大小
          color: '#666',        // 字体颜色
          backgroundColor: '#fff', // 标签背景色
          padding: [3, 5, 3, 5],  // 标签内边距
          borderRadius: 3,        // 标签圆角
          // 更多样式配置
          textStyle: {
            fontSize: 12,
            color: '#666'
          }
        },
        data: yData,
      },
    ],
    xAxis: {
      type: "category",
      boundaryGap: true,
      axisLabel: {
        interval: 0,
        rotate: 45,
        color: "#ffffff",
        fontSize: 10,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#ffffff",
          width: 0.5,
          type: "solid",
        },
      },
      data: xData,
    },
    dataZoom: {
      type: "inside",
      show: true,
      // startValue: xData[xData.length - 6],
      // endValue: xData[xData.length - 1],
      // maxValueSpan: 0,
      // minValueSpan: 5,
    },
    yAxis: [
      // 左边y轴
      {
        type: "value",
        // name: "单位/个",
        nameTextStyle: {
          fontSize: 10,
          color: "#ffffff",
          align: "center",
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          interval: "auto",
          textStyle: {
            color: "#ffffff",
            align: "center",
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "#E6F7FF33",
            width: 0.5,
          },
        },
      },
    ],
  };
  orgLatTotalEcharts.setOption(orgLatTotalOption, true);
}

/**
 * @author wzheng
 * @date 2025年5月29日11:19:30
 * @description 条线纬度折线图
 * @version 1.0.0
 */
function initStripLineEcharts(xData) {
  let stripLineEcharts = echarts.init(
    document.getElementById("stripLineEcharts")
  );
  let stripLineOption = {
    grid: {
      left: "2%",
      right: "4%",
      bottom: 14,
      top: "15%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      show: true,
      data: ['公司金融服务部', '普惠及乡村振兴金融服务部', '零售羚信货部', '合计'],
      textStyle: {
        color: "#868686",
        fontSize: 10,
      },
      x: "center",
      y: "bottom",
      // bottom: 10,
    },
    series: series,
    xAxis: {
      type: "category",
      boundaryGap: true,
      axisLabel: {
        interval: 0,
        rotate: 45,
        color: "#ffffff",
        fontSize: 10,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#ffffff",
          width: 0.5,
          type: "solid",
        },
      },
      data: xData,
    },
    dataZoom: {
      type: "inside",
      show: true,
      // startValue: xData[xData.length - 6],
      // endValue: xData[xData.length - 1],
      // maxValueSpan: 0,
      // minValueSpan: 5,
    },
    yAxis: [
      // 左边y轴
      {
        type: "value",
        // name: "单位/个",
        nameTextStyle: {
          fontSize: 10,
          color: "#ffffff",
          align: "center",
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          interval: "auto",
          textStyle: {
            color: "#ffffff",
            align: "center",
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "#E6F7FF33",
            width: 0.5,
          },
        },
      },
    ],
  };
  stripLineEcharts.setOption(stripLineOption, true);
}

/**
 * @author wzheng
 * @date 2025年5月29日13:53:34
 * @description 产品纬度折线图
 * @version 1.0.0
 */
function initProductLineEcharts(xData) {
  let productLineEcharts = echarts.init(
    document.getElementById("productLatEcharts")
  );
  let productLineOption = {
    grid: {
      left: "2%",
      right: "4%",
      bottom: 14,
      top: "15%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      show: true,
      data: ['对公信贷产品', '个人信贷产品'],
      textStyle: {
        color: "#868686",
        fontSize: 10,
      },
      x: "center",
      y: "bottom",
      // bottom: 10,
    },
    series: productSeries,
    xAxis: {
      type: "category",
      boundaryGap: true,
      axisLabel: {
        interval: 0,
        rotate: 45,
        color: "#ffffff",
        fontSize: 10,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#ffffff",
          width: 0.5,
          type: "solid",
        },
      },
      data: xData,
    },
    dataZoom: {
      type: "inside",
      show: true,
      // startValue: xData[xData.length - 6],
      // endValue: xData[xData.length - 1],
      // maxValueSpan: 0,
      // minValueSpan: 5,
    },
    yAxis: [
      // 左边y轴
      {
        type: "value",
        // name: "单位/个",
        nameTextStyle: {
          fontSize: 10,
          color: "#ffffff",
          align: "center",
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          interval: "auto",
          textStyle: {
            color: "#ffffff",
            align: "center",
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "#E6F7FF33",
            width: 0.5,
          },
        },
      },
    ],
  };
  productLineEcharts.setOption(productLineOption, true);
}

/**
 * @author wzheng
 * @date 2025年5月29日14:13:51
 * @description 客户纬度折线图
 */
function initCustomerLineEcharts(xData, yData) {
  let cusLatTotalEcharts = echarts.init(
    document.getElementById("customerLatEcharts")
  );
  let cusLatTotalOption = {
    grid: {
      left: "2%",
      right: "4%",
      bottom: 14,
      top: "15%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      show: true,
      data: ['客户纬度汇总'],
      textStyle: {
        color: "#868686",
        fontSize: 10,
      },
      x: "center",
      y: "bottom",
      // bottom: 10,
    },
    series: [
      {
        name: '客户纬度汇总',
        type: 'line',
        smooth: true,
        color: '#5158FA',
        // showSymbol: false,
        label: {
          show: true,           // 显示标签
          position: 'top',      // 标签位置
          distance: 5,          // 标签与数据点的距离
          formatter: '{c}',     // 标签格式
          fontSize: 12,         // 字体大小
          color: '#666',        // 字体颜色
          backgroundColor: '#fff', // 标签背景色
          padding: [3, 5, 3, 5],  // 标签内边距
          borderRadius: 3,        // 标签圆角
          // 更多样式配置
          textStyle: {
            fontSize: 12,
            color: '#666'
          }
        },
        data: yData,
      },
    ],
    xAxis: {
      type: "category",
      boundaryGap: true,
      axisLabel: {
        interval: 0,
        rotate: 45,
        color: "#ffffff",
        fontSize: 10,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#ffffff",
          width: 0.5,
          type: "solid",
        },
      },
      data: xData,
    },
    dataZoom: {
      type: "inside",
      show: true,
      // startValue: xData[xData.length - 6],
      // endValue: xData[xData.length - 1],
      // maxValueSpan: 0,
      // minValueSpan: 5,
    },
    yAxis: [
      // 左边y轴
      {
        type: "value",
        // name: "单位/个",
        nameTextStyle: {
          fontSize: 10,
          color: "#ffffff",
          align: "center",
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          interval: "auto",
          textStyle: {
            color: "#ffffff",
            align: "center",
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "#E6F7FF33",
            width: 0.5,
          },
        },
      },
    ],
  };
  cusLatTotalEcharts.setOption(cusLatTotalOption, true);
}

/**
 * @author wzheng
 * @date 2025年5月29日15:24:38
 * @description 客户数量条形图
 */
function initCustomerDistributeEcharts(customerDistributeData) {
  let customerTotalEcharts = echarts.init(
    document.getElementById("customerDistribute")
  );
  var customerTotalOption = {
    title: {
      text: '客户数量分布',
      textStyle: {
        color: 'white', // 主标题颜色
        fontSize: 20,     // 字体大小
        fontWeight: 'bold'
      },
    },
    tooltip: { show: true },
    grid: { left: 200, right: 20, top: 60, bottom: 20 },
    legend: { show: false },
    xAxis: { type: "value", show: false },
    yAxis: {
      type: "category",
      data: [
        "风险收益水平分布情况",
        "风险收益水平较年初变动情况",
        "正负收益情况",
      ],
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: { 
        fontWeight: "bold",
        color: 'white', // 主标题颜色
        fontSize: 16,     // 字体大小
      },
    },
    series: [
      // 第一行
      {
        name: "正收益",
        type: "bar",
        stack: "row1",
        // barWidth: 30,
        data: [0, 0, 56],
        itemStyle: { color: "#4A90E2" },
        label: {
          show: true,
          color: 'white', // 主标题颜色
          position: "inside",
          formatter: function (params) {
            return params.value === 0 ? '' : '正收益 ' + params.value + '个';
          },
        },
      },
      {
        name: "无收益",
        type: "bar",
        stack: "row1",
        // barWidth: 30,
        data: [0, 0, 26],
        itemStyle: { color: "#F5A623" },
        label: {
          show: true,
          position: "inside",
          color: 'white', // 主标题颜色
          formatter: function (params) {
            return params.value === 0 ? '' : '无收益 ' + params.value + '个';
          },
        },
      },
      {
        name: "负收益",
        type: "bar",
        stack: "row1",
        // barWidth: 30,
        data: [0, 0, 18],
        itemStyle: { color: "#F8E71C" },
        label: {
          show: true,
          position: "inside",
          color: 'white', // 主标题颜色
          formatter: function (params) {
            return params.value === 0 ? '' : '负收益 ' + params.value + '个';
          },
        },
      },
      // 第二行
      {
        name: "上升",
        type: "bar",
        stack: "row2",
        // barWidth: 30,
        data: [0, 30, 0],
        itemStyle: { color: "#4A90E2" },
        label: {
          show: true,
          position: "inside",
          color: 'white', // 主标题颜色
          formatter: function (params) {
            return params.value === 0 ? '' : '上升 ' + params.value + '个';
          },
        },
      },
      {
        name: "不变",
        type: "bar",
        stack: "row2",
        // barWidth: 30,
        data: [0, 50, 0],
        itemStyle: { color: "#F5A623" },
        label: {
          show: true,
          position: "inside",
          color: 'white', // 主标题颜色
          formatter: function (params) {
            return params.value === 0 ? '' : '不变 ' + params.value + '个';
          },
        },
      },
      {
        name: "下降",
        type: "bar",
        stack: "row2",
        // barWidth: 30,
        data: [0, 20, 0],
        itemStyle: { color: "#F8E71C" },
        label: {
          show: true,
          position: "inside",
          color: 'white', // 主标题颜色
          formatter: function (params) {
            return params.value === 0 ? '' : '下降 ' + params.value + '个';
          },
        },
      },
      {
        name: "新增客户",
        type: "bar",
        stack: "row2",
        // barWidth: 30,
        data: [0, 50, 0],
        itemStyle: { color: "#F5A623" },
        label: {
          show: true,
          position: "inside",
          color: 'white', // 主标题颜色
          formatter: function (params) {
            return params.value === 0 ? '' : '新增客户 ' + params.value + '个';
          },
        },
      },
      // 第三行
      {
        name: "高于全行平均",
        type: "bar",
        stack: "row3",
        // barWidth: 30,
        data: [40, 0, 0],
        itemStyle: { color: "#4A90E2" },
        label: {
          show: true,
          position: "inside",
          color: 'white', // 主标题颜色
          formatter: function (params) {
            return params.value === 0 ? '' : '高于全行平均 ' + params.value + '个';
          },
        },
      },
      {
        name: "等于全行平均",
        type: "bar",
        stack: "row3",
        // barWidth: 30,
        data: [20, 0, 0],
        itemStyle: { color: "#F5A623" },
        label: {
          show: true,
          position: "inside",
          color: 'white', // 主标题颜色
          formatter: function (params) {
            return params.value === 0 ? '' : '等于全行平均 ' + params.value + '个';
          },
        },
      },
      {
        name: "低于全行平均",
        type: "bar",
        stack: "row3",
        // barWidth: 30,
        data: [40, 0, 0],
        itemStyle: { color: "#F8E71C" },
        label: {
          show: true,
          position: "inside",
          color: 'white', // 主标题颜色
          formatter: function (params) {
            return params.value === 0 ? '' : '低于全行平均 ' + params.value + '个';
          },
        },
      },
    ],
  };
  customerTotalEcharts.setOption(customerTotalOption, true);
}

/**
 * @author wzheng
 * @date 2025年5月29日16:31:53
 * @description 产品数量条形图
 */
function initProductDistributeEcharts(customerDistributeData) {
  let productTotalEcharts = echarts.init(
    document.getElementById("productDistribute")
  );
  var productTotalOption = {
    title: {
      text: '产品数量分布',
      textStyle: {
        color: 'white', // 主标题颜色
        fontSize: 20,     // 字体大小
        fontWeight: 'bold'
      },
    },
    tooltip: { show: true },
    grid: { left: 200, right: 20, top: 60, bottom: 20 },
    legend: { show: false },
    xAxis: { type: "value", show: false },
    yAxis: {
      type: "category",
      data: [
        "风险收益水平分布情况",
        "风险收益水平较年初变动情况",
        "正负收益情况",
      ],
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: { 
        fontWeight: "bold",
        color: 'white', // 主标题颜色
        fontSize: 16,     // 字体大小
      },
    },
    series: [
      // 第一行
      {
        name: "正收益",
        type: "bar",
        stack: "row1",
        // barWidth: 30,
        data: [0, 0, 56],
        itemStyle: { color: "#4A90E2" },
        label: {
          show: true,
          position: "inside",
          color: 'white', // 主标题颜色
          formatter: function (params) {
            return params.value === 0 ? '' : '正收益 ' + params.value + '个';
          },
        },
      },
      {
        name: "无收益",
        type: "bar",
        stack: "row1",
        // barWidth: 30,
        data: [0, 0, 26],
        itemStyle: { color: "#F5A623" },
        label: {
          show: true,
          position: "inside",
          color: 'white', // 主标题颜色
          formatter: function (params) {
            return params.value === 0 ? '' : '无收益 ' + params.value + '个';
          },
        },
      },
      {
        name: "负收益",
        type: "bar",
        stack: "row1",
        // barWidth: 30,
        data: [0, 0, 18],
        itemStyle: { color: "#F8E71C" },
        label: {
          show: true,
          position: "inside",
          color: 'white', // 主标题颜色
          formatter: function (params) {
            return params.value === 0 ? '' : '负收益 ' + params.value + '个';
          },
        },
      },
      // 第二行
      {
        name: "上升",
        type: "bar",
        stack: "row2",
        // barWidth: 30,
        data: [0, 30, 0],
        itemStyle: { color: "#4A90E2" },
        label: {
          show: true,
          position: "inside",
          color: 'white', // 主标题颜色
          formatter: function (params) {
            return params.value === 0 ? '' : '上升 ' + params.value + '个';
          },
        },
      },
      {
        name: "不变",
        type: "bar",
        stack: "row2",
        // barWidth: 30,
        data: [0, 50, 0],
        itemStyle: { color: "#F5A623" },
        label: {
          show: true,
          position: "inside",
          color: 'white', // 主标题颜色
          formatter: function (params) {
            return params.value === 0 ? '' : '不变 ' + params.value + '个';
          },
        },
      },
      {
        name: "下降",
        type: "bar",
        stack: "row2",
        // barWidth: 30,
        data: [0, 20, 0],
        itemStyle: { color: "#F8E71C" },
        label: {
          show: true,
          position: "inside",
          color: 'white', // 主标题颜色
          formatter: function (params) {
            return params.value === 0 ? '' : '下降 ' + params.value + '个';
          },
        },
      },
      // 第三行
      {
        name: "高于全行平均",
        type: "bar",
        stack: "row3",
        // barWidth: 30,
        data: [40, 0, 0],
        itemStyle: { color: "#4A90E2" },
        label: {
          show: true,
          position: "inside",
          color: 'white', // 主标题颜色
          formatter: function (params) {
            return params.value === 0 ? '' : '高于全行平均 ' + params.value + '个';
          },
        },
      },
      {
        name: "等于全行平均",
        type: "bar",
        stack: "row3",
        // barWidth: 30,
        data: [20, 0, 0],
        itemStyle: { color: "#F5A623" },
        label: {
          show: true,
          position: "inside",
          color: 'white', // 主标题颜色
          formatter: function (params) {
            return params.value === 0 ? '' : '等于全行平均 ' + params.value + '个';
          },
        },
      },
      {
        name: "低于全行平均",
        type: "bar",
        stack: "row3",
        // barWidth: 30,
        data: [40, 0, 0],
        itemStyle: { color: "#F8E71C" },
        label: {
          show: true,
          position: "inside",
          color: 'white', // 主标题颜色
          formatter: function (params) {
            return params.value === 0 ? '' : '低于全行平均 ' + params.value + '个';
          },
        },
      },
    ],
  };
  productTotalEcharts.setOption(productTotalOption, true);
}

initOrgLineEcharts(xData, yData);
initStripLineEcharts(xData);
initProductLineEcharts(productLineData.DATADATE);
initCustomerLineEcharts(customerData.DATADATE, customerData.RATE);
initCustomerDistributeEcharts(customerDistributeData);
initProductDistributeEcharts(customerDistributeDataCopy);
