package com.example.test.cache;

public class RedisCacheService implements CacheService {
    @Override
    public void setData(String data) {
        System.out.println(String.format("%s 注入redis缓存", data));
    }
}
