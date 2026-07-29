import os
import re

replacements = [
    # Strip colored text (except specific link hovers which we'll handle separately)
    (r'text-indigo-600', 'text-slate-300'),
    (r'text-orange-600', 'text-slate-300'),
    (r'text-blue-600', 'text-slate-300'),
    (r'text-purple-600', 'text-slate-300'),
    (r'text-indigo-400', 'text-slate-300'),
    (r'text-orange-400', 'text-slate-300'),
    (r'text-blue-400', 'text-slate-300'),
    (r'text-purple-400', 'text-slate-300'),
    (r'text-green-400', 'text-slate-300'),
    (r'text-red-400', 'text-slate-300'),
    
    # Strip colored borders
    (r'border-blue-500/30', 'border-white/10'),
    (r'border-blue-500/20', 'border-white/10'),
    (r'border-green-500/20', 'border-white/10'),
    (r'border-red-500/20', 'border-white/10'),
    (r'border-red-500/50', 'border-white/10'),
    (r'border-yellow-500/50', 'border-white/10'),
    (r'border-green-500/50', 'border-white/10'),

    # Strip colored backgrounds
    (r'bg-blue-500/5', 'bg-white/5'),
    (r'bg-blue-500/10', 'bg-white/5'),
    (r'bg-blue-500/20', 'bg-white/5'),
    (r'bg-blue-500/80', 'bg-white/10'),
    (r'bg-purple-500/20', 'bg-white/5'),
    (r'bg-green-500/10', 'bg-white/5'),
    (r'bg-red-500/10', 'bg-white/5'),
    (r'bg-red-500/20', 'bg-white/5'),
    (r'bg-yellow-500/20', 'bg-white/5'),
    (r'bg-green-500/20', 'bg-white/5'),
    
    # Strip colored shadow / hover
    (r'hover:text-blue-400', 'hover:text-white'),
    (r'hover:text-blue-500', 'hover:text-white'),
    (r'hover:text-blue-600', 'hover:text-white'),
    (r'hover:text-blue-300', 'hover:text-white'),
    (r'hover:text-purple-300', 'hover:text-white'),
    (r'hover:text-green-300', 'hover:text-white'),
    (r'group-hover/item:text-blue-400', 'group-hover/item:text-white'),
    (r'group-hover:bg-blue-500/20', 'group-hover:bg-white/10'),
    (r'hover:border-blue-500/40', 'hover:border-white/20'),
]

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()
                
            for old, new in replacements:
                content = re.sub(old, new, content)
                
            with open(path, 'w') as f:
                f.write(content)

print("Applied monochromatic replacements!")
