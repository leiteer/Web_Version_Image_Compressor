# 图片压缩网站

这是一个简单易用的在线图片压缩工具网站。用户可以上传图片,预览压缩效果并下载压缩后的图片。

🌐 [在线预览](https://你的用户名.github.io/image-compressor)

## 在线预览
访问 [图片压缩工具](https://leiteer.github.io/Web_Version_Image_Compressor) 体验在线服务。

## 本地开发
```bash
# 克隆项目
git clone https://github.com/leiteer/Web_Version_Image_Compressor.git

# 进入项目目录
cd Web_Version_Image_Compressor

# 使用任意静态服务器运行
# 例如使用 Python 的简单服务器
python -m http.server 8080
```

## 界面预览

### 初始界面
![初始界面](./images/preview1.png)
上传图片前的界面展示，支持拖拽或点击上传 PNG、JPG 格式图片。

### 压缩效果展示
![压缩效果](./images/preview2.png)
可以看到原图(5.08MB)通过压缩后大小降至 0.11MB，同时保持了良好的图片质量。

## 功能特点

1. 支持上传 PNG、JPG 等格式的图片
2. 可自定义压缩比例（通过滑块控制，范围 1-100%）
3. 实时预览压缩前后的效果
4. 显示压缩前后文件大小
5. 支持下载压缩后的图片
6. 简洁优雅的深色主题界面设计

## 技术架构

- 前端: HTML5 + CSS3 + JavaScript
- 图片压缩: Browser-image-compression 库
- 界面设计: 现代深色主题 UI

## 页面结构

### 主页面 (index.html)
- 顶部标题栏
- 图片上传区域（支持拖拽）
- 压缩程度调节滑块
- 预览展示区域（原图/压缩后对比）
- 下载按钮
- 版权信息

## 使用说明

1. 点击上传区域或将图片拖拽到上传区域
2. 通过滑块调节压缩程度（默认值为合适的压缩比例）
3. 实时预览压缩效果
4. 点击"下载压缩后的图片"按钮保存 