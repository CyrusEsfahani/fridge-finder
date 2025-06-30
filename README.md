# Community Fridge Finder - Orange County

A user-friendly web application designed to help residents of Orange County, California, locate nearby community fridges where they can access free food or contribute surplus items.

## 🎯 Purpose

The Community Fridge Finder App addresses food insecurity by connecting community members with local food sharing initiatives. Users can quickly find operational community fridges to either access free food or contribute surplus items, fostering a stronger, more supportive community.

## ✨ Features

- **Interactive Map**: Google Maps integration showing all community fridge locations
- **Detailed Listings**: Comprehensive information about each fridge including hours, descriptions, and special notes
- **Mobile Responsive**: Optimized for both desktop and mobile devices
- **Intuitive Interface**: Clean, Orange County-themed design with easy navigation
- **Real-time Updates**: Up-to-date fridge locations and information
- **Accessibility**: Built with accessibility best practices in mind

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- Google Maps API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/community-fridge-finder.git
   cd community-fridge-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Getting a Google Maps API Key

1. Visit the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Maps JavaScript API
4. Create credentials (API key)
5. Restrict the API key to your domain for security

## 🏗️ Project Structure

```
community-fridge-finder/
├── public/                 # Static files
├── src/
│   ├── components/        # React components
│   │   ├── Header.js     # App header with branding
│   │   ├── Map.js        # Google Maps integration
│   │   ├── FridgeList.js # Scrollable fridge list
│   │   ├── FridgeItem.js # Individual fridge item
│   │   └── LoadingSpinner.js # Loading component
│   ├── data/             # Static data
│   │   └── fridges.js    # Fridge locations and info
│   ├── styles/           # CSS and styling
│   │   └── index.css     # Main stylesheet
│   ├── utils/            # Utility functions
│   │   └── mapUtils.js   # Map-related helpers
│   ├── App.js            # Main app component
│   └── index.js          # Entry point
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md            # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Orange (#ff9900) - representing Orange County
- **Secondary**: White and various grays for clean aesthetics
- **Accent**: Light orange variants for hover states

### Responsive Design
- **Desktop**: 75% map, 25% list
- **Mobile**: 50% map, 50% list
- Touch-friendly interface elements
- Optimized for various screen sizes

### Accessibility
- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast color combinations
- Focus indicators for interactive elements

## 🔧 Technologies Used

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Google Maps API**: Interactive mapping functionality
- **PostCSS**: CSS processing
- **Create React App**: Build tooling

## 📱 Mobile Features

- Progressive Web App (PWA) capabilities
- Mobile-optimized layout
- Touch-friendly interactions
- Fast loading times
- Offline-capable (future enhancement)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project
2. Deploy the `build` folder to Netlify
3. Set environment variables in Netlify dashboard

### Deploy to Vercel
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically on push

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Adding New Fridges
1. Edit `src/data/fridges.js`
2. Add fridge information with coordinates
3. Test the location on the map
4. Submit a pull request

### Reporting Issues
- Use GitHub Issues to report bugs
- Include screenshots and steps to reproduce
- Specify browser and device information

### Development Guidelines
- Follow existing code style
- Write meaningful commit messages
- Test on both desktop and mobile
- Ensure accessibility compliance

## 📋 Roadmap

- [ ] User location detection and nearest fridge suggestions
- [ ] Real-time fridge status updates
- [ ] Community ratings and reviews
- [ ] Notification system for fridge updates
- [ ] Multilingual support (Spanish, Vietnamese)
- [ ] Admin panel for fridge management
- [ ] Integration with local food banks
- [ ] Volunteer coordination features

## 🆘 Support

### Common Issues

**Map not loading?**
- Check your Google Maps API key
- Ensure the Maps JavaScript API is enabled
- Verify API key restrictions

**Responsive issues?**
- Clear browser cache
- Check Tailwind CSS compilation
- Test on different devices

### Getting Help
- Check the [Issues](https://github.com/your-username/community-fridge-finder/issues) page
- Contact the maintainers
- Join our community Discord

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Orange County community organizations
- Local volunteers maintaining community fridges
- Contributors and testers
- Google Maps Platform
- Tailwind CSS team

## 📊 Analytics

The app includes basic analytics to understand usage patterns and improve the service:
- Page views and user interactions
- Popular fridge locations
- Mobile vs desktop usage
- No personal information is collected

---

**Made with ❤️ for the Orange County community**

For questions, suggestions, or partnership opportunities, please reach out to our team.