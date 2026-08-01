import urllib.request, re
url = 'https://dubaifintechsummit.com/about/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')
images = re.findall(r'https://dubaifintechsummit.com/wp-content/uploads/20[^\"\'\s]+\.(?:jpg|jpeg|png)', html)
for img in set(images):
    print(img)
