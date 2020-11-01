<?php

namespace App\Http\Controllers\Heroes;

use App\Http\Controllers\Controller;
use App\Models\HeroesModel;
use Illuminate\Http\Request;

class Heroes extends Controller
{
    private $data;

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
        $valida = $request->validate([
            'name' => 'requires|min=3'
        ]);
        if ($valida){
            $this->data = HeroesModel::create($request);
            return response($this->data,201);
        }
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
        $this->data=HeroesModel::find($id);
        if ($this->data){
            return response($this->data,200);
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
        //
        $this->data=HeroesModel::where(['id'=>$id])->first();
        if ($this->data){
            $this->data->update($request->all());
            return response($this->data,200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->data=HeroesModel::find($id);
        if ($this->data){
            $this->data->delete();
            return response($this->data,204);
        }
    }
}
