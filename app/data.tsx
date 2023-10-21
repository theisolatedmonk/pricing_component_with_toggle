export const Pricing = [

    {
        'Pricing': 'Basic',
        "Price": {
            "Monthly": "$19.99",
            "Annually": "$199.99"
        },
        "Storage": "500 GB",
        "UsersAllowed": 2,
        "SendLimit": "3 GB",
        "LearnMore": "Learn More"
    },
    {
        'Pricing': 'Professional',
        "Price": {
            "Monthly": "$24.99",
            "Annually": "$249.99"
        },
        "Storage": "1 TB",
        "UsersAllowed": 5,
        "SendLimit": "10 GB",
        "LearnMore": "Learn More"
    },
    {
        'Pricing': 'Master',
        "Price": {
            "Monthly": "$39.99",
            "Annually": "$399.99"
        },
        "Storage": "2 TB",
        "UsersAllowed": 10,
        "SendLimit": "20 GB",
        "LearnMore": "Learn More"
    }

]

console.log(Pricing)

console.log(Pricing.map((d) => d.Price))