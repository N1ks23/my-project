# Nik Dev Portfolio (Laravel 11)

A clean, modern portfolio rebuilt on Laravel 11 with a database-driven content layer and a production-ready deployment path.

## Highlights
- Laravel 11 backend
- Database-driven portfolio content (JSON stored in `portfolio_contents`)
- Polished front-end UI preserved
- Docker deployment path included

## Tech Stack
- Laravel 11
- PHP 8.3
- SQLite
- Blade, Vanilla JS, CSS

## Project Structure
- `app/` - Laravel application logic
- `config/` - Configuration
- `database/` - Migrations and seeders
- `public/` - Static assets (CSS/JS/images)
- `resources/views/` - Blade templates
- `DEPLOYMENT.md` - Production deployment guide

## Local Setup (Windows)
```powershell
cd "C:\Users\Admin\Desktop\laravel-app"
& "C:\Users\Admin\AppData\Local\Microsoft\WinGet\Packages\PHP.PHP.8.3_Microsoft.Winget.Source_8wekyb3d8bbwe\php.exe" artisan key:generate
& "C:\Users\Admin\AppData\Local\Microsoft\WinGet\Packages\PHP.PHP.8.3_Microsoft.Winget.Source_8wekyb3d8bbwe\php.exe" artisan migrate --seed
& "C:\Users\Admin\AppData\Local\Microsoft\WinGet\Packages\PHP.PHP.8.3_Microsoft.Winget.Source_8wekyb3d8bbwe\php.exe" artisan serve
```

Then open:
- `http://127.0.0.1:8000`

## Local Setup (Standard PHP)
```bash
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

## Content Editing
Portfolio content is stored in the `portfolio_contents` table (JSON under key `portfolio`).
Update it with a DB tool or via Laravel tinker:
```php
App\Models\PortfolioContent::where('key', 'portfolio')->update([
    'value' => config('portfolio'),
]);
```

## Deployment
See `DEPLOYMENT.md` for Docker deployment steps and recommended production commands.
