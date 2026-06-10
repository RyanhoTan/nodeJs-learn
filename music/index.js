/**
 * 极简音乐播放器核心交互逻辑
 * 所属页面：index.html (主页)
 */

document.addEventListener('DOMContentLoaded', () => {
    // 获取页面核心 DOM 节点
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('play-btn');
    const disc = document.getElementById('disc');
    const visualizer = document.getElementById('visualizer');

    // 状态标记：当前是否正在播放
    let isPlaying = false;

    /**
     * 切换播放/暂停状态的函数
     */
    function togglePlay() {
        if (!isPlaying) {
            // 执行音频播放
            audio.play().then(() => {
                isPlaying = true;
                updateUI();
            }).catch(err => {
                console.error("音频播放受阻，可能是浏览器权限限制，请重试:", err);
            });
        } else {
            // 执行音频暂停
            audio.pause();
            isPlaying = false;
            updateUI();
        }
    }

    /**
     * 根据当前播放状态更新前端 UI 样式的函数
     */
    function updateUI() {
        if (isPlaying) {
            playBtn.textContent = '暂停';
            playBtn.classList.add('playing');
            disc.classList.add('playing');
            visualizer.classList.add('active');
        } else {
            playBtn.textContent = '播放';
            playBtn.classList.remove('playing');
            disc.classList.remove('playing');
            visualizer.classList.remove('active');
        }
    }

    // 绑定点击事件到主控制按钮
    playBtn.addEventListener('click', togglePlay);
});