const vi = {
    length: '{field} phải có độ dài là {threshold}', 
    maxLength: '{field} có độ dài nhỏ hơn hoặc bằng là {threshold}', 
    minLength: '{field} có độ dài lớn hơn hoặc bằng là {threshold}',
    max: '{field} có giá trị nhỏ hơn hoặc bằng {threshold}',
    min: '{field} có giá trị lớn hơn hoặc bằng {threshold}',
    isInteger: '{field} là số nguyên', 
    isNumber: '{field} phải có kiểu số', 
    isArray: '{field} là kiểu mảng',
    isArrayString: '{field} là mảng các string',
    enum: '{field} thuộc các giá trị {expected}', 
    required: '{field} là bắt buộc truyền', 
    unknown: 'Các tham số không được phép truyền: {value}',
}

module.exports = {
    vi
}