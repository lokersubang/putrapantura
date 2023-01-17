<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'category_id' => 'required|in:1,2,3,4,5,6,7,8,9',
            'user_id' => 'required',
            'title' => 'required',
            'description' => 'required|max:300',
            'body' => 'required',
            'address' => 'required',
            'company' => 'required',
            'image' => 'required'
        ];
    }
}
