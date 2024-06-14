# Weather-Google-Sheet-Extension

This Google Sheets extension provides real-time weather updates for cities listed in a Google Sheet. The script fetches the current temperature for each city from the OpenWeatherMap API and updates the sheet accordingly.

## Features

- **Real-Time Weather Updates**: Automatically fetches and updates the temperature for cities listed in your Google Sheet.
- **Trigger-Based Execution**: Uses Google Apps Script triggers to run the update function periodically and on sheet edits.
- **Error Handling**: Logs errors if fetching data from the API fails.

## Setup Instructions

### Prerequisites

- A Google account
- Access to Google Sheets
- OpenWeatherMap API key

### Steps

1. **Create a Google Sheet**:
   - Create a new Google Sheet.
   - Name one of the sheets "AppsScript".
   - In the "AppsScript" sheet, add city names in column A.

2. **Open Script Editor**:
   - Open the Google Sheet.
   - Click on `Extensions > Apps Script`.

3. **Copy and Paste the Script**:
   - Delete any code in the script editor and replace it with the code in repo.

4. **Replace Spreadsheet ID and API Key**:
   - Replace `SPREADSHEET_ID` with the ID of your Google Sheet.
   - Replace `openweathermap` with your OpenWeatherMap API key.

5. **Initialize Triggers**:
   - Run the `initialize` function to set up the necessary triggers.

## Usage

- **Automatic Updates**: The script will automatically update the temperature data every minute.
- **Manual Updates**: Any edit made to the "AppsScript" sheet will trigger an update of the temperature data.

## Contributing

We welcome contributions to improve the Google-Sheet-Extension-Weather project. If you have any suggestions, issues, or feature requests, please open an issue or submit a pull request.

### Steps to Contribute

1. **Fork the Repository**: Click on the 'Fork' button on the repository page.
2. **Create a New Branch**: 
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Make Your Changes**: Implement your feature or bug fix.
4. **Commit Your Changes**: 
   ```bash
   git commit -m 'Add some feature'
   ```
5. **Push to the Branch**: 
   ```bash
   git push origin feature/YourFeatureName
   ```
6. **Open a Pull Request**: Go to the repository on GitHub and create a pull request.


## Contact

For any inquiries or questions, feel free to contact:

- **Email**: dev.codedpro@gmail.com
- **GitHub**: [codedpro](https://github.com/codedpro)

Thank you for using the Google-Sheet-Extension-Weather! We hope it helps you stay updated with the latest weather information.
