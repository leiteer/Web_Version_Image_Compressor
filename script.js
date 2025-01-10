// 获取DOM元素
const uploadBox = document.getElementById('uploadBox');
const imageInput = document.getElementById('imageInput');
const qualitySlider = document.getElementById('quality');
const qualityValue = document.getElementById('qualityValue');
const originalPreview = document.getElementById('originalPreview');
const compressedPreview = document.getElementById('compressedPreview');
const originalSize = document.getElementById('originalSize');
const compressedSize = document.getElementById('compressedSize');
const downloadBtn = document.getElementById('downloadBtn');

let currentFile = null; // 保存当前上传的文件

// 处理文件上传
uploadBox.addEventListener('click', () => {
    imageInput.click();
});

uploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadBox.style.borderColor = '#8E9DCC';
});

uploadBox.addEventListener('dragleave', () => {
    uploadBox.style.borderColor = '#3F4C8C';
});

uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.style.borderColor = '#3F4C8C';
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        currentFile = file;
        handleImage(file);
    }
});

imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        currentFile = file;
        handleImage(file);
    }
});

// 处理图片压缩
async function handleImage(file) {
    // 检查文件类型
    if (!file.type.startsWith('image/')) {
        alert('请上传图片文件！');
        return;
    }
    
    // 检查文件大小（比如限制为 20MB）
    if (file.size > 20 * 1024 * 1024) {
        alert('图片大小不能超过 20MB！');
        return;
    }

    // 显示原图
    const originalUrl = URL.createObjectURL(file);
    originalPreview.src = originalUrl;
    originalSize.textContent = `大小: ${(file.size / 1024 / 1024).toFixed(2)} MB`;

    // 压缩图片
    await compressImage(file);
}

async function compressImage(file) {
    compressedPreview.style.opacity = '0.5';
    downloadBtn.textContent = '压缩中...';
    downloadBtn.disabled = true;

    const options = {
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        quality: qualitySlider.value / 100,
        initialQuality: qualitySlider.value / 100
    };

    try {
        const compressedFile = await imageCompression(file, options);
        
        // 清理之前的 URL 对象（如果存在）
        if (compressedPreview.src) {
            URL.revokeObjectURL(compressedPreview.src);
        }
        
        // 创建新的 URL
        const compressedUrl = URL.createObjectURL(compressedFile);
        compressedPreview.src = compressedUrl;
        compressedSize.textContent = `大小: ${(compressedFile.size / 1024 / 1024).toFixed(2)} MB`;
        downloadBtn.disabled = false;
        
        // 添加下载功能
        downloadBtn.onclick = () => {
            const link = document.createElement('a');
            link.href = compressedUrl;
            link.download = `compressed_${file.name}`;
            link.click();
        };

        compressedPreview.style.opacity = '1';
        downloadBtn.textContent = '下载压缩后的图片 (◕‿◕✿)';
        downloadBtn.disabled = false;
    } catch (error) {
        compressedPreview.style.opacity = '1';
        downloadBtn.textContent = '压缩失败，请重试';
        console.error('压缩失败:', error);
    }
}

// 更新压缩质量显示并实时压缩
let compressionTimeout;
qualitySlider.addEventListener('input', (e) => {
    qualityValue.textContent = `${e.target.value}%`;
    
    // 使用防抖来避免过于频繁的压缩操作
    clearTimeout(compressionTimeout);
    compressionTimeout = setTimeout(() => {
        if (currentFile) {
            compressImage(currentFile);
        }
    }, 100); // 100ms 的延迟
});

// 添加键盘控制滑块
qualitySlider.addEventListener('keydown', (e) => {
    const step = 5;
    let newValue = parseInt(qualitySlider.value);
    
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        newValue = Math.min(newValue + step, 100);
        e.preventDefault();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        newValue = Math.max(newValue - step, 0);
        e.preventDefault();
    }
    
    if (newValue !== parseInt(qualitySlider.value)) {
        qualitySlider.value = newValue;
        qualityValue.textContent = `${newValue}%`;
        if (currentFile) {
            compressImage(currentFile);
        }
    }
}); 