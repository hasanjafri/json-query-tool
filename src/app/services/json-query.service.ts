import { Injectable } from '@angular/core';
import jp from 'jsonpath';

@Injectable({
  providedIn: 'root'
})
export class JsonQueryService {
  query(jsonData, queryExpr) {
    return jp.query(jsonData, queryExpr);
  }
}
