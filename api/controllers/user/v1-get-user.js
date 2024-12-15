const { translations } = require("../../utils/translations/translations");
const { getErrorMessage } = require("../../utils/utils");

const instance = {
    rules: {
        username: {
            name: {
                vi: "Tên người dùng",
                en: "User name",
            },
        },
        type: {
            name: {
                vi: "Kiểu",
                en: "Type",
            },
            enum: ["A", "B"],
            required: true,
        },
    },

    fn: async function () {
        const req = this.req;
        const res = this.res;
        const language = req.headers["language"];
        const { type, username } = req.body;

        //Handle a custom validate without put it in rules
        if (type == "A") {
            const current_rule = { field_key: "username", threshold: 20 };
            if (username && username.length != current_rule.threshold) {
                return res.badRequest({
                    message: getErrorMessage(current_rule, instance, language),
                });
            }
        }

        return res.send("Hi there!");
    },
};

module.exports = instance;
