# Deployment (Docker)

This app is ready to deploy to any Docker-capable platform (Render, Railway, Fly, VPS, etc.).

## 1) Build the image
```bash
docker build -t leonisis-portfolio:latest .
```

## 2) Run locally (production-like)
```bash
docker run --rm -p 8080:80 \
  -e APP_ENV=production \
  -e APP_DEBUG=false \
  -e APP_KEY=base64:YOUR_KEY_HERE \
  -e DB_CONNECTION=sqlite \
  -e DB_DATABASE=/var/www/html/database/database.sqlite \
  leonisis-portfolio:latest
```

## 3) Generate APP_KEY
```bash
php artisan key:generate --show
```
Copy the output and set it as `APP_KEY` in your environment.

## 4) Database (SQLite)
In production, run migrations once:
```bash
php artisan migrate --force
php artisan db:seed --force
```

## 5) Update content
The portfolio content is stored in the `portfolio_contents` table as JSON.
You can update it with a DB tool or via `php artisan tinker`:
```php
App\Models\PortfolioContent::where('key', 'portfolio')->update([
    'value' => config('portfolio'),
]);
```

## 6) Recommended production commands
```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
```
