import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public api: HttpClient) { }
  url = "https://localhost:7036/api/"

  public async get (controller: String){
    var response:any
    await this.api.get(this.url+controller).toPromise().then((res)=>{
      response=res
      console.log(res);
    });
    return response
  }

  /*public async post (controller: String, text: any){
    var response:any
    await this.api.post(this.url+controller, text).toPromise().then((res)=>{
      response=res
      console.log(res);
    });
    return response
  }

  public async put (controller: String, id: string, text: any){
    var response:any
    await this.api.put(this.url+controller+'/'+id, text).toPromise().then((res)=>{
      response=res
      console.log(res);
    });
    return response
  }

  public async delete (controller: String){
    var response:any
    await this.api.delete(this.url+controller).toPromise().then((res)=>{
      response=res
      console.log(res);
    });
    return response
  }*/
}
