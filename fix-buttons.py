import os
import re

replacements = [
    (r'bg-white text-slate-900', 'bg-blue-600 text-white hover:bg-blue-500'),
    (r'hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 mt-4', 'hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 mt-4'),
]

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()
                
            for old, new in replacements:
                content = content.replace(old, new)
                
            with open(path, 'w') as f:
                f.write(content)

print("Fixed hardcoded buttons!")
