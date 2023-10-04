<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\URL;

class ActiveUser
{

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $redirectToRoute
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse|null
     */
    public function handle($request, Closure $next, $redirectToRoute = null)
    {
        if (! $request->user() ||
            ($request->user()->status === 'pending')) {
//            session()->flush();
            return $request->expectsJson()
                ? abort(403, 'You are not an active user.')
                : Redirect::guest(URL::route($redirectToRoute ?: 'login'))->with('error', 'You are not an active user.');
        }

        return $next($request);
    }
}
