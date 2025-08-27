// 定义 JavaScript 脚本
function downloadPDF(url) {
    // 检查 URL 是否有效
    if (!url) {
        console.error('下载 URL 无效');
        return;
    }
    
    // 创建一个隐藏隐藏的 <a> 元素用于下载
    const a = document.createElement('a');
    a.href = url;
    a.download = url.split('/').pop(); // 设置下载的文件名（默认为 URL 的最后一部分）
    document.body.appendChild(a); // 添加到 DOM
    a.click(); // 触发点击事件
    document.body.removeChild(a); // 下载完成后移除 <a> 元素
    }
    
    
    