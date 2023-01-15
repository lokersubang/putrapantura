<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InformationController extends Controller
{
    public function about()
    {
        return inertia('Information/About');
    }

    public function contact()
    {
        return inertia('Information/Contact');
    }

    public function privacyPolicy()
    {
        return inertia('Information/Privacy');
    }

    public function disclaimer()
    {
        return inertia('Information/Disclaimer');
    }

    public function termofservice()
    {
        return inertia('Information/TermOfService');
    }

    public function faq()
    {
        return inertia('Information/Faq');
    }
}
