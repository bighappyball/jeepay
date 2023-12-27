package com.example.test.cache;

public class MysqlCacheService implements CacheService {
    @Override
    public void setData(String data) {
        System.out.println(String.format("%s 注入mysql缓存", data));
    }
}
