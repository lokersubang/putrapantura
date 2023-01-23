<x-admin-layout title="Data Lowongan">
    <div class="row mt-3 mb-5">
        <div class="col-md-12">
            <div class="p-4 bg-white rounded">
                <h2>Data Lowongan</h2>
                @if (session()->has('message'))
                    <div class="alert alert-warning alert-dismissible col-md-6 fade show" role="alert">
                        {{ session()->get('message') }}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                @endif
                <form action="">
                    <div class="row mb-4">
                        <div class="col-md-6">
                            <form action="{{ route('article.index') }}" method="post">
                                <div class="input-group">
                                    <input type="text" class="form-control" name="search"
                                        placeholder="Data lowongan" value="{{ request('search') }}">
                                    <button type="submit" class="btn btn-primary" id="basic-addon2">Cari</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </form>

                <div class="row">

                    @if (!empty($posts))
                        @foreach ($posts as $post)
                            <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                                <div class="card bg-light d-flex flex-fill mb-3">
                                    <div class="card-header text-muted border-bottom-0">
                                        {{ $post->category->name }} </div>
                                    <div class="card-body mt-3">
                                        <div class="row">
                                            <div class="col-7">
                                                <h2 class="lead">{{ $post->title }}</h2>
                                            </div>
                                            <div class="col-5 text-center">
                                                <img src="{{ $post->image }}" alt="user-avatar" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <div class="text-right">
                                            <a href="{{ $post->slug }}.html" target="_blank"
                                                class="btn btn-sm btn-primary">
                                                <i class="fas fa-eye"></i> Lihat Post
                                            </a>
                                            <a href="{{ route('article.edit', $post->id) }}"
                                                class="btn btn-dark btn-sm  m-1">Edit</a>
                                            <form action="{{ route('article.delete', $post->id) }}" class="d-inline"
                                                method="post">
                                                @csrf
                                                @method('delete')
                                                <button type="submit" class="btn btn-danger btn-sm  m-1"
                                                    onclick="return confirm('Yakin mau dihapus?')">Hapus</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        @endforeach
                        {{ $posts->links() }}
                    @else
                        <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                            <div class="text-muted">Tidak ada postingan...</div>
                        </div>
                    @endif


                </div>
            </div>
        </div>
    </div>
</x-admin-layout>
