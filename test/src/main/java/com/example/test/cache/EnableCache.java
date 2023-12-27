package com.example.test.cache;

import org.springframework.context.annotation.Import;

import java.lang.annotation.*;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Import(CacheImportSelect.class)
public @interface EnableCache {

    String type() default "mysql";
}
