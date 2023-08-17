package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
public class Test {


    @GetMapping("date")
    public Map<String,Object> test() {
        Map<String,Object> map=new HashMap<>();
        map.put("data",LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
        map.put("code",200);
        map.put("status",true);
        return map;
    }
}
