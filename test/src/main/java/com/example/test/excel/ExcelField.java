package com.example.test.excel;

/**
 * @program: cloudmdt
 * @description:
 * @author: chenxhe
 * @create: 2022/03/22
 */

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.FIELD, ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface ExcelField {

    /**
     * 对应的列名称
     */
    String name() default "";

    /**
     * 列序号
     */
    int sort() default -1;

    /**
     * 字段类型对应的格式
     */
    String format() default "";
}
