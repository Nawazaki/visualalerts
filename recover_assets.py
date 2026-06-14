import os
import requests
import re
from bs4 import BeautifulSoup

BASE_URL = "https://web.archive.org/web/20160111114357/http://visualalerts.com/"
PROJECT_DIR = "/home/ubuntu/visualalerts/public"

def download_file(url, local_path):
    if os.path.exists(local_path):
        return
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    try:
        response = requests.get(url)
        if response.status_code == 200:
            with open(local_path, 'wb') as f:
                f.write(response.content)
            print(f"Downloaded: {url} -> {local_path}")
    except Exception as e:
        print(f"Failed to download {url}: {e}")

def clean_archive_url(url):
    # Regex to find the actual URL inside a Wayback Machine URL
    match = re.search(r'https?://web\.archive\.org/web/\d+(?:im_|js_|cs_)?/(https?://.*)', url)
    if match:
        return match.group(1)
    return url

def recover_html(url, filename):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Remove Wayback Machine elements
        for tag in soup.find_all(id=['wm-ipp-base', 'wm-ipp-print', 'wm-ipp']):
            tag.decompose()
        for tag in soup.find_all(['script', 'link', 'img']):
            attr = 'src' if tag.name in ['script', 'img'] else 'href'
            if tag.has_attr(attr):
                val = tag[attr]
                if 'archive.org' in val:
                    actual_url = clean_archive_url(val)
                    clean_path = actual_url.replace('http://visualalerts.com/', '').replace('https://visualalerts.com/', '').replace('http://www.visualalerts.com/', '').replace('https://www.visualalerts.com/', '')
                    clean_path = clean_path.split('?')[0]
                    
                    if not clean_path.startswith('http'):
                        tag[attr] = '/' + clean_path
                        download_file(val, os.path.join(PROJECT_DIR, clean_path))
                elif val.startswith('/web/'):
                    # Handle root-relative archive paths
                    actual_url = 'https://web.archive.org' + val
                    actual_url = clean_archive_url(actual_url)
                    clean_path = actual_url.replace('http://visualalerts.com/', '').replace('https://visualalerts.com/', '').replace('http://www.visualalerts.com/', '').replace('https://www.visualalerts.com/', '')
                    clean_path = clean_path.split('?')[0]
                    if not clean_path.startswith('http'):
                        tag[attr] = '/' + clean_path
                        download_file('https://web.archive.org' + val, os.path.join(PROJECT_DIR, clean_path))

        # Handle links
        for a in soup.find_all('a', href=True):
            val = a['href']
            if 'archive.org' in val or val.startswith('/web/'):
                actual_url = clean_archive_url('https://web.archive.org' + val if val.startswith('/web/') else val)
                clean_path = actual_url.replace('http://visualalerts.com/', '').replace('https://visualalerts.com/', '').replace('http://www.visualalerts.com/', '').replace('https://www.visualalerts.com/', '')
                clean_path = clean_path.split('?')[0]
                if clean_path == '':
                    a['href'] = '/'
                elif not clean_path.startswith('http'):
                    if not clean_path.endswith('.html'):
                        a['href'] = '/' + clean_path + '.html'
                    else:
                        a['href'] = '/' + clean_path

        # Remove scripts that are purely archive related
        for script in soup.find_all('script'):
            if script.string and ('__wm' in script.string or 'archive_analytics' in script.string):
                script.decompose()

        with open(os.path.join(PROJECT_DIR, filename), 'w', encoding='utf-8') as f:
            f.write(soup.prettify())
        print(f"Recovered HTML: {filename}")

if __name__ == "__main__":
    pages = {
        "index.html": "https://web.archive.org/web/20160111114357/http://visualalerts.com/",
        "nostriservizi.html": "https://web.archive.org/web/20160322143714/http://www.visualalerts.com/main/nostriservizi.html",
        "registrazione.html": "https://web.archive.org/web/20160322143714/http://www.visualalerts.com/main/registrazione.html",
        "contact.html": "https://web.archive.org/web/20160322143714/http://www.visualalerts.com/main/contact.html"
    }
    
    for filename, url in pages.items():
        recover_html(url, filename)
