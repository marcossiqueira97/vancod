import os
import re

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()
            
            lines = content.split('\n')
            for i, line in enumerate(lines):
                if 'hover:bg-slate-200' in line:
                    if 'bg-white' in line and 'bg-white/5' not in line and 'bg-white/10' not in line:
                        pass # keep hover:bg-slate-200 for pure white backgrounds
                    else:
                        lines[i] = line.replace('hover:bg-slate-200', 'hover:bg-white/10')
            
            with open(path, 'w') as f:
                f.write('\n'.join(lines))

print("Fixed hover colors!")
