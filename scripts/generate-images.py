#!/usr/bin/env python3
"""
生成项目所需的占位图片
"""

from PIL import Image, ImageDraw, ImageFont
import os

# 创建图片目录
os.makedirs('public/projects', exist_ok=True)

# 图片配置
images = [
    ('saas-tools.jpg', 'SaaS Tools Platform', '#22C55E'),
    ('publisher-network.jpg', 'Publisher Network', '#10B981'),
    ('douyin-campaign.jpg', 'Douyin Campaign', '#059669'),
    ('og-image.jpg', 'Sunny Liu - Growth Strategist', '#166534'),
]

def generate_image(filename, title, color):
    """生成占位图片"""
    # 创建图片
    width, height = 1200, 630
    img = Image.new('RGB', (width, height), color=color)
    draw = ImageDraw.Draw(img)

    # 添加文字
    try:
        # 尝试使用系统字体
        font = ImageFont.truetype("arial.ttf", 60)
    except:
        try:
            font = ImageFont.truetype("arialbd.ttf", 60)
        except:
            # 如果没有找到字体，使用默认字体
            font = ImageFont.load_default()

    # 计算文字位置
    bbox = draw.textbbox((0, 0), title, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (width - text_width) // 2
    y = (height - text_height) // 2

    # 绘制文字
    draw.text((x, y), title, fill='white', font=font)

    # 保存图片
    img.save(f'public/projects/{filename}')
    print(f'Generated: public/projects/{filename}')

# 生成所有图片
for filename, title, color in images:
    if filename == 'og-image.jpg':
        # Open Graph 图片使用不同尺寸
        img = Image.new('RGB', (1200, 630), color=color)
        draw = ImageDraw.Draw(img)

        try:
            font = ImageFont.truetype("arial.ttf", 80)
        except:
            try:
                font = ImageFont.truetype("arialbd.ttf", 80)
            except:
                font = ImageFont.load_default()

        bbox = draw.textbbox((0, 0), title, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        x = (1200 - text_width) // 2
        y = (630 - text_height) // 2

        draw.text((x, y), title, fill='white', font=font)
        img.save(f'public/{filename}')
        print(f'Generated: public/{filename}')
    else:
        generate_image(filename, title, color)

print('All images generated successfully!')
