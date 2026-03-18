<?php

namespace Database\Seeders;

use App\Models\PortfolioContent;
use Illuminate\Database\Seeder;

class PortfolioContentSeeder extends Seeder
{
    public function run(): void
    {
        PortfolioContent::updateOrCreate(
            ['key' => 'portfolio'],
            ['value' => config('portfolio')]
        );
    }
}
