<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HeroesModel extends Model
{
    use HasFactory;

    protected $table='herois';
    protected $fillable=['name','resume','description','image','created'];
    public $timestamps= false;
}
