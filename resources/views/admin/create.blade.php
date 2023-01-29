<x-admin-layout>
    <div class="container">
        <div class="row mb-5 mt-3">
            <div class="col-md-12">
                <div class="p-4 rounded shadow-sm bg-white">
                    <h2>Tulis Lowongan</h2>
                    @if (session()->has('message'))
                        <div class="alert alert-warning alert-dismissible col-md-6 fade show" role="alert">
                            {{ session()->get('message') }}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    @endif
                    <form method="post" action="{{ route('article.store') }}">
                        @csrf
                        <div class="row">
                            <div class="col-md-8">
                                <div class="mb-3">
                                    <label for="title" class="form-label">Judul lowongan</label>
                                    <input type="hidden" class="form-control @error('user_id') is-invalid @enderror"
                                        id="user_id" name="user_id" value={{ Auth::user()->id }}>
                                    <input type="text" class="form-control @error('title') is-invalid @enderror"
                                        id="title" name="title" placeholder="Masukan judul"
                                        value={{ old('title') }}>
                                    @error('title')
                                        <div class="invalid-feedback">{{ $message }}</div>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label for="deskripsi" class="form-label">Deskripsi</label>
                                    <textarea name="description" class="form-control  @error('description') is-invalid @enderror" id="deskripsi"
                                        cols="3" rows="3" style="resize: none">{{ old('description') }}</textarea>
                                    @error('description')
                                        <div class="invalid-feedback">{{ $message }}</div>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label for="body" class="form-label">Konten</label>
                                    <textarea name="body" id="editor1" class="form-control  @error('body') is-invalid @enderror" id="body"
                                        cols="3" rows="3" style="resize: none">{{ old('body') }}</textarea>

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
                                        value={{ old('company') }}>
                                    @error('company')
                                        <div class="invalid-feedback">{{ $message }}</div>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label for="body" class="form-label">Alamat Perusahaan</label>
                                    <input type="text" class="form-control @error('address') is-invalid @enderror"
                                        id="address" name="address" placeholder="Masukan alamat"
                                        value={{ old('address') }}>
                                    @error('address')
                                        <div class="invalid-feedback">{{ $message }}</div>
                                    @enderror
                                </div>
                                <div class="mb-3">
                                    <label for="kategori" class="form-label">Kategori</label>
                                    <select id="kategori"
                                        class="form-select  @error('category_id') is-invalid @enderror"
                                        name="category_id">
                                        <option selected>Pilih...</option>
                                        <option value="1">CPNS</option>
                                        <option value="2">BUMN</option>
                                        <option value="3">Instansi</option>
                                        <option value="4">Loker Subang</option>
                                        <option value="5">Luar Kota</option>
                                        <option value="6">Freelance</option>
                                        <option value="7">Magang</option>
                                        <option value="8">Pelatihan</option>
                                        <option value="9">Informasi</option>
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
                                            id="thumbnail" class="form-control" name="image">
                                        @error('image')
                                            <div class="invalid-feedback">{{ $message }}</div>
                                        @enderror
                                    </div>
                                    {{-- <div id="holder" style="margin-top:5px;max-height:500px;"></div> --}}
                                    <div id="holder" class="mt-3 img-fluid"></div>
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
