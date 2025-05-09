# 替换首页背景视频说明

首页现在使用视频作为背景，您需要准备一个视频文件来替换占位视频。

## 视频要求

1. **文件名称**: `hero-video.mp4`
2. **文件位置**: 将文件放置在 `frontend/public/` 目录下
3. **视频格式**: MP4格式，建议使用H.264编码
4. **视频尺寸**: 建议使用宽高比16:9，分辨率至少1920x1080
5. **视频长度**: 建议10-30秒，循环播放效果更佳
6. **文件大小**: 建议控制在5MB以内，以保证加载速度

## 视频内容建议

1. 视频内容应当与您的个人品牌和网站主题相关
2. 平滑、缓慢的动作效果较好，避免快速剪辑和晃动
3. 较为简洁的背景，不会干扰前景文字
4. 颜色与网站整体风格统一

## 如何替换

1. 准备好您的视频文件，确保符合上述要求
2. 将文件命名为`hero-video.mp4`
3. 将文件复制到`frontend/public/`目录下，替换现有的占位视频
4. 重新构建项目以应用更改:
   ```
   cd frontend
   npm run build
   ```
5. 将构建结果复制到GitHub Pages仓库:
   ```
   cp -r dist/* ../ahaolearn-site/
   ```
6. 提交并推送更改:
   ```
   cd ../ahaolearn-site
   git add .
   git commit -m "更新首页背景视频"
   git push origin main
   ```

## 注意事项

- 视频文件会自动循环播放、静音，并在移动设备上自动播放
- 视频上有一层暗色遮罩，使文字更容易阅读
- 如果视频无法加载，确保视频格式兼容现代浏览器 