# 🛡️ Admin Dashboard - MyPC E-Commerce

## Access Admin Dashboard

### Test Credentials

**Admin Account:**
```
Email: admin@mypc.com
Password: admin123
```

**Test User Account (for reference):**
```
Email: test@example.com
Password: test123
```

## How to Access Admin Panel

1. **Login First:**
   - Go to http://localhost:8000/login
   - Enter admin credentials:
     - Email: `admin@mypc.com`
     - Password: `admin123`
   - Click Login

2. **Navigate to Admin Dashboard:**
   - After login, you'll see an **⚙️ Admin** link (red) in the top navbar
   - Click it to access the admin dashboard
   - URL: http://localhost:8000/admin

## Admin Dashboard Features

### 1. 👥 Manage Users

#### View All Users
- Table showing all registered users
- Displays: ID, Email, Name, Status, Created Date
- Search bar to filter users by email or name

#### Create New User
- Click **+ Add New User** button
- Fill in:
  - Email address
  - Full name
  - Password (auto-generated as "user123" if empty)
  - Check "Admin User" box to grant admin privileges
- Click Save

#### Edit User
- Click **Edit** button on any user row
- Modify email, name, admin status
- Leave password empty to keep current password
- Click Save

#### Delete User
- Click **Delete** button on any user row
- Confirm deletion
- User removed permanently

---

### 2. 📦 Manage Products

#### View All Products
- Table showing all products (8 built-in + any custom)
- Displays: ID, Title, Category, Price, Number of Variants
- Search bar to filter by name or category

#### View Product Details
- Click **View** button to see full product JSON
- Includes all variants and pricing info

#### Create New Product
- Click **+ Add New Product** button
- Fill in:
  - **Product Title:** e.g., "RTX 4080 GPU"
  - **Category:** e.g., "GPU", "CPU", "RAM", etc.
  - **Price:** In Philippine Pesos (₱)
  - **Variants:** JSON array of variants
    ```json
    [
      {"label":"Standard","priceDelta":0},
      {"label":"Premium","priceDelta":2000}
    ]
    ```
- Click Save
- Product appears in shop immediately (requires page refresh to see)

#### Edit Product
- Click **Edit** button on any product row
- Modify any field (title, category, price, variants)
- Variants must be valid JSON
- Click Save

#### Delete Product
- Click **Delete** button on any product row
- Confirm deletion
- Product removed permanently from shop

---

## Data Storage

All admin data is stored in **browser localStorage**:

- **Users:** `localStorage['mypc_admin_users']` - JSON array
- **Products:** `localStorage['mypc_admin_products']` - JSON array

**Note:** This is a demo implementation. In production, you would:
- Use a backend database (MongoDB, PostgreSQL, etc.)
- Implement proper authentication & authorization
- Add data validation and error handling
- Implement proper access control

---

## Admin Dashboard Interface

### Tab Navigation
- **👥 Manage Users** - User management (CRUD)
- **📦 Manage Products** - Product management (CRUD)

### Action Buttons
- **✏️ Edit** (Blue) - Modify existing item
- **🗑️ Delete** (Red) - Remove item
- **👁️ View** (Green) - View details (products only)

### Modals
- **Add/Edit User Modal** - Simple form for user data
- **Add/Edit Product Modal** - Extended form with JSON variant field
- **Confirm Delete Modal** - Safety confirmation before deletion

### Search & Filter
- Real-time search on both tabs
- Filter users by email or name
- Filter products by title or category

---

## Features & Capabilities

### User Management
✅ Create users with or without admin privileges  
✅ Edit user details and permissions  
✅ Delete users  
✅ Search users  
✅ View user status (Active/Inactive)  
✅ See user creation date  

### Product Management
✅ Create products with multiple variants  
✅ Edit all product details  
✅ Delete products  
✅ Search products  
✅ View product details  
✅ Auto-assign placeholder SVG images  
✅ Support for price variants (e.g., different editions)  

### UI/UX
✅ Clean, professional dashboard design  
✅ Responsive on desktop, tablet, mobile  
✅ Tab-based navigation  
✅ Modal dialogs for add/edit/delete  
✅ Real-time search filtering  
✅ Confirmation dialogs for destructive actions  
✅ Success/error alerts  
✅ Color-coded action buttons  
✅ Status badges  

---

## Default Admin Users

**Pre-configured accounts** (auto-created on first visit):

1. **admin@mypc.com** / `admin123` → Admin
2. **test@example.com** / `test123` → Regular User

---

## Example Workflows

### Adding a New Admin User
1. Login as admin@mypc.com
2. Go to Admin Dashboard
3. Click "+ Add New User"
4. Enter: 
   - Email: `newadmin@mypc.com`
   - Name: `New Admin`
   - Password: `secure123`
   - ✓ Check "Admin User"
5. Click Save
6. New admin can now login and access admin panel

### Adding a New Product Category
1. Go to Admin Dashboard
2. Click "+ Add New Product"
3. Enter:
   - Title: `ASUS RTX 4090 OC`
   - Category: `GPU`
   - Price: `75000`
   - Variants:
     ```json
     [
       {"label":"Standard","priceDelta":0},
       {"label":"Overclocked Edition","priceDelta":3500}
     ]
     ```
4. Click Save
5. Product appears in shop
6. Users can add to cart with different variants

---

## Security Notes

⚠️ **Demo Implementation** - Not production-ready!

**Security Considerations:**
- Passwords stored in plain text (localStorage) - use hashing in production
- No session expiration - implement timeouts
- No role-based access control (RBAC) - implement proper authorization
- No audit logs - track all admin actions
- No data encryption - encrypt sensitive data
- Browser-based storage - use secure backend database
- No HTTPS/SSL - always use HTTPS in production
- Anyone with browser access can access localStorage - implement session management

For production, integrate with:
- Backend API (Node.js, Python, etc.)
- Database (MongoDB, PostgreSQL, etc.)
- Authentication service (JWT, OAuth, etc.)
- Admin verification/2FA

---

## Customization

### Change Admin Color
In `CSS/admin.css`, search for:
```css
.admin-header h1 {
    color: var(--accent);
}
```

### Change Table Styling
Modify in `CSS/admin.css`:
```css
.admin-table thead {
    background: var(--surface);
}
```

### Add More Admin Functions
Add new functions to `JS/script.js` in the "ADMIN DASHBOARD FUNCTIONS" section

### Extend User Fields
Modify `getAdminUsers()` and `saveUser()` to include additional fields

---

## Troubleshooting

**Q: Admin link not showing after login?**
A: Make sure you're logged in with admin@mypc.com (not a regular user)

**Q: Can't add products with JSON?**
A: Ensure variants JSON is valid. Copy example format exactly.

**Q: Changes not persisting?**
A: Check browser's Developer Tools → Application → localStorage

**Q: Admin page shows "Access denied"?**
A: You must be logged in as an admin account first

---

## Browser Support

✅ Chrome/Chromium (recommended)  
✅ Firefox  
✅ Safari  
✅ Edge  

LocalStorage support required (all modern browsers)

---

**Happy administrating! 🎉**
