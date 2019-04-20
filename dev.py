import os
import re
from os import system as run

posts_folder = 'docs/_posts/'

def render_furigana():
    for filename in os.listdir(posts_folder):
        if not filename.endswith('.md'):
            continue
        path = posts_folder + filename
        with open(path, 'r') as file:
            content = file.read()
        content = re.sub(r'\[(.+?)\|(.+?)\]', '<ruby><rb>\\1</rb><rp>(</rp><rt>\\2</rt><rp>)</rp></ruby>', content)
        with open(path, 'w') as file:
            file.write(content)

def commit():
    run('git add -A docs/_posts')
    run('git add -A docs/static/images')
    run('git commit -m "automatic render furigana and publish article"')
    run('git push origin')

render_furigana()
commit()
