// 防抖函数
function debounce(fn, delay) {
    var timer = null;
    if(timer) clearTimeout(timer);

    timer = setTimeout(function() {
        fn();
    }, delay);
}