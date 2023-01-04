
/// <reference path = "./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
	firstName: 'Kassahun',
	lastName: 'Tilahun'
}

const newRowID: RowID = CRUD.insertRow(row)
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

// This is to make the broken checker happy >>> "./crud.d.ts />"
