module.exports = {
    extends: ['stylelint-config-standard'],
    rules: {
        "alpha-value-notation": null,
        "at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: [
                    "tailwind",
                    "apply",
                    "variants",
                    "responsive",
                    "screen",
                    'extend',
                    'at-root',
                ],
            },
        ],
        "declaration-block-trailing-semicolon": null,
        "no-descending-specificity": null,
    }
}


