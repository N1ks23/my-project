<?php

namespace App\Http\Controllers;

use App\Models\PortfolioContent;

class PortfolioController extends Controller
{
    public function index()
    {
        $content = PortfolioContent::where('key', 'portfolio')->first();
        $portfolio = $content?->value ?? config('portfolio');

        return view('portfolio', [
            'portfolio' => $portfolio,
        ]);
    }
}
