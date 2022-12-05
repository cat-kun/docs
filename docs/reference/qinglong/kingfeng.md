# KingFeng部署

## 青龙上传CK

[原大佬github仓库地址](https://github.com/WindFgg/kingfeng)

### 搭建方法

<CodeGroup>
  <CodeGroupItem title="首次部署" active>

```bash
# 云服务器拉取docker镜像
docker pull ranqi03/kingfeng:latest

# 部署容器 5000端口可自定义
docker run -dit \
   -v $PWD/kingfeng/:/app/config/ \
   -p 5000:80 \
   --name kingfeng \
   --hostname kingfeng \
   ranqi03/kingfeng:latest

```

  </CodeGroupItem>
  <CodeGroupItem title="更新">

```bash
# 停止容器
docker kill kingfeng && docker rm kingfeng && docker rmi ranqi03/kingfeng

# 重新拉取容器
docker pull ranqi03/kingfeng:latest

# 运行
docker run -dit \
   -v $PWD/kingfeng/:/app/config/ \
   -p 5000:80 \
   --name kingfeng \
   --hostname kingfeng \
   ranqi03/kingfeng:latest
```

  </CodeGroupItem>
</CodeGroup>


### 配置

```bash
# 进入docker容器
docker exec -it kingfeng bash

# 进入配置目录
cd config

# 修改配置文件
vi config.yaml
```

### 配置文件

```yaml
Servers:
- QL_Name: 腾讯云
  QL_URL: 青龙ip:端口
  QL_Client_ID: 青龙Client_ID
  QL_Client_Secret: 青龙Client_Secret
  MaxCount: 200
SecretKey: kingfeng管理员密钥（可不修改）
WsKeyTaskFullName: wskey转换
Notice: 为了保障您账号的安全，请设置支付密码并目关闭免密支付！
UserName: 臭弟弟
PushImageUrl: 
```
