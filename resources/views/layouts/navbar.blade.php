<nav class="navbar navbar-expand-lg fixed-top navbar-dark" style="background-color: #10172a" aria-label="Main navigation">
    <div class="container">
        <a class="navbar-brand" href={{ route('home') }}> <img src="/img/logo.png" alt="lokersubang.com" loading="load"
                width="135" /></a>
        <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href={{ route('home') }}>
                        <i class="fa-solid fa-house"></i>
                        Home
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                        aria-expanded="false">Lowongan Kerja</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/kategori/loker-subang">Loker Subang</a></li>
                        <li><a class="dropdown-item" href="/kategori/luar-kota">Luar Kota</a></li>
                       <li><a class="dropdown-item" href="/kategori/freelance">Freelance</a></li>
                         <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="/kategori/cpns">CPNS</a></li>
                        <li><a class="dropdown-item" href="/kategori/bumn">BUMN</a></li>
                        <li><a class="dropdown-item" href="/kategori/instansi">Instansi</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/kategori/magang">Magang</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/kategori/pelatihan">Pelatihan</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/kategori/informasi">Informasi</a>
                </li>
            </ul>
            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="fa-solid fa-user"></i> {{ Auth::user()->name }}
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href={{ route('dashboard') }}>
                                <i class="fa-solid fa-home"></i>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="{{ route('article.create') }}">
                                <i class="fa-solid fa-pencil"></i>
                                Tulis Lowongan
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="{{ route('article.index') }}">
                                <i class="fa-solid fa-address-book"></i>
                                Data Lowongan
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li>
                            <a class="dropdown-item" href={{ route('profile.edit') }}>
                                <i class="fa-solid fa-user-gear"></i>
                                Profile
                            </a>
                        </li>
                        <li>
                            <form action="{{ route('logout') }}" method="post">
                                @csrf
                                <button class="dropdown-item" type="submit">
                                    <i class="fa-solid fa-right-to-bracket"></i>
                                    Logout
                                </button>
                            </form>
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    </div>
</nav>

<div class="nav-scroller bg-body shadow-sm">
    <div class="container">
        <nav class="nav" aria-label="Secondary navigation">
            {{-- <a class="nav-link" href="#">
                Friends
                <span class="badge text-bg-light rounded-pill align-text-bottom">27</span>
            </a> --}}
            <a class="nav-link active" aria-current="page" href="#">About</a>
            <a class="nav-link" href="#">Contact</a>
            <a class="nav-link" href="#">Privacy Policy</a>
            <a class="nav-link" href="#">Disclaimer</a>
            <a class="nav-link" href="#">Ternm Of Service</a>
            <a class="nav-link" href="#">FAQ?</a>
        </nav>
    </div>
</div>
