document.addEventListener('DOMContentLoaded', function() {
    // 获取元素
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // 检查元素是否存在
    if (!hamburger || !navLinks) {
        console.error('Navigation elements not found');
        return;
    }

    // 汉堡菜单点击事件
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation(); // 阻止事件冒泡
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        // 切换背景滚动
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // 点击导航链接时关闭菜单
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // 点击页面其他地方关闭菜单
    document.addEventListener('click', function(e) {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // 添加窗口大小改变监听
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.style.overflow = '';
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-blur');
    const hamburger = document.querySelector('.hamburger');
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (window.scrollY > 20) {
        nav.style.background = isDark 
            ? 'rgba(0, 0, 0, 0.85)' 
            : 'rgba(255, 255, 255, 0.85)';
        hamburger.style.background = isDark 
            ? 'rgba(0, 0, 0, 0.4)' 
            : 'rgba(255, 255, 255, 0.4)';
    } else {
        nav.style.background = isDark 
            ? 'rgba(0, 0, 0, 0.7)' 
            : 'rgba(255, 255, 255, 0.7)';
        hamburger.style.background = isDark 
            ? 'rgba(0, 0, 0, 0.3)' 
            : 'rgba(255, 255, 255, 0.3)';
    }
});

// 检测系统颜色模式变化
function handleColorSchemeChange(e) {
    const isDark = e.matches;
    const nav = document.querySelector('.nav-blur');
    const hamburger = document.querySelector('.hamburger');
    
    // 更新导航栏样式
    if (isDark) {
        nav.style.background = 'rgba(0, 0, 0, 0.7)';
        hamburger.style.background = 'rgba(0, 0, 0, 0.3)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.7)';
        hamburger.style.background = 'rgba(255, 255, 255, 0.3)';
    }
}

// 监听系统颜色模式变化
const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
colorSchemeQuery.addListener(handleColorSchemeChange);

// 初始化时执行一次
handleColorSchemeChange(colorSchemeQuery);

// 页面加载动画
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    hero.style.opacity = '0';
    setTimeout(() => {
        hero.style.transition = 'opacity 1s ease-in-out';
        hero.style.opacity = '1';
    }, 100);
}); 