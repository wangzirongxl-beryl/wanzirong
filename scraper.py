import json
import urllib.request
import urllib.parse
import re
from datetime import datetime

def fetch_baidu_hot():
    news = []
    keywords = ['女', '妈', '母', '妻', '家暴', '性别', '歧视', '生育', '产假', '性骚扰', '独居', '安全']
    
    try:
        url = 'https://top.baidu.com/board?tab=realtime'
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
        response = urllib.request.urlopen(req, timeout=10)
        html = response.read().decode('utf-8')
        
        pattern = r'"word":"(.*?)".*?"hotScore":"(\d+)"'
        matches = re.findall(pattern, html)
        
        for word, score in matches:
            for kw in keywords:
                if kw in word:
                    news.append({
                        'id': len(news) + 1,
                        'title': word,
                        'desc': '百度热搜话题 - 点击查看详情',
                        'hot': int(score),
                        'src': '百度热搜',
                        'isHot': int(score) > 500000,
                        'url': 'https://www.baidu.com/s?wd=' + urllib.parse.quote(word)
                    })
                    break
    except Exception as e:
        print(f"百度抓取失败: {e}")
    
    return news

def main():
    all_news = fetch_baidu_hot()
    all_news.sort(key=lambda x: x['hot'], reverse=True)
    
    for i, item in enumerate(all_news):
        item['id'] = i + 1
    
    if len(all_news) == 0:
        all_news = [{'id':1, 'title':'暂无女性相关热点', 'desc':'请稍后刷新', 'hot':0, 'src':'系统', 'isHot':False, 'url':'https://weibo.com'}]
    
    output = "var NEWS = " + json.dumps(all_news[:20], ensure_ascii=False, indent=2) + ";"
    
    with open('news_data.js', 'w', encoding='utf-8') as f:
        f.write(output)
    
    print(f"成功抓取 {len(all_news)} 条新闻")

if __name__ == '__main__':
    main()
