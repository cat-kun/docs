## Nark短信登录

* 一键docker（不需要`docker pull`

```sh
sudo docker run   --name nark -p 5703:80  -d  -v  "$(pwd)"/Config:/app/Config \
-v  "$(pwd)"/logfile:/app/logfile  \
-it --privileged=true  nolanhzy/nark:latest
```
