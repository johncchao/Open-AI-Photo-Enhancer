# Open-AI-Photo-Enhancer

An open-source project showcasing the effects of AI image processing algorithms.

## Project Overview

Open-AI-Photo-Enhancer is a static website designed to showcase and explore the effects of various AI image enhancement algorithms. This project aims to provide researchers, developers, and enthusiasts with an intuitive platform to understand the applications of different image processing techniques.

## Features

- **Static Image Gallery**: Display images processed by different AI algorithms
- **Effect Comparison**: Each image is labeled with the enhancement algorithm used
- **Technical Exploration**: Provides links to resources for further learning and exploration
- **Responsive Design**: Adapts to various device screen sizes
- **Modern UI**: Clean and beautiful user interface

## Showcased Algorithms

- **AI Denoising**: Remove image noise and improve clarity
- **Super Resolution**: High-resolution image reconstruction
- **Detail Sharpening**: Intelligent edge enhancement
- **Color Enhancement**: Automatic color grading optimization
- **Light Correction**: Exposure and contrast optimization
- **Style Transfer**: Artistic image processing

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- No build tools required, can be deployed directly

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/johncchao/Open-AI-Photo-Enhancer.git
cd Open-AI-Photo-Enhancer
```

2. Open `index.html` in your browser to view the project

## Deploy to GitHub Pages

1. Push the code to your GitHub repository
2. Go to repository Settings
3. Find the Pages option
4. Select the main branch as the source
5. Save and access via GitHub Pages

## Customization

### Modify Display Images

Edit the `imageData` array in `script.js`:

```javascript
const imageData = [
    {
        src: 'Image URL',
        algorithm: 'Algorithm Name',
        title: 'Title',
        description: 'Description text'
    },
    // Add more images...
];
```

### Update External Links

Update the corresponding link addresses in `index.html` and `script.js`.

## Project Structure

```
Open-AI-Photo-Enhancer/
├── index.html          # Main page
├── styles.css          # Stylesheet
├── script.js           # JavaScript logic
└── README.md           # Project documentation
```

## Contributing

Issues and Pull Requests are welcome!

## License

MIT License

## Contact

For questions or suggestions, please contact via GitHub Issues.
