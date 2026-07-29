import os
import re

replacements = [
    # Backgrounds
    (r'bg-\[\#030303\]', 'bg-[#F9FAFB]'),
    (r'bg-\[\#0A0A0A\]', 'bg-[#F9FAFB]'),
    (r'bg-\[\#050505\]', 'bg-[#F9FAFB]'),
    (r'bg-\[\#111\]', 'bg-white'),
    (r'bg-white\/5', 'bg-gray-50'),
    (r'bg-white\/10', 'bg-gray-100'),
    (r'bg-white\/20', 'bg-gray-200'),
    
    # Text
    (r'text-white', 'text-gray-900'),
    (r'text-gray-400', 'text-gray-600'),
    (r'text-gray-500', 'text-gray-500'),
    (r'text-gray-300', 'text-gray-700'),
    (r'text-gray-200', 'text-gray-800'),
    
    # Borders
    (r'border-white\/5', 'border-gray-200'),
    (r'border-white\/10', 'border-gray-200'),
    (r'border-white\/20', 'border-gray-300'),
    
    # Selection
    (r'selection:bg-white\/20', 'selection:bg-black/10'),
    (r'selection:text-white', 'selection:text-black'),

    # Other specific elements
    (r'hover:text-white', 'hover:text-black'),
    (r'hover:border-white\/20', 'hover:border-gray-300'),
    
    # Button adjustments (since text-white on white background won't work)
    # the main button is "bg-white text-black" so let's swap it to "bg-gray-900 text-white"
    (r'bg-white text-black', 'bg-gray-900 text-white'),
    (r'bg-white text-gray-900', 'bg-gray-900 text-white'),
    (r'hover:bg-gray-100', 'hover:bg-gray-800'),
    
    # Ring
    (r'ring-white\/5', 'ring-gray-200'),
    (r'ring-white\/10', 'ring-gray-200'),
    
    # Layout background gradient
    (r'from-\[\#0A0A0A\]', 'from-[#F9FAFB]'),
    (r'from-\[\#050505\]', 'from-[#F9FAFB]'),
    (r'to-\[\#000\]', 'to-white'),
    (r'to-black', 'to-white'),
    (r'to-\[\#0A0A0A\]', 'to-[#F9FAFB]'),
    (r'from-\[\#111\]', 'from-white'),
]

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.css'):
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()
                
            for old, new in replacements:
                content = re.sub(old, new, content)
                
            with open(path, 'w') as f:
                f.write(content)

print("Theme switched to light!")
