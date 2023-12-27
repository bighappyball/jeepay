package com.example.test.spi;

public class HelloA implements Hello{
    @Override
    public void say() {
        System.out.println("hello I'am A");
    }
}
