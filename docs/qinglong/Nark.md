## Nark短信登录
### 云服务器部署如下

<CodeGroup>
  <CodeGroupItem title="AMD" active>

```bash
# 
mkdir /root/Ark 

cd /root/Ark && mkdir -p Config

将授权文件放入/root/Ark/Config中
将Config.json 文件放入/root/Ark/Config

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

将授权文件放入/root/Ark/Config中
将Config.json 文件放入/root/Ark/Config

# 建立 日志文件夹
cd /root/Ark && mkdir -p logfile 

cd /root/Ark

# 准备拉取启动容器 `一键docker（不需要docker pull）`
sudo docker run   --name nark -p 5701:80  -d  -v  "$(pwd)"/Config:/app/Config \
-v  "$(pwd)"/logfile:/app/logfile  \
-it --privileged=true  nolanhzy/nark:arm
```

  </CodeGroupItem>
</CodeGroup>

::: tip 
nark与授权中心交互必须知道ip。启动的时候会注册ip，如果你挂了代理，记得给n.nnnolanark.xyz设置直连 更换ip重启nark即可 
:::

```bash
docker exec -it nark echo "104.21.62.86 n.nnnolanark.xyz">>/etc/hosts
```
#### 更新

```bash
docker run --rm     -v /var/run/docker.sock:/var/run/docker.sock     containrrr/watchtower -c     --run-once     nark
```

### 群晖 
* [docker仓库](https://hub.docker.com/r/nolanhzy/nark)
```bash
docker pull nolanhzy/nark
```

- [x] 短信登录
- [x] 只支持2.11以下
