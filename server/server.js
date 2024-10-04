const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();
// Kết nối tới MongoDB
const connectionStringCluster = 'mongodb+srv://hidengu:meo3102003@cluster0.pmuki99.mongodb.net/BookingTicketApp'
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

//app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());
app.use(morgan("common"));
app.use(express.json())


  // ...
// Sử dụng body-parser middleware
app.use(bodyParser.json());


// Lắng nghe các yêu cầu từ client
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));