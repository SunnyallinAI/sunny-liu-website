#!/usr/bin/env python3
"""
生成科技感配图脚本
使用 PIL 库生成符合网站配色的科技感图片
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
        # 计算渐变比例
        ratio = y / height
        r = int(color1[0] + (color2[0] - color1[0]) * ratio)
        g = int(color1[1] + (color2[1] - color1[1]) * ratio)
        b = int(color1[2] + (color2[2] - color1[2]) * ratio)

        # 绘制渐变行
        for x in range(width):
            # 添加一些噪点增加质感
            noise = random.randint(-10, 10)
            draw.point((x, y), fill=(max(0, min(255, r + noise)),
                                    max(0, min(255, g + noise)),
                                    max(0, min(255, b + noise))))

    return image

def add_grid_lines(image, spacing=50, color=(255, 255, 255, 30)):
    """添加网格线"""
    draw = ImageDraw.Draw(image)
    width, height = image.size

    # 垂直线
    for x in range(0, width, spacing):
        draw.line([(x, 0), (x, height)], fill=color, width=1)

    # 水平线
    for y in range(0, height, spacing):
        draw.line([(0, y), (width, y)], fill=color, width=1)

    return image

def add_circuit_pattern(image, color=(255, 255, 255, 20)):
    """添加电路板图案"""
    draw = ImageDraw.Draw(image)
    width, height = image.size

    # 随机绘制一些电路线条
    for _ in range(20):
        x1 = random.randint(0, width)
        y1 = random.randint(0, height)
        x2 = x1 + random.randint(-100, 100)
        y2 = y1 + random.randint(-100, 100)

        # 确保在边界内
        x2 = max(0, min(width, x2))
        y2 = max(0, min(height, y2))

        draw.line([(x1, y1), (x2, y2)], fill=color, width=1)

        # 添加节点
        draw.ellipse([x1-3, y1-3, x1+3, y1+3], fill=color)

    return image

def add_data_flow(image, color=(255, 255, 255, 40)):
    """添加数据流效果"""
    draw = ImageDraw.Draw(image)
    width, height = image.size

    # 绘制一些垂直的数据流
    for i in range(10):
        x = (width / 10) * i + random.randint(-20, 20)
        for y in range(0, height, 10):
            size = random.randint(2, 5)
            alpha = random.randint(20, 60)
            color_with_alpha = (color[0], color[1], color[2], alpha)
            draw.ellipse([x-size, y-size, x+size, y+size], fill=color_with_alpha)

    return image

def add_text_with_shadow(image, text, position, font_size=30, color=(255, 255, 255)):
    """添加带阴影的文字"""
    draw = ImageDraw.Draw(image, 'RGBA')
    x, y = position

    # 尝试使用系统字体，如果失败使用默认字体
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

def generate_saas_tools_image():
    """生成 SaaS 工具平台配图"""
    width, height = 800, 600

    # 创建渐变背景
    bg_color1 = hex_to_rgb(COLORS['bg_dark'])
    bg_color2 = hex_to_rgb(COLORS['primary_dark'])
    image = create_gradient_background(width, height, bg_color1, bg_color2)

    # 添加网格
    image = add_grid_lines(image, spacing=40, color=(255, 255, 255, 20))

    # 添加数据流效果
    image = add_data_flow(image, color=hex_to_rgb(COLORS['primary_light']))

    # 添加仪表盘图形
    draw = ImageDraw.Draw(image, 'RGBA')
    center_x, center_y = width // 2, height // 2

    # 绘制圆形仪表盘
    for i in range(3):
        radius = 80 + i * 40
        color = hex_to_rgb(COLORS['primary_light'])
        draw.arc([center_x-radius, center_y-radius, center_x+radius, center_y+radius],
                0, 270, fill=color + (100 - i*30,), width=3)

    # 添加标题
    image = add_text_with_shadow(image, "SaaS Analytics Dashboard", (50, 50), 40)

    return image

def generate_publisher_network_image():
    """生成发布商网络配图"""
    width, height = 800, 600

    # 创建深色背景
    bg_color = hex_to_rgb(COLORS['bg_dark'])
    image = Image.new('RGB', (width, height), bg_color)

    # 添加网络节点
    draw = ImageDraw.Draw(image, 'RGBA')
    nodes = []
    center_x, center_y = width // 2, height // 2

    # 中心节点
    nodes.append((center_x, center_y))

    # 周围节点
    for i in range(12):
        angle = (i / 12) * 2 * math.pi
        radius = 180
        x = center_x + int(radius * math.cos(angle))
        y = center_y + int(radius * math.sin(angle))
        nodes.append((x, y))

    # 绘制连接线
    primary_color = hex_to_rgb(COLORS['primary'])
    for i, (x1, y1) in enumerate(nodes):
        if i == 0:  # 中心节点连接所有
            for x2, y2 in nodes[1:]:
                draw.line([(x1, y1), (x2, y2)], fill=primary_color + (80,), width=2)
        else:  # 周围节点连接中心
            draw.line([(x1, y1), (center_x, center_y)], fill=primary_color + (60,), width=1)

    # 绘制节点
    for i, (x, y) in enumerate(nodes):
        if i == 0:  # 中心节点
            size = 20
            color = hex_to_rgb(COLORS['primary'])
            draw.ellipse([x-size, y-size, x+size, y+size], fill=color + (200,))
        else:  # 周围节点
            size = 12
            color = hex_to_rgb(COLORS['primary_light'])
            draw.ellipse([x-size, y-size, x+size, y+size], fill=color + (150,))

    # 添加标题
    image = add_text_with_shadow(image, "Publisher Network Hub", (50, 50), 40)

    return image

def generate_douyin_campaign_image():
    """生成抖音活动配图"""
    width, height = 800, 600

    # 创建渐变背景
    bg_color1 = hex_to_rgb(COLORS['bg_dark'])
    bg_color2 = hex_to_rgb(COLORS['primary'])
    image = create_gradient_background(width, height, bg_color1, bg_color2)

    # 添加社交网络元素
    draw = ImageDraw.Draw(image, 'RGBA')
    center_x, center_y = width // 2, height // 2

    # 绘制播放按钮形状
    triangle_size = 100
    points = [
        (center_x - triangle_size, center_y - triangle_size),
        (center_x - triangle_size, center_y + triangle_size),
        (center_x + triangle_size, center_y),
    ]
    primary_light = hex_to_rgb(COLORS['primary_light'])
    draw.polygon(points, fill=primary_light + (150,))

    # 添加波形效果
    for i in range(20):
        y = center_y + 150 + i * 5
        width_var = 100 + i * 10
        alpha = 100 - i * 3
        draw.line([(center_x - width_var, y), (center_x + width_var, y)],
                 fill=primary_light + (alpha,), width=3)

    # 添加标题
    image = add_text_with_shadow(image, "Viral Content Strategy", (50, 50), 40)

    return image

def main():
    """主函数"""
    output_dir = "public/projects"
    os.makedirs(output_dir, exist_ok=True)

    print("正在生成科技感配图...")

    # 生成项目配图
    images = [
        ("saas-tools.jpg", generate_saas_tools_image),
        ("publisher-network.jpg", generate_publisher_network_image),
        ("douyin-campaign.jpg", generate_douyin_campaign_image),
    ]

    for filename, generator in images:
        print(f"生成 {filename}...")
        image = generator()
        output_path = os.path.join(output_dir, filename)
        image.save(output_path, quality=95, optimize=True)
        print(f"已保存: {output_path}")

    print("所有配图生成完成！")

if __name__ == "__main__":
    main()