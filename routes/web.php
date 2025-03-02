<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', action: function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/students', function () {
    return Inertia::render('students');
})->name('students');

Route::get('/professors', function () {
    return Inertia::render('professors');
})->name('professors');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
