# 路由器

## 红米AC2100

### 进入SSH

[参考链接](https://zhuanlan.zhihu.com/p/260531160)

1、登录小米路由管理页面，地址栏 url 里面找到 stok 后面字符串替换掉下面 url 里面的 f7d04923ccb9caa43b44f56c3c42330e

2、复制替换好的 url 到地址栏中然后回车确认

```bash
# 获取ssh
http://192.168.31.1/cgi-bin/luci/;stok=f7d04923ccb9caa43b44f56c3c42330e/api/misystem/set_config_iotdev?bssid=Xiaomi&user_id=longdike&ssid=-h%3B%20nvram%20set%20ssh_en%3D1%3B%20nvram%20commit%3B%20sed%20-i%20's%2Fchannel%3D.*%2Fchannel%3D%5C%22debug%5C%22%2Fg'%20%2Fetc%2Finit.d%2Fdropbear%3B%20%2Fetc%2Finit.d%2Fdropbear%20start%3B

# 修改root用户密码
http://192.168.31.1/cgi-bin/luci/;stok=f7d04923ccb9caa43b44f56c3c42330e/api/misystem/set_config_iotdev?bssid=Xiaomi&user_id=longdike&ssid=-h%3B%20echo%20-e%20'admin%5Cnadmin'%20%7C%20passwd%20root%3B
# 需要修改为其他密码自行替换 url 中 admin 部分
```

```bash
# 如果需要关闭ssh 
http://192.168.31.1/cgi-bin/luci/;stok=<STOK>/api/misystem/set_config_iotdev?bssid=Xiaomi&user_id=longdike&ssid=-h%3B%20nvram%20set%20ssh_en%3D0%3B%20nvram%20commit%3B%20sed%20-i%20's%2Fchannel%3D.*%2Fchannel%3D%5C%22debug%5C%22%2Fg'%20%2Fetc%2Finit.d%2Fdropbear%3B%20%2Fetc%2Finit.d%2Fdropbear%20start%3B
```