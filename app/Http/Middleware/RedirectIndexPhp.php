<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RedirectIndexPhp
{
    public function handle(Request $request, Closure $next)
    {
        if ($request->getPathInfo() === '/index.php') {
            abort(404);
        }

        return $next($request);
    }
}
