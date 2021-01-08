import { Component, OnInit } from '@angular/core';
import { NicknamesService} from '../nicknames.service';
import { Nickname } from "../nickname";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  nicknames: Nickname[];
  selectedName: string;
  constructor(
      private router: Router,
      private nicknameService: NicknamesService

  ) {
    this.nicknames = this.nicknameService.nicknames;
  }

  ngOnInit(): void{

  }
  goToTable(){
      this.router.navigate(['/table']);
  }

}
