<?php

namespace App\Http\Controllers\Heroes;

use App\Http\Controllers\Controller;
use App\Models\HeroesModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class Heroes extends Controller
{
    private $data;
    private $data_upload;
    private $dados=[];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //List all Heroes
        $this->data = HeroesModel::all();
        return response($this->data, 200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Salva Usuario
        $dados['name']=$request->name;
        $dados['resume'] = $request->resume;
        $dados['image']=$request->file('image')->getClientOriginalName();
        $dados['description']=$request->description;
        $this->data = HeroesModel::create($dados);
        if ($this->data){
            $this->data_upload = [
                'type' => $request->file('image')->getClientMimeType(),
                'tmp_name' => $request->file('image')->getPathname(),
                'size' => $request->file('image')->getSize(),
            ];
            $uploadimg = new \App\Http\Controllers\Functions\UploadImgRed();
            $uploadimg->uploadImagem($this->data_upload, public_path("/img/heroes/" . $this->data['id'] . "/")
                , $request->file('image')->getClientOriginalName(), 350, 350);
        }
        return response($this->data, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $this->data = HeroesModel::find($id);
        if ($this->data) {
            return response($this->data, 200);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->dados['name'] = $request->name;
        $this->dados['resume'] = $request->resume;
        $this->dados['description'] = $request->description;
        $this->data = HeroesModel::where(['id' => $id])->first();
        if ($this->data) {
            $this->data->update($this->dados);
            return response($this->data, 200);
        }
    }

    public function updateImg(Request $request, $id)
    {
        $message = [
            'image.image' => htmlspecialchars('É necessario uma imagem')
        ];
        $rules = [
            'image' => 'required|image',
        ];
        $this->validator = Validator::make($request->all(), $rules, $message);
        if ($this->validator->fails()):
            return response()->json($this->validator->errors(), 400);
        else:
            $this->data = HeroesModel::where(['id' => $id])->first();
            if (is_null($this->data)):
                return response()->json(["message" => htmlspecialchars("Heroi não encontrado")], 404);
            else:
                $uploadimg = new \App\Http\Controllers\Functions\UploadImgRed();
                $this->data_upload = [
                    'type' => $request->file('image')->getClientMimeType(),
                    'tmp_name' => $request->file('image')->getPathname(),
                    'size' => $request->file('image')->getSize(),
                ];
                $uploadimg->uploadImagem($this->data_upload, public_path("/img/heroes/" . $this->data['id'] . "/")
                    , $request->file('image')->getClientOriginalName(), 350, 350);
                if ($uploadimg->getResultado()) {
                    $this->dados = [
                        'image' => $request->file('image')->getClientOriginalName(),
                    ];
                    if (!is_null($this->data['image'])) {
                        $apagarimg = new \App\Http\Controllers\Functions\UpdateImg();
                        $apagarimg->atualizarImg(public_path("/img/heroes/" . $this->data['id'] . "/") . $this->data['image']);
                    }
                    $this->data = HeroesModel::where('id', $id)->update($this->dados);
                    return response()->json(["message" => htmlspecialchars("Imagem atualizada com sucesso")], 201);
                } else {
                    return response()->json(["message" => htmlspecialchars("Selecione uma imagem png ou Jpg de até 392kb")], 404);
                }
            endif;
        endif;
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->data = HeroesModel::find($id);
        if ($this->data) {
            if (isset( $this->data['image']) and !is_null( $this->data['image'])) {
                $apagarImg = new \App\Http\Controllers\Functions\DeleteImg();
                $apagarImg->apagarImg(public_path("/img/heroes/" .  $this->data['id'] . "/") .  $this->data['image'],
                    public_path("/img/heroes/" .  $this->data['id'])
                );
            }
            $this->data->delete();
            return response($this->data, 204);
        }
    }
}
