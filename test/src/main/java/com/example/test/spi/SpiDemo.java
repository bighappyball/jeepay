package com.example.test.spi;

import org.apache.dubbo.common.extension.ExtensionLoader;
import org.junit.Test;

public class SpiDemo {


    @Test
    public void sayHello() {
        ExtensionLoader<Hello> extensionLoader = ExtensionLoader.getExtensionLoader(Hello.class);
        Hello helloA = extensionLoader.getExtension("helloA");
        helloA.say();
        Hello helloB = extensionLoader.getExtension("helloB");
        helloB.say();
    }
}
