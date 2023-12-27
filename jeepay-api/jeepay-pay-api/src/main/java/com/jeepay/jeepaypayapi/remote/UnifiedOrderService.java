package com.jeepay.jeepaypayapi.remote;


import com.jeepay.jeepaypayapi.param.UnifiedOrderParam;
import com.jeequan.jeepay.core.model.ApiRes;

public interface UnifiedOrderService {
    public ApiRes unifiedOrder(UnifiedOrderParam unifiedOrderParam);
}
