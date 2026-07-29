import os
import re

replacements = [
    # Base backgrounds
    (r'bg-\[\#F9FAFB\]', 'bg-slate-950'),
    
    # The tricky bg-white that we want to turn into card backgrounds
    (r'bg-white rounded-2xl', 'bg-slate-900 rounded-2xl'),
    (r'bg-white p-10', 'bg-slate-900 p-10'),
    (r'bg-white border', 'bg-slate-900 border'),
    (r'bg-white/80', 'bg-slate-900/80'),
    (r'bg-white/90', 'bg-slate-900/90'),
    (r'className="bg-white"', 'className="bg-slate-900"'), # for options in select
    
    # Layout gradients
    (r'from-\[\#F9FAFB\]', 'from-slate-950'),
    (r'to-white', 'to-slate-950'),
    (r'from-white', 'from-slate-900'),
    
    # Buttons - turn them into striking white buttons for the dark theme
    (r'bg-gray-900 text-white', 'bg-white text-slate-900'),
    (r'hover:bg-gray-800', 'hover:bg-slate-200'),
    
    # Text
    (r'text-gray-900', 'text-white'),
    (r'text-gray-800', 'text-slate-200'),
    (r'text-gray-700', 'text-slate-300'),
    (r'text-gray-600', 'text-slate-400'),
    (r'text-gray-500', 'text-slate-500'),
    (r'text-gray-400', 'text-slate-600'),
    (r'hover:text-black', 'hover:text-white'),
    
    # Borders
    (r'border-gray-200', 'border-white/10'),
    (r'border-gray-300', 'border-white/20'),
    (r'hover:border-gray-300', 'hover:border-white/20'),
    (r'ring-gray-200', 'ring-white/10'),
    
    # Selection
    (r'selection:bg-black\/10', 'selection:bg-indigo-500/30'),
    (r'selection:text-black', 'selection:text-white'),
    
    # Transparencies (gray to white/alpha)
    (r'bg-gray-50', 'bg-white/5'),
    (r'bg-gray-100', 'bg-white/10'),
    (r'bg-gray-200', 'bg-white/20'),
    
    # Fix body background in index.css
    (r'bg-\[\#030303\]', 'bg-slate-950'),
    
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

print("Theme switched to Slate!")
