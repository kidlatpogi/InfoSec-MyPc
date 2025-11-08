/* Router - Handles all page navigation and clean URLs */

class Router {
    constructor() {
        this.currentPage = null;
        this.pages = {
            '/': 'landing',
            '/shop': 'home',
            '/login': 'login',
            '/signup': 'signup',
            '/checkout': 'checkout',
            '/profile': 'profile',
            '/admin': 'admin'
        };
        
        // Store original history state for back button
        window.addEventListener('popstate', (e) => this.handleRouteChange(e));
        
        // Intercept all link clicks
        document.addEventListener('click', (e) => this.handleLinkClick(e));
        
        // Handle initial route
        this.init();
    }
    
    init() {
        // Remove trailing slash for clean URLs
        let path = window.location.pathname;
        if (path.endsWith('/index.html')) {
            path = path.replace('/index.html', '') || '/';
        }
        if (path !== '/' && path.endsWith('/')) {
            path = path.slice(0, -1);
        }
        
        this.route(path);
    }
    
    handleLinkClick(e) {
        const link = e.target.closest('a');
        if (!link) return;
        
        const href = link.getAttribute('href');
        
        // Only handle internal navigation links
        if (href && !href.startsWith('http') && !href.startsWith('#') && href.includes('/')) {
            e.preventDefault();
            // If clicking the same page, reload the page content without server request
            const currentPath = window.location.pathname === '/' ? '/' : window.location.pathname;
            if (currentPath === href) {
                // Reload page content without making server request
                const page = this.pages[href] || 'landing';
                const app = document.getElementById('app');
                app.style.opacity = '0';
                app.style.transition = 'opacity 0.3s ease-out';
                setTimeout(() => {
                    this.loadPage(page);
                }, 300);
            } else {
                this.navigateTo(href);
            }
        } else if (href && href.startsWith('#')) {
            // Handle anchor links with smooth scroll
            e.preventDefault();
            const elementId = href.slice(1);
            const element = document.getElementById(elementId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }
    
    handleRouteChange(e) {
        const path = e.state?.path || '/';
        this.route(path, false);
    }
    
    navigateTo(path) {
        // Add page exit animation
        const app = document.getElementById('app');
        app.style.opacity = '0';
        app.style.transition = 'opacity 0.3s ease-out';
        
        // After animation, load new page
        setTimeout(() => {
            this.route(path, true);
        }, 300);
    }
    
    route(path, pushState = true) {
        // Normalize path
        if (path.endsWith('/index.html')) {
            path = path.replace('/index.html', '') || '/';
        }
        
        const page = this.pages[path] || 'landing';
        
        if (this.currentPage === page) return;
        
        this.currentPage = page;
        
        // Push state to history
        if (pushState && path !== window.location.pathname) {
            window.history.pushState({ path }, '', path === '/' ? '/' : path);
        }
        
        // Load and render page
        this.loadPage(page);
    }
    
    loadPage(page) {
        const app = document.getElementById('app');
        
        // Load HTML content from PHP folder
        fetch(`PHP/${page}Page.html`)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to load ${page}Page.html`);
                return response.text();
            })
            .then(html => {
                // Pages are stored without body tags - just use the content directly
                app.innerHTML = html;
                
                // Add entrance animation
                app.style.opacity = '1';
                app.style.transition = 'opacity 0.3s ease-out';
                
                // Reload scripts specific to this page
                this.reloadPageScripts(page);
                
                // Update page title
                const title = {
                    'landing': 'MyPC - Premium PC Components Store',
                    'home': 'Shop - MyPC Components Store',
                    'login': 'Login - MyPC',
                    'signup': 'Sign Up - MyPC',
                    'checkout': 'Checkout - MyPC',
                    'profile': 'My Profile - MyPC',
                    'admin': 'Admin Dashboard - MyPC'
                };
                document.title = title[page] || 'MyPC';
            })
            .catch(error => {
                console.error('Router Error:', error);
                app.innerHTML = '<div style="padding: 2rem; text-align: center;"><h1>Page not found</h1><p>Sorry, the page you requested could not be found.</p></div>';
            });
    }
    
    reloadPageScripts(page) {
        // Remove old scripts except router
        document.querySelectorAll('script[data-page]').forEach(script => script.remove());
        
        // Always load script.js first for all pages (it handles user session and auth nav)
        const script = document.createElement('script');
        script.src = 'JS/script.js?v=' + Date.now();
        script.dataset.page = page;
        script.defer = false;
        script.onload = () => {
            // Call initialization after script loads
            if (window.initializePageScript) {
                window.initializePageScript();
            }
            // Ensure updateAuthNav is called after initialization
            setTimeout(() => {
                if (window.updateAuthNav) {
                    window.updateAuthNav();
                }
            }, 50);
        };
        document.body.appendChild(script);
        
        // Reload page transition handler after a small delay to ensure DOM is ready
        setTimeout(() => {
            const transitionScript = document.createElement('script');
            transitionScript.src = 'JS/pageTransition.js?v=' + Date.now();
            transitionScript.dataset.page = page;
            transitionScript.defer = false;
            document.body.appendChild(transitionScript);
        }, 100);
    }
}

// Initialize router when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.router = new Router();
    });
} else {
    window.router = new Router();
}
