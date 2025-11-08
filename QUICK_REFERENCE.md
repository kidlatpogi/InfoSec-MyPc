# 🚀 Quick Reference Card - MyPC Project

## Start Server
```powershell
cd d:\Codes\HTML\SCHOOL\MyPC
python -m http.server 8000
```

## Test URLs
```
Landing:  http://localhost:8000/PHP/landingPage.html
Shop:     http://localhost:8000/PHP/homePage.html
Login:    http://localhost:8000/PHP/login.html
SignUp:   http://localhost:8000/PHP/createAccount.html
```

## CSS Files (Modular)
- `base.css` - Global styles, variables, animations
- `components.css` - Buttons, cards, forms, pagination
- `cart.css` - Cart drawer with animations
- `auth.css` - Login/signup forms
- `landing.css` - Landing page sections
- `styles.css` - Imports all above

## Key Features
✅ Responsive (Desktop, Tablet, Mobile)
✅ Shopping cart with localStorage
✅ Product search & filter
✅ Product sorting (4 options)
✅ Pagination (6 items per page)
✅ Smooth animations
✅ Form validation
✅ Professional white/black theme

## Responsive Breakpoints
- Desktop: 1200px+ (6-col grid)
- Tablet: 768px (4-col grid)
- Mobile: 480px (2-col grid)

## Color Palette (White/Black)
- Background: #ffffff (white)
- Surface: #f8f9fa (light gray)
- Text: #1a1a1a (dark)
- Accent: #000000 (black)
- Border: #e0e0e0 (light gray)

## Testing Checklist
- [ ] Landing page loads with animations
- [ ] Shop page displays 6 products
- [ ] Search filters products
- [ ] Category filter works
- [ ] Sort changes product order
- [ ] Add to cart increments count
- [ ] Cart drawer opens/closes smoothly
- [ ] Cart persists on refresh (F5)
- [ ] Form validation works
- [ ] Mobile layout responsive (DevTools)
- [ ] Hover effects smooth
- [ ] No console errors (F12)

## Common Tasks

**Change Product List:**
`JS/script.js` - Line 2-9 (PRODUCTS array)

**Change Colors:**
`CSS/base.css` - Line 4-11 (:root variables)

**Add New Landing Section:**
`PHP/landingPage.html` - Copy a section block
`CSS/landing.css` - Add corresponding styles

**Mobile Test:**
Chrome DevTools → F12 → Device Toggle (Ctrl+Shift+M)

## File Sizes (Approximate)
- styles.css: 1 KB (imports only)
- base.css: 2 KB
- components.css: 3.5 KB
- cart.css: 1.5 KB
- auth.css: 1.2 KB
- landing.css: 4 KB
- script.js: 6 KB
- HTML files: 3-5 KB each

**Total**: ~30 KB (very lightweight!)

## Troubleshooting

**CSS not loading?**
- Check path: `../CSS/styles.css`
- Open DevTools (F12) → Network tab
- Look for 404 errors

**Cart not working?**
- Check Console (F12) for errors
- Try opening in incognito mode
- Verify localStorage enabled

**Mobile layout broken?**
- Resize browser to test
- Use Chrome DevTools (Ctrl+Shift+M)
- Check if all CSS imports correctly

## Documentation Files
- README.md - Complete overview
- PROJECT_STRUCTURE.md - CSS organization
- TESTING_GUIDE.md - Testing checklist
- FINAL_SUMMARY.md - Project summary
- QUICK_REFERENCE.md - This file

## Performance Tips
- CSS already modular (no bloat)
- No external dependencies (fast loading)
- All images use placeholder.com (free CDN)
- LocalStorage for cart (instant)
- Smooth animations (60fps)

## Next Steps
1. Test on multiple browsers
2. Test on mobile device (not just DevTools)
3. Add real product images
4. Integrate backend API
5. Add payment processing
6. Deploy to hosting

## Stop Server
```powershell
Ctrl + C
```

---
**Everything is ready to use!** ✨
