# Project E91

> **Ethical Web Scraping & Analysis Framework**

[![License](https://img.shields.io/badge/License-Custom-blue.svg)](LICENSE)
[![Ethical](https://png.pngtree.com/png-vector/20230302/ourmid/pngtree-ethics-line-icon-vector-png-image_6626141.png)](https://github.com/B4409/Project-E91)

A browser-based tool for ethical web scraping, SEO analysis, accessibility auditing, and security testing.

## ⚠️ DISCLAIMER

**THIS TOOL IS FOR EDUCATIONAL AND ETHICAL PURPOSES ONLY.**

- ✅ Use on **YOUR OWN** websites
- ✅ Use with **EXPLICIT PERMISSION**
- ✅ Use for **SECURITY TESTING** your sites
- ✅ Use for **LEARNING** web security

- ❌ Do NOT use on websites you don't own
- ❌ Do NOT use for malicious purposes
- ❌ Do NOT use to steal data
- ❌ Do NOT bypass security measures

**The authors are NOT responsible for misuse. See [LICENSE](LICENSE) for full terms.**

---

## 🚀 Quick Start

### Basic Usage

1. Open your browser console (`F12` or `Ctrl+Shift+I`)
2. Copy the contents of `Project-E91.js`
3. Paste into console and press Enter
4. Follow the interactive menu!

```javascript
// The tool auto-initializes with a menu
E91.run(1)  // Extract links
E91.run(7)  // Run SEO analysis
E91.run(11) // Extract all data
```

### One-Liner Installation

```javascript
fetch('https://raw.githubusercontent.com/B4409/Project-E91/main/Project-E91.js').then(r=>r.text()).then(eval)
```

---

## 📋 Features

### Data Extraction (Ethical Only)
- 🔗 **Links** - All hyperlinks with metadata
- 🖼️ **Images** - Image sources and attributes
- 📊 **Metadata** - Page meta information
- 🏗️ **Structure** - HTML element analysis
- 📝 **Content** - Public text content

### Analysis Tools
- 🔍 **SEO Analysis** - Score and recommendations
- ♿ **Accessibility Check** - A11y compliance
- ⚡ **Performance Metrics** - Load times and resources
- 📦 **Resource Discovery** - External scripts/styles

### Export Options
- 💾 **JSON Export** - Save all collected data
- 📊 **Console Display** - View formatted results

---

## 🎮 Commands

### Main Menu Commands
```javascript
E91.run(0)   // Show menu
E91.run(1)   // Extract links
E91.run(2)   // Extract images
E91.run(3)   // Extract metadata
E91.run(4)   // Analyze structure
E91.run(5)   // Extract text content
E91.run(6)   // View collected data
E91.run(7)   // SEO analysis
E91.run(8)   // Accessibility check
E91.run(9)   // Find external resources
E91.run(10)  // Performance metrics
E91.run(11)  // Extract ALL data
E91.run(12)  // Export to JSON
```

### Direct Access Methods
```javascript
E91.extract.links()         // Extract links
E91.extract.images()        // Extract images
E91.extract.metadata()      // Get metadata
E91.extract.seo()          // Run SEO analysis
E91.extract.accessibility() // Check accessibility
E91.extract.performance()   // Get metrics

E91.data                    // View all data
E91.exportJSON()           // Download JSON
E91.help()                 // Show help
E91.about()                // About info
```

---

## 🛡️ What E91 Does NOT Do

This tool is **ETHICAL** and **SIMULATED**. It does NOT:

- ❌ Collect passwords or credentials
- ❌ Steal authentication tokens
- ❌ Access private/secured data
- ❌ Bypass security measures
- ❌ Send data to external servers
- ❌ Capture keystrokes
- ❌ Harvest personal information

**All data collection is limited to publicly visible, non-sensitive information.**

---

## 🔧 Customization & Extension

### Adding Your Own Scrapers

```javascript
// Add to the Scrapers object
Scrapers.myCustomScraper = function() {
    Utils.log('Running custom scraper...', 'info');
    
    // Your scraping logic here
    const data = [];
    document.querySelectorAll('.my-element').forEach(el => {
        data.push({
            text: el.textContent,
            class: el.className
        });
    });
    
    return data;
};

// Then use it
E91.extract.myCustomScraper = () => Scrapers.myCustomScraper();
```

### Modifying the Menu

```javascript
// Edit the showMenu() function to add your commands
// Add to the run() switch statement to handle them
```

### Changing Output Format

```javascript
// Modify exportJSON() to export to different formats
// Add CSV, XML, or other export options
```

---

## 📖 Use Cases

### 1. Security Testing
Test if your website's security prevents data extraction:
```javascript
E91.run(11)  // Try to extract all data
// If successful, improve your security!
```

### 2. SEO Auditing
Check your site's SEO health:
```javascript
E91.run(7)   // Get SEO score and recommendations
```

### 3. Accessibility Compliance
Ensure your site is accessible:
```javascript
E91.run(8)   // Check accessibility score
```

### 4. Performance Monitoring
Measure page load performance:
```javascript
E91.run(10)  // View performance metrics
```

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Contribution Guidelines
- Maintain ethical standards (no sensitive data collection)
- Add comments to your code
- Update documentation
- Test thoroughly
- Follow existing code style

---

## 📝 Modification Rights

✅ **YOU CAN:**
- Modify the code for personal use
- Add new features
- Improve existing features
- Fork and distribute (with attribution)
- Use in commercial projects (ethically)

❌ **YOU CANNOT:**
- Sell this tool as-is
- Remove attribution
- Use for illegal purposes
- Hold authors liable for your modifications
- Claim this as your original work

**See [LICENSE](LICENSE) for complete terms.**

---

## 🐛 Troubleshooting

### Tool won't load
- Check if console is disabled by site security
- Try on a different website
- Check for JavaScript errors

### No data extracted
- Some sites block scraping (this is good security!)
- Check if elements exist on the page
- Try different extraction methods

### Export not working
- Check browser download permissions
- Ensure data was collected first (`E91.run(11)`)
- Try manual copy: `copy(E91.data)`

---

## 🔗 Links

- **Repository**: [https://github.com/B4409/Project-E91](https://github.com/B4409/Project-E91)
- **Issues**: [Report bugs or request features](https://github.com/B4409/Project-E91/issues)
- **Discussions**: [Ask questions](https://github.com/B4409/Project-E91/discussions)

---

## 📜 License

This project is licensed under a **Custom Ethical Use License** - see the [LICENSE](LICENSE) file for details.

**TL;DR:** Use ethically, don't sell it, don't sue us if you misuse it.

---

## 👤 Author

**B4409**
- GitHub: [@B4409](https://github.com/B4409)

---

## ⭐ Show Your Support

If this tool helped you, please give it a ⭐️!

---

## 📞 Contact

Have questions? Open an issue or discussion on GitHub!

---

**Remember: With great power comes great responsibility. Use E91 ethically! 🛡️**
