"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Object.freeze({
    user: {
        post: {
            email: {
                in: ["body"],
                errorMessage: "email is empty",
                isRequired: true,
                custom: {
                    options: (email) => (email.length && email !== "" && typeof email === "string")
                }
            },
            dob: {
                in: ["body"],
                errorMessage: "dob is empty",
                isLength: {
                    errorMessage: 'dob should be at least 7 chars long',
                    // Multiple options would be expressed as an array
                    options: { min: 7 },
                },
                custom: {
                    options: (dob) => (dob.length && dob !== "" && typeof dob === "string"),
                }
            },
            name: {
                in: ["body"],
                errorMessage: "name is empty",
                custom: {
                    options: (name) => (name.length && name !== "" && typeof name === "string"),
                    errorMessage: "name is bad format",
                }
            },
            gender: {
                in: ["body"],
                errorMessage: "gender is empty",
                custom: {
                    options: (gender) => (gender.length && gender !== "" && typeof gender === "string"),
                    errorMessage: "gender is bad format",
                }
            },
            address: {
                in: ["body"],
                errorMessage: "address is empty",
                custom: {
                    options: (address) => (address.length && address !== "" && typeof address === "string"),
                    errorMessage: "address is bad format",
                }
            },
            state: {
                in: ["body"],
                errorMessage: "state is empty",
                custom: {
                    options: (state) => (state.length && state !== "" && typeof state === "string"),
                    errorMessage: "state is bad format",
                }
            },
            city: {
                in: ["body"],
                errorMessage: "city is empty",
                custom: {
                    options: (city) => (city.length && city !== "" && typeof city === "string"),
                    errorMessage: "city is bad format",
                }
            }
        },
        get: {
            email: {
                in: ["body"],
                errorMessage: "email is empty",
                optional: false,
                custom: {
                    options: (email) => (email.length && email !== "" && typeof email === "string"),
                    errorMessage: "username is bad format",
                }
            },
            password: {
                in: ["body"],
                errorMessage: "password is empty",
                optional: false,
                custom: {
                    options: (password) => (password.length && password !== "" && typeof password === "string"),
                    errorMessage: "password is bad format",
                }
            },
        }
    }
});
//# sourceMappingURL=validation.js.map