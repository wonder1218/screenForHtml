import * as THREE from './three.module.js';
import { update, Tween, Easing } from './tween.esm.js';
// import { OrbitControls } from './assets/js/OrbitControls.js';
// 圆角矩形绘制函数
function drawRoundRect(ctx, x, y, w, h, r, fillStyle) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.fillStyle = fillStyle;
    ctx.fill();
    ctx.restore();
}
// 1. 场景、相机、渲染器
const container = document.getElementById('container');
const width = container.offsetWidth;
const height = container.offsetHeight;
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
camera.position.set(0, 60, 25); // y轴正方向50，z轴正方向20
camera.up.set(0, 0, 1);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(width, height);
container.appendChild(renderer.domElement);

// 灯光
scene.add(new THREE.AmbientLight(0xffffff, 0.7));
const light = new THREE.PointLight(0xffffff, 1.2, 100);
light.position.set(20, 20, 20);
scene.add(light);

// 创建中心地球
const earthGeometry = new THREE.SphereGeometry(10, 64, 64);
const earthMaterial = new THREE.MeshPhongMaterial({
    color: 0x3498db,
    transparent: true,
    opacity: 0.85,
    shininess: 80,
    specular: 0x555555
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);
// 添加地球表面效果
const surfaceGeometry = new THREE.SphereGeometry(10, 64, 64);
const surfaceMaterial = new THREE.MeshBasicMaterial({
    color: 0x1a7ad9,
    transparent: true,
    wireframe: true,
    opacity: 0.2
});
const surface = new THREE.Mesh(surfaceGeometry, surfaceMaterial);
scene.add(surface);

// 添加光源
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
dirLight.position.set(0, 5, 10);
scene.add(dirLight);

// 模块数据
const moduleData = [
    { title: '项目一', value: '3009.36', icon: '🏠', desc: '详细数据1' },
    { title: '项目二', value: '2001.22', icon: '🏢', desc: '详细数据2' },
    { title: '项目三', value: '1500.00', icon: '⚡', desc: '详细数据3' },
    { title: '项目四', value: '4000.88', icon: '🛡️', desc: '详细数据4' },
    { title: '项目五', value: '1234.56', icon: '💰', desc: '详细数据5' },
    { title: '项目六', value: '5678.90', icon: '📊', desc: '详细数据6' },
    { title: '项目七', value: '8888.88', icon: '🔊', desc: '详细数据7' },
    { title: '项目八', value: '9999.99', icon: '🗄️', desc: '详细数据8' },
];

const group = new THREE.Group();
const modules = [];
const moduleCount = moduleData.length;
const radius = 30; // 环绕半径
const tiltAngle = Math.PI / 10; // 约18度，可根据需要调整

for (let i = 0; i < moduleCount; i++) {
    const angle = 0 - i * (2 * Math.PI / moduleCount); // 0度在y轴正方向
    const x = Math.sin(angle) * radius;
    const y = Math.cos(angle) * radius;
    const z = 0;
    // 创建一个组来包含每个模块的所有元素
    const moduleGroup = new THREE.Group();
    moduleGroup.position.set(x, y, z);
    moduleGroup.scale.set(1.4, 1.4, 1.4);
    // 1. 扁平圆柱体
    const cylinderGeometry = new THREE.CylinderGeometry(2, 2, 0.5, 32, 1, false);
    const cylinderMaterial = new THREE.MeshPhongMaterial({
        color: 0x3399ff,
        shininess: 80,
        transparent: true,
        opacity: 0.8
    });
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    // cylinder.position.set(x, y, z + 0.25);

    // 2. icon
    cylinder.rotation.x = Math.PI / 2; // 让圆柱体平躺
    cylinder.position.set(0, 0, 0.25);
    const iconCanvas = document.createElement('canvas');
    iconCanvas.width = 64; iconCanvas.height = 64;
    const iconCtx = iconCanvas.getContext('2d');
    iconCtx.font = '48px Arial';
    iconCtx.textAlign = 'center';
    iconCtx.textBaseline = 'middle';
    iconCtx.fillText(moduleData[i].icon, 32, 32);
    const iconTexture = new THREE.CanvasTexture(iconCanvas);
    const iconMaterial = new THREE.SpriteMaterial({ map: iconTexture, transparent: true });
    const iconSprite = new THREE.Sprite(iconMaterial);
    iconSprite.position.set(0, 0, 3);
    iconSprite.scale.set(3, 3, 1);

    // 1. 创建 canvas
    const labelCanvas = document.createElement('canvas');
    labelCanvas.width = 128;
    labelCanvas.height = 70;
    const labelCtx = labelCanvas.getContext('2d');
    // 2. 画圆角背景
    drawRoundRect(labelCtx, 0, 0, 128, 70, 16, 'rgba(51,153,255,0.18)');

    // 3. 画 value（数值，居中偏下）
    labelCtx.font = 'bold 28px Arial';
    labelCtx.textAlign = 'center';
    labelCtx.textBaseline = 'middle';
    labelCtx.fillStyle = '#fff';
    labelCtx.fillText(moduleData[i].value, 64, 40); // y=40

    // 4. 画 title（项目数据，居中偏上）
    labelCtx.font = 'bold 20px Arial';
    labelCtx.fillStyle = '#1a1a1f';
    labelCtx.fillText(moduleData[i].title, 64, 20); // y=20

    // 5. 创建 sprite
    const labelTexture = new THREE.CanvasTexture(labelCanvas);
    const labelMaterial = new THREE.SpriteMaterial({ map: labelTexture, transparent: true });
    const labelSprite = new THREE.Sprite(labelMaterial);
    labelSprite.position.set(0, 0, 5.5);
    labelSprite.scale.set(5, 2.5, 1);
    // 6. 添加到 moduleGroup
    moduleGroup.add(labelSprite);

    // 5. 数据在圆柱体正前方
    const dataCanvas = document.createElement('canvas');
    dataCanvas.width = 128; dataCanvas.height = 40;
    const dataCtx = dataCanvas.getContext('2d');
    dataCtx.font = 'bold 20px Arial';
    dataCtx.textAlign = 'center';
    dataCtx.textBaseline = 'middle';
    dataCtx.fillStyle = '#fff';
    dataCtx.fillText(moduleData[i].desc, 64, 20);
    const dataTexture = new THREE.CanvasTexture(dataCanvas);
    const dataMaterial = new THREE.SpriteMaterial({ map: dataTexture, transparent: true });
    const dataSprite = new THREE.Sprite(dataMaterial);
    dataSprite.scale.set(5, 1.5, 1);

    // 6. 虚线连接线
    const lineGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0), // 地球中心
        new THREE.Vector3(x, y, z)  // 项目球心
    ]);
    const lineMaterial = new THREE.LineDashedMaterial({
        color: 0x5dade2,
        dashSize: 1,
        gapSize: 0.7,
        linewidth: 2,
        transparent: true,
        opacity: 0.7
    });
    const line = new THREE.Line(lineGeometry, lineMaterial);
    line.computeLineDistances();
    group.add(line); // 让线跟随整体旋转
    // group.add(line);
    // 将所有元素添加到模块组
    moduleGroup.add(cylinder, iconSprite);
    // 创建一个容器组来保持方向
    const containerGroup = new THREE.Group();
    containerGroup.add(moduleGroup);

    // 将容器组添加到主组
    group.add(containerGroup);
    const interactives = [cylinder, iconSprite, labelSprite];
    // 更新模块数组
    modules.push({
        containerGroup,
        cylinder,
        iconSprite,
        interactives,
        angle
    });
}
scene.add(group);

// 自动切换
let currentIndex = 0;
let autoRotate = true;
let currentAngle = 0;
function switchModule(next = true) {
    const step = 2 * Math.PI / moduleCount;
    if (next) {
        currentAngle += step; // 顺时针
    } else {
        currentAngle -= step; // 逆时针
    }
    new Tween(group.rotation)
        .to({ z: currentAngle }, 800)
        .easing(Easing.Cubic.Out)
        .start();
};
// 自动切换只在autoRotate为true时执行
setInterval(() => {
    if (autoRotate) switchModule(true);
}, 4000);

document.getElementById('btn-prev').onclick = () => { autoRotate = false; switchModule(false); };
document.getElementById('btn-next').onclick = () => { autoRotate = false; switchModule(true); };

// 悬浮弹窗
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const popup = document.getElementById('popup');
// 添加鼠标移出容器的事件监听
container.addEventListener('mouseleave', function () {
    autoRotate = true;
    popup.style.display = 'none';
});
renderer.domElement.addEventListener('mousemove', function (event) {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    // 获取所有可能被点击的对象
    const intersectObjects = modules.flatMap(m => m.interactives);
    const intersects = raycaster.intersectObjects(intersectObjects);
    // const intersects = raycaster.intersectObjects(modules);
    if (intersects.length > 0) {
        autoRotate = false;
        // 找到被点击的模块索引
        let moduleIndex = -1;
        for (let i = 0; i < modules.length; i++) {
            if (modules[i].interactives.includes(intersects[0].object)) {
                moduleIndex = i;
                break;
            }
        }
        if (moduleIndex !== -1) {
            popup.style.display = 'block';
            popup.innerHTML = `<b>${moduleData[moduleIndex].title}</b><br>数值：${moduleData[moduleIndex].value}<br>${moduleData[moduleIndex].desc}`;
            const x = event.clientX;
            const y = event.clientY;
            popup.style.left = x + 20 + 'px';
            popup.style.top = y - 20 + 'px';
        }
    } else {
        autoRotate = true;
        popup.style.display = 'none';
    }
});
// 渲染循环
function animate() {
    requestAnimationFrame(animate);
    update();
    renderer.render(scene, camera);
}
animate();

// 响应式
window.addEventListener('resize', () => {
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
});