# 图片压缩网站

这是一个简单易用的在线图片压缩工具网站。用户可以上传图片,预览压缩效果并下载压缩后的图片。

🌐 [在线预览](https://leiteer.github.io/image-compressor)

## 界面预览

### 初始界面

<img width="627" alt="Snipaste_2025-01-10_17-23-12" src="https://github.com/user-attachments/assets/23c2125d-eed2-4e7d-b74d-e8e427eeabcc" />

### 压缩效果展示

<img width="627" alt="Snipaste_2025-01-10_17-23-12" src="https://github.com/user-attachments/assets/2b339b69-2ca4-493e-97b1-9342f720af7d" />


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
