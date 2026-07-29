import re

path = 'src/components/product-layout.tsx'
with open(path, 'r') as f:
    content = f.read()

content = re.sub(r'  // Map text colors to gradients for visual flair.*?description=\{description\}', 
    r'  return (\n    <div className="bg-slate-950 text-white overflow-hidden min-h-screen">\n      <SEO\n        title={name}\n        description={description}', 
    content, flags=re.DOTALL)

with open(path, 'w') as f:
    f.write(content)
