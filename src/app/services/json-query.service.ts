import { Injectable } from '@angular/core';
import jp from 'jsonpath';

@Injectable({
  providedIn: 'root'
})
export class JsonQueryService {
  query(jsonData, queryExpr) {
    console.log(jsonData, queryExpr);
    console.log(jp.query(jsonData, queryExpr));
    return jp.query(jsonData, queryExpr);
  }
}
