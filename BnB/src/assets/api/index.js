require('dotenv').config(); // Make sure to load the .env file at the top

app.post('/chat', async (req, res) => {
  try {
    const userInput = req.body.message;
    console.log('User Input:', userInput);

    // Check for API key presence
    if (!process.env.API_KEY) {
      console.error('Missing API_KEY in environment');
      return res.status(500).json({ error: 'Missing API_KEY in environment' });
    }

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = await genAI.getGenerativeModel({ model: process.env.MODEL_NAME });

    const chat = model.startChat({
      generationConfig: GENERATION_CONFIG,
      safetySettings: SAFETY_SETTINGS,
      history: [],
    });

    const result = await chat.sendMessage(userInput);
    console.log('API Result:', result);

    if (result.error) {
      console.error('API Error:', result.error);
      return res.status(500).json({ error: result.error.message });
    }

    const response = result.response.text(); // Adjust this based on the API documentation
    console.log('Response:', response);

    if (!response) {
      return res.status(500).json({ error: 'No response from AI' });
    }

    res.json({ response });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});
