# 客户日志流水接口示例
>维护人员：Cai
>创建时间：2020-3-22

## 接口简介
实时查询客户各种操作(例如登录，拓客等)的流水日志

## 接口详情
请求地址
/api/getdata

## 请求类型
POST

## 请求参数

| 参数名    | 类型   | 必填 | 描述         | 参考值               |
| --------- | ------ | ---- | ------------ | -------------------- |
| starttime | date   | 是   | 起始时间     | Dec 12 2020 13:55:40 |
| endtime   | data   | 是   | 结束时间     | Dec 12 2020 13:58:40 |
| interval  | string | 是   | 时间间隔单位 | second,hour,day      |
| source    | string | 是   | 请求数据源   | sensor1,temperature  |

返回正确JSON示例
```json
{
    "state": {
        "code": 200,
        "msg": "ok"
    },
    "data": {
        "starttime": "Dec 12 2020 13:55:40",
        "endtime": "Dec 12 2020 13:58:40",
        "interval": "minute",
        "source": "sensor1",
        "msg":[
            {
                "time":"Dec 12 2020 13:55:40",
                "value":1000
            },
            {
                "time":"Dec 12 2020 13:55:40",
                "value":1000
            },
            {
                "time":"Dec 12 2020 13:55:40",
                "value":1000
            },
            {
                "time":"Dec 12 2020 13:55:40",
                "value":1000
            },
            {
                "time":"Dec 12 2020 13:55:40",
                "value":1000
            },
            ]
    }
}
```
返回错误JSON示例
```json
{
    "state": {
        "code": 500
        "msg": "服务器未知报错"
    }
}
```
