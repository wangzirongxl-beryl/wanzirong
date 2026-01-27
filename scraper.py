import json
import urllib.request
import urllib.parse
import re

keywords = ['女', '妈', '母', '妻', '家暴', '性别', '歧视', '生育', '产假', '性骚扰', '独居', '安全', '姐', '妹', '她', '闺蜜', '婆婆', '丈夫', '男友', '女友', '离婚', '出轨', '孕', '宝宝', '婚', '嫁', '彩礼', '催婚', '相亲']

def fetch_weibo():
    news = []
    try:
        url = 'https://weibo.com/ajax/side/hotSearch'
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Referer': 'https://weibo.com'
        })
        response = urllib.request.urlopen(req, timeout=15)
        data = json.loads(response.read().decode('utf-8'))
        
        for item in data.get('data', {}).get('realtime', []):
            word = item.get('word', '')
            for kw in keywords:
                if kw in word:
                    news.append({
                        'title': word,
                        'desc': '微博热搜',
                        'hot': item.get('num', 0),
                        'src': '微博',
                        'isHot': item.get('is_hot', 0) == 1,
                        'url': 'https://s.weibo.com/weibo?q=' + urllib.parse.quote(word)
                    })
                    break
    except Exception as e:
        print(f"微博抓取失败: {e}")
    return news

def fetch_zhihu():
    news = []
    try:
        url = 'https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=50'
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        response = urllib.request.urlopen(req, timeout=15)
        data = json.loads(response.read().decode('utf-8'))
        
        for item in data.get('data', []):
            target = item.get('target', {})
            title = target.get('title', '')
            for kw in keywords:
                if kw in title:
                    hot_text = item.get('detail_text', '0')
                    hot_num = re.sub(r'[^\d]', '', hot_text) or '0'
                    news.append({
                        'title': title,
                        'desc': '知乎热榜',
                        'hot': int(hot_num) * (10000 if '万' in hot_text else 1),
                        'src': '知乎',
                        'isHot': True,
                        'url': 'https://www.zhihu.com/question/' + str(target.get('id', ''))
                    })
                    break
    except Exception as e:
        print(f"知乎抓取失败: {e}")
    return news

def fetch_toutiao():
    news = []
    try:
        url = 'https://www.toutiao.com/hot-event/hot-board/?origin=toutiao_pc'
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        response = urllib.request.urlopen(req, timeout=15)
        data = json.loads(response.read().decode('utf-8'))
        
        for item in data.get('data', []):
            title = item.get('Title', '')
            for kw in keywords:
                if kw in title:
                    news.append({
                        'title': title,
                        'desc': '今日头条',
                        'hot': item.get('HotValue', 0),
                        'src': '头条',
                        'isHot': True,
                        'url': item.get('Url', 'https://www.toutiao.com')
                    })
                    break
    except Exception as e:
        print(f"头条抓取失败: {e}")
    return news

def fetch_douyin():
    news = []
    try:
        url = 'https://www.douyin.com/aweme/v1/web/hot/search/list/'
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Referer': 'https://www.douyin.com'
        })
        response = urllib.request.urlopen(req, timeout=15)
        data = json.loads(response.read().decode('utf-8'))
        
        for item in data.get('data', {}).get('word_list', []):
            word = item.get('word', '')
            for kw in keywords:
                if kw in word:
                    news.append({
                        'title': word,
                        'desc': '抖音热搜',
                        'hot': item.get('hot_value', 0),
                        'src': '抖音',
                        'isHot': True,
                        'url': 'https://www.douyin.com/search/' + urllib.parse.quote(word)
                    })
                    break
    except Exception as e:
        print(f"抖音抓取失败: {e}")
    return news

def fetch_bilibili():
    news = []
    try:
        url = 'https://app.bilibili.com/x/v2/search/trending/ranking'
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        response = urllib.request.urlopen(req, timeout=15)
        data = json.loads(response.read().decode('utf-8'))
        
        for item in data.get('data', {}).get('list', []):
            word = item.get('keyword', '')
            for kw in keywords:
                if kw in word:
                    news.append({
                        'title': word,
                        'desc': 'B站热搜',
                        'hot': item.get('heat_score', 0),
                        'src': 'B站',
                        'isHot': True,
                        'url': 'https://search.bilibili.com/all?keyword=' + urllib.parse.quote(word)
                    })
                    break
    except Exception as e:
        print(f"B站抓取失败: {e}")
    return news

def main():
    all_news = []
    all_news.extend(fetch_weibo())
    all_news.extend(fetch_zhihu())
    all_news.extend(fetch_toutiao())
    all_news.extend(fetch_douyin())
    all_news.extend(fetch_bilibili())
    
    all_news.sort(key=lambda x: x['hot'], reverse=True)
    
    for i, item in enumerate(all_news):
        item['id'] = i + 1
    
    if len(all_news) == 0:
        all_news = [{'id':1, 'title':'暂无女性相关热点', 'desc':'请稍后刷新', 'hot':0, 'src':'系统', 'isHot':False, 'url':'https://weibo.com'}]
    
    output = json.dumps(all_news[:30], ensure_ascii=False)
    
    with open('news_data.json', 'w', encoding='utf-8') as f:
        f.write(output)
    
    print(f"成功抓取 {len(all_news)} 条新闻")

if __name__ == '__main__':
    main()
