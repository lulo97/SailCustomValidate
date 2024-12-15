const shared_rules = {
    pageIndex: {
        name: {
            vi: "Chỉ số trang",
            end: "Page index"
        },
        min: 1,
        max: 10e10,
        isInteger: true,
        required: false
    },
    pageSize: {
        name: {
            vi: "Cỡ trang",
            end: "Page size"
        },
        min: 1,
        max: 10e10,
        isInteger: true,
        required: false
    }
}

const skip_rule_names = ['name']

module.exports = {
    shared_rules,
    skip_rule_names
}