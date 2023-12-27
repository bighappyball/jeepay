package com.example.test.cache;

import org.springframework.context.annotation.ImportSelector;
import org.springframework.core.type.AnnotationMetadata;

import java.util.Map;

public class CacheImportSelect implements ImportSelector {
    @Override
    public String[] selectImports(AnnotationMetadata importingClassMetadata) {

        Map<String, Object> annotationAttributes = importingClassMetadata.getAnnotationAttributes(EnableCache.class.getName());
        String type = (String) annotationAttributes.get("type");
        if (type.equals("mysql")) {
            return new String[]{MysqlCacheService.class.getName()};
        } else {
            return new String[]{RedisCacheService.class.getName()};
        }
    }
}
