/**
 * ═══════════════════════════════════════════════════════════════════════
 * PROJECT E91 - Ethical Web Scraping & Analysis Tool
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * Version: 1.0.0
 * Repository: https://github.com/B4409/Project-E91
 * License: See LICENSE file
 * 
 * ⚠️  LEGAL NOTICE:
 * This tool is for EDUCATIONAL and ETHICAL purposes only.
 * Only use on websites you own or have explicit permission to test.
 * The authors are NOT responsible for misuse of this tool.
 * 
 * ═══════════════════════════════════════════════════════════════════════
 */

(function() {
    'use strict';

    // ═══════════════════════════════════════════════════════════════════
    // CONFIGURATION
    // ═══════════════════════════════════════════════════════════════════
    
    const CONFIG = {
        version: '1.0.0',
        author: 'B4409',
        github: 'https://github.com/B4409/Project-E91',
        ethical: true,
        collectSensitiveData: false // NEVER collect passwords, tokens, etc.
    };

    // ═══════════════════════════════════════════════════════════════════
    // ASCII ART & STYLING
    // ═══════════════════════════════════════════════════════════════════
    
    const BANNER = `
    ╔═══════════════════════════════════════════════════════════════════╗
    ║                                                                   ║
    ║   ██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗ ████████╗   ║
    ║   ██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝ ╚══██╔══╝   ║
    ║   ██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║         ██║      ║
    ║   ██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║         ██║      ║
    ║   ██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗    ██║      ║
    ║   ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝    ╚═╝      ║
    ║                                                                   ║
    ║                        E91 - ETHICAL EDITION                      ║
    ║              Web Scraping & Analysis Framework v1.0               ║
    ║                                                                   ║
    ║   Repository: https://github.com/B4409/Project-E91               ║
    ║                                                                   ║
    ╚═══════════════════════════════════════════════════════════════════╝
    `;

    const STYLES = {
        title: 'color: #00ff00; font-size: 20px; font-weight: bold;',
        success: 'color: #00ff00; font-weight: bold;',
        warning: 'color: #ffaa00; font-weight: bold;',
        error: 'color: #ff0000; font-weight: bold;',
        info: 'color: #00aaff; font-weight: bold;',
        data: 'color: #ffffff; background: #1a1a1a; padding: 10px; border-radius: 5px;'
    };

    // ═══════════════════════════════════════════════════════════════════
    // UTILITY FUNCTIONS
    // ═══════════════════════════════════════════════════════════════════
    
    const Utils = {
        log: function(message, style = 'info') {
            console.log(`%c${message}`, STYLES[style]);
        },
        
        table: function(data, title) {
            if (title) this.log(`\n${title}`, 'info');
            console.table(data);
        },
        
        separator: function() {
            console.log('\n' + '═'.repeat(70) + '\n');
        },
        
        isValidUrl: function(url) {
            try {
                new URL(url);
                return true;
            } catch {
                return false;
            }
        },
        
        sanitize: function(text) {
            return text.replace(/<[^>]*>/g, '').trim();
        },
        
        truncate: function(text, length = 100) {
            return text.length > length ? text.substring(0, length) + '...' : text;
        }
    };

    // ═══════════════════════════════════════════════════════════════════
    // SCRAPERS - Ethical data collection only
    // ═══════════════════════════════════════════════════════════════════
    
    const Scrapers = {
        // Extract all links
        getLinks: function() {
            Utils.log('📎 Extracting links...', 'info');
            
            const links = [];
            document.querySelectorAll('a[href]').forEach(link => {
                const url = link.href;
                const text = Utils.sanitize(link.textContent);
                
                if (url && !url.startsWith('javascript:')) {
                    links.push({
                        text: Utils.truncate(text, 50),
                        url: url,
                        internal: url.startsWith(window.location.origin),
                        target: link.target || '_self'
                    });
                }
            });
            
            Utils.log(`✓ Found ${links.length} links`, 'success');
            return links;
        },

        // Extract all images
        getImages: function() {
            Utils.log('🖼️  Extracting images...', 'info');
            
            const images = [];
            document.querySelectorAll('img').forEach(img => {
                images.push({
                    src: img.src,
                    alt: img.alt || 'No alt text',
                    width: img.naturalWidth || img.width,
                    height: img.naturalHeight || img.height,
                    loading: img.loading || 'eager'
                });
            });
            
            Utils.log(`✓ Found ${images.length} images`, 'success');
            return images;
        },

        // Extract meta information
        getMetadata: function() {
            Utils.log('📊 Extracting metadata...', 'info');
            
            const metadata = {
                title: document.title,
                description: document.querySelector('meta[name="description"]')?.content || 'N/A',
                keywords: document.querySelector('meta[name="keywords"]')?.content || 'N/A',
                author: document.querySelector('meta[name="author"]')?.content || 'N/A',
                ogTitle: document.querySelector('meta[property="og:title"]')?.content || 'N/A',
                ogDescription: document.querySelector('meta[property="og:description"]')?.content || 'N/A',
                ogImage: document.querySelector('meta[property="og:image"]')?.content || 'N/A',
                canonical: document.querySelector('link[rel="canonical"]')?.href || 'N/A',
                robots: document.querySelector('meta[name="robots"]')?.content || 'N/A',
                viewport: document.querySelector('meta[name="viewport"]')?.content || 'N/A',
                charset: document.characterSet || 'N/A',
                language: document.documentElement.lang || 'N/A'
            };
            
            Utils.log('✓ Metadata extracted', 'success');
            return metadata;
        },

        // Analyze page structure
        getStructure: function() {
            Utils.log('🏗️  Analyzing page structure...', 'info');
            
            const structure = {
                headings: {
                    h1: document.querySelectorAll('h1').length,
                    h2: document.querySelectorAll('h2').length,
                    h3: document.querySelectorAll('h3').length,
                    h4: document.querySelectorAll('h4').length,
                    h5: document.querySelectorAll('h5').length,
                    h6: document.querySelectorAll('h6').length
                },
                elements: {
                    paragraphs: document.querySelectorAll('p').length,
                    lists: document.querySelectorAll('ul, ol').length,
                    tables: document.querySelectorAll('table').length,
                    forms: document.querySelectorAll('form').length,
                    buttons: document.querySelectorAll('button').length,
                    inputs: document.querySelectorAll('input').length
                },
                media: {
                    images: document.querySelectorAll('img').length,
                    videos: document.querySelectorAll('video').length,
                    audios: document.querySelectorAll('audio').length,
                    iframes: document.querySelectorAll('iframe').length
                }
            };
            
            Utils.log('✓ Structure analyzed', 'success');
            return structure;
        },

        // Get text content (no sensitive data)
        getTextContent: function() {
            Utils.log('📝 Extracting text content...', 'info');
            
            const content = {
                headings: [],
                paragraphs: [],
                lists: []
            };
            
            // Get all headings
            document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
                content.headings.push({
                    level: heading.tagName.toLowerCase(),
                    text: Utils.sanitize(heading.textContent)
                });
            });
            
            // Get paragraphs (first 10)
            document.querySelectorAll('p').forEach((p, idx) => {
                if (idx < 10) {
                    const text = Utils.sanitize(p.textContent);
                    if (text.length > 20) {
                        content.paragraphs.push(Utils.truncate(text, 200));
                    }
                }
            });
            
            // Get list items
            document.querySelectorAll('ul li, ol li').forEach((li, idx) => {
                if (idx < 20) {
                    content.lists.push(Utils.sanitize(li.textContent));
                }
            });
            
            Utils.log('✓ Text content extracted', 'success');
            return content;
        },

        // Performance metrics
        getPerformance: function() {
            Utils.log('⚡ Analyzing performance...', 'info');
            
            if (!window.performance) {
                Utils.log('⚠ Performance API not available', 'warning');
                return null;
            }
            
            const perfData = performance.getEntriesByType('navigation')[0];
            const paintData = performance.getEntriesByType('paint');
            
            const metrics = {
                pageLoadTime: perfData ? Math.round(perfData.loadEventEnd - perfData.fetchStart) : 0,
                domContentLoaded: perfData ? Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart) : 0,
                firstPaint: paintData.find(p => p.name === 'first-paint')?.startTime || 0,
                firstContentfulPaint: paintData.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
                resources: performance.getEntriesByType('resource').length
            };
            
            Utils.log('✓ Performance analyzed', 'success');
            return metrics;
        },

        // SEO Analysis
        getSEOAnalysis: function() {
            Utils.log('🔍 Running SEO analysis...', 'info');
            
            const seo = {
                score: 0,
                issues: [],
                recommendations: []
            };
            
            // Check title
            if (!document.title || document.title.length < 10) {
                seo.issues.push('Title tag is missing or too short');
            } else if (document.title.length > 60) {
                seo.issues.push('Title tag is too long (>60 chars)');
            } else {
                seo.score += 10;
            }
            
            // Check description
            const description = document.querySelector('meta[name="description"]');
            if (!description || !description.content) {
                seo.issues.push('Meta description is missing');
            } else if (description.content.length < 50) {
                seo.issues.push('Meta description is too short');
            } else if (description.content.length > 160) {
                seo.issues.push('Meta description is too long');
            } else {
                seo.score += 10;
            }
            
            // Check H1
            const h1Count = document.querySelectorAll('h1').length;
            if (h1Count === 0) {
                seo.issues.push('No H1 tag found');
            } else if (h1Count > 1) {
                seo.issues.push('Multiple H1 tags found');
            } else {
                seo.score += 10;
            }
            
            // Check images alt text
            const imagesWithoutAlt = Array.from(document.querySelectorAll('img')).filter(img => !img.alt);
            if (imagesWithoutAlt.length > 0) {
                seo.issues.push(`${imagesWithoutAlt.length} images missing alt text`);
            } else if (document.querySelectorAll('img').length > 0) {
                seo.score += 10;
            }
            
            // Check canonical
            if (document.querySelector('link[rel="canonical"]')) {
                seo.score += 10;
            }
            
            // Check robots
            if (document.querySelector('meta[name="robots"]')) {
                seo.score += 10;
            }
            
            // Check viewport
            if (document.querySelector('meta[name="viewport"]')) {
                seo.score += 10;
            }
            
            // Check SSL
            if (window.location.protocol === 'https:') {
                seo.score += 10;
            } else {
                seo.issues.push('Site not using HTTPS');
            }
            
            // Generate recommendations
            if (seo.issues.length === 0) {
                seo.recommendations.push('Great job! No major SEO issues found.');
            } else {
                seo.recommendations.push('Fix the issues listed above to improve SEO');
            }
            
            Utils.log(`✓ SEO Score: ${seo.score}/80`, seo.score >= 60 ? 'success' : 'warning');
            return seo;
        },

        // Accessibility check
        getAccessibility: function() {
            Utils.log('♿ Checking accessibility...', 'info');
            
            const a11y = {
                score: 0,
                issues: [],
                passes: []
            };
            
            // Check images
            const imgsWithoutAlt = document.querySelectorAll('img:not([alt])').length;
            if (imgsWithoutAlt > 0) {
                a11y.issues.push(`${imgsWithoutAlt} images without alt text`);
            } else {
                a11y.passes.push('All images have alt text');
                a11y.score += 20;
            }
            
            // Check form labels
            const inputsWithoutLabel = Array.from(document.querySelectorAll('input')).filter(input => {
                return !input.labels || input.labels.length === 0;
            }).length;
            if (inputsWithoutLabel > 0) {
                a11y.issues.push(`${inputsWithoutLabel} inputs without labels`);
            } else if (document.querySelectorAll('input').length > 0) {
                a11y.passes.push('All inputs have labels');
                a11y.score += 20;
            }
            
            // Check language
            if (document.documentElement.lang) {
                a11y.passes.push('Page language is set');
                a11y.score += 20;
            } else {
                a11y.issues.push('Page language not set');
            }
            
            // Check headings hierarchy
            const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
            const levels = headings.map(h => parseInt(h.tagName[1]));
            let hierarchyCorrect = true;
            for (let i = 1; i < levels.length; i++) {
                if (levels[i] - levels[i-1] > 1) {
                    hierarchyCorrect = false;
                    break;
                }
            }
            if (hierarchyCorrect && headings.length > 0) {
                a11y.passes.push('Heading hierarchy is correct');
                a11y.score += 20;
            } else if (!hierarchyCorrect) {
                a11y.issues.push('Heading hierarchy has gaps');
            }
            
            // Check color contrast (basic)
            if (window.getComputedStyle(document.body).backgroundColor !== 'rgba(0, 0, 0, 0)') {
                a11y.score += 20;
            }
            
            Utils.log(`✓ Accessibility Score: ${a11y.score}/100`, a11y.score >= 70 ? 'success' : 'warning');
            return a11y;
        },

        // Find external resources
        getResources: function() {
            Utils.log('📦 Finding external resources...', 'info');
            
            const resources = {
                scripts: [],
                stylesheets: [],
                fonts: [],
                other: []
            };
            
            // Scripts
            document.querySelectorAll('script[src]').forEach(script => {
                resources.scripts.push({
                    src: script.src,
                    async: script.async,
                    defer: script.defer
                });
            });
            
            // Stylesheets
            document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
                resources.stylesheets.push(link.href);
            });
            
            // Fonts
            document.querySelectorAll('link[rel*="font"]').forEach(link => {
                resources.fonts.push(link.href);
            });
            
            Utils.log(`✓ Found ${resources.scripts.length} scripts, ${resources.stylesheets.length} stylesheets`, 'success');
            return resources;
        }
    };

    // ═══════════════════════════════════════════════════════════════════
    // MAIN E91 OBJECT
    // ═══════════════════════════════════════════════════════════════════
    
    window.E91 = {
        version: CONFIG.version,
        config: CONFIG,
        data: {},
        
        // Initialize and show menu
        init: function() {
            console.clear();
            console.log('%c' + BANNER, 'color: #00ff00; font-family: monospace;');
            
            Utils.log('\n⚠️  ETHICAL USE ONLY - SIMULATED SCRAPING TOOL', 'warning');
            Utils.log('This tool extracts PUBLIC, NON-SENSITIVE data only.', 'info');
            Utils.log('Repository: ' + CONFIG.github, 'info');
            Utils.separator();
            
            this.showMenu();
        },
        
        // Display main menu
        showMenu: function() {
            Utils.log('═══════════════ MAIN MENU ═══════════════', 'title');
            console.log(`
  [1]  Extract Links                    [7]  SEO Analysis
  [2]  Extract Images                   [8]  Accessibility Check
  [3]  Extract Metadata                 [9]  Find External Resources
  [4]  Analyze Structure                [10] Performance Metrics
  [5]  Extract Text Content             [11] Extract ALL Data
  [6]  View Current Data                [12] Export to JSON
  
  [0]  Show this menu                   [help] Documentation
  [clear] Clear console                 [about] About E91
            `);
            Utils.log('═════════════════════════════════════════', 'title');
            Utils.log('\nType E91.run(number) to execute a command', 'info');
            Utils.log('Example: E91.run(1) or E91.extract.links()', 'info');
            Utils.separator();
        },
        
        // Run command by number
        run: function(command) {
            Utils.separator();
            
            switch(command) {
                case 0:
                    this.showMenu();
                    break;
                case 1:
                    this.data.links = Scrapers.getLinks();
                    Utils.table(this.data.links.slice(0, 10), '📎 Links (showing first 10):');
                    break;
                case 2:
                    this.data.images = Scrapers.getImages();
                    Utils.table(this.data.images.slice(0, 10), '🖼️  Images (showing first 10):');
                    break;
                case 3:
                    this.data.metadata = Scrapers.getMetadata();
                    Utils.table([this.data.metadata], '📊 Metadata:');
                    break;
                case 4:
                    this.data.structure = Scrapers.getStructure();
                    console.log('🏗️  Page Structure:');
                    console.log(this.data.structure);
                    break;
                case 5:
                    this.data.content = Scrapers.getTextContent();
                    console.log('📝 Text Content:');
                    console.log(this.data.content);
                    break;
                case 6:
                    console.log('📂 Current Collected Data:');
                    console.log(this.data);
                    break;
                case 7:
                    this.data.seo = Scrapers.getSEOAnalysis();
                    console.log('🔍 SEO Analysis:');
                    console.log(this.data.seo);
                    break;
                case 8:
                    this.data.accessibility = Scrapers.getAccessibility();
                    console.log('♿ Accessibility Check:');
                    console.log(this.data.accessibility);
                    break;
                case 9:
                    this.data.resources = Scrapers.getResources();
                    console.log('📦 External Resources:');
                    console.log(this.data.resources);
                    break;
                case 10:
                    this.data.performance = Scrapers.getPerformance();
                    Utils.table([this.data.performance], '⚡ Performance Metrics:');
                    break;
                case 11:
                    this.extractAll();
                    break;
                case 12:
                    this.exportJSON();
                    break;
                default:
                    Utils.log('❌ Invalid command. Type E91.run(0) for menu', 'error');
            }
            
            Utils.separator();
        },
        
        // Extract all data at once
        extractAll: function() {
            Utils.log('🚀 Extracting all available data...', 'info');
            Utils.separator();
            
            this.data = {
                timestamp: new Date().toISOString(),
                url: window.location.href,
                links: Scrapers.getLinks(),
                images: Scrapers.getImages(),
                metadata: Scrapers.getMetadata(),
                structure: Scrapers.getStructure(),
                content: Scrapers.getTextContent(),
                seo: Scrapers.getSEOAnalysis(),
                accessibility: Scrapers.getAccessibility(),
                resources: Scrapers.getResources(),
                performance: Scrapers.getPerformance()
            };
            
            Utils.separator();
            Utils.log('✅ All data extracted successfully!', 'success');
            Utils.log('📊 Summary:', 'info');
            console.log(`  - ${this.data.links.length} links`);
            console.log(`  - ${this.data.images.length} images`);
            console.log(`  - SEO Score: ${this.data.seo.score}/80`);
            console.log(`  - Accessibility Score: ${this.data.accessibility.score}/100`);
            Utils.log('\nType E91.run(6) to view all data', 'info');
            Utils.log('Type E91.run(12) to export as JSON', 'info');
        },
        
        // Export data as JSON
        exportJSON: function() {
            if (Object.keys(this.data).length === 0) {
                Utils.log('⚠ No data to export. Run extraction first!', 'warning');
                return;
            }
            
            Utils.log('💾 Exporting data to JSON...', 'info');
            
            const jsonData = JSON.stringify(this.data, null, 2);
            const blob = new Blob([jsonData], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = `E91-export-${Date.now()}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            Utils.log('✅ Data exported successfully!', 'success');
        },
        
        // Individual extractors (alternative access)
        extract: {
            links: () => Scrapers.getLinks(),
            images: () => Scrapers.getImages(),
            metadata: () => Scrapers.getMetadata(),
            structure: () => Scrapers.getStructure(),
            content: () => Scrapers.getTextContent(),
            seo: () => Scrapers.getSEOAnalysis(),
            accessibility: () => Scrapers.getAccessibility(),
            resources: () => Scrapers.getResources(),
            performance: () => Scrapers.getPerformance()
        },
        
        // Help documentation
        help: function() {
            console.clear();
            Utils.log('═══════════════ E91 DOCUMENTATION ═══════════════', 'title');
            console.log(`
PROJECT E91 - Ethical Web Scraping Tool
Version ${CONFIG.version}

USAGE:
  E91.init()              - Show main menu
  E91.run(number)         - Execute command by number
  E91.extract.links()     - Direct extraction methods
  E91.data                - View collected data
  E91.exportJSON()        - Export as JSON
  E91.help()              - This help screen

FEATURES:
  ✓ Extract links, images, metadata
  ✓ SEO analysis and recommendations
  ✓ Accessibility checking
  ✓ Performance metrics
  ✓ Structure analysis
  ✓ Export to JSON
  
  ✗ NO password collection
  ✗ NO token stealing
  ✗ NO sensitive data harvesting

ETHICAL USE:
  - Only use on websites you own/have permission
  - This is a SIMULATED tool for testing security
  - Respect robots.txt and terms of service
  - Do not use for malicious purposes

REPOSITORY:
  ${CONFIG.github}

LICENSE:
  See LICENSE file in repository
            `);
            Utils.log('═══════════════════════════════════════════════', 'title');
        },
        
        // About information
        about: function() {
            console.clear();
            console.log('%c' + BANNER, 'color: #00ff00; font-family: monospace;');
            console.log(`
╔═══════════════════════════════════════════════════════════════════╗
║                         ABOUT PROJECT E91                         ║
╚═══════════════════════════════════════════════════════════════════╝

Project E91 is an ethical web scraping and analysis tool designed for:
  • Security testing (your own sites)
  • SEO analysis
  • Accessibility auditing  
  • Performance monitoring
  • Educational purposes

WHAT IT DOES:
  ✓ Extracts public, non-sensitive data
  ✓ Analyzes page structure and metadata
  ✓ Provides SEO and accessibility scores
  ✓ Measures performance metrics

WHAT IT DOESN'T DO:
  ✗ Collect passwords or credentials
  ✗ Steal authentication tokens
  ✗ Harvest personal information
  ✗ Bypass security measures

Created by: ${CONFIG.author}
Repository: ${CONFIG.github}
Version: ${CONFIG.version}

⚠️  LEGAL NOTICE:
This tool is for EDUCATIONAL purposes only. Use responsibly and legally.
The authors are NOT liable for misuse. See LICENSE for full terms.

Type E91.init() to start!
            `);
        }
    };

    // ═══════════════════════════════════════════════════════════════════
    // AUTO-INITIALIZE
    // ═══════════════════════════════════════════════════════════════════
    
    // Initialize on load
    E91.init();
    
    // Quick access commands
    window.e91 = window.E91; // Lowercase alias
    window.help = () => E91.help();
    window.about = () => E91.about();
    window.clear = () => console.clear();
    
    Utils.log('💡 Quick commands: help(), about(), clear()', 'info');
    Utils.separator();

})();
