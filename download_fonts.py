import os
import requests

PROJECT_DIR = "/home/ubuntu/visualalerts/public"
FONTS_DIR = os.path.join(PROJECT_DIR, "fonts")
os.makedirs(FONTS_DIR, exist_ok=True)

# List of common Gotham font filenames found in similar projects
fonts = [
    "Gotham-Book.woff", "Gotham-Medium.woff", "Gotham-Bold.woff", "Gotham-Light.woff",
    "Gotham-Book.ttf", "Gotham-Medium.ttf", "Gotham-Bold.ttf", "Gotham-Light.ttf"
]

# We will try to find them on the Wayback Machine for visualalerts.com
base_wayback = "https://web.archive.org/web/20160111114357im_/http://visualalerts.com/static/fonts/"

for font in fonts:
    url = base_wayback + font
    local_path = os.path.join(FONTS_DIR, font)
    try:
        response = requests.get(url)
        if response.status_code == 200:
            with open(local_path, 'wb') as f:
                f.write(response.content)
            print(f"Downloaded font: {font}")
        else:
            # Try alternative path
            url2 = "https://web.archive.org/web/20160111114357im_/http://visualalerts.com/themes/classic/fonts/" + font
            response = requests.get(url2)
            if response.status_code == 200:
                with open(local_path, 'wb') as f:
                    f.write(response.content)
                print(f"Downloaded font: {font} from alternative path")
    except Exception as e:
        print(f"Failed to download {font}: {e}")
