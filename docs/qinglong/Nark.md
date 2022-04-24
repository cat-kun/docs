## Nark短信登录

* 一键docker（不需要`docker pull`）
  * 云服务器
```sh
sudo docker run   --name nark -p 5703:80  -d  -v  "$(pwd)"/Config:/app/Config \
-v  "$(pwd)"/logfile:/app/logfile  \
-it --privileged=true  nolanhzy/nark:latest
```

* 群晖 `https://hub.docker.com/r/nolanhzy/nark`
```sh
docker pull nolanhzy/nark
```

- [x]短信登录

- [x]只支持2.11以下