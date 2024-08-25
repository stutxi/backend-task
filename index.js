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

    data.forEach(item => {
        if (item.type === 'number') {
            numbers.push(item.value); 
        } else if (item.type === 'string') {
            alphabets.push(item.value);

            if (item.value === item.value.toLowerCase() && item.value > highestLowercase) {
                highestLowercase = item.value;
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
