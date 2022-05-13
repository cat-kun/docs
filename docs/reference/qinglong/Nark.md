# Nark部署
## Nark短信登录

- [x] 短信登录
- [x] 只支持2.11以下

### 云服务器部署

<CodeGroup>
  <CodeGroupItem title="AMD" active>

```bash
# 新建Ark目录
mkdir /root/Ark 

cd /root/Ark && mkdir -p Config

# 将授权文件放入/root/Ark/Config中
# 将`Config.json`文件放入/root/Ark/Config

# 建立 日志文件夹
cd /root/Ark && mkdir -p logfile 

cd /root/Ark

# 准备拉取启动容器 `一键docker（不需要docker pull）`
sudo docker run   --name nark -p 5701:80  -d  -v  "$(pwd)"/Config:/app/Config \
-v  "$(pwd)"/logfile:/app/logfile  \
-it --privileged=true  nolanhzy/nark:latest
```

  </CodeGroupItem>

  <CodeGroupItem title="ARM">

  ```bash
# 
mkdir /root/Ark 

cd /root/Ark && mkdir -p Config

# 将授权文件放入/root/Ark/Config中
# 将 `Config.json` 文件放入/root/Ark/Config

# 建立 日志文件夹
cd /root/Ark && mkdir -p logfile 

cd /root/Ark

# 准备拉取启动容器 `一键docker（不需要docker pull）`
sudo docker run   --name nark -p 5701:80  -d  -v  "$(pwd)"/Config:/app/Config \
-v  "$(pwd)"/logfile:/app/logfile  \
-it --privileged=true  nolanhzy/nark:arm
```

  </CodeGroupItem>
  <CodeGroupItem title="Windows电脑">

```bash
# 比如目录是放在D盘下
docker run --name nark -p 5701:80 -d -v D:/Ark/Config:/app/Config -v D:/Ark/logfile:/app/logfile -it --privileged=true nolanhzy/nark:latest

# 如果青龙也是搭建在本机（windows）下，那么

# 获取所有容器名称及其IP地址
docker inspect -f '{{.Name}} - {{.NetworkSettings.IPAddress }}' $(docker ps -aq)
```

  </CodeGroupItem>
  <CodeGroupItem title="Config.json">
  
```bash
{
  ///浏览器最多几个网页
  "MaxTab": "4",
  //网站标题
  "Title": "Nark",
  //网站公告
  "Announcement": "为提高账户的安全性，请关闭免密支付。",
  ///开启打印等待日志卡短信验证登陆 可开启 拿到日志群里回复 默认不要填写
  "Debug": "",
  ///XDD PLUS Url  http://IP地址:端口/api/login/smslogin
  "XDDurl": "",
  ///xddToken
  "XDDToken": "",
  ///登陆预警 0 0 12 * * ?  每天中午十二点
  "ExpirationCron": "0 0 12 * * ?",
  ///个人资产 0 0 10,20 * * ?  早十点晚上八点
  "BeanCron": "0 0 10,20 * * ?",
  ///=======================================V4配置区域==========================================
  ///v4 post CK  http://ip:端口/updateCookie
  "V4url": "",
  ///=======================================diy配置区域==========================================
  ///diy post CK
  "CallBackUrl": "",
  // ======================================= WxPusher 通知设置区域 ===========================================
  // 此处填你申请的 appToken. 官方文档：https://wxpusher.zjiecode.com/docs
  // WP_APP_TOKEN 可在管理台查看: https://wxpusher.zjiecode.com/admin/main/app/appToken
  // MainWP_UID 填你自己uid
  ///这里的通知只用于用户登陆 删除 是给你的通知
  "WP_APP_TOKEN": "",
  "MainWP_UID": "",
  // ======================================= PUSH 通知设置区域 ===========================================
  ///Push Plus官方网站：http": //www.pushplus.plus  只有青龙模式有用
  ///下方填写您的Token，微信扫码登录后一对一推送或一对多推送下面的token，只填" "PUSH_PLUS_TOKEN",
  "PUSH_PLUS_TOKEN": "",
  //下方填写您的一对多推送的 "群组编码" ，（一对多推送下面->您的群组(如无则新建)->群组编码）
  "PUSH_PLUS_USER": "",
  ///青龙配置  注意对接XDD 对接芝士 设置为"Config":[]
  "Config": [
    {
      // 不要重复的数字
      "QLkey": 1,
      // 服务器昵称
      "QLName": "腾讯云",
      // 青龙访问地址
      "QLurl": "",
      // 青龙的应用ID
      "QL_CLIENTID": "",
      // 青龙的应用SECRET
      "QL_SECRET": "",
      // CK最大容量
      "QL_CAPACITY": 40,
      // WSCK最大容量
      "QL_WSCK": 40,
      // WXPUSHER的应用token，不推送留空
      "WP_APP_TOKEN": ""
    }
  ]
}
```

  </CodeGroupItem>
</CodeGroup>

::: tip 

配置文件下载地址:point_right:：[Config.json](https://t.me/c/1648382151/594)

授权文件请到[tg群](https://t.me/NolanNarkNotice)获取，不定时开放

~~nark与授权中心交互必须知道ip。启动的时候会注册ip，如果你挂了代理，记得给n.nnnolanark.xyz设置直连 更换ip重启nark即可:point_down:~~

```bash
docker exec -it nark echo "104.21.62.86 n.nnnolanark.xyz">>/etc/hosts
```

:::



::: details 点击查看配置目录结构

```
├─ Ark
│  ├─ Config
│  │  └─ Config.json
│  │  └─ Nark.lic
│  └─ logfile
│

```

:::

[tg群大佬演示视频](https://t.me/c/1648382151/6674)

### 更新

```bash
docker run --rm     -v /var/run/docker.sock:/var/run/docker.sock     containrrr/watchtower -c     --run-once     nark
```

::: warning
修改了`Config.json`或者更新了容器，都需要重启docker

```bash
docker restart nark
```

:::

::: tip
对接[wxpusher](https://wxpusher.zjiecode.com/)的，需要在应用的[事件回调地址](https://wxpusher.zjiecode.com/admin/main/app/appInfo)配置：`nark容器ip:端口号/api/wxpusher`
:::

### 群晖 
* [docker仓库](https://hub.docker.com/r/nolanhzy/nark)
* [原文链接](https://t.me/update_help/245)

```bash
# 1、安装 Git Server 套件并部署，自行百度，不详述；

# 2、定位到共享文件夹 docker 下。查看其详情，获取绝对路径，比如
/volume1/docker；

# 3、拉取源码
git clone https://github.com/NNNNolan/Ark.git /volume1/docker/Ark

# 4、创建配置文件夹并定位到该文件夹；
mkdir -p  Config && cd Config

# 5、下载原始配置模板配置。[点击此处](https://t.me/update_help/246)前往文件及教程；

# 6、定位到nuolanjdc文件夹，创建 chromium 驱动文件夹
cd /volume1/docker/Ark && mkdir -p  .local-chromium/Linux-884014 && cd .local-chromium/Linux-884014

# 7、下载 chromium 驱动包，解压后将 chrome-linux 文件夹整体上传至 /volume1/docker/Ark/.local-chromium/Linux-884014
chromium 驱动包下载地址：
https://mirrors.huaweicloud.com/chromium-browser-snapshots/Linux_x64/884014/chrome-linux.zip

# 8、拉取 Docker 注册表并创建、启动容器；
docker run -dit \
--name ark \
-p 5701:80 \
-p 5100:5000 \
-v /volume1/docker/Ark:/app/Ark \
-v /etc/localtime:/etc/localtime:ro \
--privileged=true \
nolanhzy/ark:latest

# 9、修正时区：
# 9.1 进入容器
docker exec -it ark bash
# 9.2 修改时间
cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
# 9.3 输入date 查看时区对不对 群辉的docker 日志时间有毛病 我们就不用管
docker exec -it nark bash && date # 进入docker容器

# 10、之后就可以通过“群晖的地址:5701”访问 nolan Ark 了。据说第一次会卡一下，忍一下后面就好了。
```
