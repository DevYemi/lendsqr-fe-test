
export interface userRequestResultTypes {
    "createdAt": string,
    "orgName": string,
    "userName": string,
    "email": string,
    "phoneNumber": string,
    "lastActiveDate": string,
    "profile": {
        "firstName": string,
        "lastName": string,
        "phoneNumber": string,
        "avatar": string,
        "gender": string,
        "bvn": string,
        "address": string,
        "currency": string
    },
    "guarantor": {
        "firstName": string,
        "lastName": string,
        "phoneNumber": string,
        "gender": string,
        "address": string
    },
    "accountBalance": string,
    "accountNumber": string,
    "socials": {
        "facebook": string,
        "instagram": string,
        "twitter": string
    },
    "education": {
        "level": string,
        "employmentStatus": string,
        "sector": string,
        "duration": string,
        "officeEmail": string,
        "monthlyIncome": [
            string,
            string
        ],
        "loanRepayment": string
    },
    "id": string
}