<?php

namespace App\Http\Controllers\Functions;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UpdateImg extends Controller
{
    //
    private $NomeImg;
    private $Diretorio;

    public function atualizarImg($NomeImg, $Diretorio = null)
    {
        $this->NomeImg = (string) $NomeImg;
        $this->Diretorio = (string) $Diretorio;
        $this->excluirImagem();
        if(!empty($this->Diretorio)){
            $this->excluirDiretorio();
        }
    }

    private function excluirImagem()
    {
        if(file_exists($this->NomeImg)){
            unlink($this->NomeImg);
        }
    }

    private function excluirDiretorio()
    {
        if(file_exists($this->Diretorio)){
            rmdir($this->Diretorio);
        }
    }
}
