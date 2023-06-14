import {Component, OnInit} from '@angular/core';
import { GhService } from './services/gh.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private GhService: GhService) {}
  ngOnInit(): void {this.GhService.getRepos().subscribe(repos => this.repos = repos);}

  title = 'MathMattic.github.io';

  repos: any[] = [];

}
