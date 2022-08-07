# HYBeiKe接口文档

> baseURL：http://123.207.32.32:9060/beike/api



## 一. 备课首页接口

### 1. 获取首页数据

说明 : 调用此接口 , 可获取首页的数据

**请求方法 :** GET 

**接口地址 :** `/homePageInfo`

**调用例子 :** `baseURL + /homePageInfo`

**接口返回的数据格式：**

```json
{
    "curLocation": {
        "city": "广州",
        "cityCode": "440100"
    },
    "bgBanner": "https://s1.ljcdn.com/pegasus/redskull/images/home/images/home/bg_header@1x.jpg?v=ffcf75b4",
    "topBars": [
        {
            "id": 100,
            "title": "二手房",
            "linkUrl": "https://gz.ke.com/ershoufang"
        },
        {
            "id": 101,
            "title": "新房",
            "linkUrl": "https://gz.fang.ke.com/loupan/"
        },
        {
            "id": 102,
            "title": "租房",
            "linkUrl": "https://gz.zu.ke.com/zufang"
        },
        {
            "id": 103,
            "title": "写字楼",
            "linkUrl": "https://shangye.ke.com/gz"
        },
        {
            "id": 104,
            "title": "小区",
            "linkUrl": "https://gz.ke.com/xiaoqu/"
        },
        {
            "id": 105,
            "title": "贝壳研究院",
            "linkUrl": "https://research.ke.com/"
        },
        {
            "id": 106,
            "title": "投资者关系",
            "linkUrl": "https://investors.ke.com"
        },
        {
            "id": 107,
            "title": "下载APP",
            "linkUrl": "javascript:void(0)"
        }
    ],
    "searchMenus": [
        {
            "id": 200,
            "key": "ershoufang",
            "title": "找二手房"
        },
        {
            "id": 201,
            "key": "xinfang",
            "title": "找新房"
        },
        {
            "id": 202,
            "key": "zufang",
            "title": "找租房"
        },
        {
            "id": 203,
            "key": "xiaoqu",
            "title": "找小区"
        },
        {
            "id": 204,
            "key": "shangban",
            "title": "找商铺办公室"
        }
    ],
    "secondHouse": {
        "title": "二手好房",
        "subTitle": "好房源那么多，我们为你精选",
        "houses": [
            {
                "id": 300,
                "title": "海珠·工业大道北",
                "subTitle": "光大花园",
                "imageUrl": "https://ke-image.ljcdn.com/110000-inspection/pc1_UHdsRDOYO_1.jpg!m_fill,w_265,h_205,f_jpg?from=ke.com",
                "tagImgUrl": "https://img.ljcdn.com/beike/haofanglogo/1578296306747.png",
                "linkUrl": "https://gz.ke.com/ershoufang/108402225176.html",
                "vrlogoUrl": "https://s1.ljcdn.com/pegasus/redskull/images/common/images/common/vrlogo@2x.png?v=2f81ca5b",
                "specification": "3室2厅·105",
                "area": "77平米",
                "buildDate": null,
                "perSquareAveragePrice": null,
                "referenceTotalPrice": "635万",
                "monthRentPrice": null,
                "address": null
            },
            {
                "id": 301,
                "title": "番禺·南浦",
                "subTitle": "广州碧桂园福苑",
                "imageUrl": "https://ke-image.ljcdn.com/110000-inspection/pc1_2lviBUtur_1.jpg!m_fill,w_265,h_205,f_jpg?from=ke.com",
                "tagImgUrl": "https://img.ljcdn.com/beike/haofanglogo/1578296306747.png",
                "linkUrl": "https://gz.ke.com/ershoufang/108403205695.html",
                "vrlogoUrl": "https://s1.ljcdn.com/pegasus/redskull/images/common/images/common/vrlogo@2x.png?v=2f81ca5b",
                "specification": "3室1厅·146",
                "area": "2平米",
                "buildDate": null,
                "perSquareAveragePrice": null,
                "referenceTotalPrice": "330万",
                "monthRentPrice": null,
                "address": null
            },
            {
                "id": 302,
                "title": "增城·新塘北",
                "subTitle": "敏捷锦绣天伦",
                "imageUrl": "https://ke-image.ljcdn.com/110000-inspection/pc1_HscDUJblD_1.jpg!m_fill,w_265,h_205,f_jpg?from=ke.com",
                "tagImgUrl": "https://img.ljcdn.com/beike/bikanhaofang/1582103899113.png",
                "linkUrl": "https://gz.ke.com/ershoufang/108402805377.html",
                "vrlogoUrl": "https://s1.ljcdn.com/pegasus/redskull/images/common/images/common/vrlogo@2x.png?v=2f81ca5b",
                "specification": "2室1厅·76",
                "area": "95平米",
                "buildDate": null,
                "perSquareAveragePrice": null,
                "referenceTotalPrice": "147万",
                "monthRentPrice": null,
                "address": null
            },
            {
                "id": 303,
                "title": "番禺·南浦",
                "subTitle": "广州碧桂园翠苑",
                "imageUrl": "https://ke-image.ljcdn.com/110000-inspection/pc1_jsGZT83JE.jpg!m_fill,w_265,h_205,f_jpg?from=ke.com",
                "tagImgUrl": "https://img.ljcdn.com/beike/haofanglogo/1578296306747.png",
                "linkUrl": "https://gz.ke.com/ershoufang/108403201204.html",
                "vrlogoUrl": "https://s1.ljcdn.com/pegasus/redskull/images/common/images/common/vrlogo@2x.png?v=2f81ca5b",
                "specification": "2室2厅·80",
                "area": "5平米",
                "buildDate": null,
                "perSquareAveragePrice": null,
                "referenceTotalPrice": "238万",
                "monthRentPrice": null,
                "address": null
            }
        ]
    },
    "comunityHouse": {
        "title": "小区精选",
        "subTitle": "纵览小区，恋上这座城",
        "houses": [
            {
                "id": 400,
                "title": "碧桂园凤凰城凤馨苑",
                "subTitle": null,
                "imageUrl": "https://ke-image.ljcdn.com/hdic-resblock/23e7c837-5bf4-455e-af64-6119a4aca114.jpg.280x210.jpg?from=ke.com",
                "tagImgUrl": null,
                "linkUrl": "https://gz.ke.com/xiaoqu/2110343239123008/",
                "specification": null,
                "area": null,
                "buildDate": "2002年建",
                "perSquareAveragePrice": "17689元/平",
                "referenceTotalPrice": null,
                "monthRentPrice": null,
                "address": null
            },
            {
                "id": 401,
                "title": "富力金港城东区",
                "subTitle": null,
                "imageUrl": "https://ke-image.ljcdn.com/hdic-resblock/bb665e3b-f876-4a28-9ef1-d3964fd37c36.JPG.280x210.jpg?from=ke.com",
                "tagImgUrl": null,
                "linkUrl": "https://gz.ke.com/xiaoqu/2120022414782344/",
                "specification": null,
                "area": null,
                "buildDate": "1998年建",
                "perSquareAveragePrice": "13030元/平",
                "referenceTotalPrice": null,
                "monthRentPrice": null,
                "address": null
            },
            {
                "id": 402,
                "title": "敏捷锦绣天伦",
                "subTitle": null,
                "imageUrl": "https://ke-image.ljcdn.com/hdic-resblock/380751a1-eaef-4b7f-b09d-426f9ca2cc03.jpg.280x210.jpg?from=ke.com",
                "tagImgUrl": null,
                "linkUrl": "https://gz.ke.com/xiaoqu/2110113186803606/",
                "specification": null,
                "area": null,
                "buildDate": "2005年建",
                "perSquareAveragePrice": "20396元/平",
                "referenceTotalPrice": null,
                "monthRentPrice": null,
                "address": null
            },
            {
                "id": 403,
                "title": "广州海伦堡",
                "subTitle": null,
                "imageUrl": "https://ke-image.ljcdn.com/hdic-resblock/542c4565-5d68-4da4-bbe2-80a2e620bc2b.jpg.280x210.jpg?from=ke.com",
                "tagImgUrl": null,
                "linkUrl": "https://gz.ke.com/xiaoqu/2111103317997/",
                "specification": null,
                "area": null,
                "buildDate": "2005年建",
                "perSquareAveragePrice": "20025元/平",
                "referenceTotalPrice": null,
                "monthRentPrice": null,
                "address": null
            }
        ]
    },
    "newHouse": {
        "title": "优选新房",
        "subTitle": "真实信息准确同步，楼盘动态一手掌握",
        "houses": [
            {
                "id": 500,
                "title": "时代印象",
                "subTitle": null,
                "imageUrl": "https://image1.ljcdn.com/newhouse-user-image/5ea29d8244b8d81eeb07d9eaad1d6074.jpg.280x210.jpg?from=ke.com",
                "tagImgUrl": null,
                "linkUrl": "https://gz.fang.ke.com/loupan/p_sdyxblepk/",
                "specification": null,
                "area": null,
                "buildDate": null,
                "perSquareAveragePrice": "18500元/平",
                "referenceTotalPrice": null,
                "monthRentPrice": null,
                "address": null
            },
            {
                "id": 501,
                "title": "中海保利朗阅",
                "subTitle": null,
                "imageUrl": "https://image1.ljcdn.com/newhouse-user-image/7bae24a16e91571632d2c7a491484b3a.png.280x210.jpg?from=ke.com",
                "tagImgUrl": null,
                "linkUrl": "https://gz.fang.ke.com/loupan/p_bmohv/",
                "specification": null,
                "area": null,
                "buildDate": null,
                "perSquareAveragePrice": "69000元/平",
                "referenceTotalPrice": null,
                "monthRentPrice": null,
                "address": null
            },
            {
                "id": 502,
                "title": "中建|鄂旅投·岭南悦府",
                "subTitle": null,
                "imageUrl": "https://image1.ljcdn.com/newhouse-user-image/80826f91ccca68e5f81571b1cb4f890b.jpg.280x210.jpg?from=ke.com",
                "tagImgUrl": null,
                "linkUrl": "https://gz.fang.ke.com/loupan/p_zjeltlnyfblcvv/",
                "specification": null,
                "area": null,
                "buildDate": null,
                "perSquareAveragePrice": "19500元/平",
                "referenceTotalPrice": null,
                "monthRentPrice": null,
                "address": null
            }
        ]
    },
    "qualityHouse": {
        "title": "品质租房",
        "subTitle": "高品质租房体验，从贝壳开始",
        "houses": [
            {
                "id": 600,
                "title": "整租·信业悦都荟 2室1厅",
                "subTitle": null,
                "imageUrl": "https://ke-image.ljcdn.com/110000-inspection/42ad27f5-897e-4053-9165-415ddfbbe68f.jpg.280x210.jpg",
                "tagImgUrl": null,
                "linkUrl": "https://gz.zu.ke.com/zufang/GZ1630483811659677696.html",
                "specification": "2室1厅1卫",
                "area": null,
                "buildDate": null,
                "perSquareAveragePrice": null,
                "referenceTotalPrice": null,
                "monthRentPrice": "2800 元/月",
                "address": "市桥北"
            },
            {
                "id": 601,
                "title": "整租·新月明珠花园 3室2厅",
                "subTitle": null,
                "imageUrl": "https://ke-image.ljcdn.com/110000-inspection/pc1_WyKkJpc79.jpg.280x210.jpg",
                "tagImgUrl": null,
                "linkUrl": "https://gz.zu.ke.com/zufang/GZ1641651271783940096.html",
                "specification": "3室2厅2卫",
                "area": null,
                "buildDate": null,
                "perSquareAveragePrice": null,
                "referenceTotalPrice": null,
                "monthRentPrice": "5300 元/月",
                "address": "大石"
            },
            {
                "id": 602,
                "title": "整租·晓港中马路 1室1厅",
                "subTitle": null,
                "imageUrl": "https://ke-image.ljcdn.com/110000-inspection/pc1_6cmBCvKrt.jpg.280x210.jpg",
                "tagImgUrl": null,
                "linkUrl": "https://gz.zu.ke.com/zufang/GZ1637042889924018176.html",
                "specification": "1室1厅1卫",
                "area": null,
                "buildDate": null,
                "perSquareAveragePrice": null,
                "referenceTotalPrice": null,
                "monthRentPrice": "2600 元/月",
                "address": "昌岗"
            },
            {
                "id": 603,
                "title": "整租·万科金色悦府 3室2厅",
                "subTitle": null,
                "imageUrl": "https://ke-image.ljcdn.com/110000-inspection/pc1_Pi5LTSxJ9.jpg.280x210.jpg",
                "tagImgUrl": null,
                "linkUrl": "https://gz.zu.ke.com/zufang/GZ1632223295178801152.html",
                "specification": "3室2厅2卫",
                "area": null,
                "buildDate": null,
                "perSquareAveragePrice": null,
                "referenceTotalPrice": null,
                "monthRentPrice": "5500 元/月",
                "address": "文冲"
            }
        ]
    },
    "footerTitles": [
        {
            "id": 700,
            "title": "开放平台",
            "linkUrl": "https://open.ke.com/home"
        },
        {
            "id": 701,
            "title": "贝壳号",
            "linkUrl": "https://kol.ke.com/"
        },
        {
            "id": 702,
            "title": "网站地图",
            "linkUrl": "https://gz.ke.com/sitemap/"
        },
        {
            "id": 703,
            "title": "了解贝壳",
            "linkUrl": "https://about.ke.com/introduce/index.html"
        },
        {
            "id": 704,
            "title": "投资者关系 / Investors",
            "linkUrl": "https://investors.ke.com"
        }
    ]
}
```



### 2. 搜索房子

说明 : 调用此接口 , 搜索该城市的房子

**请求方法 :** GET 

**接口地址 :** `/sug/headerSearch`

**必选参数 :** 

```
cityId=440100   # 城市的id ( 来源城市的接口 )
cityName=广州    # 城市的名称 ( 来源城市的接口 )
channel=site    # 房源渠道(默认是site, 还支持：ershoufang 、xinfang、zufang、xiaoqu、shangban)
keyword=白云山   # 搜索的关键字
query=白云山	  # 搜索的关键字 
```

**调用例子 :** `baseURL + /sug/headerSearch?cityId=440100&cityName=广州&channel=site&keyword=白云山&query=白云山`

```json
{
    "request_id": "6151448335715",
    "errno": 0,
    "error": "",
    "data": {
        "result": [
            {
                "id": 527962658616448,
                "count": 4,
                "region": " ",
                "text": "保利白云山庄",
                "hlsText": "保利<font color='#3072F6'>白云山</font>庄",
                "url": "/ershoufang/sq527962658616448/?sug=%E4%BF%9D%E5%88%A9%E7%99%BD%E4%BA%91%E5%B1%B1%E5%BA%84",
                "sugTypeName": {
                    "bg_color": "#F5F5F5",
                    "color": "#A0A3A5",
                    "text": "社区"
                },
                "resblockAlias": "",
                "communityId": 0,
                "appCondition": 527962658616448,
                "value": {
                    "hdicResblockId": 0
                },
                "strategyInfo": {
                    "fb_query_id": "589475341903503360",
                    "fb_expo_id": "589475341999972352",
                    "fb_item_location": "0",
                    "fb_service_id": "2011710009",
                    "fb_ab_test_flag": "",
                    "fb_item_id": "440100:527962658616448:shequ"
                },
                "feChannel": "site",
                "keyword": "白云山"
            },
            {
                "id": 2111103319375,
                "count": 4,
                "region": "(广州白云山和记黄埔中药厂宿舍) 沙太北 白云",
                "text": "白云山中药厂宿舍",
                "hlsText": "<font color='#3072F6'>白云山</font>中药厂宿舍",
                "url": "/ershoufang/c2111103319375/?sug=%E7%99%BD%E4%BA%91%E5%B1%B1%E4%B8%AD%E8%8D%AF%E5%8E%82%E5%AE%BF%E8%88%8D",
                "sugTypeName": {
                    "bg_color": "#F5F5F5",
                    "color": "#A0A3A5",
                    "text": "小区"
                },
                "resblockAlias": "",
                "communityId": 0,
                "appCondition": 2111103319375,
                "value": {
                    "hdicResblockId": 2111103319375
                },
                "strategyInfo": {
                    "fb_query_id": "589475341903503360",
                    "fb_expo_id": "589475341999972353",
                    "fb_item_location": "1",
                    "fb_service_id": "2011710009",
                    "fb_ab_test_flag": "",
                    "fb_item_id": "440100:2111103319375:resblock"
                },
                "feChannel": "site",
                "keyword": "白云山"
            },
            {
                "id": 2111103319182,
                "count": 23,
                "region": " 同和 白云",
                "text": "白云山制药厂前山宿舍",
                "hlsText": "<font color='#3072F6'>白云山</font>制药厂前山宿舍",
                "url": "/ershoufang/c2111103319182/?sug=%E7%99%BD%E4%BA%91%E5%B1%B1%E5%88%B6%E8%8D%AF%E5%8E%82%E5%89%8D%E5%B1%B1%E5%AE%BF%E8%88%8D",
                "sugTypeName": {
                    "bg_color": "#F5F5F5",
                    "color": "#A0A3A5",
                    "text": "小区"
                },
                "resblockAlias": "",
                "communityId": 0,
                "appCondition": 2111103319182,
                "value": {
                    "hdicResblockId": 2111103319182
                },
                "strategyInfo": {
                    "fb_query_id": "589475341903503360",
                    "fb_expo_id": "589475341999972354",
                    "fb_item_location": "2",
                    "fb_service_id": "2011710009",
                    "fb_ab_test_flag": "",
                    "fb_item_id": "440100:2111103319182:resblock"
                },
                "feChannel": "site",
                "keyword": "白云山"
            },
            {
                "id": 2111103318128,
                "count": 16,
                "region": " 南湖 白云",
                "text": "白云山制药厂后山宿舍",
                "hlsText": "<font color='#3072F6'>白云山</font>制药厂后山宿舍",
                "url": "/ershoufang/c2111103318128/?sug=%E7%99%BD%E4%BA%91%E5%B1%B1%E5%88%B6%E8%8D%AF%E5%8E%82%E5%90%8E%E5%B1%B1%E5%AE%BF%E8%88%8D",
                "sugTypeName": {
                    "bg_color": "#F5F5F5",
                    "color": "#A0A3A5",
                    "text": "小区"
                },
                "resblockAlias": "",
                "communityId": 0,
                "appCondition": 2111103318128,
                "value": {
                    "hdicResblockId": 2111103318128
                },
                "strategyInfo": {
                    "fb_query_id": "589475341903503360",
                    "fb_expo_id": "589475341999972355",
                    "fb_item_location": "3",
                    "fb_service_id": "2011710009",
                    "fb_ab_test_flag": "",
                    "fb_item_id": "440100:2111103318128:resblock"
                },
                "feChannel": "site",
                "keyword": "白云山"
            },
            {
                "id": 2111248330616135,
                "count": 1,
                "region": " 沙太北 白云",
                "text": "白云山化学制药厂宿舍",
                "hlsText": "<font color='#3072F6'>白云山</font>化学制药厂宿舍",
                "url": "/ershoufang/c2111248330616135/?sug=%E7%99%BD%E4%BA%91%E5%B1%B1%E5%8C%96%E5%AD%A6%E5%88%B6%E8%8D%AF%E5%8E%82%E5%AE%BF%E8%88%8D",
                "sugTypeName": {
                    "bg_color": "#F5F5F5",
                    "color": "#A0A3A5",
                    "text": "小区"
                },
                "resblockAlias": "",
                "communityId": 0,
                "appCondition": 2111248330616135,
                "value": {
                    "hdicResblockId": 2111248330616135
                },
                "strategyInfo": {
                    "fb_query_id": "589475341903503360",
                    "fb_expo_id": "589475341999972356",
                    "fb_item_location": "4",
                    "fb_service_id": "2011710009",
                    "fb_ab_test_flag": "",
                    "fb_item_id": "440100:2111248330616135:resblock"
                },
                "feChannel": "site",
                "keyword": "白云山"
            },
            {
                "id": 2110343238337431,
                "count": 4,
                "region": " 元下田 白云",
                "text": "保利白云山庄",
                "hlsText": "保利<font color='#3072F6'>白云山</font>庄",
                "url": "/ershoufang/c2110343238337431/?sug=%E4%BF%9D%E5%88%A9%E7%99%BD%E4%BA%91%E5%B1%B1%E5%BA%84",
                "sugTypeName": {
                    "bg_color": "#F5F5F5",
                    "color": "#A0A3A5",
                    "text": "小区"
                },
                "resblockAlias": "",
                "communityId": 0,
                "appCondition": 2110343238337431,
                "value": {
                    "hdicResblockId": 2110343238337431
                },
                "strategyInfo": {
                    "fb_query_id": "589475341903503360",
                    "fb_expo_id": "589475341999972357",
                    "fb_item_location": "5",
                    "fb_service_id": "2011710009",
                    "fb_ab_test_flag": "",
                    "fb_item_id": "440100:2110343238337431:resblock"
                },
                "feChannel": "site",
                "keyword": "白云山"
            },
            {
                "id": "1234567890",
                "count": null,
                "region": "白云",
                "text": "白云山公园",
                "hlsText": "白云山公园",
                "url": "/ershoufang/poi1234567890/?sug=%E7%99%BD%E4%BA%91%E5%B1%B1%E5%85%AC%E5%9B%AD",
                "sugTypeName": {
                    "bg_color": "#F5F5F5",
                    "color": "#A0A3A5",
                    "text": "地标"
                },
                "resblockAlias": "",
                "communityId": 0,
                "appCondition": "1234567890",
                "value": {
                    "hdicResblockId": 0
                },
                "strategyInfo": {
                    "fb_query_id": "589475341903503360",
                    "fb_expo_id": "589475341999972358",
                    "fb_item_location": "6",
                    "fb_service_id": "2011710009",
                    "fb_ab_test_flag": "",
                    "fb_item_id": "179b0199ebb41416c388a8018f9af421"
                },
                "feChannel": "site",
                "keyword": "白云山"
            },
            {
                "id": "1234567890",
                "count": null,
                "region": "白云",
                "text": "广州白云山医院",
                "hlsText": "广州白云山医院",
                "url": "/ershoufang/poi1234567890/?sug=%E5%B9%BF%E5%B7%9E%E7%99%BD%E4%BA%91%E5%B1%B1%E5%8C%BB%E9%99%A2",
                "sugTypeName": {
                    "bg_color": "#F5F5F5",
                    "color": "#A0A3A5",
                    "text": "地标"
                },
                "resblockAlias": "",
                "communityId": 0,
                "appCondition": "1234567890",
                "value": {
                    "hdicResblockId": 0
                },
                "strategyInfo": {
                    "fb_query_id": "589475341903503360",
                    "fb_expo_id": "589475341999972359",
                    "fb_item_location": "7",
                    "fb_service_id": "2011710009",
                    "fb_ab_test_flag": "",
                    "fb_item_id": "d1fbda6b57391d8fb95df71ca4d33615"
                },
                "feChannel": "site",
                "keyword": "白云山"
            },
            {
                "id": "1234567890",
                "count": null,
                "region": "白云",
                "text": "白云山风景名胜区-云溪生态公园",
                "hlsText": "白云山风景名胜区-云溪生态公园",
                "url": "/ershoufang/poi1234567890/?sug=%E7%99%BD%E4%BA%91%E5%B1%B1%E9%A3%8E%E6%99%AF%E5%90%8D%E8%83%9C%E5%8C%BA-%E4%BA%91%E6%BA%AA%E7%94%9F%E6%80%81%E5%85%AC%E5%9B%AD",
                "sugTypeName": {
                    "bg_color": "#F5F5F5",
                    "color": "#A0A3A5",
                    "text": "地标"
                },
                "resblockAlias": "",
                "communityId": 0,
                "appCondition": "1234567890",
                "value": {
                    "hdicResblockId": 0
                },
                "strategyInfo": {
                    "fb_query_id": "589475341903503360",
                    "fb_expo_id": "589475341999972360",
                    "fb_item_location": "8",
                    "fb_service_id": "2011710009",
                    "fb_ab_test_flag": "",
                    "fb_item_id": "45fd0ced713b532bd9aaf28bfbaa5d91"
                },
                "feChannel": "site",
                "keyword": "白云山"
            }
        ],
        "hideSugNum": 0
    }
}
```



### 3. 热门推荐

说明 : 调用此接口 , 可获热门推荐房子数据

**请求方法 :** GET 

**接口地址 :** `/site/rent`

**必选参数 :** 无

**调用例子 :** `baseURL + /site/rent`

**接口返回的数据格式：**

```json
{
    "rent_house_list": {
        "list": [
            {
                "member_level": 0,
                "ad_desc": "",
                "ad_code": "0",
                "ad_type": 0,
                "position": -1,
                "rent_type": "200600000001",
                "city_id": 440100,
                "rent_area": "97.84",
                "house_attention_type": "",
                "house_code": "GZ1626010179415834624",
                "lianjia_house_code": "108403275649",
                "house_title": "整租·中海花城湾 3室2厅",
                "resblock_id": "2111103319096",
                "hdic_resblock_name": "中海花城湾",
                "resblock_name": "中海花城湾",
                "bizcircle_id": "1100000107",
                "hdic_bizcircle_name": "珠江新城中",
                "bizcircle_name": "珠江新城中",
                "district_id": "23008636",
                "district_name": "天河",
                "hdic_district_name": "天河",
                "match_desc": "",
                "color": "",
                "layout": "3室2厅1卫",
                "desc": "97.84㎡ | 北",
                "sub_desc": "天河·珠江新城中",
                "subway_distance": "",
                "geolatitudelongitude": "23.12355424077842,113.338964180883",
                "is_default_picture": 0,
                "list_picture": "https://ke-image.ljcdn.com/110000-inspection/pc1_EbtESg2wc.jpg.280x210.jpg",
                "rent_price_listing": "13000",
                "rent_price_unit": "元/月",
                "house_tags": [
                    {
                        "color_bg": "EDF0F3",
                        "color_txt": "5373B2",
                        "key": "decoration",
                        "name": "精装修"
                    },
                    {
                        "color_bg": "EDF0F3",
                        "color_txt": "5373B2",
                        "key": "has_elevator",
                        "name": "有电梯"
                    },
                    {
                        "color_bg": "EDF0F3",
                        "color_txt": "5373B2",
                        "key": "has_parking_place",
                        "name": "有车位"
                    },
                    {
                        "color_bg": "EDF0F3",
                        "color_txt": "5373B2",
                        "key": "water_elec_type",
                        "name": "民水民电"
                    }
                ],
                "operation_tags": [],
                "house_status": "202300000001",
                "app_source": "200100000004",
                "app_source_type": "200201000000",
                "app_source_brand": "200306001852",
                "app_source_brand_name": "",
                "app_source_pkid": "108403275649",
                "frame_orientation": "北",
                "detail_scheme": "lianjiabeike://rentplat/house/detail/distribute?house_code=GZ1626010179415834624&ad_code=0&bid_version=",
                "distribution_type": "203500000001",
                "quality_icon": "",
                "is_quality": 0,
                "activity_phrase": {
                    "color_txt": "F6804D",
                    "txt": "07-15可入住"
                },
                "stress_content": null,
                "vr_icon": "https://image1.ljcdn.com/rent-front-image/68c2bcb27bad2faa3b5968a305431ca2.1521791109090_ed60db63-2265-448f-af81-3357e1e96de5.90x90.png",
                "shop_id": "0",
                "apartment_name": "",
                "c_type": 1,
                "divider_desc": "",
                "available_time_level": 1,
                "reason_id": null,
                "reason_value": null,
                "m_url": "https://m.ke.com/chuzu/gz/zufang/GZ1626010179415834624.html",
                "pc_url": "https://gz.zu.ke.com/zufang/GZ1626010179415834624.html",
                "exp_type": "default",
                "coupon_template_id": [],
                "rentable_num": "",
                "available_cnt": 1,
                "rent_price": 13000,
                "strategy_id": "default",
                "fb_expo_id": "r16552768015109936218845173280",
                "click_position": 0,
                "is_youxuan": 0,
                "is_shengxinzu": 0,
                "op_status": "",
                "frame_bedroom_num": "3",
                "frame_hall_num": "2",
                "frame_bathroom_num": "1",
                "frame_kitchen_num": 1,
                "rent_price_trans": 0,
                "house_tags_str": "decoration,has_elevator,has_parking_place,water_elec_type,is_vr",
                "is_hot_house": false,
                "sign_time": "1970-01-02",
                "house_quality_type": null,
                "hot_desc": "",
                "rank_board": null,
                "is_preferential": 0,
                "discount_price": "13000",
                "discount_price_unit": "元/月",
                "preferential_label": {
                    "title": "新青年计划",
                    "color_bg": "#07CDC3",
                    "color_txt": "#FFFFFF"
                },
                "latest_price_change": {
                    "changePrice": 2000,
                    "time": 1650676743000,
                    "type": 1
                },
                "bangdan_qvalue_pv": 0,
                "app_plat_ctime": 1649975036,
                "shop_name": "",
                "app_house_title": "中海花城湾",
                "available_rent_time": 1657814400000,
                "attention": 2,
                "bid_version": "",
                "rank_score": "-1",
                "operation_score": "0",
                "is_sharegroup": 0,
                "is_vip": 0,
                "vip_decrease_price": "",
                "one_price_ab_group": "",
                "ab_group": "",
                "switch_type": "0",
                "query_type": null,
                "filter_type": null,
                "query_content": "",
                "housedel_bcode": "108403275649",
                "commerce_price": 0,
                "videoInfoList": [],
                "house_type": 1,
                "pic_desc": "",
                "operation_desc": "该房源7日内降价2000元",
                "big_c_coupon_desc": "",
                "pic_jijin_list": [
                    {
                        "icon": "http://image1.ljcdn.com/rent-front-image/8d2841657ccd90fc7cf0ff3eb93a4b38.png",
                        "desc": "位于珠江新城中"
                    },
                    {
                        "icon": "http://image1.ljcdn.com/rent-front-image/583ccdfb88ff3fa5740a853d544a21ac.png",
                        "desc": "需提前预约"
                    },
                    {
                        "icon": "http://image1.ljcdn.com/rent-front-image/bbfb455176965f6d93b994c1a274b698.png",
                        "desc": "2022-07-15后可入住"
                    }
                ],
                "big_c_discount_price": null,
                "big_c_house_quality_desc": "",
                "big_c_recommend_type": "",
                "big_c_recommend_desc": "",
                "floor_level": 200500000003,
                "floor_total": 29,
                "is_vr": true
            },
            {
                "member_level": 0,
                "ad_desc": "",
                "ad_code": "0",
                "ad_type": 0,
                "position": -1,
                "rent_type": "200600000001",
                "city_id": 440100,
                "rent_area": "82.00",
                "house_attention_type": "",
                "house_code": "GZ1647631291132149760",
                "lianjia_house_code": "108403451330",
                "house_title": "整租·鸿业大厦 2室1厅",
                "resblock_id": "2111103316741",
                "hdic_resblock_name": "鸿业大厦",
                "resblock_name": "鸿业大厦",
                "bizcircle_id": "612100051",
                "hdic_bizcircle_name": "五羊新城",
                "bizcircle_name": "五羊新城",
                "district_id": "23008634",
                "district_name": "越秀",
                "hdic_district_name": "越秀",
                "match_desc": "",
                "color": "",
                "layout": "2室1厅1卫",
                "desc": "82.00㎡ | 南",
                "sub_desc": "越秀·五羊新城 距5号线-五羊邨站155m",
                "subway_distance": " 距5号线-五羊邨站155m",
                "geolatitudelongitude": "23.12695507297064,113.3193328118919",
                "is_default_picture": 0,
                "list_picture": "https://ke-image.ljcdn.com/110000-inspection/pc1_h3LMpa2Wf.jpg.280x210.jpg",
                "rent_price_listing": "5800",
                "rent_price_unit": "元/月",
                "house_tags": [
                    {
                        "color_bg": "EDF0F3",
                        "color_txt": "5373B2",
                        "key": "is_subway_house",
                        "name": "近地铁"
                    },
                    {
                        "color_bg": "EDF0F3",
                        "color_txt": "5373B2",
                        "key": "decoration",
                        "name": "精装修"
                    },
                    {
                        "color_bg": "EDF0F3",
                        "color_txt": "5373B2",
                        "key": "has_elevator",
                        "name": "有电梯"
                    },
                    {
                        "color_bg": "EDF0F3",
                        "color_txt": "5373B2",
                        "key": "is_new",
                        "name": "新上"
                    },
                    {
                        "color_bg": "EDF0F3",
                        "color_txt": "5373B2",
                        "key": "water_elec_type",
                        "name": "民水民电"
                    }
                ],
                "operation_tags": [],
                "house_status": "202300000001",
                "app_source": "200100000004",
                "app_source_type": "200201000000",
                "app_source_brand": "200301001000",
                "app_source_brand_name": "链家",
                "app_source_pkid": "108403451330",
                "frame_orientation": "南",
                "detail_scheme": "lianjiabeike://rentplat/house/detail/distribute?house_code=GZ1647631291132149760&ad_code=0&bid_version=",
                "distribution_type": "203500000001",
                "quality_icon": "",
                "is_quality": 0,
                "activity_phrase": {
                    "color_txt": "F6804D",
                    "txt": "07-15可入住"
                },
                "stress_content": null,
                "vr_icon": "https://image1.ljcdn.com/rent-front-image/68c2bcb27bad2faa3b5968a305431ca2.1521791109090_ed60db63-2265-448f-af81-3357e1e96de5.90x90.png",
                "shop_id": "0",
                "apartment_name": "",
                "c_type": 1,
                "divider_desc": "",
                "available_time_level": 1,
                "reason_id": null,
                "reason_value": null,
                "m_url": "https://m.ke.com/chuzu/gz/zufang/GZ1647631291132149760.html",
                "pc_url": "https://gz.zu.ke.com/zufang/GZ1647631291132149760.html",
                "exp_type": "default",
                "coupon_template_id": [],
                "rentable_num": "",
                "available_cnt": 1,
                "rent_price": 5800,
                "strategy_id": "default",
                "fb_expo_id": "r16552768015109936218845173281",
                "click_position": 1,
                "is_youxuan": 0,
                "is_shengxinzu": 0,
                "op_status": "",
                "frame_bedroom_num": "2",
                "frame_hall_num": "1",
                "frame_bathroom_num": "1",
                "frame_kitchen_num": 1,
                "rent_price_trans": 0,
                "house_tags_str": "is_subway_house,decoration,has_elevator,is_new,water_elec_type,is_vr",
                "is_hot_house": false,
                "sign_time": "1970-01-02",
                "house_quality_type": null,
                "hot_desc": "",
                "rank_board": null,
                "is_preferential": 0,
                "discount_price": "5800",
                "discount_price_unit": "元/月",
                "preferential_label": {
                    "title": "新青年计划",
                    "color_bg": "#07CDC3",
                    "color_txt": "#FFFFFF"
                },
                "latest_price_change": {
                    "changePrice": 0,
                    "time": 0
                },
                "bangdan_qvalue_pv": 0,
                "app_plat_ctime": 1655129911,
                "shop_name": "",
                "app_house_title": "鸿业大厦",
                "available_rent_time": 1657814400000,
                "attention": 2,
                "bid_version": "",
                "rank_score": "-1",
                "operation_score": "0",
                "is_sharegroup": 0,
                "is_vip": 0,
                "vip_decrease_price": "",
                "one_price_ab_group": "",
                "ab_group": "",
                "switch_type": "0",
                "query_type": null,
                "filter_type": null,
                "query_content": "",
                "housedel_bcode": "108403451330",
                "commerce_price": 0,
                "videoInfoList": [],
                "house_type": 1,
                "pic_desc": "",
                "operation_desc": "",
                "big_c_coupon_desc": "",
                "pic_jijin_list": [
                    {
                        "icon": "http://image1.ljcdn.com/rent-front-image/8d2841657ccd90fc7cf0ff3eb93a4b38.png",
                        "desc": "位于五羊新城， 距5号线-五羊邨站155m"
                    },
                    {
                        "icon": "http://image1.ljcdn.com/rent-front-image/583ccdfb88ff3fa5740a853d544a21ac.png",
                        "desc": "需提前预约"
                    },
                    {
                        "icon": "http://image1.ljcdn.com/rent-front-image/bbfb455176965f6d93b994c1a274b698.png",
                        "desc": "2022-07-15后可入住"
                    }
                ],
                "big_c_discount_price": null,
                "big_c_house_quality_desc": "",
                "big_c_recommend_type": "",
                "big_c_recommend_desc": "",
                "floor_level": 200500000001,
                "floor_total": 27,
                "is_vr": true
            },
            {
                "member_level": 0,
                "ad_desc": "",
                "ad_code": "0",
                "ad_type": 0,
                "position": -1,
                "rent_type": "200600000001",
                "city_id": 440100,
                "rent_area": "78.00",
                "house_attention_type": "",
                "house_code": "GZ1633808023862378496",
                "lianjia_house_code": "108403339416",
                "house_title": "整租·侨林苑 2室1厅",
                "resblock_id": "2110343238336538",
                "hdic_resblock_name": "侨林苑",
                "resblock_name": "侨林苑",
                "bizcircle_id": "612100095",
                "hdic_bizcircle_name": "林和",
                "bizcircle_name": "林和",
                "district_id": "23008636",
                "district_name": "天河",
                "hdic_district_name": "天河",
                "match_desc": "",
                "color": "",
                "layout": "2室1厅1卫",
                "desc": "78.00㎡ | 南",
                "sub_desc": "天河·林和 距3号线北延段-林和西站846m",
                "subway_distance": " 距3号线北延段-林和西站846m",
                "geolatitudelongitude": "23.149619417700606,113.3367909518311",
                "is_default_picture": 0,
                "list_picture": "https://ke-image.ljcdn.com/110000-inspection/33346b0a-7ffa-417b-9979-f92143c80ea8.jpg.280x210.jpg",
                "rent_price_listing": "6200",
                "rent_price_unit": "元/月",
                "house_tags": [
                    {
                        "color_bg": "EDF0F3",
                        "color_txt": "5373B2",
                        "key": "is_subway_house",
                        "name": "近地铁"
                    },
                    {
                        "color_bg": "EDF0F3",
                        "color_txt": "5373B2",
                        "key": "has_elevator",
                        "name": "有电梯"
                    },
                    {
                        "color_bg": "EDF0F3",
                        "color_txt": "5373B2",
                        "key": "water_elec_type",
                        "name": "民水民电"
                    }
                ],
                "operation_tags": [],
                "house_status": "202300000001",
                "app_source": "200100000004",
                "app_source_type": "200201000000",
                "app_source_brand": "200301001000",
                "app_source_brand_name": "链家",
                "app_source_pkid": "108403339416",
                "frame_orientation": "南",
                "detail_scheme": "lianjiabeike://rentplat/house/detail/distribute?house_code=GZ1633808023862378496&ad_code=0&bid_version=",
                "distribution_type": "203500000001",
                "quality_icon": "",
                "is_quality": 0,
                "activity_phrase": {
                    "color_txt": "F6804D",
                    "txt": "07-15可入住"
                },
                "stress_content": null,
                "vr_icon": "https://image1.ljcdn.com/rent-front-image/68c2bcb27bad2faa3b5968a305431ca2.1521791109090_ed60db63-2265-448f-af81-3357e1e96de5.90x90.png",
                "shop_id": "0",
                "apartment_name": "",
                "c_type": 1,
                "divider_desc": "",
                "available_time_level": 1,
                "reason_id": null,
                "reason_value": null,
                "m_url": "https://m.ke.com/chuzu/gz/zufang/GZ1633808023862378496.html",
                "pc_url": "https://gz.zu.ke.com/zufang/GZ1633808023862378496.html",
                "exp_type": "default",
                "coupon_template_id": [],
                "rentable_num": "",
                "available_cnt": 1,
                "rent_price": 6200,
                "strategy_id": "default",
                "fb_expo_id": "r16552768015109936218845173282",
                "click_position": 2,
                "is_youxuan": 0,
                "is_shengxinzu": 0,
                "op_status": "",
                "frame_bedroom_num": "2",
                "frame_hall_num": "1",
                "frame_bathroom_num": "1",
                "frame_kitchen_num": 1,
                "rent_price_trans": 0,
                "house_tags_str": "is_subway_house,has_elevator,water_elec_type,is_vr",
                "is_hot_house": false,
                "sign_time": "1970-01-02",
                "house_quality_type": null,
                "hot_desc": "",
                "rank_board": null,
                "is_preferential": 0,
                "discount_price": "6200",
                "discount_price_unit": "元/月",
                "preferential_label": {
                    "title": "新青年计划",
                    "color_bg": "#07CDC3",
                    "color_txt": "#FFFFFF"
                },
                "latest_price_change": {
                    "changePrice": 0,
                    "time": 0
                },
                "bangdan_qvalue_pv": 0,
                "app_plat_ctime": 1651834187,
                "shop_name": "",
                "app_house_title": "侨林苑",
                "available_rent_time": 1657814400000,
                "attention": 2,
                "bid_version": "",
                "rank_score": "-1",
                "operation_score": "0",
                "is_sharegroup": 0,
                "is_vip": 0,
                "vip_decrease_price": "",
                "one_price_ab_group": "",
                "ab_group": "",
                "switch_type": "0",
                "query_type": null,
                "filter_type": null,
                "query_content": "",
                "housedel_bcode": "108403339416",
                "commerce_price": 0,
                "videoInfoList": [],
                "house_type": 1,
                "pic_desc": "",
                "operation_desc": "",
                "big_c_coupon_desc": "",
                "pic_jijin_list": [
                    {
                        "icon": "http://image1.ljcdn.com/rent-front-image/8d2841657ccd90fc7cf0ff3eb93a4b38.png",
                        "desc": "位于林和， 距3号线北延段-林和西站846m"
                    },
                    {
                        "icon": "http://image1.ljcdn.com/rent-front-image/583ccdfb88ff3fa5740a853d544a21ac.png",
                        "desc": "需提前预约"
                    },
                    {
                        "icon": "http://image1.ljcdn.com/rent-front-image/bbfb455176965f6d93b994c1a274b698.png",
                        "desc": "2022-07-15后可入住"
                    }
                ],
                "big_c_discount_price": null,
                "big_c_house_quality_desc": "",
                "big_c_recommend_type": "",
                "big_c_recommend_desc": "",
                "floor_level": 200500000001,
                "floor_total": 22,
                "is_vr": true
            },
            {
                "member_level": 0,
                "ad_desc": "",
                "ad_code": "0",
                "ad_type": 0,
                "position": -1,
                "rent_type": "200600000001",
                "city_id": 440100,
                "rent_area": "52.00",
                "house_attention_type": "",
                "house_code": "GZ1643509907967705088",
                "lianjia_house_code": "108403417946",
                "house_title": "整租·粤信广场 2室1厅",
                "resblock_id": "2111103316973",
                "hdic_resblock_name": "粤信广场",
                "resblock_name": "粤信广场",
                "bizcircle_id": "612100011",
                "hdic_bizcircle_name": "赤岗",
                "bizcircle_name": "赤岗",
                "district_id": "23008635",
                "district_name": "海珠",
                "hdic_district_name": "海珠",
                "match_desc": "",
                "color": "",
                "layout": "2室1厅1卫",
                "desc": "52.00㎡ | 西",
                "sub_desc": "海珠·赤岗 距8号线-赤岗站260m",
                "subway_distance": " 距8号线-赤岗站260m",
                "geolatitudelongitude": "23.099995975421365,113.33908489050478",
                "is_default_picture": 0,
                "list_picture": "https://ke-image.ljcdn.com/110000-inspection/pc1_yGX133sjS.jpg.280x210.jpg",
                "rent_price_listing": "4000",
                "rent_price_unit": "元/月",
                "house_tags": [
                    {
                        "color_bg": "EDF0F3",
                        "color_txt": "5373B2",
                        "key": "is_subway_house",
                        "name": "近地铁"
                    },
                    {
                        "color_bg": "EDF0F3",
                        "color_txt": "5373B2",
                        "key": "water_elec_type",
                        "name": "民水民电"
                    }
                ],
                "operation_tags": [],
                "house_status": "202300000001",
                "app_source": "200100000004",
                "app_source_type": "200201000000",
                "app_source_brand": "200306001852",
                "app_source_brand_name": "",
                "app_source_pkid": "108403417946",
                "frame_orientation": "西",
                "detail_scheme": "lianjiabeike://rentplat/house/detail/distribute?house_code=GZ1643509907967705088&ad_code=0&bid_version=",
                "distribution_type": "203500000001",
                "quality_icon": "",
                "is_quality": 0,
                "activity_phrase": {
                    "color_txt": "F6804D",
                    "txt": "07-15可入住"
                },
                "stress_content": null,
                "vr_icon": "https://image1.ljcdn.com/rent-front-image/68c2bcb27bad2faa3b5968a305431ca2.1521791109090_ed60db63-2265-448f-af81-3357e1e96de5.90x90.png",
                "shop_id": "0",
                "apartment_name": "",
                "c_type": 1,
                "divider_desc": "",
                "available_time_level": 1,
                "reason_id": null,
                "reason_value": null,
                "m_url": "https://m.ke.com/chuzu/gz/zufang/GZ1643509907967705088.html",
                "pc_url": "https://gz.zu.ke.com/zufang/GZ1643509907967705088.html",
                "exp_type": "default",
                "coupon_template_id": [],
                "rentable_num": "",
                "available_cnt": 1,
                "rent_price": 4000,
                "strategy_id": "default",
                "fb_expo_id": "r16552768015109936218845173283",
                "click_position": 3,
                "is_youxuan": 0,
                "is_shengxinzu": 0,
                "op_status": "",
                "frame_bedroom_num": "2",
                "frame_hall_num": "1",
                "frame_bathroom_num": "1",
                "frame_kitchen_num": 1,
                "rent_price_trans": 0,
                "house_tags_str": "is_subway_house,water_elec_type,is_vr",
                "is_hot_house": false,
                "sign_time": "1970-01-02",
                "house_quality_type": null,
                "hot_desc": "",
                "rank_board": null,
                "is_preferential": 0,
                "discount_price": "4000",
                "discount_price_unit": "元/月",
                "preferential_label": {
                    "title": "新青年计划",
                    "color_bg": "#07CDC3",
                    "color_txt": "#FFFFFF"
                },
                "latest_price_change": {
                    "changePrice": 0,
                    "time": 0
                },
                "bangdan_qvalue_pv": 0,
                "app_plat_ctime": 1654147296,
                "shop_name": "",
                "app_house_title": "粤信广场",
                "available_rent_time": 1657814400000,
                "attention": 2,
                "bid_version": "",
                "rank_score": "-1",
                "operation_score": "0",
                "is_sharegroup": 0,
                "is_vip": 0,
                "vip_decrease_price": "",
                "one_price_ab_group": "",
                "ab_group": "",
                "switch_type": "0",
                "query_type": null,
                "filter_type": null,
                "query_content": "",
                "housedel_bcode": "108403417946",
                "commerce_price": 0,
                "videoInfoList": [],
                "house_type": 1,
                "pic_desc": "",
                "operation_desc": "",
                "big_c_coupon_desc": "",
                "pic_jijin_list": [
                    {
                        "icon": "http://image1.ljcdn.com/rent-front-image/8d2841657ccd90fc7cf0ff3eb93a4b38.png",
                        "desc": "位于赤岗， 距8号线-赤岗站260m"
                    },
                    {
                        "icon": "http://image1.ljcdn.com/rent-front-image/583ccdfb88ff3fa5740a853d544a21ac.png",
                        "desc": "需提前预约"
                    },
                    {
                        "icon": "http://image1.ljcdn.com/rent-front-image/bbfb455176965f6d93b994c1a274b698.png",
                        "desc": "2022-07-15后可入住"
                    }
                ],
                "big_c_discount_price": null,
                "big_c_house_quality_desc": "",
                "big_c_recommend_type": "",
                "big_c_recommend_desc": "",
                "floor_level": 200500000002,
                "floor_total": 9,
                "is_vr": true
            }
        ],
        "rent_url": "https://gz.ke.com/zufang"
    }
}
```



### 4. 城市数据

说明 : 调用此接口 , 可获城市数据

**请求方法 :** GET 

**接口地址 :** `/city`

**必选参数 :** 无

**调用例子 :** `baseURL + /city`

**接口返回的数据格式：**

```json
[
    {
        "code": "130100",
        "name": "石家庄市",
        "province": "13",
        "city": "01"
    },
    {
        "code": "130200",
        "name": "唐山市",
        "province": "13",
        "city": "02"
    },
    {
        "code": "130300",
        "name": "秦皇岛市",
        "province": "13",
        "city": "03"
    },
    {
        "code": "130400",
        "name": "邯郸市",
        "province": "13",
        "city": "04"
    },
    {
        "code": "130500",
        "name": "邢台市",
        "province": "13",
        "city": "05"
    },
    {
        "code": "130600",
        "name": "保定市",
        "province": "13",
        "city": "06"
    },
    {
        "code": "130700",
        "name": "张家口市",
        "province": "13",
        "city": "07"
    },
    {
        "code": "130800",
        "name": "承德市",
        "province": "13",
        "city": "08"
    },
    {
        "code": "130900",
        "name": "沧州市",
        "province": "13",
        "city": "09"
    },
    {
        "code": "131000",
        "name": "廊坊市",
        "province": "13",
        "city": "10"
    },
    {
        "code": "131100",
        "name": "衡水市",
        "province": "13",
        "city": "11"
    },
    {
        "code": "140100",
        "name": "太原市",
        "province": "14",
        "city": "01"
    },
    {
        "code": "140200",
        "name": "大同市",
        "province": "14",
        "city": "02"
    },
    {
        "code": "140300",
        "name": "阳泉市",
        "province": "14",
        "city": "03"
    },
    {
        "code": "140400",
        "name": "长治市",
        "province": "14",
        "city": "04"
    },
    {
        "code": "140500",
        "name": "晋城市",
        "province": "14",
        "city": "05"
    },
    {
        "code": "140600",
        "name": "朔州市",
        "province": "14",
        "city": "06"
    },
    {
        "code": "140700",
        "name": "晋中市",
        "province": "14",
        "city": "07"
    },
    {
        "code": "140800",
        "name": "运城市",
        "province": "14",
        "city": "08"
    },
    {
        "code": "140900",
        "name": "忻州市",
        "province": "14",
        "city": "09"
    },
    {
        "code": "141000",
        "name": "临汾市",
        "province": "14",
        "city": "10"
    },
    {
        "code": "141100",
        "name": "吕梁市",
        "province": "14",
        "city": "11"
    },
    {
        "code": "150100",
        "name": "呼和浩特市",
        "province": "15",
        "city": "01"
    },
    {
        "code": "150200",
        "name": "包头市",
        "province": "15",
        "city": "02"
    },
    {
        "code": "150300",
        "name": "乌海市",
        "province": "15",
        "city": "03"
    },
    {
        "code": "150400",
        "name": "赤峰市",
        "province": "15",
        "city": "04"
    },
    {
        "code": "150500",
        "name": "通辽市",
        "province": "15",
        "city": "05"
    },
    {
        "code": "150600",
        "name": "鄂尔多斯市",
        "province": "15",
        "city": "06"
    },
    {
        "code": "150700",
        "name": "呼伦贝尔市",
        "province": "15",
        "city": "07"
    },
    {
        "code": "150800",
        "name": "巴彦淖尔市",
        "province": "15",
        "city": "08"
    },
    {
        "code": "150900",
        "name": "乌兰察布市",
        "province": "15",
        "city": "09"
    },
    {
        "code": "152200",
        "name": "兴安盟",
        "province": "15",
        "city": "22"
    },
    {
        "code": "152500",
        "name": "锡林郭勒盟",
        "province": "15",
        "city": "25"
    },
    {
        "code": "152900",
        "name": "阿拉善盟",
        "province": "15",
        "city": "29"
    },
    {
        "code": "210100",
        "name": "沈阳市",
        "province": "21",
        "city": "01"
    },
    {
        "code": "210200",
        "name": "大连市",
        "province": "21",
        "city": "02"
    },
    {
        "code": "210300",
        "name": "鞍山市",
        "province": "21",
        "city": "03"
    },
    {
        "code": "210400",
        "name": "抚顺市",
        "province": "21",
        "city": "04"
    },
    {
        "code": "210500",
        "name": "本溪市",
        "province": "21",
        "city": "05"
    },
    {
        "code": "210600",
        "name": "丹东市",
        "province": "21",
        "city": "06"
    },
    {
        "code": "210700",
        "name": "锦州市",
        "province": "21",
        "city": "07"
    },
    {
        "code": "210800",
        "name": "营口市",
        "province": "21",
        "city": "08"
    },
    {
        "code": "210900",
        "name": "阜新市",
        "province": "21",
        "city": "09"
    },
    {
        "code": "211000",
        "name": "辽阳市",
        "province": "21",
        "city": "10"
    },
    {
        "code": "211100",
        "name": "盘锦市",
        "province": "21",
        "city": "11"
    },
    {
        "code": "211200",
        "name": "铁岭市",
        "province": "21",
        "city": "12"
    },
    {
        "code": "211300",
        "name": "朝阳市",
        "province": "21",
        "city": "13"
    },
    {
        "code": "211400",
        "name": "葫芦岛市",
        "province": "21",
        "city": "14"
    },
    {
        "code": "220100",
        "name": "长春市",
        "province": "22",
        "city": "01"
    },
    {
        "code": "220200",
        "name": "吉林市",
        "province": "22",
        "city": "02"
    },
    {
        "code": "220300",
        "name": "四平市",
        "province": "22",
        "city": "03"
    },
    {
        "code": "220400",
        "name": "辽源市",
        "province": "22",
        "city": "04"
    },
    {
        "code": "220500",
        "name": "通化市",
        "province": "22",
        "city": "05"
    },
    {
        "code": "220600",
        "name": "白山市",
        "province": "22",
        "city": "06"
    },
    {
        "code": "220700",
        "name": "松原市",
        "province": "22",
        "city": "07"
    },
    {
        "code": "220800",
        "name": "白城市",
        "province": "22",
        "city": "08"
    },
    {
        "code": "222400",
        "name": "延边朝鲜族自治州",
        "province": "22",
        "city": "24"
    },
    {
        "code": "230100",
        "name": "哈尔滨市",
        "province": "23",
        "city": "01"
    },
    {
        "code": "230200",
        "name": "齐齐哈尔市",
        "province": "23",
        "city": "02"
    },
    {
        "code": "230300",
        "name": "鸡西市",
        "province": "23",
        "city": "03"
    },
    {
        "code": "230400",
        "name": "鹤岗市",
        "province": "23",
        "city": "04"
    },
    {
        "code": "230500",
        "name": "双鸭山市",
        "province": "23",
        "city": "05"
    },
    {
        "code": "230600",
        "name": "大庆市",
        "province": "23",
        "city": "06"
    },
    {
        "code": "230700",
        "name": "伊春市",
        "province": "23",
        "city": "07"
    },
    {
        "code": "230800",
        "name": "佳木斯市",
        "province": "23",
        "city": "08"
    },
    {
        "code": "230900",
        "name": "七台河市",
        "province": "23",
        "city": "09"
    },
    {
        "code": "231000",
        "name": "牡丹江市",
        "province": "23",
        "city": "10"
    },
    {
        "code": "231100",
        "name": "黑河市",
        "province": "23",
        "city": "11"
    },
    {
        "code": "231200",
        "name": "绥化市",
        "province": "23",
        "city": "12"
    },
    {
        "code": "232700",
        "name": "大兴安岭地区",
        "province": "23",
        "city": "27"
    },
    {
        "code": "320100",
        "name": "南京市",
        "province": "32",
        "city": "01"
    },
    {
        "code": "320200",
        "name": "无锡市",
        "province": "32",
        "city": "02"
    },
    {
        "code": "320300",
        "name": "徐州市",
        "province": "32",
        "city": "03"
    },
    {
        "code": "320400",
        "name": "常州市",
        "province": "32",
        "city": "04"
    },
    {
        "code": "320500",
        "name": "苏州市",
        "province": "32",
        "city": "05"
    },
    {
        "code": "320600",
        "name": "南通市",
        "province": "32",
        "city": "06"
    },
    {
        "code": "320700",
        "name": "连云港市",
        "province": "32",
        "city": "07"
    },
    {
        "code": "320800",
        "name": "淮安市",
        "province": "32",
        "city": "08"
    },
    {
        "code": "320900",
        "name": "盐城市",
        "province": "32",
        "city": "09"
    },
    {
        "code": "321000",
        "name": "扬州市",
        "province": "32",
        "city": "10"
    },
    {
        "code": "321100",
        "name": "镇江市",
        "province": "32",
        "city": "11"
    },
    {
        "code": "321200",
        "name": "泰州市",
        "province": "32",
        "city": "12"
    },
    {
        "code": "321300",
        "name": "宿迁市",
        "province": "32",
        "city": "13"
    },
    {
        "code": "330100",
        "name": "杭州市",
        "province": "33",
        "city": "01"
    },
    {
        "code": "330200",
        "name": "宁波市",
        "province": "33",
        "city": "02"
    },
    {
        "code": "330300",
        "name": "温州市",
        "province": "33",
        "city": "03"
    },
    {
        "code": "330400",
        "name": "嘉兴市",
        "province": "33",
        "city": "04"
    },
    {
        "code": "330500",
        "name": "湖州市",
        "province": "33",
        "city": "05"
    },
    {
        "code": "330600",
        "name": "绍兴市",
        "province": "33",
        "city": "06"
    },
    {
        "code": "330700",
        "name": "金华市",
        "province": "33",
        "city": "07"
    },
    {
        "code": "330800",
        "name": "衢州市",
        "province": "33",
        "city": "08"
    },
    {
        "code": "330900",
        "name": "舟山市",
        "province": "33",
        "city": "09"
    },
    {
        "code": "331000",
        "name": "台州市",
        "province": "33",
        "city": "10"
    },
    {
        "code": "331100",
        "name": "丽水市",
        "province": "33",
        "city": "11"
    },
    {
        "code": "340100",
        "name": "合肥市",
        "province": "34",
        "city": "01"
    },
    {
        "code": "340200",
        "name": "芜湖市",
        "province": "34",
        "city": "02"
    },
    {
        "code": "340300",
        "name": "蚌埠市",
        "province": "34",
        "city": "03"
    },
    {
        "code": "340400",
        "name": "淮南市",
        "province": "34",
        "city": "04"
    },
    {
        "code": "340500",
        "name": "马鞍山市",
        "province": "34",
        "city": "05"
    },
    {
        "code": "340600",
        "name": "淮北市",
        "province": "34",
        "city": "06"
    },
    {
        "code": "340700",
        "name": "铜陵市",
        "province": "34",
        "city": "07"
    },
    {
        "code": "340800",
        "name": "安庆市",
        "province": "34",
        "city": "08"
    },
    {
        "code": "341000",
        "name": "黄山市",
        "province": "34",
        "city": "10"
    },
    {
        "code": "341100",
        "name": "滁州市",
        "province": "34",
        "city": "11"
    },
    {
        "code": "341200",
        "name": "阜阳市",
        "province": "34",
        "city": "12"
    },
    {
        "code": "341300",
        "name": "宿州市",
        "province": "34",
        "city": "13"
    },
    {
        "code": "341500",
        "name": "六安市",
        "province": "34",
        "city": "15"
    },
    {
        "code": "341600",
        "name": "亳州市",
        "province": "34",
        "city": "16"
    },
    {
        "code": "341700",
        "name": "池州市",
        "province": "34",
        "city": "17"
    },
    {
        "code": "341800",
        "name": "宣城市",
        "province": "34",
        "city": "18"
    },
    {
        "code": "350100",
        "name": "福州市",
        "province": "35",
        "city": "01"
    },
    {
        "code": "350200",
        "name": "厦门市",
        "province": "35",
        "city": "02"
    },
    {
        "code": "350300",
        "name": "莆田市",
        "province": "35",
        "city": "03"
    },
    {
        "code": "350400",
        "name": "三明市",
        "province": "35",
        "city": "04"
    },
    {
        "code": "350500",
        "name": "泉州市",
        "province": "35",
        "city": "05"
    },
    {
        "code": "350600",
        "name": "漳州市",
        "province": "35",
        "city": "06"
    },
    {
        "code": "350700",
        "name": "南平市",
        "province": "35",
        "city": "07"
    },
    {
        "code": "350800",
        "name": "龙岩市",
        "province": "35",
        "city": "08"
    },
    {
        "code": "350900",
        "name": "宁德市",
        "province": "35",
        "city": "09"
    },
    {
        "code": "360100",
        "name": "南昌市",
        "province": "36",
        "city": "01"
    },
    {
        "code": "360200",
        "name": "景德镇市",
        "province": "36",
        "city": "02"
    },
    {
        "code": "360300",
        "name": "萍乡市",
        "province": "36",
        "city": "03"
    },
    {
        "code": "360400",
        "name": "九江市",
        "province": "36",
        "city": "04"
    },
    {
        "code": "360500",
        "name": "新余市",
        "province": "36",
        "city": "05"
    },
    {
        "code": "360600",
        "name": "鹰潭市",
        "province": "36",
        "city": "06"
    },
    {
        "code": "360700",
        "name": "赣州市",
        "province": "36",
        "city": "07"
    },
    {
        "code": "360800",
        "name": "吉安市",
        "province": "36",
        "city": "08"
    },
    {
        "code": "360900",
        "name": "宜春市",
        "province": "36",
        "city": "09"
    },
    {
        "code": "361000",
        "name": "抚州市",
        "province": "36",
        "city": "10"
    },
    {
        "code": "361100",
        "name": "上饶市",
        "province": "36",
        "city": "11"
    },
    {
        "code": "370100",
        "name": "济南市",
        "province": "37",
        "city": "01"
    },
    {
        "code": "370200",
        "name": "青岛市",
        "province": "37",
        "city": "02"
    },
    {
        "code": "370300",
        "name": "淄博市",
        "province": "37",
        "city": "03"
    },
    {
        "code": "370400",
        "name": "枣庄市",
        "province": "37",
        "city": "04"
    },
    {
        "code": "370500",
        "name": "东营市",
        "province": "37",
        "city": "05"
    },
    {
        "code": "370600",
        "name": "烟台市",
        "province": "37",
        "city": "06"
    },
    {
        "code": "370700",
        "name": "潍坊市",
        "province": "37",
        "city": "07"
    },
    {
        "code": "370800",
        "name": "济宁市",
        "province": "37",
        "city": "08"
    },
    {
        "code": "370900",
        "name": "泰安市",
        "province": "37",
        "city": "09"
    },
    {
        "code": "371000",
        "name": "威海市",
        "province": "37",
        "city": "10"
    },
    {
        "code": "371100",
        "name": "日照市",
        "province": "37",
        "city": "11"
    },
    {
        "code": "371300",
        "name": "临沂市",
        "province": "37",
        "city": "13"
    },
    {
        "code": "371400",
        "name": "德州市",
        "province": "37",
        "city": "14"
    },
    {
        "code": "371500",
        "name": "聊城市",
        "province": "37",
        "city": "15"
    },
    {
        "code": "371600",
        "name": "滨州市",
        "province": "37",
        "city": "16"
    },
    {
        "code": "371700",
        "name": "菏泽市",
        "province": "37",
        "city": "17"
    },
    {
        "code": "410100",
        "name": "郑州市",
        "province": "41",
        "city": "01"
    },
    {
        "code": "410200",
        "name": "开封市",
        "province": "41",
        "city": "02"
    },
    {
        "code": "410300",
        "name": "洛阳市",
        "province": "41",
        "city": "03"
    },
    {
        "code": "410400",
        "name": "平顶山市",
        "province": "41",
        "city": "04"
    },
    {
        "code": "410500",
        "name": "安阳市",
        "province": "41",
        "city": "05"
    },
    {
        "code": "410600",
        "name": "鹤壁市",
        "province": "41",
        "city": "06"
    },
    {
        "code": "410700",
        "name": "新乡市",
        "province": "41",
        "city": "07"
    },
    {
        "code": "410800",
        "name": "焦作市",
        "province": "41",
        "city": "08"
    },
    {
        "code": "410900",
        "name": "濮阳市",
        "province": "41",
        "city": "09"
    },
    {
        "code": "411000",
        "name": "许昌市",
        "province": "41",
        "city": "10"
    },
    {
        "code": "411100",
        "name": "漯河市",
        "province": "41",
        "city": "11"
    },
    {
        "code": "411200",
        "name": "三门峡市",
        "province": "41",
        "city": "12"
    },
    {
        "code": "411300",
        "name": "南阳市",
        "province": "41",
        "city": "13"
    },
    {
        "code": "411400",
        "name": "商丘市",
        "province": "41",
        "city": "14"
    },
    {
        "code": "411500",
        "name": "信阳市",
        "province": "41",
        "city": "15"
    },
    {
        "code": "411600",
        "name": "周口市",
        "province": "41",
        "city": "16"
    },
    {
        "code": "411700",
        "name": "驻马店市",
        "province": "41",
        "city": "17"
    },
    {
        "code": "420100",
        "name": "武汉市",
        "province": "42",
        "city": "01"
    },
    {
        "code": "420200",
        "name": "黄石市",
        "province": "42",
        "city": "02"
    },
    {
        "code": "420300",
        "name": "十堰市",
        "province": "42",
        "city": "03"
    },
    {
        "code": "420500",
        "name": "宜昌市",
        "province": "42",
        "city": "05"
    },
    {
        "code": "420600",
        "name": "襄阳市",
        "province": "42",
        "city": "06"
    },
    {
        "code": "420700",
        "name": "鄂州市",
        "province": "42",
        "city": "07"
    },
    {
        "code": "420800",
        "name": "荆门市",
        "province": "42",
        "city": "08"
    },
    {
        "code": "420900",
        "name": "孝感市",
        "province": "42",
        "city": "09"
    },
    {
        "code": "421000",
        "name": "荆州市",
        "province": "42",
        "city": "10"
    },
    {
        "code": "421100",
        "name": "黄冈市",
        "province": "42",
        "city": "11"
    },
    {
        "code": "421200",
        "name": "咸宁市",
        "province": "42",
        "city": "12"
    },
    {
        "code": "421300",
        "name": "随州市",
        "province": "42",
        "city": "13"
    },
    {
        "code": "422800",
        "name": "恩施土家族苗族自治州",
        "province": "42",
        "city": "28"
    },
    {
        "code": "430100",
        "name": "长沙市",
        "province": "43",
        "city": "01"
    },
    {
        "code": "430200",
        "name": "株洲市",
        "province": "43",
        "city": "02"
    },
    {
        "code": "430300",
        "name": "湘潭市",
        "province": "43",
        "city": "03"
    },
    {
        "code": "430400",
        "name": "衡阳市",
        "province": "43",
        "city": "04"
    },
    {
        "code": "430500",
        "name": "邵阳市",
        "province": "43",
        "city": "05"
    },
    {
        "code": "430600",
        "name": "岳阳市",
        "province": "43",
        "city": "06"
    },
    {
        "code": "430700",
        "name": "常德市",
        "province": "43",
        "city": "07"
    },
    {
        "code": "430800",
        "name": "张家界市",
        "province": "43",
        "city": "08"
    },
    {
        "code": "430900",
        "name": "益阳市",
        "province": "43",
        "city": "09"
    },
    {
        "code": "431000",
        "name": "郴州市",
        "province": "43",
        "city": "10"
    },
    {
        "code": "431100",
        "name": "永州市",
        "province": "43",
        "city": "11"
    },
    {
        "code": "431200",
        "name": "怀化市",
        "province": "43",
        "city": "12"
    },
    {
        "code": "431300",
        "name": "娄底市",
        "province": "43",
        "city": "13"
    },
    {
        "code": "433100",
        "name": "湘西土家族苗族自治州",
        "province": "43",
        "city": "31"
    },
    {
        "code": "440100",
        "name": "广州市",
        "province": "44",
        "city": "01"
    },
    {
        "code": "440200",
        "name": "韶关市",
        "province": "44",
        "city": "02"
    },
    {
        "code": "440300",
        "name": "深圳市",
        "province": "44",
        "city": "03"
    },
    {
        "code": "440400",
        "name": "珠海市",
        "province": "44",
        "city": "04"
    },
    {
        "code": "440500",
        "name": "汕头市",
        "province": "44",
        "city": "05"
    },
    {
        "code": "440600",
        "name": "佛山市",
        "province": "44",
        "city": "06"
    },
    {
        "code": "440700",
        "name": "江门市",
        "province": "44",
        "city": "07"
    },
    {
        "code": "440800",
        "name": "湛江市",
        "province": "44",
        "city": "08"
    },
    {
        "code": "440900",
        "name": "茂名市",
        "province": "44",
        "city": "09"
    },
    {
        "code": "441200",
        "name": "肇庆市",
        "province": "44",
        "city": "12"
    },
    {
        "code": "441300",
        "name": "惠州市",
        "province": "44",
        "city": "13"
    },
    {
        "code": "441400",
        "name": "梅州市",
        "province": "44",
        "city": "14"
    },
    {
        "code": "441500",
        "name": "汕尾市",
        "province": "44",
        "city": "15"
    },
    {
        "code": "441600",
        "name": "河源市",
        "province": "44",
        "city": "16"
    },
    {
        "code": "441700",
        "name": "阳江市",
        "province": "44",
        "city": "17"
    },
    {
        "code": "441800",
        "name": "清远市",
        "province": "44",
        "city": "18"
    },
    {
        "code": "441900",
        "name": "东莞市",
        "province": "44",
        "city": "19"
    },
    {
        "code": "442000",
        "name": "中山市",
        "province": "44",
        "city": "20"
    },
    {
        "code": "445100",
        "name": "潮州市",
        "province": "44",
        "city": "51"
    },
    {
        "code": "445200",
        "name": "揭阳市",
        "province": "44",
        "city": "52"
    },
    {
        "code": "445300",
        "name": "云浮市",
        "province": "44",
        "city": "53"
    },
    {
        "code": "450100",
        "name": "南宁市",
        "province": "45",
        "city": "01"
    },
    {
        "code": "450200",
        "name": "柳州市",
        "province": "45",
        "city": "02"
    },
    {
        "code": "450300",
        "name": "桂林市",
        "province": "45",
        "city": "03"
    },
    {
        "code": "450400",
        "name": "梧州市",
        "province": "45",
        "city": "04"
    },
    {
        "code": "450500",
        "name": "北海市",
        "province": "45",
        "city": "05"
    },
    {
        "code": "450600",
        "name": "防城港市",
        "province": "45",
        "city": "06"
    },
    {
        "code": "450700",
        "name": "钦州市",
        "province": "45",
        "city": "07"
    },
    {
        "code": "450800",
        "name": "贵港市",
        "province": "45",
        "city": "08"
    },
    {
        "code": "450900",
        "name": "玉林市",
        "province": "45",
        "city": "09"
    },
    {
        "code": "451000",
        "name": "百色市",
        "province": "45",
        "city": "10"
    },
    {
        "code": "451100",
        "name": "贺州市",
        "province": "45",
        "city": "11"
    },
    {
        "code": "451200",
        "name": "河池市",
        "province": "45",
        "city": "12"
    },
    {
        "code": "451300",
        "name": "来宾市",
        "province": "45",
        "city": "13"
    },
    {
        "code": "451400",
        "name": "崇左市",
        "province": "45",
        "city": "14"
    },
    {
        "code": "460100",
        "name": "海口市",
        "province": "46",
        "city": "01"
    },
    {
        "code": "460200",
        "name": "三亚市",
        "province": "46",
        "city": "02"
    },
    {
        "code": "460300",
        "name": "三沙市",
        "province": "46",
        "city": "03"
    },
    {
        "code": "460400",
        "name": "儋州市",
        "province": "46",
        "city": "04"
    },
    {
        "code": "510100",
        "name": "成都市",
        "province": "51",
        "city": "01"
    },
    {
        "code": "510300",
        "name": "自贡市",
        "province": "51",
        "city": "03"
    },
    {
        "code": "510400",
        "name": "攀枝花市",
        "province": "51",
        "city": "04"
    },
    {
        "code": "510500",
        "name": "泸州市",
        "province": "51",
        "city": "05"
    },
    {
        "code": "510600",
        "name": "德阳市",
        "province": "51",
        "city": "06"
    },
    {
        "code": "510700",
        "name": "绵阳市",
        "province": "51",
        "city": "07"
    },
    {
        "code": "510800",
        "name": "广元市",
        "province": "51",
        "city": "08"
    },
    {
        "code": "510900",
        "name": "遂宁市",
        "province": "51",
        "city": "09"
    },
    {
        "code": "511000",
        "name": "内江市",
        "province": "51",
        "city": "10"
    },
    {
        "code": "511100",
        "name": "乐山市",
        "province": "51",
        "city": "11"
    },
    {
        "code": "511300",
        "name": "南充市",
        "province": "51",
        "city": "13"
    },
    {
        "code": "511400",
        "name": "眉山市",
        "province": "51",
        "city": "14"
    },
    {
        "code": "511500",
        "name": "宜宾市",
        "province": "51",
        "city": "15"
    },
    {
        "code": "511600",
        "name": "广安市",
        "province": "51",
        "city": "16"
    },
    {
        "code": "511700",
        "name": "达州市",
        "province": "51",
        "city": "17"
    },
    {
        "code": "511800",
        "name": "雅安市",
        "province": "51",
        "city": "18"
    },
    {
        "code": "511900",
        "name": "巴中市",
        "province": "51",
        "city": "19"
    },
    {
        "code": "512000",
        "name": "资阳市",
        "province": "51",
        "city": "20"
    },
    {
        "code": "513200",
        "name": "阿坝藏族羌族自治州",
        "province": "51",
        "city": "32"
    },
    {
        "code": "513300",
        "name": "甘孜藏族自治州",
        "province": "51",
        "city": "33"
    },
    {
        "code": "513400",
        "name": "凉山彝族自治州",
        "province": "51",
        "city": "34"
    },
    {
        "code": "520100",
        "name": "贵阳市",
        "province": "52",
        "city": "01"
    },
    {
        "code": "520200",
        "name": "六盘水市",
        "province": "52",
        "city": "02"
    },
    {
        "code": "520300",
        "name": "遵义市",
        "province": "52",
        "city": "03"
    },
    {
        "code": "520400",
        "name": "安顺市",
        "province": "52",
        "city": "04"
    },
    {
        "code": "520500",
        "name": "毕节市",
        "province": "52",
        "city": "05"
    },
    {
        "code": "520600",
        "name": "铜仁市",
        "province": "52",
        "city": "06"
    },
    {
        "code": "522300",
        "name": "黔西南布依族苗族自治州",
        "province": "52",
        "city": "23"
    },
    {
        "code": "522600",
        "name": "黔东南苗族侗族自治州",
        "province": "52",
        "city": "26"
    },
    {
        "code": "522700",
        "name": "黔南布依族苗族自治州",
        "province": "52",
        "city": "27"
    },
    {
        "code": "530100",
        "name": "昆明市",
        "province": "53",
        "city": "01"
    },
    {
        "code": "530300",
        "name": "曲靖市",
        "province": "53",
        "city": "03"
    },
    {
        "code": "530400",
        "name": "玉溪市",
        "province": "53",
        "city": "04"
    },
    {
        "code": "530500",
        "name": "保山市",
        "province": "53",
        "city": "05"
    },
    {
        "code": "530600",
        "name": "昭通市",
        "province": "53",
        "city": "06"
    },
    {
        "code": "530700",
        "name": "丽江市",
        "province": "53",
        "city": "07"
    },
    {
        "code": "530800",
        "name": "普洱市",
        "province": "53",
        "city": "08"
    },
    {
        "code": "530900",
        "name": "临沧市",
        "province": "53",
        "city": "09"
    },
    {
        "code": "532300",
        "name": "楚雄彝族自治州",
        "province": "53",
        "city": "23"
    },
    {
        "code": "532500",
        "name": "红河哈尼族彝族自治州",
        "province": "53",
        "city": "25"
    },
    {
        "code": "532600",
        "name": "文山壮族苗族自治州",
        "province": "53",
        "city": "26"
    },
    {
        "code": "532800",
        "name": "西双版纳傣族自治州",
        "province": "53",
        "city": "28"
    },
    {
        "code": "532900",
        "name": "大理白族自治州",
        "province": "53",
        "city": "29"
    },
    {
        "code": "533100",
        "name": "德宏傣族景颇族自治州",
        "province": "53",
        "city": "31"
    },
    {
        "code": "533300",
        "name": "怒江傈僳族自治州",
        "province": "53",
        "city": "33"
    },
    {
        "code": "533400",
        "name": "迪庆藏族自治州",
        "province": "53",
        "city": "34"
    },
    {
        "code": "540100",
        "name": "拉萨市",
        "province": "54",
        "city": "01"
    },
    {
        "code": "540200",
        "name": "日喀则市",
        "province": "54",
        "city": "02"
    },
    {
        "code": "540300",
        "name": "昌都市",
        "province": "54",
        "city": "03"
    },
    {
        "code": "540400",
        "name": "林芝市",
        "province": "54",
        "city": "04"
    },
    {
        "code": "540500",
        "name": "山南市",
        "province": "54",
        "city": "05"
    },
    {
        "code": "540600",
        "name": "那曲市",
        "province": "54",
        "city": "06"
    },
    {
        "code": "542500",
        "name": "阿里地区",
        "province": "54",
        "city": "25"
    },
    {
        "code": "610100",
        "name": "西安市",
        "province": "61",
        "city": "01"
    },
    {
        "code": "610200",
        "name": "铜川市",
        "province": "61",
        "city": "02"
    },
    {
        "code": "610300",
        "name": "宝鸡市",
        "province": "61",
        "city": "03"
    },
    {
        "code": "610400",
        "name": "咸阳市",
        "province": "61",
        "city": "04"
    },
    {
        "code": "610500",
        "name": "渭南市",
        "province": "61",
        "city": "05"
    },
    {
        "code": "610600",
        "name": "延安市",
        "province": "61",
        "city": "06"
    },
    {
        "code": "610700",
        "name": "汉中市",
        "province": "61",
        "city": "07"
    },
    {
        "code": "610800",
        "name": "榆林市",
        "province": "61",
        "city": "08"
    },
    {
        "code": "610900",
        "name": "安康市",
        "province": "61",
        "city": "09"
    },
    {
        "code": "611000",
        "name": "商洛市",
        "province": "61",
        "city": "10"
    },
    {
        "code": "620100",
        "name": "兰州市",
        "province": "62",
        "city": "01"
    },
    {
        "code": "620200",
        "name": "嘉峪关市",
        "province": "62",
        "city": "02"
    },
    {
        "code": "620300",
        "name": "金昌市",
        "province": "62",
        "city": "03"
    },
    {
        "code": "620400",
        "name": "白银市",
        "province": "62",
        "city": "04"
    },
    {
        "code": "620500",
        "name": "天水市",
        "province": "62",
        "city": "05"
    },
    {
        "code": "620600",
        "name": "武威市",
        "province": "62",
        "city": "06"
    },
    {
        "code": "620700",
        "name": "张掖市",
        "province": "62",
        "city": "07"
    },
    {
        "code": "620800",
        "name": "平凉市",
        "province": "62",
        "city": "08"
    },
    {
        "code": "620900",
        "name": "酒泉市",
        "province": "62",
        "city": "09"
    },
    {
        "code": "621000",
        "name": "庆阳市",
        "province": "62",
        "city": "10"
    },
    {
        "code": "621100",
        "name": "定西市",
        "province": "62",
        "city": "11"
    },
    {
        "code": "621200",
        "name": "陇南市",
        "province": "62",
        "city": "12"
    },
    {
        "code": "622900",
        "name": "临夏回族自治州",
        "province": "62",
        "city": "29"
    },
    {
        "code": "623000",
        "name": "甘南藏族自治州",
        "province": "62",
        "city": "30"
    },
    {
        "code": "630100",
        "name": "西宁市",
        "province": "63",
        "city": "01"
    },
    {
        "code": "630200",
        "name": "海东市",
        "province": "63",
        "city": "02"
    },
    {
        "code": "632200",
        "name": "海北藏族自治州",
        "province": "63",
        "city": "22"
    },
    {
        "code": "632300",
        "name": "黄南藏族自治州",
        "province": "63",
        "city": "23"
    },
    {
        "code": "632500",
        "name": "海南藏族自治州",
        "province": "63",
        "city": "25"
    },
    {
        "code": "632600",
        "name": "果洛藏族自治州",
        "province": "63",
        "city": "26"
    },
    {
        "code": "632700",
        "name": "玉树藏族自治州",
        "province": "63",
        "city": "27"
    },
    {
        "code": "632800",
        "name": "海西蒙古族藏族自治州",
        "province": "63",
        "city": "28"
    },
    {
        "code": "640100",
        "name": "银川市",
        "province": "64",
        "city": "01"
    },
    {
        "code": "640200",
        "name": "石嘴山市",
        "province": "64",
        "city": "02"
    },
    {
        "code": "640300",
        "name": "吴忠市",
        "province": "64",
        "city": "03"
    },
    {
        "code": "640400",
        "name": "固原市",
        "province": "64",
        "city": "04"
    },
    {
        "code": "640500",
        "name": "中卫市",
        "province": "64",
        "city": "05"
    },
    {
        "code": "650100",
        "name": "乌鲁木齐市",
        "province": "65",
        "city": "01"
    },
    {
        "code": "650200",
        "name": "克拉玛依市",
        "province": "65",
        "city": "02"
    },
    {
        "code": "650400",
        "name": "吐鲁番市",
        "province": "65",
        "city": "04"
    },
    {
        "code": "650500",
        "name": "哈密市",
        "province": "65",
        "city": "05"
    },
    {
        "code": "652300",
        "name": "昌吉回族自治州",
        "province": "65",
        "city": "23"
    },
    {
        "code": "652700",
        "name": "博尔塔拉蒙古自治州",
        "province": "65",
        "city": "27"
    },
    {
        "code": "652800",
        "name": "巴音郭楞蒙古自治州",
        "province": "65",
        "city": "28"
    },
    {
        "code": "652900",
        "name": "阿克苏地区",
        "province": "65",
        "city": "29"
    },
    {
        "code": "653000",
        "name": "克孜勒苏柯尔克孜自治州",
        "province": "65",
        "city": "30"
    },
    {
        "code": "653100",
        "name": "喀什地区",
        "province": "65",
        "city": "31"
    },
    {
        "code": "653200",
        "name": "和田地区",
        "province": "65",
        "city": "32"
    },
    {
        "code": "654000",
        "name": "伊犁哈萨克自治州",
        "province": "65",
        "city": "40"
    },
    {
        "code": "654200",
        "name": "塔城地区",
        "province": "65",
        "city": "42"
    },
    {
        "code": "654300",
        "name": "阿勒泰地区",
        "province": "65",
        "city": "43"
    },
    {
        "code": "429000",
        "name": "湖北省-自治区直辖县级行政区划",
        "province": "42",
        "city": "90"
    },
    {
        "code": "469000",
        "name": "海南省-自治区直辖县级行政区划",
        "province": "46",
        "city": "90"
    },
    {
        "code": "659000",
        "name": "新疆维吾尔自治区-自治区直辖县级行政区划",
        "province": "65",
        "city": "90"
    },
    {
        "code": "419000",
        "name": "河南省-省直辖县级行政区划",
        "province": "41",
        "city": "90"
    }
]
```



