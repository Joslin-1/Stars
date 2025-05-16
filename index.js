// 设备检测函数
function isMobileDevice() {
    return (typeof window.orientation !== 'undefined') ||
        (navigator.userAgent.indexOf('IEMobile') !== -1) ||
        (navigator.userAgent.indexOf('Mobile') !== -1);
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
    if (isMobileDevice()) {
        // 移动设备访问
        document.querySelector('.mobile-view').style.display = 'block';
        initMobileView();
    } else {
        // 电脑端访问
        document.querySelector('.desktop-view').style.display = 'block';
    }
});

// 初始化移动视图
function initMobileView() {
var text = 'Happy every day !';
var text2 = ' --To you';
var content = document.getElementById('word');
var content2 = document.getElementById('word2');
let index = 0;
let index2 = 0;

if (sessionStorage.getItem('jumped') === 'true') {
    // 已访问过，直接显示全部内容
    content.innerHTML = text;
    content2.innerHTML = text2;
    document.getElementById('box2').classList.remove('box2');

} else {
    // 首次访问，显示打字动画
    setTimeout(function () {
        function typeText() {
            if (index < text.length) {
                content.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeText, 100);
            } else if (index2 < text2.length) {
                content2.innerHTML += text2.charAt(index2);
                index2++;
                setTimeout(typeText, 200);
            } else {
                document.getElementById('box2').classList.remove('box2');
            }

        }
        typeText();
    }, 500);
}
// console.log(sessionStorage.getItem('jumped'));

// 按钮点击事件
document.getElementById('btn').addEventListener('click', function () {
    window.location.href = 'https://joslin-1.github.io/Stars/index2.html?from=https://joslin-1.github.io/Stars/index.html';
    // window.location.href = "./index2.html?from=./index.html"
    sessionStorage.setItem('allowed', 'true');

})
}
