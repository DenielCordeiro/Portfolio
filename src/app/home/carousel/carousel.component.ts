import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {
  homePageInstagram: string = 'https://dsm01pap003files.storage.live.com/y4m6FrxO14HUeCDbnzk3QoeTV5RvdZmBknksxbfss17coL9VmX5xFSylHlgmxntB0JoKOzbQ9GwWTWtPvLyhkpKpju-ihbK8JA1abbZQXaCgWoNmjOCMh1sn_XeFUjI46gZ2bp_K4dohwZ2tT0RkdNnTdu0QXUWnHetZMIle7mnjKL1L7K5MJscxuXM-VDXdXxqa5rkAMuH3zskvgYn3TTZIYHxSQpZRXpJA_BvRk5-7eI?encodeFailures=1&width=1801&height=891';
  eletricalSuplyStore: string = 'https://dsm01pap003files.storage.live.com/y4mRYOgrqF1htc14LgjCQGCEZO35pm-AzNUtvhVxpaC3NkMJvLBX9DkGapS5n_MhYh5RdxIISrsRAi9-XWVLhFsn1t7pFrLd0ftRVJol7kS_m2OL0HGlW4G5F6GFn8ua-OC0YbfVXXNVX-VGN1cPVdTXzTnSohuWzdZ41j7mQlDrT3HMjaXaTptZpVtEoA5z58y6urRs4TWjwZRh3V24F3-lxED1yNDA4QuuNS7TJgckjs?encodeFailures=1&width=1719&height=891';

  constructor() {}

  ngOnInit(): void {
  }
}
