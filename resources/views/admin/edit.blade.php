<x-admin-layout title="Edit Lowongan">
    <div class="container">
        <div class="row mb-5 mt-3">
            <div class="col-md-12">
                <div class="p-4 rounded shadow-sm bg-white">
                    <h2>Edit Lowongan</h2>
                    @if (session()->has('message'))
                        <div class="alert alert-warning alert-dismissible col-md-6 fade show" role="alert">
                            {{ session()->get('message') }}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    @endif
                    <form method="post" action="{{ route('article.update', $article->id) }}">
                        @csrf
                        @method('put')
                        <div class="row">
                            <div class="col-md-8">
                                <div class="mb-3">
                                    <label for="title" class="form-label">Judul lowongan</label>
                                    <input type="hidden" class="form-control @error('user_id') is-invalid @enderror"
                                        id="user_id" name="user_id" value={{ $article->user_id }}>
                                    <input type="text" class="form-control @error('title') is-invalid @enderror"
                                        id="title" name="title" placeholder="Masukan judul"
                                        value="{{ old('title') ?? $article->title }}">
                                    @error('title')
                                        <div class="invalid-feedback">{{ $message }}</div>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label for="deskripsi" class="form-label">Deskripsi</label>
                                    <textarea name="description" class="form-control  @error('description') is-invalid @enderror" id="deskripsi"
                                        cols="3" rows="3" style="resize: none">{{ old('desc') ?? $article->description }}</textarea>
                                    @error('description')
                                        <div class="invalid-feedback">{{ $message }}</div>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label for="body" class="form-label">Konten</label>
                                    <textarea name="body" id="editor1" class="form-control  @error('body') is-invalid @enderror" id="body"
                                        cols="3" rows="3" style="resize: none">{{ old('body') ?? $article->body }}</textarea>

                                    @error('body')
                                        <div class="invalid-feedback">{{ $message }}</div>
                                    @enderror

                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mb-3">
                                    <label for="body" class="form-label">Nama Perusahaan</label>
                                    <input type="text" class="form-control @error('company') is-invalid @enderror"
                                        id="company" name="company" placeholder="Masukan nama"
                                        value="{{ old('company') ?? $article->company }}">
                                    @error('company')
                                        <div class="invalid-feedback">{{ $message }}</div>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label for="body" class="form-label">Alamat Perusahaan</label>
                                    <input type="text" class="form-control @error('address') is-invalid @enderror"
                                        id="address" name="address" placeholder="Masukan alamat"
                                        value="{{ old('address') ?? $article->address }}">
                                    @error('address')
                                        <div class="invalid-feedback">{{ $message }}</div>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label for="kategori" class="form-label">Kategori</label>
                                    <select id="kategori"
                                        class="form-select  @error('category_id') is-invalid @enderror"
                                        name="category_id">
                                        <option value="1" {{ $article->category_id == '1' ? 'selected' : '' }}>
                                            CPNS</option>
                                        <option value="2" {{ $article->category_id == '2' ? 'selected' : '' }}>
                                            BUMN</option>
                                        <option value="3" {{ $article->category_id == '3' ? 'selected' : '' }}>
                                            Instansi</option>
                                        <option value="4" {{ $article->category_id == '4' ? 'selected' : '' }}>
                                            Loker Subang</option>
                                        <option value="5" {{ $article->category_id == '5' ? 'selected' : '' }}>
                                            Luar Kota</option>
                                        <option value="6" {{ $article->category_id == '6' ? 'selected' : '' }}>
                                            Freelance</option>
                                        <option value="7" {{ $article->category_id == '7' ? 'selected' : '' }}>
                                            Magang</option>
                                        <option value="8" {{ $article->category_id == '8' ? 'selected' : '' }}>
                                            Pelatihan</option>
                                        <option value="9" {{ $article->category_id == '9' ? 'selected' : '' }}>
                                            Informasi</option>

                                    </select>
                                    @error('category_id')
                                        <div class="invalid-feedback">{{ $message }}</div>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label for="gambar">Gambar</label>
                                    <div class="input-group">
                                        <span class="input-group-text" id="lfm" data-input="thumbnail"
                                            data-preview="holder">Pilih Gambar</span>
                                        <input type="text" class="form-control @error('image') is-invalid @enderror"
                                            id="thumbnail" class="form-control" name="image"
                                            value="{{ $article->image }}">
                                        @error('image')
                                            <div class="invalid-feedback">{{ $message }}</div>
                                        @enderror
                                    </div>
                                    <img src="{{ $article->image }}" alt="image" class="mt-2" width="170px">

                                    <div id="holder" style="margin-top:5px;max-height:500px;"></div>
                                    {{-- <div id="holder" class="mt-3 img-fluid"></div> --}}
                                </div>
                            </div>


                        </div>
                        <button type="submit" class="btn btn-primary">Simpan</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-admin-layout>
