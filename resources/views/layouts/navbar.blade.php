<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
    <div class="container">
        <a class="navbar-brand" href={{ route('home') }}> <img src="/img/logo.png" width="135"></img></a>
        <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
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
                        <li><a class="dropdown-item" href="#">Subang</a></li>
                        <li><a class="dropdown-item" href="#">Luar Kota</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">CPNS</a></li>
                        <li><a class="dropdown-item" href="#">BUMN</a></li>
                        <li><a class="dropdown-item" href="#">Freelance</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Magang</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pelatihan</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Informasi</a>
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
                            <a class="dropdown-item" href="#">
                                <i class="fa-solid fa-pencil"></i>
                                Tulis Lowongan
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
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
