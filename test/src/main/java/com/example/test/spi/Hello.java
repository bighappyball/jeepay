package com.example.test.spi;

import org.apache.dubbo.common.extension.Adaptive;
import org.apache.dubbo.common.extension.SPI;

@SPI("")
public interface Hello {

    @Adaptive
    void say();
}
