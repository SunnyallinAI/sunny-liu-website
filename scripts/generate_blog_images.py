#!/usr/bin/env python3
"""
生成博客配图脚本
使用 PIL 库生成符合网站配色的科技感博客配图
"""

from PIL import Image, ImageDraw, ImageFont
import os
import random
import math

# 网站配色
COLORS = {
    'primary': '#22C55E',      # 绿色主色调
    'primary_light': '#86EFAC', # 浅绿色
    'primary_dark': '#16A34A',  # 深绿色
    'bg_light': '#F0FDF4',      # 背景浅绿
    'bg_dark': '#0F172A',       # 深色背景
    'text_light': '#FFFFFF',    # 白色文字
    'text_dark': '#0F172A',     # 深色文字
}

def hex_to_rgb(hex_color):
    """将十六进制颜色转换为 RGB"""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def create_gradient_background(width, height, color1, color2):
    """创建渐变背景"""
    image = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(image)

    for y in range(height):
        ratio = y / height
        r = int(color1[0] + (color2[0] - color1[0]) * ratio)
        g = int(color1[1] + (color2[1] - color1[1]) * ratio)
        b = int(color1[2] + (color2[2] - color1[2]) * ratio)

        for x in range(width):
            noise = random.randint(-5, 5)
            draw.point((x, y), fill=(max(0, min(255, r + noise)),
                                    max(0, min(255, g + noise)),
                                    max(0, min(255, b + noise))))

    return image

def add_text_with_shadow(image, text, position, font_size=30, color=(255, 255, 255)):
    """添加带阴影的文字"""
    draw = ImageDraw.Draw(image, 'RGBA')
    x, y = position

    try:
        font = ImageFont.truetype("arial.ttf", font_size)
    except:
        try:
            font = ImageFont.truetype("DejaVuSans.ttf", font_size)
        except:
            font = ImageFont.load_default()

    # 阴影
    shadow_offset = 2
    draw.text((x + shadow_offset, y + shadow_offset), text, font=font, fill=(0, 0, 0, 100))

    # 主文字
    draw.text((x, y), text, font=font, fill=color + (255,))

    return image

def generate_ai_social_media_image():
    """生成 AI 社交媒体配图"""
    width, height = 800, 400

    # 深色背景
    bg_color = hex_to_rgb(COLORS['bg_dark'])
    image = Image.new('RGB', (width, height), bg_color)
    draw = ImageDraw.Draw(image, 'RGBA')

    # 添加 AI 元素 - 神经网络图案
    primary_color = hex_to_rgb(COLORS['primary'])
    primary_light = hex_to_rgb(COLORS['primary_light'])

    # 绘制神经网络节点
    layers = [5, 8, 10, 8, 5]
    layer_positions = []
    layer_width = width // (len(layers) + 1)

    for i, node_count in enumerate(layers):
        layer_x = layer_width * (i + 1)
        layer_positions.append([])
        for j in range(node_count):
            layer_y = (height // (node_count + 1)) * (j + 1)
            layer_positions[-1].append((layer_x, layer_y))

    # 绘制连接线
    for i in range(len(layer_positions) - 1):
        for start_node in layer_positions[i]:
            for end_node in layer_positions[i + 1]:
                alpha = random.randint(30, 80)
                draw.line([start_node, end_node], fill=primary_color + (alpha,), width=1)

    # 绘制节点
    for i, layer in enumerate(layer_positions):
        for x, y in layer:
            size = 8 if i == 2 else 6  # 中间层节点更大
            color = primary_light if i == 2 else primary_color
            alpha = 150 if i == 2 else 100
            draw.ellipse([x-size, y-size, x+size, y+size], fill=color + (alpha,))

    # 添加社交图标元素
    icon_positions = [(100, 100), (width-100, 100), (100, height-100), (width-100, height-100)]
    for x, y in icon_positions:
        draw.ellipse([x-20, y-20, x+20, y+20], outline=primary_light + (100,), width=2)

    # 添加标题
    image = add_text_with_shadow(image, "AI Social Media Revolution", (50, 30), 35)

    return image

def generate_affiliate_marketing_image():
    """生成联盟营销配图"""
    width, height = 800, 400

    # 渐变背景
    bg_color1 = hex_to_rgb(COLORS['bg_dark'])
    bg_color2 = hex_to_rgb(COLORS['primary_dark'])
    image = create_gradient_background(width, height, bg_color1, bg_color2)
    draw = ImageDraw.Draw(image, 'RGBA')

    primary_color = hex_to_rgb(COLORS['primary'])
    primary_light = hex_to_rgb(COLORS['primary_light'])

    # 绘制增长图表
    center_y = height // 2
    points = []
    for i in range(20):
        x = (width // 25) * i + 50
        # 指数增长曲线
        growth = math.exp(i * 0.15) * 10
        y = center_y + 50 - min(growth, 150)
        points.append((x, y))

    # 绘制曲线
    for i in range(len(points) - 1):
        alpha = 100 + i * 5
        draw.line([points[i], points[i+1]], fill=primary_light + (alpha,), width=3)

    # 填充曲线下方区域
    polygon_points = [(50, center_y + 50)] + points + [(width - 50, center_y + 50)]
    draw.polygon(polygon_points, fill=primary_color + (30,))

    # 添加数据点
    for i, (x, y) in enumerate(points[::3]):
        size = 6
        draw.ellipse([x-size, y-size, x+size, y+size], fill=primary_light + (200,))

    # 添加标题
    image = add_text_with_shadow(image, "Affiliate Marketing 2025", (50, 30), 35)

    return image

def generate_ai_growth_image():
    """生成 AI 增长配图"""
    width, height = 800, 400

    # 深色背景
    bg_color = hex_to_rgb(COLORS['bg_dark'])
    image = Image.new('RGB', (width, height), bg_color)
    draw = ImageDraw.Draw(image, 'RGBA')

    primary_color = hex_to_rgb(COLORS['primary'])
    primary_light = hex_to_rgb(COLORS['primary_light'])

    # 绘制增长螺旋
    center_x, center_y = width // 2, height // 2
    max_radius = 150

    for angle in range(0, 720, 5):
        rad = math.radians(angle)
        # 螺旋公式
        radius = (angle / 720) * max_radius
        x = center_x + radius * math.cos(rad)
        y = center_y + radius * math.sin(rad)

        size = 3 + int(radius / 20)
        alpha = 100 + int((angle / 720) * 155)
        draw.ellipse([x-size, y-size, x+size, y+size], fill=primary_light + (alpha,))

    # 添加中心点
    draw.ellipse([center_x-15, center_y-15, center_x+15, center_y+15], fill=primary_color + (200,))

    # 添加标题
    image = add_text_with_shadow(image, "AI-Powered Growth Strategy", (50, 30), 35)

    return image

def generate_affiliate_marketing_2025_image():
    """生成 2025 联盟营销配图"""
    width, height = 800, 400

    # 渐变背景
    bg_color1 = hex_to_rgb(COLORS['primary_dark'])
    bg_color2 = hex_to_rgb(COLORS['bg_dark'])
    image = create_gradient_background(width, height, bg_color1, bg_color2)
    draw = ImageDraw.Draw(image, 'RGBA')

    primary_light = hex_to_rgb(COLORS['primary_light'])

    # 绘制未来感元素 - 六边形网络
    hex_size = 40
    for row in range(5):
        for col in range(10):
            x = col * hex_size * 1.7 + (row % 2) * hex_size * 0.85 + 100
            y = row * hex_size * 1.5 + 100

            # 绘制六边形
            points = []
            for i in range(6):
                angle = math.radians(60 * i - 30)
                px = x + hex_size * math.cos(angle)
                py = y + hex_size * math.sin(angle)
                points.append((px, py))

            alpha = 50 + (row * 20) + (col * 5)
            draw.polygon(points, outline=primary_light + (alpha,), width=1)

    # 添加标题
    image = add_text_with_shadow(image, "Affiliate Marketing Future 2025", (50, 30), 35)

    return image

def main():
    """主函数"""
    output_dir = "public/blog"
    os.makedirs(output_dir, exist_ok=True)

    print("正在生成博客配图...")

    # 生成博客配图
    images = [
        ("ai-social-media-revolution.jpg", generate_ai_social_media_image),
        ("affiliate-marketing.jpg", generate_affiliate_marketing_image),
        ("ai-growth.jpg", generate_ai_growth_image),
        ("affiliate-marketing-2025.jpg", generate_affiliate_marketing_2025_image),
    ]

    for filename, generator in images:
        print(f"生成 {filename}...")
        image = generator()
        output_path = os.path.join(output_dir, filename)
        image.save(output_path, quality=95, optimize=True)
        print(f"已保存: {output_path}")

    print("所有博客配图生成完成！")

if __name__ == "__main__":
    main()