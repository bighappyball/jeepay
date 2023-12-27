# 开放端口 正式环境可不开放

firewall-cmd --zone=public --add-port=5601/tcp --add-port=5044/tcp --permanent && firewall-cmd --reload

# 关闭端口

firewall-cmd --zone=public --remove-port=8080/tcp --permanent

# es报错解决

vi /etc/sysctl.conf 文件添加 vm.max_map_count=262144 sysctl -p

# 导入镜像

docker load -i elasticsearch8.7.1.tar && docker load -i kibana8.7.1.tar && docker load -i logstash8.7.1.tar

# 命名镜像

docker tag 7a9e5668f151 elasticsearch:8.7.1 docker tag 7a9e5668f151 kibana:8.7.1 docker tag 7a9e5668f151 logstash:8.7.1

docker rm -f elasticsearch && docker run -d --name elasticsearch --net bin_mdt-net \
-v /bsoft/mdt/elk/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml \
-e "ES_JAVA_OPTS=-Xms512m -Xmx2g" -e "discovery.type=single-node" -p 9200:9200 -p 9300:9300 elasticsearch:8.7.1

<!-- -v /bsoft/mdt/elk/elasticsearch/data:/usr/share/elasticsearch/data \ -->

docker rm -f kibana && docker run -d --name kibana --net bin_mdt-net \
-v /bsoft/mdt/elk/kibana/config/kibana.yml:/usr/share/kibana/config/kibana.yml \
-p 5601:5601 kibana:8.7.1

docker rm -f logstash && docker run -d --name logstash -u logstash:root --net bin_mdt-net \
-v /bsoft/mdt/tomcat/logs:/bsoft/mdt/tomcat/logs -v /bsoft/mdt/mdtassistant/logs:/bsoft/mdt/mdtassistant/logs  \
-v /bsoft/mdt/elk/logstash/config/logstash.conf:/usr/share/logstash/pipeline/logstash.conf \
-v /bsoft/mdt/elk/logstash/config/logstash.yml:/bsoft/mdt/elk/logstash/config/logstash.yml logstash:8.7.1

# 查看日志

docker logs -f elasticsearch docker logs -f kibana docker logs -f logstash

# 进入容器

docker exec -it elasticsearch /bin/bash docker exec -it kibana /bin/bash docker exec -it logstash /bin/bash
<!-- #解决logstash没权限读取问题
1. 进入容器 docker exec -u root -it logstash /bin/bash
2. 执行 /usr/share/logstash/bin/system-install /usr/share/logstash/config/startup.options systemd
2. 退出重启 docker restart logstash -->

## elasticsearch

docker rm -f elasticsearch && docker run -d --name elasticsearch  -v /root/elasticsearch/config/certs:\
/usr/share/elasticsearch/config/certs -v /root/elasticsearch/config/elasticsearch.yml:\
/usr/share/elasticsearch/config/elasticsearch.yml -e "ES_JAVA_OPTS=-Xms512m -Xmx512m" -e "discovery.type=single-node" -p\
9200:9200 -p 9300:9300 elasticsearch:7.12.1

docker rm -f elasticsearch && docker run -d --name elasticsearch -v /root/elasticsearch/config:\
/usr/share/elasticsearch/config -e "ES_JAVA_OPTS=-Xms512m -Xmx512m" -e "discovery.type=single-node" -p 9200:9200 -p\
9300:9300 elasticsearch:7.12.1

docker rm -f elasticsearch && docker run -d --name elasticsearch  -e "ES_JAVA_OPTS=-Xms512m -Xmx512m" -e "discovery.type=single-node" -p 9200:9200 -p\
9300:9300 elasticsearch:7.12.1


### 初始化密码

./bin/elasticsearch-setup-passwords interactive kl19950320

## 登录

elastic Bsoftmdt2020

### seata

docker run -d -e TZ="Asia/Shanghai"  -e STORE_MODE=db -e SEATA_IP=47.95.208.214 -e SEATA_PORT=8091 -p 7091:7091 -p 8091:
8091 --name seata --restart=always -v /usr/share/zoneinfo/Asia/Shanghai:/etc/localtime -v
/usr/share/zoneinfo/Asia/Shanghai:/etc/timezone -v /root/ruoyi/seata/application.yml:
/seata-server/resources/application.yml seataio/seata-server:1.5.1

### 创建网络
docker network create ruoyi

### dubbo-admin
docker rm -f dubbo-admin && docker run -d \
--name dubbo-admin \
-p 9600:8080 \
-e admin.registry.address=zookeeper://47.95.208.214:2181 \
-e admin.config-center=zookeeper://47.95.208.214:2181 \
-e admin.metadata-report.address=zookeeper://47.95.208.214:2181 \
--restart=always \
apache/dubbo-admin:0.5.0

docker rm -f dubbo-admin && docker run -d --name dubbo-admin --link zookeeper -p 9600:8080 -e admin.registry.address=zookeeper://zookeeper:2181 -e admin.config-center=zookeeper://zookeeper:2181 -e admin.metadata-report.address=zookeeper://zookeeper:2181 --restart=always apache/dubbo-admin:0.5.0
### zookeeper

docker rm -f zookeeper && docker run -d -p 2181:2181 --name zookeeper --privileged zookeeper:3.4.9

连接zk工具 prettyZoo


### mysql

docker run -p 3306:3306 --name mysql --restart=always --privileged=true \
-v /etc/localtime:/etc/localtime:ro \
-e MYSQL_ROOT_PASSWORD=kl19950320 -d  mysql:5.7

docker run -p 3306:3306 --name mysql --restart=always --privileged=true \
-v /usr/local/mysql/log:/var/log/mysql \
-v /usr/local/mysql/data:/var/lib/mysql \
-v /usr/local/mysql/conf:/etc/mysql \
-v /etc/localtime:/etc/localtime:ro \
-e MYSQL_ROOT_PASSWORD=kl19950320 -d  mysql:5.7


### redis

docker run  -p 7001:6379 \
--restart=always \
--name redis \
-v /usr/local/redis/conf/redis.conf:/etc/redis/redis.conf \
-v /usr/local/redis/data:/data \
-d redis:5.0.14 redis-server /etc/redis/redis.conf \
--appendonly yes  \
--requirepass kl19950320

### rocketmq

docker run  -p 9876:9876 \
--name rmqnamesrv \
-v /usr/local/rocketmq/rmqnamesrv/data/logs:/opt/logs \
-v /usr/local/rocketmq/rmqnamesrv/data/store:/opt/store \
-v /etc/localtime:/etc/localtime:ro \
-d foxiswho/rocketmq:server 


docker rm -f rmqbroker && docker run  -p 10909:10909 -p 10911:10911 \
--link rmqnamesrv \
--name rmqbroker \
-v /usr/local/rocketmq/rmqbroker/logs:/opt/logs \
-v /usr/local/rocketmq/rmqbroker/store:/opt/store \
-v /usr/local/rocketmq/rmqbroker/brokerconf/broker.conf:/etc/rocketmq/broker.conf \
-v /etc/localtime:/etc/localtime:ro \
-e "JAVA_OPTS=-Duser.home=/opt" \
-e "NAMESRV_ADDR=rmqnamesrv:9876" \
-e "BROKER_IP1=47.95.208.214" \
-e JAVA_OPT_EXT="-server -Xms128m -Xmx128m -Xmn128m" \
-d foxiswho/rocketmq:broker sh  mqbroker -c /etc/rocketmq/broker.conf

[comment]: <> (-e NAMESRV_ADDR="rmqnamesrv:9876" \)

docker rm -f rmqconsole && docker run  -p 9875:8080 \
--link rmqnamesrv \
--name rmqconsole \
-e "JAVA_OPTS=-Drocketmq.namesrv.addr=rmqnamesrv:9876 -Dcom.rocketmq.sendMessageWithVIPChannel=false" \
-d styletang/rocketmq-console-ng

docker rm -f rmqconsole && docker run -e "JAVA_OPTS=-Drocketmq.namesrv.addr=rmqnamesrv:9876 -Dcom.rocketmq.sendMessageWithVIPChannel=false" -p 9875:8080 -t styletang/rocketmq-console-ng


