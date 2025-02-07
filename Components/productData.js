const products = [
    {
        productName: "Christmas Lite",
        description: "Perfect for local Santas just starting up their operations.",
        price: 5,
        benefits: [
            {
                benefit: '5 collections',
                available: true
            },
            {
                benefit: 'Worldwide accessbility ',
                available: true
            },
            {
                benefit: '25 automation actions',
                available: true
            },
            {
                benefit: 'Access all features',
                available: true
            },
            {
                benefit: '24 hours support',
                available: true
            },
            {
                benefit: 'Sync accross devices',
                available: false
            },
            {
                benefit: 'Share with more 5 users',
                available: false
            },
        ],
        popular: false
    },
    {
        productName: "Christmas Eve",
        description: "Our most popular plan for Santas with an established market.",
        price: 12,
        benefits: [
            {
                benefit: 'Unlimited collections',
                available: true
            },
            {
                benefit: 'Worldwide accessbility ',
                available: true
            },
            {
                benefit: 'Unlimited automation actions',
                available: true
            },
            {
                benefit: 'Access all features',
                available: true
            },
            {
                benefit: '24 hours support',
                available: true
            },
            {
                benefit: 'Sync accross devices',
                available: true
            },
            {
                benefit: 'Share with more 5 users',
                available: true
            },
        ],
        popular: true
    },
    {
        productName: "Christmas Day",
        description: "The scale-up version for large teams of elfs and raindeers.",
        price: 16,
        benefits: [
            {
                benefit: 'Unlimited collections',
                available: true
            },
            {
                benefit: 'Worldwide accessbility ',
                available: true
            },
            {
                benefit: 'Unlimited automation actions',
                available: true
            },
            {
                benefit: 'Access all features',
                available: true
            },
            {
                benefit: '24 hours support',
                available: true
            },
            {
                benefit: 'Sync accross devices',
                available: true
            },
            {
                benefit: 'Share with more 10 users',
                available: true
            },
        ],
        popular: false
    },
]

export default products