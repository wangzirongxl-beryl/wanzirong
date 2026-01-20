import json
import urllib.request
import urllib.parse
import re
from datetime import datetime

def fetch_weibo_hot():
    """从微博热搜抓取女性相关话题"""
    news = []
    keywords = ['女性', '女生', '女子', '妇女', '母亲', '妈妈', '家暴', '性别', '职场歧视', '月经', '生育', '产假', '性骚扰', '女权', '独居', '安全']
    
    try:
        url = 'https://weibo.com/ajax/side/hotSearch'
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        response = urllib.request.urlopen(req, timeout=10)
        data = json.loads(response.read().decode('utf-8'))
        
        for item in data.get('data', {}).get('realtime', []):
            title = item.get('word', '')
            for kw in keywords:
                if kw in title:
                    news.append({
                        'id': len(news) + 1,
                        'title': title,
                        'desc': item.get('label_name', '热门话题') + ' - 点击查看详情',
                        'hot': item.get('num', 0),
                        'src': '微博热搜',
                        'isHot': item.get('is_hot', 0) == 1,
                        'url': 'https://s.weibo.com/weibo?q=' + urllib.parse.quote(title)
                    })
                    break
    except Exception as e:
        print(f"微博抓取失败: {e}")
    
    return news

def fetch_baidu_hot():
    """从百度热搜抓取女性相关话题"""
    news = []
    keywords = ['女性', '女生', '女子', '妇女', '母亲', '妈妈', '家暴', '性别', '职场歧视', '月经', '生育', '产假', '性骚扰', '女权', '独居', '安全']
    
    try:
        url = 'https://top.baidu.com/board?tab=realtime'
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        response = urllib.request.urlopen(req, timeout=10)
        html = response.read().decode('utf-8')
        
        pattern = r'"word":"(.*?)".*?"hotScore":"(\d+)"'
        matches = re.findall(pattern, html)
        
        for word, score in matches:
            for kw in keywords:
                if kw in word:
                    news.append({
                        'id': len(news) + 100,
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
    all_news = []
    
    all_news.extend(fetch_weibo_hot())
    all_news.extend(fetch_baidu_hot())
    
    # 按热度排序
    all_news.sort(key=lambda x: x['hot'], reverse=True)
    
    # 重新编号
    for i, item in enumerate(all_news):
        item['id'] = i + 1
    
    # 如果没抓到，用默认数据
    if len(all_news) == 0:
        all_news = [
            {'id':1, 'title':'暂无女性相关热点', 'desc':'请稍后刷新重试', 'hot':0, 'src':'系统', 'isHot':False, 'url':'https://weibo.com'}
        ]
    
    # 保存为 JS 文件
    output = f"// 更新时间: {datetime.now().strftime('%Y-%m-%d %H:%M')}\nvar NEWS = {json.dumps(all_news[:20], ensure_ascii=False, indent=2)};"
    
    with open('news_data.js', 'w', encoding='utf-8') as f:
        f.write(output)
    
    print(f"成功抓取 {len(all_news)} 条新闻")

if __name__ == '__main__':
    main()
