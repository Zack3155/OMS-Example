export const NO_WHITESPACE = /^(?!(\s+$))/;

export const EN = /^[A-Za-z]+$/;

export const NUMBER = /^[0-9]*$/;

export const DEC_NUMBER = /^\d+(\.\d+)?$/;

export const NUMBER_1_TO_200 = /^[1-9]$|^[1-9][0-9]$|^(200)$/;

export const NUMBER_MAX_999 = /^[0-9]\d{0,2}$/;

export const MIN_3_EN = /[a-zA-Z]{3,}/;

export const EN_SPACE = /^[A-Za-z\s]+$/;

export const EN_NUMBER_SPACE = /^[A-Za-z0-9\s]+$/;

export const EN_NUMBER_SPACE_SPECIAL =
    /^[A-Za-z0-9\s!@$%()*+,-.':<>?^{}/_="]+$/;

export const EN_CN_NUMBER_SPACE_SPECIAL =
    /^[\u4e00-\u9fa5_a-zA-Z0-9\s!@#$%&()*+,-.':<>?^{}_=！（），、。：；《》？【】"]+$/;

export const VALID_NAME = /^[A-Za-z\s']+$/;

export const VALID_PRODUCT_NAME =
    /^[\u4e00-\u9fa5_a-zA-Z0-9\ss!@#$%&()*+-.':<>{}_=\[\]！￥%（）—【】："]+$/;
