package com.example.test.excel;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

public class Test {

    public static final String[] titles = {"张三", "李四", "王二", "麻子"};

    public static void simpleWriteTest() {
        List<DemoData> list = new ArrayList<>();
        for (int i = 0; i < 1000; i++) {
            DemoData demoData = DemoData.builder()
                    .date(new Date())
//                    .ignore("忽略内容")
                    .string("标题" + i)
                    .doubleData(new Double(i)).build();
            list.add(demoData);
        }
        EasyExcelUtils.export(list);
    }

    /**
     * 合并单元格
     */
    public static void mergeWriteTest() {
        List<DemoData> list = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            DemoData demoData = DemoData.builder()
                    .date(new Date())
//                    .ignore("忽略内容")
                    .string(titles[new Random().nextInt(4)])
                    .doubleData(new Double(i)).build();
            list.add(demoData);
        }
        EasyExcelUtils.myMergeExport(list);
    }

    public static void main(String[] args) {
        mergeWriteTest();
    }
}
