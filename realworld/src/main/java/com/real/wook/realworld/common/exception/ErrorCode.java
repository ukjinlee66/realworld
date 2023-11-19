package com.real.wook.realworld.common.exception;

import org.springframework.http.HttpStatus;

public enum ErrorCode {
    // 1xx Informational
    CONTINUE(HttpStatus.CONTINUE, "계속", 100),
    SWITCHING_PROTOCOLS(HttpStatus.SWITCHING_PROTOCOLS, "프로토콜 변경", 101),

    // 2xx Success
    OK(HttpStatus.OK, "성공했습니다.", 200),
    CREATED(HttpStatus.CREATED, "리소스가 성공적으로 생성되었습니다.", 201),
    ACCEPTED(HttpStatus.ACCEPTED, "요청이 수락되었습니다.", 202),
    NO_CONTENT(HttpStatus.NO_CONTENT, "내용이 없습니다.", 204),
    RESET_CONTENT(HttpStatus.RESET_CONTENT, "콘텐츠가 재설정되었습니다.", 205),

    // 3xx Redirection
    MULTIPLE_CHOICES(HttpStatus.MULTIPLE_CHOICES, "다중 선택", 300),
    MOVED_PERMANENTLY(HttpStatus.MOVED_PERMANENTLY, "영구적으로 이동했습니다.", 301),
    FOUND(HttpStatus.FOUND, "다른 페이지를 찾았습니다.", 302),
    SEE_OTHER(HttpStatus.SEE_OTHER, "다른 페이지를 보려면 다시 연결하세요.", 303),
    NOT_MODIFIED(HttpStatus.NOT_MODIFIED, "수정되지 않았습니다.", 304),
    USE_PROXY(HttpStatus.USE_PROXY, "프록시 사용", 305),
    TEMPORARY_REDIRECT(HttpStatus.TEMPORARY_REDIRECT, "일시적으로 리디렉션됨", 307),

    // 4xx Client Errors
    BAD_REQUEST(HttpStatus.BAD_REQUEST, "잘못된 요청입니다.", 400),
    UNAUTHORIZED(HttpStatus.UNAUTHORIZED, "인증되지 않은 요청입니다.", 401),
    PAYMENT_REQUIRED(HttpStatus.PAYMENT_REQUIRED, "결제가 필요합니다.", 402),
    FORBIDDEN(HttpStatus.FORBIDDEN, "이 작업을 수행할 권한이 없습니다.", 403),
    NOT_FOUND(HttpStatus.NOT_FOUND, "요청한 리소스를 찾을 수 없습니다.", 404),
    METHOD_NOT_ALLOWED(HttpStatus.METHOD_NOT_ALLOWED, "허용되지 않는 메서드입니다.", 405),
    NOT_ACCEPTABLE(HttpStatus.NOT_ACCEPTABLE, "요청한 리소스를 생성할 수 없습니다.", 406),
    PROXY_AUTHENTICATION_REQUIRED(HttpStatus.PROXY_AUTHENTICATION_REQUIRED, "프록시 인증이 필요합니다.", 407),
    REQUEST_TIMEOUT(HttpStatus.REQUEST_TIMEOUT, "요청 시간이 초과되었습니다.", 408),
    CONFLICT(HttpStatus.CONFLICT, "리소스 충돌이 발생했습니다.", 409),
    GONE(HttpStatus.GONE, "리소스가 더 이상 사용되지 않습니다.", 410),
    LENGTH_REQUIRED(HttpStatus.LENGTH_REQUIRED, "Content-Length 헤더가 누락되었습니다.", 411),
    PRECONDITION_FAILED(HttpStatus.PRECONDITION_FAILED, "요청 헤더의 조건 충족 실패", 412),
    PAYLOAD_TOO_LARGE(HttpStatus.PAYLOAD_TOO_LARGE, "페이로드가 너무 큽니다.", 413),
    URI_TOO_LONG(HttpStatus.URI_TOO_LONG, "URI가 너무 깁니다.", 414),
    UNSUPPORTED_MEDIA_TYPE(HttpStatus.UNSUPPORTED_MEDIA_TYPE, "지원되지 않는 미디어 타입입니다.", 415),
    RANGE_NOT_SATISFIABLE(HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE, "범위가 만족되지 않습니다.", 416),
    EXPECTATION_FAILED(HttpStatus.EXPECTATION_FAILED, "예상이 맞지 않습니다.", 417),
    IM_A_TEAPOT(HttpStatus.I_AM_A_TEAPOT, "나는 주전자입니다.", 418),

    // 5xx Server Errors
    INTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "서버 내부 오류가 발생했습니다.", 500),
    NOT_IMPLEMENTED(HttpStatus.NOT_IMPLEMENTED, "구현되지 않은 메서드입니다.", 501),
    BAD_GATEWAY(HttpStatus.BAD_GATEWAY, "게이트웨이가 잘못되었습니다.", 502),
    SERVICE_UNAVAILABLE(HttpStatus.SERVICE_UNAVAILABLE, "서비스를 사용할 수 없습니다.", 503),
    GATEWAY_TIMEOUT(HttpStatus.GATEWAY_TIMEOUT, "게이트웨이 시간 초과", 504),
    HTTP_VERSION_NOT_SUPPORTED(HttpStatus.HTTP_VERSION_NOT_SUPPORTED, "지원되지 않는 HTTP 버전", 505);

    private final HttpStatus httpStatus;
    private final String message;
    private final int httpCode;

    ErrorCode(HttpStatus httpStatus, String message, int httpCode) {
        this.httpStatus = httpStatus;
        this.message = message;
        this.httpCode = httpCode;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    public String getMessage() {
        return message;
    }

    public int getHttpCode() {
        return httpCode;
    }

    @Override
    public String toString() {
        return String.format("ErrorCode{httpStatus=%s, message='%s', httpCode=%d, name=%s}",
            httpStatus, message, httpCode, name());
    }
}

