# Questify

Questify is a blockchain-based community platform where users can ask and answer questions in various science and technology categories. The platform incentivize knowledge sharing by rewarding users with tokens for receiving likes on their answers.

## Features

- **Ask Questions:** Post questions across different categories in science and technology.
- **Answer Questions:** Share your knowledge by answering posted questions.
- **Earn Tokens:** Get rewarded with tokens for receiving likes on your answers.
- **Gamified Learning:** Leaderboards and badges to recognize top contributors.
- **Blockchain Integration:** Secure and transparent token distribution using smart contracts.

## How to Run the Application Locally

### Prerequisites

- **Node.js:** Ensure you have Node.js installed on your system.
- **MongoDB:** Set up a MongoDB database for backend integration.

### Steps

1. **Clone the Project:**

   ```bash
   git clone https://github.com/0xsubmux/Questify-edu
   cd Questify
   ```

2. **Install Dependencies:**

   - Navigate to the `client` and `server` folders separately and install the required dependencies using the command:
     ```bash
     yarn install
     ```

3. **Configure Environment Variables:**

   - In the `server` folder, create a `.env` file and add the following details:
     ```env
     MONGO_URI=<your-mongodb-connection-string>
     PORT=<server-port>
     SECRET_KEY=<your-secret-key>
     TOKEN_CONTRACT_ADDRESS=<blockchain-token-contract-address>
     ```

4. **Run the Application:**
   - Start the backend server:
     ```bash
     cd server
     yarn start
     ```
   - Start the frontend application:
     ```bash
     cd client
     yarn start
     ```

### Give it a Star if Helpful!

If you find this project useful, please give it a star on GitHub to support its development.

## Contributing

We welcome contributions! If you’d like to contribute to Questify, feel free to fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or feedback, please reach out to us.
