import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tree-listing';
  
  private _transformer = (node: MenuNode, level: number) => {
    return {
      expandable: !!node.child && node.child.length > 0,
      name: node.name,
      level: level
    }
  }
  
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable
    )
    
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.child
    )

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener)
    
  ngOnInit() {
      this.dataSource.data = MY_MENU
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable
}

interface MenuNode {
  name: string,
  child?: MenuNode[]
}

interface ExampleFlatNode {
  expandable: boolean,
  name: string,
  level: number
}

const MY_MENU: MenuNode[] = [
  {
    name: 'Item 1',
    child: [
      {
        name: 'Item 1.1',
        child: [
          { name: 'Item 1.1.1', child: [] },
          { name: 'Item 1.1.2', child: [] },
          {
            name: 'Item 1.1.3',
            child: [{ name: 'Item 1.1.3.1', child: [] }],
          },
          {
            name: 'Item 1.1.4',
            child: [
              { name: 'Item 1.1.4.1', child: [] },
              { name: 'Item 1.1.4.2', child: [] },
            ],
          },
        ],
      },
      {
        name: 'Item 1.2',
        child: [
          { name: 'Item 1.2.1', child: [] },
          {
            name: 'Item 1.2.2',
            child: [{ name: 'Item 1.2.2.1', child: [] }],
          },
          {
            name: 'Item 1.2.3',
            child: [
              { name: 'Item 1.2.3.1', child: [] },
              {
                name: 'Item 1.2.3.2',
                child: [{ name: 'Item 1.2.3.2.1', child: [] }],
              },
              { name: 'Item 1.2.3.3', child: [] },
            ],
          },
        ],
      },
    ],
  },
];
