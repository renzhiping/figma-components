#!/bin/bash

# 修复所有UI组件中的版本号后缀问题（兼容 macOS BSD sed）
set -euo pipefail

TARGET_DIR="src/components/ui"

if [ ! -d "$TARGET_DIR" ]; then
  echo "未找到目录: $TARGET_DIR"
  exit 1
fi

find "$TARGET_DIR" -name "*.tsx" -type f | while read file; do
  # 去掉所有包名后的版本号（例如 @radix-ui/react-xxx@1.2.3 -> @radix-ui/react-xxx）
  # 同时处理 lucide-react@class-variance-authority 等类似形式
  sed -E -i '' 's/@[0-9]+\.[0-9]+\.[0-9]+//g' "$file"
done

echo "修复完成！"
