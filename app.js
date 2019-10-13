const express = require('express');
const app = express();

app.use(express.static('public'));
app.listen()

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
