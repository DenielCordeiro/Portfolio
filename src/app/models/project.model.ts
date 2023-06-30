export class ProjectModel {

  constructor(
    public id?: number,
    public name?: string,
    public subtitle?: string,
    public description?: string,
    public image?: string,
    public github?: string,
    public page?: string,
    public Typescript?: boolean,
    public Javascript?: boolean,
    public html?: boolean,
    public sass?: boolean,
  ) {}
}
