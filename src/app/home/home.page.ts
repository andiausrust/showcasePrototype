import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {EventsTableItem, EXAMPLE_DATA, EXAMPLE_DATA_2} from '../components/events-table/events-table-datasource';
import {SelectionModel} from '@angular/cdk/collections';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ThemeService} from '../services/theme.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({height: '0px', minHeight: '0'})),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class HomePage implements OnInit {

    @ViewChild('matPaginatorTable1', {static: true}) paginator1: MatPaginator;
    @ViewChild('matPaginatorTable2', {static: true}) paginator2: MatPaginator;
    @ViewChild('firstTableSort', {static: true}) firstTableSort: MatSort;
    @ViewChild('secondTableSort', {static: true}) secondTableSort: MatSort;

    EXAMPLE_DATA = EXAMPLE_DATA;
    EXAMPLE_DATA_2 = EXAMPLE_DATA_2;

    dataSource = new MatTableDataSource(this.EXAMPLE_DATA);
    displayedColumns =
        ['select', 'icon', 'decoy', 'details'];

    dataSource2 = new MatTableDataSource(this.EXAMPLE_DATA_2);
    displayedColumns2 =
        ['select', 'icon', 'decoy', 'details'];

    // 'time', 'source', 'processName'
    selection = new SelectionModel<EventsTableItem>(true, []);
    expandedElement: EventsTableItem | null;

    constructor(private theme: ThemeService) {
    }

    enableDark() {
        this.theme.enableDark();
    }

    enableLight() {
        this.theme.enableLight();
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: EventsTableItem): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }

    ngOnInit() {
        this.dataSource.sort = this.firstTableSort;
        this.dataSource2.sort = this.secondTableSort;
        this.dataSource.paginator = this.paginator1;
        this.dataSource2.paginator = this.paginator2;
    }

    applyFilterTable1(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    }

    applyFilterTable(filterValue: string) {
        this.dataSource2.filter = filterValue.trim().toLocaleLowerCase();
    }
}
