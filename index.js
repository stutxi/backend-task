const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    const numbers = [];
    const alphabets = [];
    let highestLowercase = '';

    if (!Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            user_id: "stuti_sharma_10052004", 
            email: "stuti.sharma2021@vitbhopal.ac.in",
            roll_number: "21BCE10748",
            numbers: [],
            alphabets: [],
            highest_lowercase_alphabet: []
        });
    }

    data.forEach(item => {
        if (!isNaN(item) && item.trim() !== '') {
            numbers.push(item);
        } else if (typeof item === 'string' && item.length === 1) {
            alphabets.push(item);

            if (item === item.toLowerCase() && item > highestLowercase) {
                highestLowercase = item;
            }
        }
    });

    const response = {
        is_success: true,
        user_id: "stuti_sharma_10052004",
        email: "stuti.sharma2021@vitbhopal.ac.in",
        roll_number: "21BCE10748",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    };

    res.status(200).json(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
