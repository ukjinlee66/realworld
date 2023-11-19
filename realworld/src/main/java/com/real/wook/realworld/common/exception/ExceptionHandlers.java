package com.real.wook.realworld.common.exception;

import com.real.wook.realworld.common.CommonResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class ExceptionHandlers {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleException(Exception e) {
        log.error("Exception: ", e);
        return ResponseEntity.status(500)
            .body(CommonResponse.builder()
                .result(CommonResponse.Result.FAIL)
                .message("서버 에러")
                .errorCode(ErrorCode.INTERNAL_SERVER_ERROR)
                .build());
    }

    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<?> handleBusinessException(BusinessException e) {
        log.error("[BusinessException] : ", e);
        return ResponseEntity.status(e.getErrorCode().getHttpCode())
            .body(CommonResponse.builder()
                .result(CommonResponse.Result.FAIL)
                .message(e.getErrorCode().getMessage())
                .errorCode(e.getErrorCode())
                .build());
    }
}
