import { Component, OnInit } from '@angular/core';
import { AesService } from 'src/services/aes.service';

@Component({
  selector: 'app-aes',
  templateUrl: './aes.component.html',
  styleUrls: ['./aes.component.css']
})
export class AesComponent implements OnInit {
  ngOnInit(): void {
  }
response:any={}

  submit(){
    this.response= this.aesService.decryptCipher(
      JSON.stringify("82626c93ab2f6a9e8f6e1556081c08056c05b106c851d49ce84e23de89727f817d7b58d5e774cd28a52a4283a67580175d20ce6296e0ffd92ae055a16d1d38cf5ab6f1d26dee02a3ea80cb3fc3c4163a2cae720beb5932244f4797d202b7fffbee2c57dd6a43e761fcf5ff0c"));
      // this.response= this.aesService.decrypt2();
      this.response= this.aesService.decryptResponse(JSON.stringify("b47105b2a6470f21d26eba8b47a4865ae86cb4db6fa825208400c7f73beab668905282b7593279135a1496f4d112ad64480a2d9739b0d9f9cc72ea08ae2e32a0719782af2df58f1796fa69c18da9f1c46d3cf60d0ce7c708bf71ff1cbde710b4e980aa5a2622657acdaa10d0"));
      
    console.log(JSON.parse(this.response));
  }
  constructor(private aesService:AesService) { }


}
