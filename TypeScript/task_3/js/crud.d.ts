// Import types from interface.ts
import { RowID, RowElement } from './interface';

// Declare the crud.js functions with types
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
