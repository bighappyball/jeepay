package com.example.test.spi;

public class HelloB implements Hello {

    @Override
    public void say() {
        System.out.println("hello I'am B");
    }

}
