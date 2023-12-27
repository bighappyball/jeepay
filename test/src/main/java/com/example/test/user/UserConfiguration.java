package com.example.test.user;

import com.example.test.cache.CacheService;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.context.annotation.Import;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Import(UserImportSelector.class)
@Service
public class UserConfiguration implements InitializingBean {

    @Resource
    User user;

    @Resource
    CacheService cacheService;


    @Override
    public void afterPropertiesSet() throws Exception {
        user.setUsername("AAA");
        user.setPhone("173");
        String data = String.format("username:%s phone:%s", user.getUsername(), user.getPhone());
        System.out.println(data);
        cacheService.setData(data);
    }

}
