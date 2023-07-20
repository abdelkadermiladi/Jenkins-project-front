import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-node-selector',
  templateUrl: './node-selector.component.html',
  styleUrls: ['./node-selector.component.css'],
})


export class NodeSelectorComponent implements OnInit {
  nodeNames!: string[];
  selectedNode!: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getNodes();
  }

  getNodes() {
    this.http.get<any[]>('http://localhost:8082/api/nodeNames').subscribe(
      (response: string[]) => {
        this.nodeNames = response;
      },
      (error) => {
        console.error('Error retrieving node names:', error);
      }
    );
  }

  onNodeSelectionChange() {
    // Handle the selected node change here
    console.log('Selected node:', this.selectedNode);
  
    const requestData = { selectedNode: this.selectedNode };
  
    this.http.post<any[]>('http://localhost:8081/app/api/SelectedNode', requestData)
      .subscribe(
        (response) => {
          console.log('Server response :', response);
        },
        (error) => {
          console.error('Error while submitting the form :', error);
        }
      );
  }
  
}
