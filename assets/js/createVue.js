// import * as THREE from 'three'
new Vue({
    el: '#app',
    data() {
        return {
            options: [{
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
            }],
            // 地图参数
            mapData: [],
            areaName: "北京市",
            mapData2: [],
            areaCode: "110000",
            datas: {
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
            },
            myChart: {}, // 地图echarts实例
            mapData1: [],
            xData: [], // 折线图x轴数据
            yData: [], // 折线图y轴数据
            currentLevel: "city", // 当前层级
            currentDistrictCode: "", // 当前区县code
            // 折线图参数
            StipLineData: {
                entWater: ['0.80', '0.36', '0.12', '0.49'],
                prattWater: ['0.60', '0.67', '0.34', '0.43'],
                personWater: ['0.70', '0.89', '0.45', '0.53'],
                total: ['0.30', '0.34', '0.56', '0.63'],
                DATADATE: ['2025/06/30', '2025/03/31', '2024/12/31', '2024/09/30'],
            },
            data: {
                RATE: ['0.80', '0.36', '0.12', '0.49'],
                DATADATE: ['2025/06/30', '2025/03/31', '2024/12/31', '2024/09/30'],
            },
            productLineData: {
                entProduction: ['0.87', '0.36', '0.12', '0.49'],
                personProduction: ['0.62', '0.67', '0.34', '0.43'],
                DATADATE: ['2025/06/30', '2025/03/31', '2024/12/31', '2024/09/30'],
            },
            customerData: {
                RATE: ['0.80', '0.36', '0.12', '0.49'],
                DATADATE: ['2025/06/30', '2025/03/31', '2024/12/31', '2024/09/30'],
            },
            customerDistributeData: {
                frontEarn: ['120', '132', '101'],
                warnCondition: ['220', '182', '191'],
                warnDistribute: ['340', '314', '292'],
            },
            series: [], // 折线图数据
            customerDistributeDataCopy: {
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
            },
            orgLatTotalEcharts: {},
            stripLineEcharts: {},
            productLineEcharts: {},
            customerLineEcharts: {},
            customerDistributeEcharts: {},
            productDistributeEcharts: {},
            orgLatTotalOption: {},
            stripLineOption: {},
            productLineOption: {},
            cusLatTotalOption: {},
            customerTotalOption: {},
            productTotalOption: {},
            productSeries: [], // 产品折线图数据
            valueLine: 'all', // 条线纬度选择框的值
            valueProduct: 'all', // 产品纬度选择框的值
            valuePerson: 'all', // 个人纬度选择框的值
            valueOrg: 'all', // 机构纬度选择框的值
            optionsLine: [{
                value: 'all',
                label: '全部'
            }, {
                value: 'entWater',
                label: '公司金融服务部'
            }, {
                value: 'prattWater',
                label: '普惠及乡村振兴金融服务部'
            }, {
                value: 'personWater',
                label: '零售羚信货部'
            }, {
                value: 'total',
                label: '合计'
            }],
            optionsProduct: [{
                value: 'all',
                label: '全部'
            }, {
                value: 'entProduction',
                label: '对公信贷产品'
            }, {
                value: 'personProduction',
                label: '个人信贷产品'
            }],
            optionsPerson: [{
                value: 'all',
                label: '全部'
            }],
            optionsOrg: [{
                value: 'all',
                label: '全部'
            }, {
                value: '北京分行',
                label: '北京分行'
            }, {
                value: '中关村分行',
                label: '中关村分行'
            }, {
                value: '城市副中心分行',
                label: '城市副中心分行'
            }, {
                value: '总行_营业部',
                label: '总行_营业部'
            }],
            myChart: null,
            isGlobeAutoRotating: true,
            autoCycleInterval: null, // 用于项目数据自动切换的定时器
            userInteracting: false, // 用户是否正在交互 (鼠标悬停在图表上)
            highlightedIndex: 0, // 当前高亮的项目索引

            // 弹出框状态和内容
            popupVisible: false,
            popupStyle: {
                left: '0px',
                top: '0px',
                display: 'none', // 默认隐藏，v-if控制显隐，这里只做初始值
            },
            popupContent: {
                title: '',
                value: '',
            },

            // 图片资源 (使用 public 目录路径)
            globeTextureUrl: '/data/globe.gl.bin', // 注意：Vue CLI public 目录直接用 / 根路径
            iconBaseUrl: '/icons/', // 注意：Vue CLI public 目录直接用 / 根路径

            // 外围节点的数据
            outerNodesData: [
                { id: 'node0', name: '建筑数据', value: 3009.36, icon: 'house.png', initialAngle: 0 },
                { id: 'node1', name: '财务数据', value: 3009.36, icon: 'money.png', initialAngle: 45 },
                { id: 'node2', name: '销售数据', value: 3009.36, icon: 'chart.png', initialAngle: 90 },
                { id: 'node3', name: '银行数据', value: 3009.36, icon: 'bank.png', initialAngle: 135 },
                { id: 'node4', name: '电力数据', value: 3009.36, icon: 'lightning.png', initialAngle: 180 },
                { id: 'node5', name: '存储数据', value: 3009.36, icon: 'database.png', initialAngle: 225 },
                { id: 'node6', name: '监控数据', value: 3009.36, icon: 'monitor.png', initialAngle: 270 },
                { id: 'node7', name: '报警数据', value: 3009.36, icon: 'bell.png', initialAngle: 315 },
            ],
            globeHitRadius: 80, // 鼠标检测地球区域的半径
        };
    },
    created() {
        for (let item of this.datas.orgdatas) {
            this.mapData.push({
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
        for (let item of this.mapData) {
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
        this.xData = this.data.DATADATE;
        this.yData = this.data.RATE;
        this.mapData1 = JSON.stringify(this.mapData);
        this.mapData1 = JSON.parse(this.mapData1);
        this.series = [
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
                data: this.StipLineData.entWater,
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
                data: this.StipLineData.prattWater,
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
                data: this.StipLineData.personWater,
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
                data: this.StipLineData.total,
            },
        ];
        this.productSeries = [
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
                data: this.productLineData.entProduction,
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
                data: this.productLineData.personProduction,
            }
        ];
    },
    mounted() {
        // this.initChart(this.mapData1);
        this.initOrgLineEcharts(this.xData, this.yData);
        this.initStripLineEcharts(this.xData);
        this.initProductLineEcharts(this.productLineData.DATADATE);
        this.initCustomerLineEcharts(this.customerData.DATADATE, this.customerData.RATE);
        this.initCustomerDistributeEcharts(this.customerDistributeData);
        this.initProductDistributeEcharts(this.customerDistributeDataCopy);
        // this.initThree();
        // this.initRorateChart();
        // this.startAutoCycle(); // 启动项目数据自动切换
        // window.addEventListener('resize', this.handleResize); // 监听窗口 resize
    },
    beforeDestroy() {
        if (this.myChart) {
            this.myChart.dispose();
        }
        clearInterval(this.autoCycleInterval);
        window.removeEventListener('resize', this.handleResize); // 移除监听
    },
    methods: {
        handleResize() {
            if (this.myChart) {
                this.myChart.resize();
                this.updateChartOptionsForPosition(); // 尺寸变化后，重新计算位置并更新
            }
        },
        initRorateChart() {
            const chartDom = document.getElementById('globe-chart'); // 或者使用 this.$refs.globeChartContainer.querySelector('#globe-chart')
            if (!chartDom) {
                console.error('ECharts DOM element (#globe-chart) not found!');
                return;
            }

            this.myChart = echarts.init(chartDom);
            // 初始化时设置选项
            this.updateChartOptionsForPosition();

            // ------------- 鼠标事件监听 -------------
            this.myChart.on('mousemove', (params) => {
                this.userInteracting = true; // 用户正在交互
                const chartInstance = this.myChart;
                const pointInPixel = [params.event.offsetX, params.event.offsetY];
                const chartWidth = chartDom.offsetWidth;
                const chartHeight = chartDom.offsetHeight;
                const chartCenter = [chartWidth / 2, chartHeight / 2];
                // this.globeHitRadius = 80; // 用于鼠标检测地球区域的半径

                // 1. 判断是否悬停在地球上
                const distanceToGlobeCenter = Math.sqrt(
                    Math.pow(pointInPixel[0] - chartCenter[0], 2) +
                    Math.pow(pointInPixel[1] - chartCenter[1], 2)
                );

                if (distanceToGlobeCenter <= this.globeHitRadius) {
                    this.pauseAutoCycle(); // 暂停项目数据切换
                    this.setGlobeAutoRotate(false); // 停止地球旋转
                    this.showPopup(pointInPixel[0] + 15, pointInPixel[1] + 15, '全球数据', '点击查看详情');
                    return;
                }

                // 2. 判断是否悬停在某个自定义节点上
                let hoveredNodeInfo = null;
                if (params.componentType === 'series' && params.seriesType === 'custom' && params.target && params.target.info) {
                    hoveredNodeInfo = params.target.info.originalData;
                    if (hoveredNodeInfo) {
                        this.pauseAutoCycle();
                        this.setGlobeAutoRotate(false);
                        this.showPopup(pointInPixel[0] + 15, pointInPixel[1] + 15, hoveredNodeInfo.name, hoveredNodeInfo.value.toFixed(2));
                        return;
                    }
                }

                // 3. 鼠标不在地球上，也不在任何节点上
                this.resumeAutoCycleWithDelay();
                this.setGlobeAutoRotate(true);
                this.hidePopup();
            });

            // 鼠标离开整个图表区域时，恢复旋转并隐藏弹出框
            chartDom.addEventListener('mouseleave', () => {
                this.userInteracting = false;
                this.resumeAutoCycleWithDelay();
                this.setGlobeAutoRotate(true);
                this.hidePopup();
            });

            // ECharts 点击事件 (可选，用于处理点击详情)
            this.myChart.on('click', (params) => {
                if (params.componentType === 'graphic' && params.info && params.info.type === 'globe') {
                    console.log('点击了地球');
                } else if (params.componentType === 'series' && params.seriesType === 'custom' && params.target && params.target.info) {
                    const clickedNode = params.target.info.originalData;
                    console.log('点击了项目数据框：', clickedNode.name);
                }
            });
        },

        // 封装更新图表选项的方法，便于 resize 和初始加载时调用
        updateChartOptionsForPosition() {
            const chartDom = document.getElementById('globe-chart');
            if (!chartDom || !this.myChart) {
                return;
            }
            const chartWidth = chartDom.offsetWidth;
            const chartHeight = chartDom.offsetHeight;
            const chartCenter = [chartWidth / 2, chartHeight / 2];
            const nodeNormalRadius = Math.min(chartWidth, chartHeight) * 0.35;
            const nodeHighlightPosition = [chartCenter[0], chartHeight - 120];

            // custom series 的 renderItem 函数
            // 注意：这里使用箭头函数或 bind(this) 来确保能访问 Vue 组件的 this
            const renderOuterNodeItem = (params, api) => {
                const dataIndex = params.dataIndex;
                const item = this.outerNodesData[dataIndex];
                const isHighlighted = (dataIndex === this.highlightedIndex);

                let currentPosition;
                if (isHighlighted) {
                    currentPosition = nodeHighlightPosition;
                } else {
                    const numNodes = this.outerNodesData.length;
                    const angleOffsetPerItem = 360 / numNodes;
                    const currentHighlightedAngle = this.outerNodesData[this.highlightedIndex].initialAngle;

                    let relativeIndex = dataIndex - this.highlightedIndex;
                    if (relativeIndex < 0) {
                        relativeIndex += numNodes;
                    }

                    const dynamicAngle = (currentHighlightedAngle + (relativeIndex * angleOffsetPerItem)) % 360;
                    // 辅助函数，获取圆周位置
                    const getNormalNodePosition = (angle) => {
                        const rad = angle * Math.PI / 180;
                        return [
                            chartCenter[0] + nodeNormalRadius * Math.cos(rad),
                            chartCenter[1] + nodeNormalRadius * Math.sin(rad)
                        ];
                    };
                    currentPosition = getNormalNodePosition(dynamicAngle);
                }

                const group = {
                    type: 'group',
                    children: [],
                    info: {
                        dataIndex: dataIndex,
                        originalData: item
                    }
                };

                // ------------- 绘制连接线 -------------
                group.children.push({
                    type: 'line',
                    shape: {
                        x1: chartCenter[0],
                        y1: chartCenter[1],
                        x2: currentPosition[0],
                        y2: currentPosition[1]
                    },
                    style: {
                        stroke: isHighlighted ? 'rgba(0, 255, 255, 0.8)' : 'rgba(0, 191, 255, 0.3)',
                        lineWidth: isHighlighted ? 2 : 1,
                        lineDash: [5, 5]
                    },
                    z: 0,
                    transition: ['shape.x2', 'shape.y2', 'style.stroke', 'style.lineWidth']
                });

                // ------------- 绘制项目数据框 (模拟立体感和玻璃效果) -------------
                const nodeBgWidth = isHighlighted ? 180 : 120;
                const nodeBgHeight = isHighlighted ? 150 : 100;
                const baseRadius = isHighlighted ? 15 : 10;

                // 1. 底部椭圆阴影 (模拟投影，增加浮空感)
                group.children.push({
                    type: 'ellipse',
                    shape: {
                        cx: currentPosition[0],
                        cy: currentPosition[1] + nodeBgHeight / 2 + (isHighlighted ? 20 : 8),
                        rx: nodeBgWidth * (isHighlighted ? 0.4 : 0.3),
                        ry: nodeBgHeight * (isHighlighted ? 0.15 : 0.1)
                    },
                    style: {
                        fill: 'rgba(0, 0, 0, 0.3)',
                        shadowBlur: isHighlighted ? 25 : 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowOffsetY: isHighlighted ? 10 : 5
                    },
                    z: 0.5,
                    transition: ['shape', 'style']
                });

                // 2. 主体矩形背景 (带渐变和光晕)
                group.children.push({
                    type: 'rect',
                    shape: {
                        x: currentPosition[0] - nodeBgWidth / 2,
                        y: currentPosition[1] - nodeBgHeight / 2,
                        width: nodeBgWidth,
                        height: nodeBgHeight,
                        r: baseRadius
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: isHighlighted ? 'rgba(0, 191, 255, 0.3)' : 'rgba(0, 191, 255, 0.1)' },
                            { offset: 1, color: isHighlighted ? 'rgba(0, 100, 200, 0.7)' : 'rgba(0, 100, 200, 0.4)' }
                        ]),
                        stroke: isHighlighted ? 'rgba(0, 255, 255, 0.8)' : 'rgba(0, 191, 255, 0.5)',
                        lineWidth: isHighlighted ? 3 : 2,
                        shadowBlur: isHighlighted ? 20 : 10,
                        shadowColor: isHighlighted ? 'rgba(0, 255, 255, 0.9)' : 'rgba(0, 191, 255, 0.7)',
                        shadowOffsetY: 0
                    },
                    z: 1,
                    transition: ['shape', 'style']
                });

                // 3. 图标
                const iconSize = isHighlighted ? 60 : 40;
                group.children.push({
                    type: 'image',
                    style: {
                        image: `${this.iconBaseUrl}${item.icon}`, // 使用 Vue 组件的 this.iconBaseUrl
                        x: currentPosition[0] - iconSize / 2,
                        y: currentPosition[1] - nodeBgHeight / 2 + (isHighlighted ? 15 : 10),
                        width: iconSize,
                        height: iconSize
                    },
                    z: 2,
                    transition: ['style.x', 'style.y', 'style.width', 'style.height']
                });

                // 4. "数据数据" 文本
                group.children.push({
                    type: 'text',
                    style: {
                        text: item.name,
                        x: currentPosition[0],
                        y: currentPosition[1] + (isHighlighted ? 35 : 15),
                        textAlign: 'center',
                        textVerticalAlign: 'middle',
                        fill: '#fff',
                        fontSize: isHighlighted ? 18 : 14,
                        fontWeight: isHighlighted ? 'bold' : 'normal'
                    },
                    z: 2,
                    transition: ['style.x', 'style.y', 'style.fontSize']
                });

                // 5. 数据值 "3009.36"
                group.children.push({
                    type: 'text',
                    style: {
                        text: item.value.toFixed(2),
                        x: currentPosition[0],
                        y: currentPosition[1] + (isHighlighted ? 60 : 35),
                        textAlign: 'center',
                        textVerticalAlign: 'middle',
                        fill: '#00ffff',
                        fontSize: isHighlighted ? 24 : 18,
                        fontWeight: 'bolder'
                    },
                    z: 2,
                    transition: ['style.x', 'style.y', 'style.fontSize']
                });

                // 6. "项目数据" 按钮样式文字
                const buttonWidth = isHighlighted ? 140 : 100;
                const buttonHeight = isHighlighted ? 40 : 30;
                const buttonRadius = isHighlighted ? 20 : 15;
                group.children.push({
                    type: 'rect',
                    shape: {
                        x: currentPosition[0] - buttonWidth / 2,
                        y: currentPosition[1] + nodeBgHeight / 2 - (isHighlighted ? 10 : 0) - buttonHeight,
                        width: buttonWidth,
                        height: buttonHeight,
                        r: buttonRadius
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: 'rgba(0, 191, 255, 0.7)' },
                            { offset: 1, color: 'rgba(0, 100, 200, 0.7)' }
                        ]),
                        stroke: 'rgba(0, 191, 255, 1)',
                        lineWidth: 1,
                        shadowBlur: 5,
                        shadowColor: 'rgba(0, 191, 255, 0.5)',
                        shadowOffsetY: 2
                    },
                    z: 2,
                    transition: ['shape', 'style']
                });
                group.children.push({
                    type: 'text',
                    style: {
                        text: '项目数据',
                        x: currentPosition[0],
                        y: currentPosition[1] + nodeBgHeight / 2 - (isHighlighted ? 10 : 0) - buttonHeight / 2,
                        textAlign: 'center',
                        textVerticalAlign: 'middle',
                        fill: '#fff',
                        fontSize: isHighlighted ? 16 : 14
                    },
                    z: 3,
                    transition: ['style.x', 'style.y', 'style.fontSize']
                });

                // 7. 透明的点击区域 (覆盖整个数据框，用于捕获鼠标事件)
                group.children.push({
                    type: 'rect',
                    shape: {
                        x: currentPosition[0] - nodeBgWidth / 2,
                        y: currentPosition[1] - nodeBgHeight / 2,
                        width: nodeBgWidth,
                        height: nodeBgHeight
                    },
                    style: {
                        fill: 'transparent'
                    },
                    z: 4,
                    silent: false,
                    transition: ['shape']
                });

                return group;
            };

            const option = {
                backgroundColor: '#0c2447',

                animationDuration: 1000,
                animationEasing: 'cubicInOut',

                graphic: [
                    // 顶部标题
                    {
                        type: 'text',
                        style: {
                            text: 'XXX年 建设的数字化转型',
                            x: chartCenter[0],
                            y: 50,
                            textAlign: 'center',
                            fill: '#fff',
                            fontSize: 24,
                            fontWeight: 'bold'
                        },
                        z: 10
                    },
                    // 中心百分比
                    {
                        type: 'text',
                        style: {
                            text: '32%',
                            x: chartCenter[0],
                            y: chartCenter[1] - 15,
                            textAlign: 'center',
                            textVerticalAlign: 'middle',
                            fill: '#fff',
                            fontSize: 40,
                            fontWeight: 'bold'
                        },
                        z: 10
                    },
                    // 中心“项目数”文字
                    {
                        type: 'text',
                        style: {
                            text: '项目数',
                            x: chartCenter[0],
                            y: chartCenter[1] + 20,
                            textAlign: 'center',
                            textVerticalAlign: 'middle',
                            fill: '#eee',
                            fontSize: 18
                        },
                        z: 10
                    },
                    // 中心环形“道路”背景 (模拟立体感，可以画多个环)
                    {
                        type: 'arc',
                        shape: {
                            cx: chartCenter[0],
                            cy: chartCenter[1],
                            r: nodeNormalRadius - 50,
                            r0: nodeNormalRadius + 50,
                            startAngle: 0,
                            endAngle: Math.PI * 2
                        },
                        style: {
                            fill: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: 'rgba(255, 255, 255, 0.05)' },
                                { offset: 0.5, color: 'rgba(0, 191, 255, 0.1)' },
                                { offset: 1, color: 'rgba(255, 255, 255, 0.05)' }
                            ]),
                            stroke: 'rgba(0, 191, 255, 0.2)',
                            lineWidth: 1
                        },
                        z: 0
                    },
                    // 内环（靠近地球的环）
                    {
                        type: 'circle',
                        shape: {
                            cx: chartCenter[0],
                            cy: chartCenter[1],
                            r: 100
                        },
                        style: {
                            fill: 'rgba(255, 255, 255, 0.1)',
                            stroke: 'rgba(0, 191, 255, 0.3)',
                            lineWidth: 2,
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 191, 255, 0.5)',
                            shadowOffsetY: 0
                        },
                        z: 0.1
                    },
                    // 最中心的小环 (模拟地球底座的光环)
                    {
                        type: 'circle',
                        shape: {
                            cx: chartCenter[0],
                            cy: chartCenter[1],
                            r: 60
                        },
                        style: {
                            fill: new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [
                                { offset: 0, color: 'rgba(0, 255, 255, 0.5)' },
                                { offset: 1, color: 'rgba(0, 191, 255, 0)' }
                            ]),
                            shadowBlur: 20,
                            shadowColor: 'rgba(0, 255, 255, 0.7)'
                        },
                        z: 0.2
                    },
                    // 为地球添加一个透明可点击区域 (用于捕获地球鼠标事件)
                    {
                        type: 'circle',
                        shape: {
                            cx: chartCenter[0],
                            cy: chartCenter[1],
                            r: this.globeHitRadius
                        },
                        style: {
                            fill: 'transparent'
                        },
                        z: 5,
                        silent: false,
                        info: { type: 'globe' }
                    }
                ],

                globe: {
                    baseTexture: this.globeTextureUrl,
                    environment: '#0c2447',
                    light: {
                        main: { color: '#fff', intensity: 1.5, shadow: true, alpha: 40, beta: 0 },
                        ambient: { intensity: 0.2 }
                    },
                    shading: 'realistic',
                    realisticMaterial: { roughness: 0.9, metalness: 0 },
                    viewControl: {
                        autoRotate: this.isGlobeAutoRotating,
                        autoRotateDirection: 'right',
                        autoRotateSpeed: 5,
                        autoRotateAfterStill: 3000,
                        damping: 0.8,
                        zoomSensitivity: 0,
                        rotateSensitivity: 0,
                        panSensitivity: 0,
                        distance: 200,
                        alpha: 25,
                        beta: 15
                    },
                    postEffect: {
                        enable: true,
                        SSAO: { enable: true, intensity: 1, radius: 2 }
                    },
                    groundPlane: { show: false },
                    silent: true
                },

                series: [
                    {
                        type: 'custom',
                        coordinateSystem: 'none',
                        renderItem: renderOuterNodeItem.bind(this), // 关键：绑定 this
                        data: this.outerNodesData.map((item, index) => ({
                            value: [index, item.value],
                            ...item
                        }))
                    }
                ]
            };

            this.myChart.setOption(option);
        },

        startAutoCycle() {
            clearInterval(this.autoCycleInterval);
            this.autoCycleInterval = setInterval(() => {
                if (!this.userInteracting) {
                    this.highlightedIndex = (this.highlightedIndex + 1) % this.outerNodesData.length;
                    this.updateChartDataAndRender(); // 更新数据并重新渲染
                }
            }, 3000);
        },

        pauseAutoCycle() {
            clearInterval(this.autoCycleInterval);
        },

        resumeAutoCycleWithDelay() {
            this.pauseAutoCycle();
            setTimeout(() => {
                if (!this.userInteracting) {
                    this.startAutoCycle();
                }
            }, 500);
        },

        setGlobeAutoRotate(rotate) {
            if (this.myChart && this.isGlobeAutoRotating !== rotate) {
                this.myChart.setOption({
                    globe: {
                        viewControl: {
                            autoRotate: rotate
                        }
                    }
                });
                this.isGlobeAutoRotating = rotate;
            }
        },

        showPopup(x, y, title, value) {
            this.popupVisible = true;
            // 弹出框位置相对于 chartDom
            const chartContainerRect = this.$refs.globeChartContainer.getBoundingClientRect();
            this.popupStyle.left = `${x + chartContainerRect.left}px`;
            this.popupStyle.top = `${y + chartContainerRect.top}px`;
            this.popupContent.title = title;
            this.popupContent.value = value;
        },

        hidePopup() {
            this.popupVisible = false;
        },

        // 封装数据更新和渲染
        updateChartDataAndRender() {
            this.myChart?.setOption({
                series: [{
                    type: 'custom',
                    // renderItem 保持不变，它已经绑定了 this
                    data: this.outerNodesData.map((item, index) => ({
                        value: [index, item.value],
                        ...item
                    }))
                }]
            }, {
                notMerge: false,
                lazyUpdate: false
            });
        },

        // 手动切换上一个项目
        prevItem() {
            this.userInteracting = true;
            this.pauseAutoCycle();
            this.setGlobeAutoRotate(false);
            this.highlightedIndex = (this.highlightedIndex - 1 + this.outerNodesData.length) % this.outerNodesData.length;
            this.updateChartDataAndRender();
            this.resumeAutoCycleWithDelay();
        },

        // 手动切换下一个项目
        nextItem() {
            this.userInteracting = true;
            this.pauseAutoCycle();
            this.setGlobeAutoRotate(false);
            this.highlightedIndex = (this.highlightedIndex + 1) % this.outerNodesData.length;
            this.updateChartDataAndRender();
            this.resumeAutoCycleWithDelay();
        },
        /**
         * @author wzheng
         * @date 2025年5月29日09:39:38
         * @description 初始化地图
         * @param {Object} mapData - 参数描述
         */
        initChart(mapData) {
            var that = this;
            this.myChart = echarts.init(document.getElementById("mapDiv"));
            let optionsMap = {};
            let mapImg = document.createElement("img");
            mapImg.src = "assets/images/screenfull/map_bg1.png";
            var geoName = this.areaName;
            let locationImg =
                "image://data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMAAP//AAAAAAAAAAAAAAAAAAdAOwAGQDsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9PAAAAAAAAAAACAAAAAAAAAEAAAQAAAQABAAAAAAAAAAAAAAAAAAlfWQAAAAAAAAAAAAAAAAAAAQEAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAJUEoAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAFA3wAQEAAAAAAB5AAQMAEAAs8AAAAAAAAAAAAAAAAAAAAAAAAAABr/7QAAAAAAAAAAAAD//wAAAQEAAAAAAAAAAAAAAAAAAAAAAPcIDQAAAAAACfjzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAQEAAAAAAAAAAAD+8PEA6BEiAAAAAAAAAAAAAAAAAAAAAAAAAQAAAP8BURsA7bACAAADMAABAAAAAQAAAAAAAAAAAAAAAAAABkA7AAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAACEA8AAx8dAAAAAAAAAAAAAAAAAAAAAAABAAEA/wAAQAAAAAAE/wD/MAH/AAAAAAAAAAAAAAAAAAAAAAAAB0A7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPcIDQAAAAAAAAAAAAAAAAAJ+PMAAAAAAAAAAAAAAAAAAAAAAPcIDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ+PMAAAAAAAAAAAAAAAAA9wgNAAAAAAAAAAAAAAAAAAn38gAA//8AAAEBAAAAAAAAAAAAB0E8APagpwAAAAAAAAAAAAABAAD///8AAQD/IAAAAAACAwABLwAAAAAAAAAAAAAAAAAAAAAAAAAABS8tAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9wgNAAAAAAAAAAAAAAAAAAAAAAD3CA0AAAAAAAAAAAAAAAAA9wgNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3CA0AAAAAAAAAAAAAAAAAAAAAAPcJDgAAAAAAAAAAAAAAAAAAAAAABTAsAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEBLwAAAAAC/wD/EAABAAABAQEAAAAAAAAAAAAAAAAABCAdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3CA0AAAAAAAAAAAAJ+PMACfjzAAAAAAAAAAAA9wgNAAAAAAAAAAAAAAAAAAAAAAAJ+PMACfjzAAn48wAAAAAAAAAAAAn48wAAAAAAAAAAAPcIDQAAAAAAAAAAAAn48wAJ+PMAAAAAAAAAAAD3CQ4AAAAAAAAAAAAAAAAAAyAeAAAAAAAAAAAAAAAAAAD/AAAA/wAAAAAAIAAAAAACAAAAIAD/AAD///8AAAAAAAAAAAAAAAAAAyAeAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAn48wAAAAAAAAAAAAn48wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACfjzAAAAAAAAAAAACfjzAAAAAAAAAAAAAAAAAAAAAAAAAAAABS8sAAAAAAAAAAAAAAAAAAAB/wAAAAAAAP8AAN8AEBAEAAEAEAD/AAAAAQAAAP8AAAAAAAAAAAAAARAPAAAAAAAAAAAAAP//AAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3CA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AQAAAAAAAAAAAAcAAA8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACfjzAAAAAAAAAAAAAAAAAAAAAAAAAAAACfjzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAACAP8AAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPcIDQAAAAAAAAAAAPcIDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9wgNAAAAAAAAAAAAAAAAAAAAAAAAAAAA9wgNAAAAAAAAAAAA9wgNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAEAAAAAAAACAAD/8AAAAAAAAAAAAAAAAAAAAAAAAAAA/eDiAAAAAAAAAAAAAAEBAP8AAAAAAAAAAAAAAAAAAAD3CA0A9wgNAAAAAAAAAAAA9wgNAPcIDQAAAAAAAAAAAAAAAAAJ+PMAAAAAAAAAAAD3CA0A9wgNAAAAAAAAAAAACfjzAAAAAAAAAAAA9wgNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPcIDQAAAAAAAAAAAAn48wAAAAAAAAAAAPcIDQD3CA0AAAAAAAAAAAAJ+PMAAAAAAAAAAAAAAAAA/vDyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAPkAAPECAQAB8AAAAAAAAAAAAAAAAAAAAAAAAAAA//DxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACfjzAAAAAAAAAAAAAAAAAAAAAAAJ+PMAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ+PMACfjzAAn48wAJ+PMAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ+PMAAAAAAAAAAAAAAAAAAAAAAAn38gAAAAAAAAAAAAAAAAAAAAAA//DwAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAACEA8PAE/wD/0AAAACAAAAEAAAAAAAAAAAAAAAAA+tHUAAQwLQAAAAAAAAAAAAABAgAAAAAAAAAAAAAAAAAJ+PMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAn48wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3CA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACfjzAAAAAAAAAAAAAAAAAAD+/gAAAAAAAAEBAAAAAAAAAAAA+9HUAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAA4AAAAAACAAAB8QABAQAAAAAAAAAAAAAAAAAAAAAA/NDTAAAAAAAAAAAAAAAAAAEBAAAA/f0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACfjzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAn48wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAQEAAAAAAAAAAAAAAAAA+9DUAAAAAAAAAAAAAAAAAAABAAAAAAAAAQD/4AAAAAAEAQAA0P//AF8AAP8AAAABAAAAAAAAAAAA+tDUAAAAAAAAAAAAAAAAAAABAQD//PwAAQMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAn48wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAA+tDUAAAAAAAAAAAAAAAAAAD/AAAAAAAA/QAB0QAAAAAC/gD+wAAAAAAAAAEAAAEAAAAAAAAAAAAA+sDFAP/w8QAAAAAAAAAAAAAAAAABAQEAAPz8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD94OMA/NDTAAAAAAAAAAAAAAAAAAAAAAAAAP8AAgABwAAAAAACHADw0AABAPAAAQAAAP8AAAAAAAAAAAAAAAAAAPextgAAAAAAAAAAAAABAQAAAwMA//39AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5wMQAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAEA+gD90AAAAAACAAAAAAD/ALEA/wAAAAD/AAAAAAAAAAAAAAAAAPagpwAAAAAAAAAAAAAAAAAAAQEAAQECAAD9/QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOYAEa//AQFQAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABTAsAAUwLQAFMCwABS8sAAIQDwABEA8AAAAAAAAAAAD/8PEA/ODiAP3h4wD60NQA+sDEAP3g4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wABAAHgGgDuIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN8AEBAGAAHPAAABIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/APD6AP4xIQDw4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEA8PD/AP9RAAEAAAABAAAAAf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/wAAAAAAAP8AAP8A/nEhAPDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAPDQ//8AcQD/AAAA/wEAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AQAAAAAA/gAAkRwA8KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOYAEb//AAFAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAA///gGwDvIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPkA/1EBAADgAP8AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///D6AP9BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEA8PD9AAJhAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAP8A/3EhAPDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdAOzA///+cQAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAA/gAAkRwA8KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOYAEb//AAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAD/AAABAQDg+f/+MSEA8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPkA/1EAAP/gAAEAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP8AAAEAAPD5//5BIQDw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEA8PD+AP9hAP8AAAAAAQAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAP4AAIEhAPDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdAPDA/gAAgQAAAAAAAQAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAA/gAAkRwA7pAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOYAE7//AP9AAAH/AAD/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEA////AAABAAAB/wDg+QD+MSEA8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/WEBAP/gAP8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///D5AP5BIQDw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkA8OD9AP9hAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAD///8AAAAAAAEAAYEhAPDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdAPDAAAAAgQAA/wAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAoBoA7pAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOYAE7//Af9AAP//AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAP8AAAEBAQD///7g+gD/MSEA8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/WEAAP/wAAEBAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAD/AP8A/wD6AP9BIQDw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAA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";
            // 等待地图数据加载完成后再初始化
            $.getJSON("assets/mapJson/110000/" + this.areaCode + ".json", function (geoJson) {
                // 注册地图数据
                echarts.registerMap(that.areaName, geoJson);
                // 初始化地图
                if (that.areaName == "北京市") {
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
                            for (let j = 0; j < that.mapData1.length; j++) {
                                if (geoJson["features"][i].id == that.mapData1[j]["belongarea"]) {
                                    featuresArr[i].value = that.mapData1[j]["value"];
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
                                            borderColor: "#ffffff",
                                            // borderColor: '#3E9CFF',
                                        },
                                    },
                                },
                                right: 40,
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
                                        // areaColor: '#1d5669',
                                        // areaColor: 'rgba(15, 59, 111, 1)',
                                        color: "#081A30CC",
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
                                    layoutSize: "180%",
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
                                            areaColor: "rgba(133, 242, 255, 0.8)",
                                            shadowColor: "rgba(0, 10, 26,0.6)",
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
                                    symbolSize: [17, 25],
                                    labe: {
                                        normal: {
                                            show: true,
                                        },
                                    },
                                    tooltip: {
                                        show: true,
                                        trigger: "item",
                                        formatter(params) {
                                            // console.log('params')
                                            // console.log(params)
                                            let data = params.data;
                                            let html = "";
                                            if (data.balance) {
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
                                                    "height: 220px;width: 296px;padding-top: 8px;background:url(assets/images/screenfull/tooltip_bg.png) no-repeat;background-size: 295px 219px;";
                                                if (balance.length > 4 && badbalance.length > 4) {
                                                    backgroudStyle =
                                                        "height: 220px;width: 316px;padding-top: 8px;background:url(assets/images/screenfull/tooltip_bg.png) no-repeat;background-size: 315px 219px;";
                                                }
                                                html = `<div class="map-tooltip" style="${backgroudStyle}">
                                                                <div class="map-tooltip-title" style="display: flex;height: 50px;justify-content: center;align-items: center;height: 50px;">
                                                                    <img style="height: 30px;width: 30px;" src="assets/images/screenfull/tooltip_logo.png">
                                                                    <div style="color: #FF4F4F;font-family: PingFang SC;font-size: 20px;">${data.bankName}</div>
                                                                </div>
                                                                <div class="map-tooltip-content" style="display: flex;justify-content: space-between;padding: 10px 10px 12px 10px;color: #FFFFFF;font-family: PingFang SC;font-weight: semibold;font-size: 12px;line-height: 24px;">
                                                                    <div style="margin-right: 12px;display: flex; flex-direction: column; align-items: flex-start;width: 120px;">
                                                                        <div>风险收益水平：${overduerate}%</div>
                                                                        <div style="margin-left: 12px;">加权平均利率：${overduerate}%</div>
                                                                    </div>
                                                                    <div style="display: flex; flex-direction: column; align-items: flex-start;">
                                                                        <div>中间业务收入类：${overdueloanrate}%</div>
                                                                        <div style="margin-left: 12px;">风险成本率：${balancerate}%</div>
                                                                    </div>
                                                                </div>
                                                            </div>`;
                                                return html;
                                            } else {
                                                html = `<div class="map-tooltip" style="position: relative;height: 172px;width: 320px;padding-top: 8px;background:url(assets/images/screenfull/tooltip_smoke_bg.png) no-repeat;background-size: 320px 172px;">
                                                            <div style="display: flex;align-items: center;position: absolute;height: 98px; width: 320px;top: 0;">
                                                                <div style="width: 64px;display: flex; justify-content: center;">
                                                                    <img style="height: 30px;width: 30px;" src="assets/images/screenfull/tooltip_logo.png">
                                                                </div>
                                                                <div class="map-tooltip-content" style="padding: 12px 12px 8px 12px;color: #FFFFFF;font-family: PingFang SC;font-weight: semibold;font-size: 12px;line-height: 24px;">
                                                                    <div style="color: #FF4F4F;font-family: PingFang SC;font-size: 20px;margin-bottom: 6px;">${data.type}</div>
                                                                    <div style="margin-right: 12px;display: flex;">
                                                                        <div>风险收益水平：${data.overduerate}%</div>
                                                                        <div style="margin-left: 12px;">加权平均利率：${data.overduerate}%</div>
                                                                    </div>
                                                                    <div style="display: flex;">
                                                                        <div style="color:#FFCF5F;margin-left: 12px;">中间业务收入类：${data.overdueloanrate}%</div>
                                                                        <div style="color:#3E9CFF;margin-left: 12px;">风险成本率：${data.balancerate}%</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>`;
                                                return html;
                                            }
                                        },
                                    },
                                    data: mapData,
                                },
                            ],
                        };
                        that.myChart.setOption(optionsMap, true); //设置option
                        /**
                         * @author wzheng
                         * @date 2025年5月29日09:40:24
                         * @description 地图还原事件
                         */
                        that.myChart.on("restore", (params) => {
                            that.restore();
                        });
                        /**
                         * @author wzheng
                         * @date 2025年5月29日09:42:13
                         * @description 地图缩放事件
                         */
                        that.myChart.on("georoam", (params) => {
                            let option = that.myChart.getOption();
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
                            that.myChart.setOption(option, true); //设置option
                        });
                        /**
                         * @author wzheng
                         * @date 2025年5月29日09:39:38
                         * @description 地图点击事件，下钻
                         * @param {Object} item - 参数
                         */
                        that.myChart.on("click", function (item) {
                            if ((item.data && item.data.bankName) || (item.data && item.data.orgname)) {
                                // this.mapClick.emit(item.data)
                            } else {
                                that.mapData2 = [];
                                that.areaName = item.name;
                                that.areaCode = item.data.areaCode;
                                for (let data of that.mapData1) {
                                    if (data.belongarea == item.data.areaCode) {
                                        that.mapData2.push(data);
                                    }
                                }
                                that.initChart(that.mapData1);
                            }
                        });
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
                                        borderColor: "#ffffff",
                                        // borderColor: '#3E9CFF',
                                    },
                                },
                            },
                            right: 40,
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
                                    color: "#081A30CC",
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
                                layoutSize: "72%",
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
                                        areaColor: "rgba(133, 242, 255, 0.8)",
                                        shadowColor: "rgba(0, 10, 26,0.6)",
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
                                symbolSize: [17, 25],
                                labe: {
                                    normal: {
                                        show: true,
                                    },
                                },
                                tooltip: {
                                    show: true,
                                    trigger: "item",
                                    formatter(params) {
                                        // console.log('params')
                                        // console.log(params)
                                        let data = params.data;
                                        let html = "";
                                        if (data.balance) {
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
                                                "height: 220px;width: 296px;padding-top: 8px;background:url(assets/images/screenfull/tooltip_bg.png) no-repeat;background-size: 295px 219px;";
                                            if (balance.length > 4 && badbalance.length > 4) {
                                                backgroudStyle =
                                                    "height: 220px;width: 316px;padding-top: 8px;background:url(assets/images/screenfull/tooltip_bg.png) no-repeat;background-size: 315px 219px;";
                                            }
                                            html = `<div class="map-tooltip" style="${backgroudStyle}">
                                                            <div class="map-tooltip-title" style="display: flex;height: 50px;justify-content: center;align-items: center;height: 50px;">
                                                                <img style="height: 30px;width: 30px;" src="assets/images/screenfull/tooltip_logo.png">
                                                                <div style="color: #FF4F4F;font-family: PingFang SC;font-size: 20px;">${data.bankName}</div>
                                                            </div>
                                                            <div class="map-tooltip-content" style="display: flex;justify-content: space-between;padding: 10px 10px 12px 10px;color: #FFFFFF;font-family: PingFang SC;font-weight: semibold;font-size: 12px;line-height: 24px;">
                                                                <div style="margin-right: 12px;display: flex; flex-direction: column; align-items: flex-start;width: 120px;">
                                                                    <div style="margin-left: 12px;">风险收益水平：${overduerate}%</div>
                                                                    <div style="margin-left: 12px;">加权平均利率：${overduerate}%</div>
                                                                </div>
                                                                <div style="display: flex; flex-direction: column; align-items: flex-start;">
                                                                    <div>中间业务收入类：${overdueloanrate}%</div>
                                                                    <div style="margin-left: 12px;">风险成本率：${balancerate}%</div>
                                                                </div>
                                                            </div>
                                                        </div>`;
                                            return html;
                                        } else {
                                            html = `<div class="map-tooltip" style="position: relative;height: 172px;width: 320px;padding-top: 8px;background:url(assets/images/screenfull/tooltip_smoke_bg.png) no-repeat;background-size: 320px 172px;">
                                                        <div style="display: flex;align-items: center;position: absolute;height: 98px; width: 320px;top: 0;">
                                                            <div style="width: 64px;display: flex; justify-content: center;">
                                                                <img style="height: 30px;width: 30px;" src="assets/images/screenfull/tooltip_logo.png">
                                                            </div>
                                                            <div class="map-tooltip-content" style="padding: 12px 12px 8px 12px;color: #FFFFFF;font-family: PingFang SC;font-weight: semibold;font-size: 12px;line-height: 24px;">
                                                                <div style="color: #FF4F4F;font-family: PingFang SC;font-size: 20px;margin-bottom: 6px;">${data.type}</div>
                                                                <div style="margin-right: 12px;display: flex;">
                                                                    <div>风险收益水平：${data.overduerate}%</div>
                                                                    <div style="margin-left: 12px;">加权平均利率：${data.overduerate}%</div>
                                                                </div>
                                                                <div style="display: flex;">
                                                                    <div style="color:#FFCF5F;margin-left: 12px;">中间业务收入类：${data.overdueloanrate}%</div>
                                                                    <div style="color:#3E9CFF;margin-left: 12px;">风险成本率：${data.balancerate}%</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>`;
                                            return html;
                                        }
                                    },
                                },
                                data: that.mapData2,
                            },
                        ],
                    };
                }
                // 应用配置
                that.myChart.setOption(optionsMap, true);
                that.myChart.setOption(optionsMap, true); //设置option
                /**
                 * @author wzheng
                 * @date 2025年5月29日09:40:24
                 * @description 地图还原事件
                 */
                that.myChart.on("restore", (params) => {
                    that.restore();
                });
                /**
                 * @author wzheng
                 * @date 2025年5月29日09:42:13
                 * @description 地图缩放事件
                 */
                that.myChart.on("georoam", (params) => {
                    let option = that.myChart.getOption();
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
                    that.myChart.setOption(option, true); //设置option
                });
                /**
                 * @author wzheng
                 * @date 2025年5月29日09:39:38
                 * @description 地图点击事件，下钻
                 * @param {Object} item - 参数
                 */
                that.myChart.on("click", function (item) {
                    if ((item.data && item.data.bankName) || (item.data && item.data.orgname)) {
                        // this.mapClick.emit(item.data)
                    } else {
                        that.mapData2 = [];
                        that.areaName = item.name;
                        that.areaCode = item.data.areaCode;
                        for (let data of that.mapData1) {
                            if (data.belongarea == item.data.areaCode) {
                                that.mapData2.push(data);
                            }
                        }
                        that.initChart(that.mapData1);
                    }
                });
            }).catch((error) => {
                console.error("加载地图数据失败:", error);
            });
        },
        /**
         * @author wzheng
         * @date 2025年5月29日09:40:24
         * @description 地图还原事件
         */
        restore() {
            this.areaName = "北京市";
            this.areaCode = "110000";
            this.initChart(this.mapData1);
        },
        /**
         * @author wzheng
         * @description 条线纬度选择框单击事件
         * @date 2025年5月29日13:18:23
         */
        handleLineChange(select) {
            // 获取选中的值
            var selectedValue = select;
            var seriesLineName = '';
            if (selectedValue == 'entWater') {
                seriesLineName = '公司金融服务部';
            } else if (selectedValue == 'prattWater') {
                seriesLineName = '普惠及乡村振兴金融服务部';
            } else if (selectedValue == 'personWater') {
                seriesLineName = '零售羚信货部';
            } else if (selectedValue == 'total') {
                seriesLineName = '合计';
            }
            // 获取选中的文本
            // var selectedText = select.options[select.selectedIndex].text;
            if (selectedValue != 'all') {
                this.series = [{
                    name: seriesLineName,
                    type: 'line',
                    smooth: true,
                    color: '#F3410A',
                    // showSymbol: false,
                    label: {
                        show: true,           // 显示标签
                        position: 'top',      // 标签位置
                    },
                    data: this.StipLineData[selectedValue]
                }];
            } else {
                this.series = [
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
                        data: this.StipLineData.entWater,
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
                        data: this.StipLineData.prattWater,
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
                        data: this.StipLineData.personWater,
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
                        data: this.StipLineData.total,
                    },
                ];
            }
            this.initStripLineEcharts(this.xData);
        },
        /**
         * @author wzheng
         * @description 产品纬度选择框单击事件
         * @date 2025年5月29日14:04:06
         */
        handleProductChange(select) {
            // 获取选中的值
            var selectedValue = select;
            var seriesProductName = '';
            if (selectedValue == 'entProduction') {
                seriesProductName = '对公信贷产品';
            } else if (selectedValue == 'personProduction') {
                seriesProductName = '个人信贷产品';
            }
            // 获取选中的文本
            // var selectedText = select.options[select.selectedIndex].text;
            if (selectedValue != 'all') {
                this.productSeries = [{
                    name: seriesProductName,
                    type: 'line',
                    smooth: true,
                    color: '#F3410A',
                    // showSymbol: false,
                    label: {
                        show: true,           // 显示标签
                        position: 'top',      // 标签位置
                    },
                    data: this.productLineData[selectedValue]
                }];
            } else {
                this.productSeries = [
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
                        data: this.productLineData.entProduction,
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
                        data: this.productLineData.personProduction,
                    }
                ];
            }
            this.initProductLineEcharts(this.productLineData.DATADATE);
        },
        /**
         * @author wzheng
         * @description 客户纬度选择框单击事件
         * @date 2025年5月29日14:12:58
         */
        handleCustomerChange(select) {
            // 获取选中的值
            var selectedValue = select;
            var seriesCustomerName = '';
            // 获取选中的文本
            // var selectedText = select.options[select.selectedIndex].text;

            // initProductLineEcharts(productLineData.DATADATE);
        },
        /**
         * @author wzheng
         * @description 机构纬度选择框单击事件
         * @date 2025年5月29日14:27:32
         */
        handleOrgChange(select) {
            // 获取选中的值
            var selectedValue = select;
            var seriesOrgName = '';
            // 获取选中的文本
            // var selectedText = select.options[select.selectedIndex].text;

            // initProductLineEcharts(productLineData.DATADATE);
        },
        /**
         * @author wzheng
         * @date 2025年5月29日09:45:37
         * @description 机构纬度折线图
         * @version 1.0.0
         */
        initOrgLineEcharts(xData, yData) {
            this.orgLatTotalEcharts = echarts.init(
                document.getElementById("orgLatTotalEcharts")
            );
            this.orgLatTotalOption = {
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
            this.orgLatTotalEcharts.setOption(this.orgLatTotalOption, true);
        },
        /**
         * @author wzheng
         * @date 2025年5月29日11:19:30
         * @description 条线纬度折线图
         * @version 1.0.0
         */
        initStripLineEcharts(xData) {
            this.stripLineEcharts = echarts.init(
                document.getElementById("stripLineEcharts")
            );
            this.stripLineOption = {
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
                series: this.series,
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
            this.stripLineEcharts.setOption(this.stripLineOption, true);
        },

        /**
         * @author wzheng
         * @date 2025年5月29日13:53:34
         * @description 产品纬度折线图
         * @version 1.0.0
         */
        initProductLineEcharts(xData) {
            this.productLineEcharts = echarts.init(
                document.getElementById("productLatEcharts")
            );
            this.productLineOption = {
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
                series: this.productSeries,
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
            this.productLineEcharts.setOption(this.productLineOption, true);
        },

        /**
         * @author wzheng
         * @date 2025年5月29日14:13:51
         * @description 客户纬度折线图
         */
        initCustomerLineEcharts(xData, yData) {
            this.cusLatTotalEcharts = echarts.init(
                document.getElementById("customerLatEcharts")
            );
            this.cusLatTotalOption = {
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
            this.cusLatTotalEcharts.setOption(this.cusLatTotalOption, true);
        },

        /**
         * @author wzheng
         * @date 2025年5月29日15:24:38
         * @description 客户数量条形图
         */
        initCustomerDistributeEcharts(customerDistributeData) {
            this.customerTotalEcharts = echarts.init(
                document.getElementById("customerDistribute")
            );
            this.customerTotalOption = {
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
            this.customerTotalEcharts.setOption(this.customerTotalOption, true);
        },

        /**
         * @author wzheng
         * @date 2025年5月29日16:31:53
         * @description 产品数量条形图
         */
        initProductDistributeEcharts(customerDistributeData) {
            this.productTotalEcharts = echarts.init(
                document.getElementById("productDistribute")
            );
            this.productTotalOption = {
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
            this.productTotalEcharts.setOption(this.productTotalOption, true);
        },
    }
});